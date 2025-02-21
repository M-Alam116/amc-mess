import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home | AMC",
};

const HomePage = () => {
  redirect("/public/home");

  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

export default HomePage;
