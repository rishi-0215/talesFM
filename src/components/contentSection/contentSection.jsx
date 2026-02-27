"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS_PER_PAGE = 9;

const ContentSection = ({ posts }) => {
  const titleRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Sort posts by date (latest first)
  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      const dateA = new Date(a.date ?? "").getTime();
      const dateB = new Date(b.date ?? "").getTime();
      return dateB - dateA; // newest first
    });
  }, [posts]);

  const totalPages = Math.ceil(sortedPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = sortedPosts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="w-full bg-black py-12 sm:px-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-[72px] py-12">
          <div className="flex flex-col items-center w-full">
            <div
              ref={titleRef}
              className="flex flex-col justify-center items-center gap-6 mb-12"
            >
              <div className="bg-white/10 rounded-md px-4 py-2 w-[160px] h-[32px] flex items-center justify-center border border-white/20">
                <span className="text-white text-sm font-medium">
                  Blogs
                </span>
              </div>

              <div className="text-center max-w-4xl">
                <h1 className="text-white text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-4">
                  TalesFM Insights
                </h1>
                <p className="text-white/80 text-lg font-normal">
                  Discover tips, tutorials, and the latest news on online radio streaming and TalesFM.
                </p>
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 w-full items-stretch">
              {currentPosts.map((post) => (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.slug}
                  className="h-full"
                >
                  <div
                    className="bg-white/5 border border-white/10 h-full cursor-pointer overflow-hidden 
  hover:border-white/30 hover:scale-[1.02] transition-all duration-300 ease-out flex flex-col rounded-lg"
                  >
                    <div className="p-6 flex flex-col h-full justify-between gap-3">
                      <div className="flex flex-col gap-6 w-full flex-grow">
                        {post.coverImage ? (
                          <div>
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              width={800}
                              height={400}
                              className="rounded-2xl transition-transform duration-300 ease-out group-hover:scale-105"
                            />
                          </div>
                        ) : null}

                        <div className="flex flex-col gap-3 flex-grow">
                          <h2 className="text-xl text-white tracking-[-0.50px] leading-[27.5px] font-semibold">
                            {post.title}
                          </h2>

                          <div className="pt-[5px]">
                            <p className="text-[13.7px] text-white/70 leading-5 line-clamp-3">
                              {post.description}
                            </p>
                          </div>

                          {/* Published Date */}
                          {post.date && (
                            <span className="text-sm text-white/60">
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                {/* Prev Button */}
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  className="px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all
        bg-white/10 text-white border border-white/20
        hover:bg-white/20 hover:border-white/30
        disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/10 disabled:hover:border-white/20"
                >
                  Prev
                </button>

                {/* Page Numbers with Ellipsis */}
                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter((page) => {
                      if (totalPages <= 7) return true;
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return true;
                      }
                      return false;
                    })
                    .map((page, index, arr) => {
                      const prevPage = arr[index - 1];
                      return (
                        <React.Fragment key={page}>
                          {/* Ellipsis if gap */}
                          {prevPage && page - prevPage > 1 && (
                            <span className="px-2 text-white/50">…</span>
                          )}
                          <button
                            onClick={() => setCurrentPage(page)}
                            className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-all
                  ${
                    currentPage === page
                      ? "bg-white text-black border border-white"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30"
                  }`}
                          >
                            {page}
                          </button>
                        </React.Fragment>
                      );
                    })}
                </div>

                {/* Next Button */}
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  className="px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all
        bg-white/10 text-white border border-white/20
        hover:bg-white/20 hover:border-white/30
        disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white/10 disabled:hover:border-white/20"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;

