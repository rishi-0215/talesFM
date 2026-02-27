"use client";

import React from "react";
import Image from "next/image";

export default function AuthorImage() {
  const [imgSrc, setImgSrc] = React.useState("/author.png");
  
  return (
    <Image
      src={imgSrc}
      alt="Author"
      fill
      className="object-cover"
      sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, (max-width: 1024px) 200px, 240px"
      priority
      onError={() => setImgSrc("/logo.png")}
    />
  );
}

