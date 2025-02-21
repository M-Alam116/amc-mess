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
  FaPhone,
  FaRegIdCard,
  FaUser,
  FaDoorOpen,
} from "react-icons/fa";
import Button from "../shared/Button";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobileNumber: string;
  cnic: string;
  roomNumber: string;
}

const Signup = () => {
  const [form] = Form.useForm();

  const handleSignup = (values: FormValues) => {
    console.log(values);
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative w-full max-w-xl aspect-square">
            <Image
              src="/images/login.svg"
              alt="Signup illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="w-full max-w-md mx-auto space-y-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <Logo />
            <Link href="/login">
              <Button className="flex items-center justify-center gap-4">
                Sign In <FaArrowRight />
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-lg font-bold text-gray-800">
              Create Your Account
            </h1>
          </div>

          <div className="flex items-center justify-center text-sm">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="px-2 text-gray-500">Or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <Form
            form={form}
            name="signup"
            onFinish={handleSignup}
            layout="vertical"
          >
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                { required: true, message: "Please input your first name!" },
              ]}
            >
              <Input
                placeholder="Enter your first name"
                className="h-12 rounded-lg"
                prefix={<FaUser className="mr-2" />}
              />
            </Form.Item>

            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                { required: true, message: "Please input your last name!" },
              ]}
            >
              <Input
                placeholder="Enter your last name"
                className="h-12 rounded-lg"
                prefix={<FaUser className="mr-2" />}
              />
            </Form.Item>

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
              name="mobileNumber"
              label="Mobile Number"
              rules={[
                { required: true, message: "Please input your mobile number!" },
                {
                  pattern: /^[0-9]{11}$/,
                  message: "Enter a valid 11-digit mobile number.",
                },
              ]}
            >
              <Input
                placeholder="03XXXXXXXXX"
                className="h-12 rounded-lg"
                prefix={<FaPhone className="mr-2" />}
              />
            </Form.Item>

            <Form.Item
              name="cnic"
              label="CNIC"
              rules={[
                { required: true, message: "Please input your CNIC!" },
                {
                  pattern: /^[0-9]{13}$/,
                  message: "Enter a valid 13-digit CNIC without dashes.",
                },
              ]}
            >
              <Input
                placeholder="Enter your 13-digit CNIC"
                className="h-12 rounded-lg"
                prefix={<FaRegIdCard className="mr-2" />}
              />
            </Form.Item>

            <Form.Item
              name="roomNumber"
              label="Room Number"
              rules={[
                { required: true, message: "Please input your room number!" },
              ]}
            >
              <Input
                placeholder="Enter your room number"
                className="h-12 rounded-lg"
                prefix={<FaDoorOpen className="mr-2" />}
              />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
                {
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must include at least 8 characters, one uppercase, one lowercase, one number, and one special character.",
                },
              ]}
            >
              <Input.Password
                placeholder="Create a strong password"
                className="h-12 rounded-lg"
                iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
                prefix={<FaLock className="mr-2" />}
              />
            </Form.Item>

            <Form.Item>
              <Button className="w-full">Sign Up</Button>
            </Form.Item>
          </Form>

          <p className="text-center text-sm text-gray-600">
            By signing up, you agree to our{" "}
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

export default Signup;
