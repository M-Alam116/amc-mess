"use client";

import { Collapse } from "antd";
import { faqs } from "@/data/data";

const FAQSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-6 opacity-70">
          Frequently Asked Questions
        </h3>
        <Collapse accordion className="mt-10">
          {faqs.map((faq, index) => (
            <Collapse.Panel header={faq.question} key={index}>
              <p>{faq.answer}</p>
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
    </section>
  );
};

export default FAQSection;
