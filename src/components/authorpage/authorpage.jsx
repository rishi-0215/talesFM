"use client";

import { Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const staticAuthorContent = {
  heroSection: {
    title: "About the Author",
    subtitle:
      "I'm a tech enthusiast, writer, and founder of TalesFM.",
    image: "/author.png",
    socialLinks: [
      {
        platform: "instagram",
        url: "https://www.instagram.com/jakewalker103/",
      },
      {
        platform: "facebook",
        url: "https://www.facebook.com/people/Jake-Walker/pfbid09t4NPd2tkcHp7jLoA8AwufDNZ7xMwYN9k8NpKaDg7PaNhRdozsnwC3fqJ3gQuZx1l/",
      },
      { platform: "twitter", url: "https://x.com/Jakewalker102" },
    ],
  },
  aboutSection: {
    heading: "About me",
    content: `Hi, I'm the founder of TalesFM.
I've spent years working with radio technology and online streaming, and I wanted to create a platform that makes radio accessible to everyone – free, ad-free, and available everywhere.

I started this because I believe everyone deserves access to quality radio content. Whether you're discovering new music, staying informed with news, or exploring different cultures through radio – you shouldn't have to deal with ads, subscriptions, or geo-restrictions.

Today, thousands of people use TalesFM daily. Music lovers discover new stations, travelers stay connected to home, and people explore global cultures through radio. It makes me incredibly happy when someone tells me they found their new favorite station or discovered something new.

When I'm not working on TalesFM, I love sharing tips about online radio and talking about how streaming technology can make our lives richer. My goal is simple: help people discover the world through radio.

Want to try it? Visit TalesFM.com or connect with me on social media – I'd love to hear how TalesFM helps you discover new content!
`,
  },
  productivitySection: {
    heading: "Need to discover more?",
    content: "Connect with me on social or visit: ",
    websiteUrl: "https://talesfm.com",
    websiteText: "TalesFM.com",
  },
  recentsSection: {
    heading: "Recents",
    content:
      "Contributing blog content covering online radio, streaming tips, and radio technology. Actively exploring emerging trends in radio streaming and content discovery — bringing honest, practical content straight to our users.",
  },
};

const AuthorPagedetails = ({ blogs }) => {
  const authorContent = staticAuthorContent;
  const [shuffledBlogs, setShuffledBlogs] = React.useState([]);
  const [authorImage, setAuthorImage] = React.useState(authorContent.heroSection.image);
  
  // Fallback to logo if author.png doesn't exist
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const img = new window.Image();
      img.onerror = () => setAuthorImage("/logo.png");
      img.src = authorContent.heroSection.image;
    }
  }, [authorContent.heroSection.image]);

  // Shuffle only on client-side to avoid hydration mismatch
  React.useEffect(() => {
    if (blogs && blogs.length > 0) {
      setShuffledBlogs([...blogs].sort(() => Math.random() - 0.5));
    }
  }, [blogs]);

  const renderSocialIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Instagram className="w-6 h-6" />;
      case "facebook":
        return <Facebook className="w-6 h-6" />;
      case "twitter":
        return <Twitter className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const getSocialLinkClass = (platform) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return "bg-pink-500";
      case "facebook":
        return "bg-blue-600";
      case "twitter":
        return "bg-blue-400";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-9xl my-12 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center px-2 sm:px-6 md:px-12 py-8 md:py-12 gap-4">
        <div className="flex-shrink-0">
          <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center mr-8 md:mr-8 lg:mr-10 xl:mr-12">
            <Image
              src={authorImage}
              alt="Author"
              fill
              className="object-cover"
              style={{ borderRadius: "1.5rem" }}
              sizes="(max-width: 640px) 250px, (max-width: 768px) 300px, (max-width: 1024px) 350px, (max-width: 1280px) 400px, 450px"
              priority
              onError={() => setAuthorImage("/logo.png")}
            />
          </div>
        </div>
        <div className="flex-1 text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4 text-white">
            {authorContent.heroSection.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-6 max-w-3xl">
            {authorContent.heroSection.subtitle}
          </p>
          <div className="flex gap-4 sm:gap-6 mt-4">
            {authorContent.heroSection.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center transition-colors hover:opacity-80 ${getSocialLinkClass(
                  link.platform
                )}`}
              >
                {renderSocialIcon(link.platform)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* About me */}
      <div className="max-w-8xl bg-white/5 border border-white/10 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40 px-4 py-8 sm:py-12 md:py-16 rounded-2xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 sm:mb-6 md:mb-8">
          {authorContent.aboutSection.heading}
        </h2>
        <div className="text-white/90">
          <div className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed whitespace-pre-line">
            {authorContent.aboutSection.content}
          </div>
          <div className="mt-6 sm:mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">
              {authorContent.productivitySection.heading}
            </h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80">
              {authorContent.productivitySection.content}
              <a
                href={authorContent.productivitySection.websiteUrl}
                className="text-white hover:underline"
              >
                {authorContent.productivitySection.websiteText}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="max-w-8xl mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40 px-4">
        <hr className="border-white/20" />
      </div>

      {/* Recents */}
      <div className="max-w-8xl mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40 px-4 py-8 sm:py-12 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 sm:mb-6 md:mb-8">
          {authorContent.recentsSection.heading}
        </h2>
        <div className="text-white/90">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-white/80">
            {authorContent.recentsSection.content}
          </p>
        </div>
      </div>

      {/* Bottom Separator */}
      <div className="max-w-8xl mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-40 px-4">
        <hr className="border-white/20" />
      </div>

      {shuffledBlogs.length > 0 && (
        <section className="bg-black text-white py-12 px-4 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4 text-white">
              You might also like
            </h2>
            <p className="text-lg text-white/80 text-center mb-10">
              Check out our latest blog posts{" "}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
              {shuffledBlogs.slice(0, 6).map((blog, index) => (
                <BlogSuggestionCard blog={blog} index={index} key={blog.slug} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

const BlogSuggestionCard = ({ blog, index }) => {
  const [imgSrc, setImgSrc] = React.useState(
    blog.coverImage || "/logo.png"
  );

  const formattedDate = blog.date
    ? new Date(blog.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Date not available";

  return (
    <div>
      <Link
        href={`/blog/${blog.slug}`}
        className="group block"
      >
        <div className="bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 cursor-pointer hover:border-white/30 hover:scale-[1.02] flex flex-col h-[480px] rounded-lg">
          {/* Image */}
          <div className="overflow-hidden h-48">
            <Image
              src={imgSrc}
              alt={blog.title}
              width={800}
              height={400}
              onError={() => setImgSrc("/logo.png")}
              className="w-full h-full object-contain transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2 py-3 break-words whitespace-normal">
                {blog.title.split(" ").length > 6
                  ? blog.title.split(" ").slice(0, 6).join(" ") + "..."
                  : blog.title}
              </h2>

              <p className="text-white/70 text-md mb-4 break-words whitespace-normal">
                {blog.description.split(" ").length > 18
                  ? blog.description.split(" ").slice(0, 18).join(" ") + "..."
                  : blog.description}
              </p>
            </div>

            <p className="text-md text-white/60 mb-2">{formattedDate}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AuthorPagedetails;

