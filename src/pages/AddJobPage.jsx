import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { func } from "prop-types";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState("");
  const [experience, setExperience] = useState("No Experience Required");
  const [type, setType] = useState("Full-Time");
  const [salary, setSalary] = useState("Negotiable");
  const [workplace, setWorkplace] = useState("On-site");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const newJob = {
      title,
      experience,
      type,
      salary,
      workplace,
      description,
      company: {
        name: companyName,
        location,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    addJobSubmit(newJob);
    toast.success("Job added successfully");
    return navigate("/jobs");
  };

  return (
    <section className="bg-gray-50">
      <div className="container m-auto py-6 px-6 flex items-center gap-1.5">
        <Link to="/">Home</Link>
        <AiOutlineRight />
        <span className="text-blue-700">Add Job</span>
      </div>
      <div className="container m-auto max-w-2xl pb-8">
        <div className="bg-white p-6 shadow-md rounded-md border mx-4">
          <form onSubmit={submitHandler}>
            <h2 className="text-3xl font-semibold text-center mb-6">
              Add Job Listing
            </h2>
            <h3 className="text-rose-700 text-2xl my-2">Job Info</h3>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3"
                placeholder="Example: Senior React Developer"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Experience Level
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="Senior Level">Senior Level</option>
                <option value="Mid Level">Mid Level</option>
                <option value="Entry Level">Entry Level</option>
                <option value="No Experience Required">
                  No Experience Required
                </option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Job Type
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Salary
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Negotiable">Negotiable</option>
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                Workplace
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={workplace}
                onChange={(e) => setWorkplace(e.target.value)}
              >
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3 mb-2"
                rows="4"
                placeholder="Add any job responsibilites, requirements, expectations, etc"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <h3 className="text-rose-700 text-2xl my-2">Company Info</h3>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                required
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
                Company Description
              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3  mb-2"
                rows="4"
                placeholder="What does your company do?"
                required
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <button
                className="bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job Listing
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddJobPage;

AddJobPage.propTypes = {
  addJobSubmit: func,
};
