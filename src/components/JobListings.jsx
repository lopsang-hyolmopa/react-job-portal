import { useState, useEffect, useMemo } from "react";
import { bool } from "prop-types";

import Spinner from "./Spinner";
import JobCard from "./JobCard";
import Pagination from "./Pagination";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();

        const reversedData = data.reverse(); // reverse data as new added jobs should come first as recent jobs
        const slicedData = isHome ? reversedData.slice(0, 3) : reversedData; // gets the first 3 recent jobs for home page

        setJobs(slicedData);
      } catch (error) {
        console.error("Error while fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [isHome]);

  const totalPages = !isHome && Math.ceil(jobs.length / itemsPerPage);
  const filteredJobs = useMemo(() => {
    return jobs.slice(
      currentPage * itemsPerPage,
      (currentPage + 1) * itemsPerPage
    );
  }, [jobs, currentPage]);

  return (
    <div className="container-xl lg:container m-auto">
      {isHome ? (
        <h2 className="text-3xl font-bold mb-6 text-center">Recent Jobs</h2>
      ) : (
        <h2 className="text-3xl font-bold mb-6">{jobs.length} Job Listings</h2>
      )}
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredJobs.map((job) => {
              return <JobCard key={job.id} job={job} />;
            })}
          </div>
          {!isHome ? (
            <Pagination
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          ) : null}
        </>
      )}
    </div>
  );
};

export default JobListings;

JobListings.propTypes = {
  isHome: bool,
};
