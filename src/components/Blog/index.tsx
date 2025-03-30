import SectionTitle from "../Common/SectionTitle";
import blogData from "./blogData";
import Image from "next/image";

const BlogPage = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="Stay updated with the latest trends and insights in technology."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog, index) => (
            <div key={index} className="w-full bg-white p-6 rounded-lg shadow-md dark:bg-dark">
              <Image src={blog.image} alt={blog.title} width={500} height={300} className="rounded-md mb-4" />
              <h3 className="text-xl font-bold text-black dark:text-white mb-2">{blog.title}</h3>
              <p className="text-base text-body-color dark:text-gray-300">{blog.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
