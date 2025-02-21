"use client";

import { Carousel, Image } from "antd";
import { testimonials } from "@/data/data";

const TestimonialsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-6 opacity-70">
          What Our Clients Say
        </h3>

        <Carousel
          autoplay
          dots
          draggable
          autoplaySpeed={4000}
          className="mt-10"
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center">
              <div className="bg-gray-50 text-gray-700 overflow-hidden rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-lightBlack hover:text-white w-full py-6">
                <div className="flex flex-col items-center text-center p-6">
                  <div className="relative w-20 h-20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      preview={false}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-lg italic mt-4">"{testimonial.content}"</p>
                  <h4 className="font-semibold text-lg mt-3">
                    {testimonial.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
