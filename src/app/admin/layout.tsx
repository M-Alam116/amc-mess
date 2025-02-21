import Navbar from "@/components/shared/Navbar";
import AdminSideNav from "@/components/shared/AdminSideNav";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AdminSideNav />
      <div className="flex-grow">
        <Navbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
