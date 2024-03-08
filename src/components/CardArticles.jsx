"use client";

import React, { useState, useEffect, Suspense } from "react";
import Loading from "@/app/loading";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ImageCarousel from "@/components/ImageCarousel";
import Link from "next/link";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export default function CardArticles({ projects }) {
  const [expanded, setExpanded] = useState(true);
  const [expandedId, setExpandedId] = useState(1);
  const [carouselImages, setCarouselImages] = useState([]);
  const [loadingArticles, setLoadingArticles] = useState(true);

  useEffect(() => {
    if (projects) {
      setLoadingArticles(false);
    }

    if (expanded) {
      const project = projects.find(
        (project) => project.id === expandedId,
      ).body;
      if (project.hasOwnProperty("carouselImages")) {
        setCarouselImages(project["carouselImages"]);
      }

      return () => {
        setCarouselImages([]);
      };
    }
  }, [expanded, expandedId, projects]);
  // }, [projects]);

  if (loadingArticles) {
    return (
      <Suspense fallback={<Loading />}>
        <Loading />
      </Suspense>
    );
  }

  const handleExpand = (id) => {
    setExpanded(!expanded);
    setExpandedId(id);
  };

  return (
    <AnimatePresence>
      {projects.map((project) => (
        <motion.div
          animate={
            {
              // scale: expanded && expandedId === project.id ? 1.0 : 0.3,
              //   width: expanded && expandedId === project.id ? "100%" : "30%",
            }
          }
          transition={{
            layout: {
              duration: 0.5,
              //   type: "spring",
            },
          }}
          // onClick={() => handleExpand(project.id)}
          layout
          key={project.id}
          className="container mt-4 rounded-lg bg-zinc-100 pb-4 drop-shadow-lg xl:max-w-6xl"
        >
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              height: expanded && expandedId === project.id ? "32rem" : "12rem",
              // width: expanded && expandedId === project.id ? "100%" : "100%",
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-h-[32rem] overflow-hidden"
          >
            <Image
              src={project.cover_image}
              alt={project.title}
              className="absolute h-full w-full select-none rounded-lg object-cover object-[center_60%]"
              onContextMenu={(e) => e.preventDefault()}
              priority={true}
            />
          </motion.div>
          <motion.h3
            layout
            className="mt-4 select-none p-2 text-4xl font-bold text-slate-800"
          >
            {project.title}
          </motion.h3>
          <motion.div
            className={classNames(
              expanded && expandedId === project.id
                ? "hidden opacity-0 duration-300 ease-in"
                : "block opacity-100 duration-1000 ease-out",
            )}
          >
            <p className="p-2 text-xl font-semibold text-gray-500">
              {project.description}
            </p>
            <button
              className="rounded-md p-2 text-xl font-semibold text-rose-800 underline hover:text-blue-700"
              onClick={() => handleExpand(project.id)}
            >
              Read more
            </button>
          </motion.div>
          {expanded && expandedId === project.id && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="container mt-4 flex flex-col gap-4 xl:max-w-6xl"
            >
              {project.body.hasOwnProperty("sections") &&
                project.body["sections"].map((section) => (
                  <div key={section.id}>
                    {section.header && (
                      <h3 className="px-5 py-2 text-2xl font-bold text-gray-900">
                        {section.header}
                      </h3>
                    )}
                    {section.text.map((text, index) => (
                      <p
                        key={index}
                        className="px-5 py-2 text-justify text-lg leading-7 text-gray-900"
                      >
                        <MarkedText
                          text={text}
                          links={project.body.hyperlinks}
                        />
                      </p>
                    ))}
                    {section.images && (
                      <div className="mt-4 flex flex-col justify-evenly gap-4 p-4 md:flex-row-reverse md:items-baseline">
                        {section.images.map((image) => (
                          <div key={image.id} className="w-full md:w-1/3">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={image.props.width}
                              height={image.props.height}
                              className={image.props.className}
                              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <p className="pt-1 text-sm font-semibold text-gray-500">
                              {image.caption}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              {carouselImages.length > 0 && (
                <ImageCarousel images={carouselImages} />
              )}
            </motion.div>
          )}
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

{
  /* <ImageCarousel images={project.body.carouselImages} /> */
}

const MarkedText = ({ text, links }) => {
  // Helper function to dynamically create React elements for styling
  const createStyledText = (text, style) => {
    switch (style) {
      case "bold":
        return <strong>{text}</strong>;
      case "italic":
        return <em>{text}</em>;
      default:
        return text;
    }
  };

  // Split and parse the text for custom markup
  const parseText = (text, linksObj) => {
    const regex = /(!bold\[(.*?)\])|(!italic\[(.*?)\])|#link=\[(.*?)\]/g;
    let parts = [];
    let lastIndex = 0;

    text.replace(
      regex,
      (match, bold, boldText, italic, italicText, linkId, offset) => {
        // Push preceding text if exists
        if (offset > lastIndex) {
          parts.push({
            type: "text",
            content: text.substring(lastIndex, offset),
          });
        }

        if (bold) {
          parts.push({ type: "bold", content: boldText });
        } else if (italic) {
          parts.push({ type: "italic", content: italicText });
        } else if (linkId) {
          const link = linksObj[linkId];
          if (link) {
            parts.push({ type: "link", content: link.text, url: link.url });
          } else {
            parts.push({ type: "text", content: linkId });
          }
        }

        lastIndex = offset + match.length;
      },
    );

    // Push remaining text if exists
    if (lastIndex < text.length) {
      parts.push({ type: "text", content: text.substring(lastIndex) });
    }

    return parts;
  };

  // Convert links array to an object for constant time lookup
  const linksObj = links.reduce((obj, link) => {
    obj[link.id] = link;
    return obj;
  }, {});

  const parts = parseText(text, linksObj);

  // Render the parsed text parts as React elements
  return parts.map((part, index) => {
    switch (part.type) {
      case "bold":
        return createStyledText(part.content, "bold");
      case "italic":
        return createStyledText(part.content, "italic");
      case "link":
        return (
          <Link
            key={index}
            href={part.url}
            className="font-semibold text-blue-700 underline"
          >
            {part.content}
          </Link>
        );
      default:
        return part.content;
    }
  });
};
