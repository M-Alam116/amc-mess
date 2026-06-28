import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Home | Mess Management system",
};

const HomePage = () => {
  redirect("/home");
};

export default HomePage;
