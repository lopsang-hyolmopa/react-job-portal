import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

import JobListings from "../components/JobListings";

const JobsPage = () => {
  return (
    <section className="bg-gray-50 px-4 py-6">
      <div className="flex items-center gap-1.5 pb-4 lg:ml-12">
        <Link to="/">Home</Link>
        <AiOutlineRight />
        <span className="text-blue-700">Jobs</span>
      </div>
      <JobListings />
    </section>
  )
}

export default JobsPage