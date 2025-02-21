"use client";

import Logo from "@/components/shared/Logo";
import { Form, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
} from "react-icons/fa";
import Button from "../shared/Button";

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const [form] = Form.useForm();

  const handleLogin = (values: FormValues) => {
    console.log(values);
  };
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-full max-w-xl aspect-square">
            <Image
              src="/images/login.svg"
              alt="Login illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="w-full max-w-md mx-auto space-y-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <Logo />
            <Link href="/signup">
              <Button
                outline={true}
                className="flex items-center justify-center gap-4"
              >
                Create Account <FaArrowRight />
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-lg font-bold text-gray-800">Sign In</h1>
            <p className="text-gray-600 text-sm">
              Welcome back! Please log in to continue.
            </p>
          </div>

          <div className="flex items-center justify-center text-sm">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-2 text-gray-500">Or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <Form
            form={form}
            name="login"
            onFinish={handleLogin}
            layout="vertical"
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

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Enter your password"
                className="h-12 rounded-lg"
                iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
                prefix={<FaLock className="mr-2" />}
              />
            </Form.Item>

            <Form.Item>
              <Button className="w-full">Sign In</Button>
            </Form.Item>
          </Form>

          <Link
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>

          <p className="text-center text-sm text-gray-600">
            By logging in, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy & Cookie Statement
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
