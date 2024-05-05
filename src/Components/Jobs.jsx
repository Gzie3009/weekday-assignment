import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Filters from "./Filters";
import JobCard from "./JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const loaderRef = useRef(null);
  const location = useLocation();

  const fetchJobs = async (limit, offset) => {
    setIsLoading(true);
    const res = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        body: JSON.stringify({
          limit,
          offset,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    setJobs((prevJobs) => [...prevJobs, ...data.jdList]); // Append new jobs to existing jobs
    setIsLoading(false);
  };

  useEffect(() => {
    // Fetch jobs when the component mounts and whenever the offset changes
    fetchJobs(limit, offset);
  }, [offset]);

  useEffect(() => {
    // Parse URL parameters to apply filters
    const params = new URLSearchParams(location.search);
    const filteredJobs = jobs.filter((job) => {
      // Filter by role
      if (params.has("role")) {
        const roles = params.getAll("role");
        if (!roles.includes(job.role)) {
          return true;
        }
      }
      // Filter by number of employees
      if (params.has("employees")) {
        const employees = params.getAll("employees");
        if (!employees.includes(job.employees.toString())) {
          return false;
        }
      }
      // Filter by work mode
      if (params.has("workMode")) {
        const workModes = params.getAll("workMode");
        if (!workModes.includes(job.workMode)) {
          return false;
        }
      }
      // Filter by experience
      if (params.has("experience")) {
        const experiences = params.getAll("experience");
        if (!experiences.includes(job.experience.toString())) {
          return false;
        }
      }
      // Filter by minimum base pay
      if (params.has("basePay")) {
        const basePays = params.getAll("basePay");
        if (!basePays.some((basePay) => job.basePay >= basePay)) {
          return false;
        }
      }
      // Filter by company name
      if (params.has("searchCompany")) {
        const searchCompany = params.get("searchCompany").toLowerCase();
        if (!job.companyName.toLowerCase().includes(searchCompany)) {
          return false;
        }
      }
      return true;
    });

    // Update state with filtered jobs
    setJobs(filteredJobs);
  }, [location.search, jobs]);

  useEffect(() => {
    // Intersection observer logic remains the same
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setOffset((prevOffset) => prevOffset + limit);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Filters />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-3">
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))}
      </div>
      <div ref={loaderRef} style={{ height: "10px" }}>
        {isLoading && (
          <div className="flex items-center justify-center w-full">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;
