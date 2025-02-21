"use client";

import Image from "next/image";
import { Input, Form } from "antd";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import TextArea from "antd/es/input/TextArea";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../shared/Button";

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log(values);
  };

  return (
    <div className="pb-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          <div className="hidden lg:flex lg:justify-center lg:items-center">
            <Image
              src="/contact.svg"
              width={563}
              height={683}
              alt="contact us"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold opacity-70 mb-6">
              Let’s Collaborate Now!
            </h2>
            <Form
              form={form}
              onFinish={onFinish}
              layout="vertical"
              className="flex flex-col"
            >
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Your full name" className="h-12" />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Enter a valid email" },
                ]}
              >
                <Input placeholder="abc@example.com" className="h-12" />
              </Form.Item>
              <Form.Item
                label="Message"
                name="message"
                rules={[{ required: true, message: "Message cannot be empty" }]}
              >
                <TextArea
                  placeholder="Type your message..."
                  rows={5}
                />
              </Form.Item>
              <Button className="flex items-center justify-center">
                Send Message <AiOutlineArrowRight className="ml-2" />
              </Button>
            </Form>

            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-2">
                <FaPhoneAlt size={20} />
                <div>
                  <p className="font-semibold opacity-80">Call Us</p>
                  <p className="text-sm opacity-70">03100000000</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot size={20} />
                <div>
                  <p className="font-semibold opacity-80">Location</p>
                  <p className="text-sm opacity-70">your location</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MdEmail size={20} />
                <div>
                  <p className="font-semibold opacity-80">Email</p>
                  <p className="text-sm opacity-70">abc@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
