import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import jobsData from "../data/jobs.json";

const JobList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const locationFilter = searchParams.get("location") || "";

  useEffect(() => {
    const filtered = jobsData.filter((job) =>
      job.location.toLowerCase().includes(locationFilter.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [locationFilter]);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Find Your Dream Job</h1>
        
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-md mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Filter by location (e.g., Bangalore, Remote)..."
          value={locationFilter}
          onChange={(e) => setSearchParams({ location: e.target.value })}
        />

        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{job.location}</p>
              <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
              <Link
                to={`/jobs/${job.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobList;
