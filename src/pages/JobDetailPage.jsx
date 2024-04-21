import { useLoaderData, Link } from "react-router-dom";
import { FaLocationDot, FaArrowLeft, FaPencil, FaRegTrashCan } from "react-icons/fa6";

const JobDetailPage = () => {
  const job = useLoaderData();
  return (
    <>
      <section className="bg-gray-50">
        <div className="container m-auto py-6 px-6">
          <Link
            to="/jobs"
            className="flex items-center text-lg text-blue-700 hover:text-blue-600"
          >
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="container m-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-4 md:gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md mb-2 md:mb-10">
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 mb-4">{job.type}</p>
                  <div className="text-gray-500 mb-4 flex justify-center items-center md:justify-start">
                    <FaLocationDot className="mr-1" />
                    <p>{job.location}</p>
                  </div>
                </div>
                <h1 className="text-rose-700 text-3xl font-bold mb-4">
                  {job.title}
                </h1>
                <hr className="mt-2 mb-6" />
                <h3 className="text-xl font-bold mb-2">Job Description</h3>
                <p className="mb-4">{job.description}</p>
                <h3 className="text-xl font-bold mb-2">Salary</h3>
                <p>{job.salary} / Year</p>
                <hr className="my-6" />
                <h3 className="text-xl font-bold mb-4">
                  About {job.company.name}
                </h3>
                <p className="mb-2">{job.company.description}</p>
                <div className="flex items-center mb-2">
                  <h3 className="font-bold mr-2">Email:</h3>
                  <p>{job.company.contactEmail}</p>
                </div>
                <div className="flex items-center">
                  <h3 className="font-bold mr-2">Phone:</h3>
                  <p>{job.company.contactPhone}</p>
                </div>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Manage Job</h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="flex items-center justify-center bg-white text-blue-700 border border-blue-700 text-center py-2 px-4 rounded-lg w-full mb-2.5 hover:bg-blue-700 hover:text-white"
                >
                  <FaPencil className="mr-2"/> Edit Job
                </Link>
                <button className="flex items-center justify-center bg-white text-rose-700 border border-rose-700 py-2 px-4 rounded-lg w-full hover:bg-rose-700 hover:text-white">
                  <FaRegTrashCan className="mr-2"/> Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobDetailPage;
