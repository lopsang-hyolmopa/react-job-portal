import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6"

import JobListings from "../../components/JobListings";

const RecentJobs = () => {
  return (
    <section className="bg-blue-50 px-4 py-10 flex flex-col items-center justify-center">
      <JobListings isHome={true} />
      <div className="mt-8">
        <Link
          to="/jobs"
          className="flex items-center justify-center gap-1 bg-rose-700 text-white text-center py-2 px-4 rounded-lg hover:bg-rose-600"
        >
          View All Jobs<FaAngleRight className="text-lg"/>
        </Link>
      </div>
    </section>
  );
};

export default RecentJobs;
