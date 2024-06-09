"use client";

import { generateImageURL } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ArtworkDetails = ({ title, alt_text, image, description }) => {
  const [showDescription, setShowDescription] = useState(description);
  const router = useRouter();

  if (!title) return <div>Not found</div>;

  return (
    <>
      <button
        onClick={() => router.back()}
        className="mt-4 p-2 bg-blue-500 text-white mb-4"
      >
        Go back
      </button>
      <div className="flex flex-clo lg:flex-row w-full px-6 mx-auto py-4 space-y-4">
        <div className="flex-1">
          <h1 className="text-3xl mb-4">{title}</h1>
          <div>
            <Image
              width={300}
              height={200}
              src={generateImageURL(image)}
              className=""
              alt={alt_text ?? title}
            />
          </div>
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="mt-4 p-2 bg-blue-500 text-white"
          >
            {showDescription ? "Hide Description" : "Show Description"}
          </button>
        </div>

        {showDescription && (
          <div
            className="flex-[2]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>
    </>
  );
};

export default ArtworkDetails;
