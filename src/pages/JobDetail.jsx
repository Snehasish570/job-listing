import React from "react";
import { useParams, Link } from "react-router-dom";
import jobsData from "../data/jobs.json";

const JobDetail = () => {
  const { id } = useParams();
  const job = jobsData.find((job) => job.id === parseInt(id));

  if (!job) return <div className="p-4">Job not found.</div>;

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">{job.title}</h1>
      <p className="text-gray-600 mb-4">{job.location}</p>
      <p>{job.description}</p>
      <Link
        to={`/jobs/${job.id}/apply`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2"
      >
        Apply Now
      </Link>
    </div>
  );
};

export default JobDetail;
