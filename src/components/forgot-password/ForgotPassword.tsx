"use client";

import Logo from "@/components/shared/Logo";
import { Form, Input } from "antd";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Button from "../shared/Button";

interface FormValues {
  email: string;
}

const ForgotPassword = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <main className="min-h-screen p-4 bg-white flex items-center justify-center">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <Logo />
        </div>
        <div className="mt-16 max-w-xl mx-auto w-full">
          <div className="text-center">
            <h1 className="text-lg font-bold text-gray-800">Forgot Password</h1>
            <p className="text-gray-600 text-sm mt-2">
              Enter your email address to receive a link to reset your password.
            </p>
          </div>

          <Form
            form={form}
            name="forgot-password"
            onFinish={handleSubmit}
            layout="vertical"
            className="mt-8"
          >
            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                { required: true, message: "Please input your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                className="h-12 rounded-lg"
                prefix={<FaEnvelope className="mr-2" />}
              />
            </Form.Item>

            <Form.Item>
              <Button className="w-full">Continue</Button>
            </Form.Item>
          </Form>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Remembered your password?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
