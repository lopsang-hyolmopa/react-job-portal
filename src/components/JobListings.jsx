import { useState, useEffect } from "react";
import { bool } from "prop-types";

import Spinner from "./Spinner";
import JobCard from "./JobCard";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error while fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);
  return (
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        {isHome ? "Recent Jobs" : "Browse Jobs"}
      </h2>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => {
            return <JobCard key={job.id} job={job} />;
          })}
        </div>
      )}
    </div>
  );
};

export default JobListings;

JobListings.propTypes = {
  isHome: bool,
};
