import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden bg-lightBlack"
      style={{
        clipPath: "ellipse(120% 100% at center top)",
      }}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 text-center px-4 relative z-10">
        <h1 className="text-4xl font-bold leading-tight md:text-5xl text-white">
          About Us
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base">
          We bring delicious meals from your favorite restaurants straight to
          your doorstep. Fresh flavors, fast delivery, and a seamless ordering
          experience—satisfying your cravings has never been this easy!
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
