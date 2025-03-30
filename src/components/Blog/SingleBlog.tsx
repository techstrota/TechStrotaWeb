import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, tags = [],  } = blog; // Ensure `tags` is always an array
  
  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
      <Link
        href="/blog-details"
        className="relative block aspect-[37/22] w-full"
      >
        {tags.length > 0 && ( // Only render tag if it exists
          <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
            {tags[0]}
          </span>
        )}
        <Image src={image} alt="image" fill />
      </Link>

      <div className="p-1 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3>
          <Link
            href="/blog-details"
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>

        <p className="mb-5 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
          {paragraph}
        </p>

        <div className="flex items-center">
          <div className="mr-1 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            {/* Placeholder for Author Details */}
          </div>

          {/* <div className="inline-block">
            <p className="text-xs text-body-color">{publishDate || " Date"}</p> 
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
