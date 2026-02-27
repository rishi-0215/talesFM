import Image from "next/image";
import React from "react";
import BlogTable from "../BlogTable/BlogTable";

export const mdxComponents = {
  h1: (props) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 text-white" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-semibold mt-6 mb-3 text-white" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold mt-4 mb-2 text-white" {...props} />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-white/80" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside mb-4 space-y-2 text-white/80" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal list-inside mb-4 space-y-2 text-white/80" {...props} />
  ),
  li: (props) => (
    <li className="mb-1 text-white/80" {...props} />
  ),
  blockquote: (props) => (
    <blockquote className="border-l-4 border-white/30 pl-4 italic text-white/70 my-6" {...props} />
  ),
  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table className="table-auto border-collapse border border-white/20 w-full text-left" {...props} />
    </div>
  ),
  thead: (props) => (
    <thead className="bg-white/10" {...props} />
  ),
  tbody: (props) => (
    <tbody {...props} />
  ),
  tr: (props) => (
    <tr className="border-b border-white/10 hover:bg-white/5 transition-colors" {...props} />
  ),
  th: (props) => (
    <th className="border border-white/20 px-4 py-2 bg-white/10 font-medium text-white" {...props} />
  ),
  td: (props) => (
    <td className="border border-white/20 px-4 py-2 text-white/80" {...props} />
  ),
  img: (props) => {
    const { src, alt = "", width, height } = props;

    if (typeof src !== "string") return null;

    return (
      <div className="my-6">
        <Image
          src={src}
          alt={alt}
          width={width ? +width : 800}
          height={height ? +height : 100}
          className="rounded-md w-full object-contain"
        />
      </div>
    );
  },
  strong: (props) => (
    <strong className="font-semibold text-white" {...props} />
  ),
  a: (props) => (
    <a className="text-white underline hover:text-white/80 transition-colors" {...props} />
  ),
  BlogTable: (props) => <BlogTable {...props} />,
};

