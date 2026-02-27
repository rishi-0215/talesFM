import React from "react";
import AuthorPagedetails from "@/components/authorpage/authorpage";
import { loadAllBlogs } from "@/lib/blog";
import { loadPageMetadata } from "@/lib/metadata";

export async function generateMetadata() {
  return loadPageMetadata("author");
}

const AuthorPage = async () => {
  const blogs = await loadAllBlogs();
  const suggestedBlogs = blogs.filter((blog) => blog.date).slice(0, 6);

  return (
    <div className="scroll-smooth bg-black flex flex-col min-h-screen font-sans">
      <AuthorPagedetails blogs={suggestedBlogs} />
    </div>
  );
};

export default AuthorPage;

