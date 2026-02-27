import { loadAllBlogs, loadBlogBySlug } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import remarkParse from "remark-parse";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import Image from "next/image";
import { mdxComponents } from "@/components/MdxComponents/mdx-components";
import remarkGfm from "remark-gfm";
import AuthorImage from "@/components/AuthorImage/AuthorImage";
import AuthorBar from "@/components/AuthorBar/AuthorBar";
import { convertTabToTable } from "@/lib/convertTabToTable";

function extractTextFromNode(node) {
  if (!node) return "";

  if (node.type === "text") {
    return node.value || "";
  }

  // Handle code nodes (backticks)
  if (node.type === "inlineCode" || node.type === "code") {
    return node.value || "";
  }

  // Handle HTML nodes
  if (node.type === "html") {
    // Extract text from HTML, removing tags
    return (node.value || "").replace(/<[^>]*>/g, "").trim();
  }

  if (node.children && Array.isArray(node.children)) {
    return node.children
      .map((child) => extractTextFromNode(child))
      .filter(Boolean)
      .join(" ")
      .trim();
  }

  return "";
}

function extractTOC(markdown) {
  try {
    if (!markdown || typeof markdown !== "string") {
      return [];
    }

    const tree = unified().use(remarkParse).parse(markdown);
    const toc = [];

    visit(tree, "heading", (node) => {
      const depth = node.depth;

      // Extract text from all children (handles nested structures like strong, emphasis, links, code, etc.)
      const text = extractTextFromNode(node);

      if (!text) return;

      // Clean up the text (remove extra spaces, backticks, etc.)
      const cleanText = text
        .replace(/`/g, "") // Remove backticks
        .replace(/\*\*/g, "") // Remove bold markers
        .replace(/\*/g, "") // Remove italic markers
        .trim();

      if (!cleanText) return;

      const id = cleanText
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");

      toc.push({ id, text: cleanText, level: depth });
    });

    // Debug in development
    if (process.env.NODE_ENV === "development" && toc.length > 0) {
      console.log("TOC extracted:", toc.length, "headings", toc);
    }

    return toc;
  } catch (error) {
    console.error("Error extracting TOC:", error);
    return [];
  }
}

export async function generateStaticParams() {
  try {
    const blogs = await loadAllBlogs();
    // Filter out any blogs without slugs to prevent errors
    // Also normalize slugs (remove leading/trailing slashes)
    return blogs
      .filter((b) => b.slug)
      .map((b) => {
        // Normalize slug: remove leading/trailing slashes
        const normalizedSlug = b.slug.replace(/^\/+|\/+$/g, '');
        return { slug: normalizedSlug };
      });
  } catch (error) {
    console.error("Error generating static params for blog:", error);
    return [];
  }
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const blog = await loadBlogBySlug(slug);
  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: blog.canonicalUrl || `https://talesfm.com/blog/${slug}`,
    },
  };
}

export default async function BlogPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    return notFound();
  }

  const blog = await loadBlogBySlug(slug);
  if (!blog) return notFound();

  // Convert tab-separated text blocks to markdown tables
  const processedContent = convertTabToTable(blog.content);

  const toc = extractTOC(processedContent);

  // Debug: log TOC in development
  if (process.env.NODE_ENV === "development") {
    console.log("Blog content length:", processedContent.length);
    console.log("TOC items found:", toc.length);
  }

  return (
    <div className="scroll-smooth bg-black text-white flex flex-col min-h-screen font-sans">
      <div className="flex flex-col items-center justify-center">
        <Hero title={blog.title} description={blog.description} />
        {/* author bar */}
        <div className="max-w-[62rem] my-3 sm:my-4 md:my-0 mx-auto px-1.5 sm:px-2.5 md:px-3 lg:px-4">
          <AuthorBar publishedDate={blog.date} />
        </div>
      </div>
      <main className="flex-1 w-full px-4 lg:px-8 py-10">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-10">
          <aside className="hidden lg:block lg:w-1/4 xl:w-1/5">
            <TableOfContents toc={toc} />
          </aside>

          <div className="lg:flex-1">
            <article
              className="prose prose-lg max-w-none px-4 py-6 rounded-xl bg-white/5 border border-white/10 prose-invert"
              id="article"
            >
              {blog.coverImage && (
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  width={800}
                  height={400}
                  className="rounded-lg mb-10 w-full object-cover"
                />
              )}

              <MDXRemote
                source={processedContent}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
                  },
                }}
              />
            </article>
          </div>
        </div>
      </main>

      {/*meet the author band*/}
      <div
        className="max-w-[62rem] my-8 sm:my-10 md:my-12 mx-auto px-4 sm:px-6 md:px-8 lg:px-10 rounded-2xl border border-white/10 
      bg-white/5 flex flex-col md:flex-row items-center justify-center py-6 md:py-8 gap-4 sm:gap-6 md:gap-8 lg:gap-12"
      >
        <div className="flex-1 text-left w-full md:w-auto">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-white">
            About the Author
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-lg text-white/80 mb-3 sm:mb-4 md:mb-6 max-w-3xl">
            Hi, I&apos;m the founder of TalesFM. I&apos;ve spent years working with radio technology and online streaming, and I wanted to create a platform that makes radio accessible to everyone – free, ad-free, and available everywhere ...
          </p>
          <a
            href="/author"
            className="text-white hover:underline text-sm sm:text-base md:text-md"
          >
            Read full bio &rarr;
          </a>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-end">
          <div
            className="relative w-[150px] h-[150px] sm:w-[190px] sm:h-[220px] 
            md:w-[220px] md:h-[220px] lg:w-[150px] lg:h-[150px] rounded-full overflow-hidden
           bg-white/10 flex items-center justify-center border border-white/20"
          >
            <AuthorImage />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableOfContents({ toc }) {
  if (!toc || toc.length === 0) {
    return (
      <nav className="space-y-2 text-sm text-white/70 sticky top-32">
        <p className="text-base font-semibold text-white mb-3">On this page</p>
        <p className="text-xs text-white/50 italic">No headings found</p>
      </nav>
    );
  }

  return (
    <nav className="space-y-2 text-sm text-white/70 sticky top-32">
      <p className="text-base font-semibold text-white mb-3">On this page</p>
      {toc.map((item) => {
        // Calculate padding based on heading level
        // h1 (level 1) = 0, h2 (level 2) = 0.5rem, h3 (level 3) = 1rem, h4 (level 4) = 1.5rem, etc.
        const paddingLeft = item.level > 1 ? `${(item.level - 1) * 0.5}rem` : "0";

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block hover:text-white transition-colors py-1"
            style={{ paddingLeft }}
          >
            {item.text}
          </a>
        );
      })}
    </nav>
  );
}

function Hero({ title, description }) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl text-center py-16 px-4 lg:pt-24 lg:pb-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl text-white/80 mb-8">{description}</p>
      </div>
    </section>
  );
}

