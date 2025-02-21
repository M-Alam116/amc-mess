"use client";

import { useRouter } from "next/navigation";

const Custom404 = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white p-4">
      <div className="w-full max-w-[500px] mb-6">
        <video className="w-full h-auto" autoPlay loop muted>
          <source src="/images/404.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1 className="text-2xl font-bold text-center">404</h1>
      <p className="text-[16px] text-center">
        Oops! The page you are looking for does not exist.
      </p>

      <div className="mt-6 cursor-pointer" onClick={handleGoBack}>
        <p>Go Back</p>
      </div>
    </div>
  );
};

export default Custom404;
