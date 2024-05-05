import React from "react";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import ReadMore from "./ReadMore";
import { Avatar } from "@mui/material";
function JobCard({ job }) {
  return (
    <div className="border border-gray-200 rounded-2xl py-2 px-5 bg-white">
      <div className="rounded-full p-1 border border-gray-300 w-max text-gray-300 text-[0.65rem] mt-1 mb-3">
        <AccessTimeFilledOutlinedIcon /> Posted 5 days ago
      </div>

      <div className="flex gap-x-2">
        <div>
          <img
            className="h-8 w-8 rounded-lg mt-1"
            src={job.logoUrl && job.logoUrl}
          />
        </div>
        <div>
          <h2 className="font-semibold text-gray-500 text-xs">
            {job.companyName && job.companyName}
          </h2>
          <p className="font-light text-md capitalize">
            {job.jobRole && job.jobRole}
          </p>
          <p className="text-xs font-semibold capitalize">
            {job.location && job.location}
          </p>
        </div>
      </div>

      <div className="font-semibold my-3 text-black/60">
        Estimated Salary: ${job.maxJdSalary && job.maxJdSalary * 1000} Annually
        ✅
      </div>

      <div>
        <h2 className="font-semibold text-lg">About Company :</h2>
        <ReadMore text={job.jobDetailsFromCompany} />
      </div>

      <div className="font-semibold text-black/60">
        Minimum Experience{" "}
        <p className=" font-light text-black">
          {job.minExp ? job.minExp : 0} years
        </p>
      </div>

      <a
        href={`${job.jdLink}/${job.jdUid}`}
        target="_blank"
        className="cursor-pointer w-full flex items-center justify-center my-3 rounded-lg bg-emerald-300 py-3 text-xl font-semibold"
      >
        <p>⚡️ Easy Apply</p>
      </a>

      <button className="flex text-white w-full items-center gap-x-4 justify-center my-2 bg-indigo-600 rounded-lg py-2">
        <p className="flex gap-x-1 blur-[3px]">
          <Avatar /> <Avatar />
        </p>{" "}
        Unlock referral asks
      </button>
    </div>
  );
}

export default JobCard;
