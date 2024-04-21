import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <FaExclamationTriangle className="text-rose-700 text-6xl mb-4" />
      <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
      <p className="text-xl mb-8">This page does not exist</p>
      <Link to="/" className="flex items-center text-blue-700 rounded-md px-3 py-2 bg-white border border-blue-700 hover:bg-blue-700 hover:text-white">
        <FaArrowLeft className="mr-2" />
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
