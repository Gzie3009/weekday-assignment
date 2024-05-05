import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import Filters from "./Filters";
import JobCard from "./JobCard";

function Jobs() {
  const [allJobs, setAllJobs] = useState([]); // Array to hold all jobs
  const [filteredJobs, setFilteredJobs] = useState([]); // Array to hold filtered jobs
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const loaderRef = useRef(null);
  const location = useLocation();

  const filterJobs = (jobs, params) => {
    return jobs.filter((job) => {
      if (
        params.has("selectedRole") &&
        !params.getAll("selectedRole").includes(job.jobRole)
      ) {
        return false;
      }

      if (
        params.has("selectedExperience") &&
        parseInt(params.get("selectedExperience")) !== job.minExp
      ) {
        return false;
      }
      if (
        params.has("selectedBasePay") &&
        parseInt(params.get("selectedBasePay")) > job.minJdSalary * 1000
      ) {
        return false;
      }

      if (
        params.has("searchCompany") &&
        !job.companyName
          .toLowerCase()
          .includes(params.get("searchCompany").toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  };

  useEffect(() => {
    // Fetch jobs when the component mounts and whenever the offset changes
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
      setAllJobs((prevJobs) => [...prevJobs, ...data.jdList]); // Append new jobs to existing jobs
      setIsLoading(false);
    };

    fetchJobs(limit, offset);
  }, [offset]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const filtered = filterJobs(allJobs, params);
    setFilteredJobs(filtered);
  }, [location.search, allJobs]);

  useEffect(() => {
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
        {filteredJobs.map((job, index) => (
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
