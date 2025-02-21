import Loader from "@/components/shared/Loader";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-whit">
      <Loader />
    </div>
  );
};

export default loading;
