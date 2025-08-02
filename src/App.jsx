import React from "react";
import { Routes, Route } from "react-router-dom";
import JobList from "./pages/JobList";
import JobDetail from "./pages/JobDetail";
import ApplyForm from "./pages/ApplyForm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<JobList />} />
      <Route path="/jobs/:id" element={<JobDetail />} />
      <Route path="/jobs/:id/apply" element={<ApplyForm />} />
    </Routes>
  );
};

export default App;
