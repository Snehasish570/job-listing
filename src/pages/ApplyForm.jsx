import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ApplyForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Applied to job ID ${id}\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Apply for Job #{id}</h2>
        <input
          className="block w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          className="block w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Your Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <button
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
          type="submit"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
