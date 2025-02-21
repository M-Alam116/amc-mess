import Footer from "@/components/shared/Footer";
import PublicNavBar from "@/components/shared/PublicNavBar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNavBar />
      <main className="flex-grow bg-white">{children}</main>
      <Footer />
    </div>
  );
}
