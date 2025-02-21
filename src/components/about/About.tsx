import Image from "next/image";

const About = () => {
  return (
    <div className="pb-8">
      <div className="bg-gray-100 px-4 py-10">
        <div className="container mx-auto flex gap-8 py-12">
          <div className="flex flex-col gap-4 justify-center lg:w-2/3 flex-grow">
            <h1 className="text-xl font-bold opacity-70">
              Fresh, Fast & Flavorful – Right at Your Doorstep!
            </h1>
            <p className="text-[16px] opacity-70">
              Welcome to AMC! We’re dedicated to bringing your favorite
              meals straight to your door with speed, freshness, and care. From
              local favorites to global cuisines, our platform connects you to
              top restaurants in your area, ensuring a seamless and delicious
              food ordering experience. Whether it's breakfast, lunch, dinner,
              or a midnight snack, AMC has got you covered. Satisfy your
              cravings with just a few clicks!
            </p>
          </div>
          <div className="lg:w-1/3 hidden lg:flex items-center justify-center">
            <div className="w-full max-w-xs">
              <Image
                src="/images/about.png"
                alt="about us"
                layout="responsive"
                width={300}
                height={250}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8 px-4 py-12 container mx-auto">
        <div className="lg:w-1/2 hidden lg:flex w-full max-w-sm">
          <Image
            src="/images/about-team.png"
            alt="our team"
            layout="responsive"
            width={485}
            height={360}
            className="rounded-lg"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col gap-4 flex-grow">
          <h1 className="text-xl opacity-70 font-bold text-center sm:text-left">
            Meet Our Team!
          </h1>
          <p className="text-[16px] opacity-70">
            At AMC, our passionate team of food lovers, tech experts, and
            customer service pros work together to create the ultimate food
            delivery experience. We partner with local restaurants, ensuring you
            get a wide range of fresh and delicious options, all delivered with
            care. <br />
            Our mission? To make dining convenient, enjoyable, and accessible
            for everyone. Whether you’re craving comfort food or something new,
            our team is here to bring it right to your table — fast and fresh!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
