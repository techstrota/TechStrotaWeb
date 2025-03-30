"use client";

import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  return (
    <section className="relative z-10 flex items-center justify-center py-16 md:py-20 lg:py-28 bg-transparent">
      <div className="container max-w-3xl p-6 bg-gray-100 dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-60 backdrop-blur-md shadow-lg dark:shadow-gray-900 shadow-gray-300 rounded-lg border-l-4 border-gray-300 dark:border-gray-600">
      <SectionTitle
  title="📌 We Are Ready to Help"
  paragraph="At TechStrota, we are more than just an IT company—we are your partners in transforming ideas into exceptional digital solutions. Specializing in web, mobile, and desktop app development, we use cutting-edge technology to craft seamless, immersive experiences that propel your business forward."
  center
  mb="40px"
/>

        <p className="text-gray-700 dark:text-gray-300 italic text-center">
          💡 Let&apos;s turn your ideas into reality!
        </p>
      </div>
    </section>
  );
};

export default Video;
