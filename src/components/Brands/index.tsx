import Image from "next/image";

const Brands = () => {
  return (
    <section className="flex items-center justify-center bg-gray-light dark:bg-gray-dark p-8 rounded-lg shadow-lg">
      <Image
        src="/images/logo/TScrop.png"
        alt="Logo"
        width={500} // Adjust size as needed
        height={250}
        className="object-contain"
      />
    </section>
  );
};

export default Brands;
