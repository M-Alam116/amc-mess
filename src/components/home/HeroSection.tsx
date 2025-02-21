import Image from "next/image";
import Link from "next/link";
import Button from "../shared/Button";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[80vh] md:min-h-[120vh] flex items-center justify-center overflow-hidden bg-lightBlack"
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

      <div className="container relative z-10 mx-auto px-6 flex items-center justify-between text-white">
        <div className="text-center md:text-left max-w-xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
            <span className="text-yellow">Delicious Food,</span> <br />
            Delivered to Your Doorstep
          </h1>
          <p className="mb-8 text-lg">
            Craving something tasty? Order your favorite meals online and enjoy
            fast, fresh, and hassle-free delivery.
          </p>
          <Link href="/login">
            <Button>Get Started</Button>
          </Link>
        </div>

        <div className="hidden md:flex">
          <Image
            src="/images/hero-image.png"
            width={450}
            height={450}
            alt="Delicious Food"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
