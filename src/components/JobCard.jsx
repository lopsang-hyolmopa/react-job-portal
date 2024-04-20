import { useState } from "react";
import { object } from "prop-types";
import { FaLocationDot, FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = job.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  const showHideDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg relative">
      <div className="p-4">
        <div className="flex justify-between items-center text-gray-500 my-2">
          <p>{job.type}</p>
          <div className="flex items-center gap-1">
            <FaLocationDot />
            {job.location}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-6">{job.title}</h3>

        <p className="my-4 text-gray-800">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <button className="text-rose-700" onClick={showHideDescription}>
            {showFullDescription ? "Show Less" : "Read More"}
          </button>
        </div>

        <hr className="border border-gray-100 mb-4" />
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-500">{job.salary} / Year</p>
          <Link
            to={`/jobs/${job.id}`}
            className="flex items-center gap-1 border border-rose-700 rounded-lg text-rose-700 px-4 py-2 hover:bg-rose-700 hover:text-white"
          >
            View Detail
            <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

JobCard.propTypes = {
  job: object,
};
