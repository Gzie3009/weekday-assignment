import React from "react";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { useDispatch } from "react-redux";
import { toggleProfile } from "../Core/Redux/slice/drawerSlice";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";

const jobStatusOptions = [
  "Select current job status",
  "Actively looking out",
  "Passively looking out",
  "Serving notice period",
  "Offers in hand",
  "Looking for contract/freelance roles ",
  "Not looking for job switch",
  "Please dont contact me",
];

function ProfileComponentForm({ user }) {
  const dispatch = useDispatch();
  return (
    <div className="py-5 w-full">
      <div className="flex items-center justify-between pr-3">
        <div className="flex items-center gap-x-2">
          <button
            onClick={() => dispatch(toggleProfile(false))}
            className="w-max h-max ml-2 bg-white rounded-[8px]"
          >
            <ChevronRight
              className="border-2 rounded-[8px] border-white bg-gray-200"
              sx={{ fontSize: 27 }}
            />
          </button>
          <div className="flex items-center gap-x-2">
            <p>Your Profile</p>
            <a href="https://www.linkedin.com" target="_blank">
              <img
                className="h-6 w-6 rounded"
                src="https://jobs.weekday.works/_next/static/media/linkedin-logo.f8232d36.png"
              />
            </a>
          </div>
        </div>
        <div className="text-xs text-green-600">
          <p>4/9 completed</p>
        </div>
      </div>

      {/* Form Section */}

      <div className="py-5 px-5">
        <form class="text-[0.65rem] w-full">
          <div class="mb-2 text-sm">
            <p>
              What do we call you?<span className="text-red-500">*</span>
            </p>
          </div>

          <div className="flex gap-x-2">
            <div class="mb-4 w-1/2">
              <label for="firstName" class="block">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={user.firstName}
                class="w-full border border-[#55B962] bg-[#F2F2F266] font-semibold text-[0.8rem] rounded-md px-2 py-1"
              />
            </div>

            <div class="mb-4 w-1/2">
              <label for="lastName" class="block">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={user.lastName}
                class="w-full border border-[#55B962] bg-[#F2F2F266] font-semibold text-[0.8rem] rounded-md px-2 py-1"
              />
            </div>
          </div>

          <div class="mb-4">
            <label for="currentSalary" class="block mb-2 text-sm">
              What is your current salary (in LPA)?
              <span className="text-red-500">*</span>
            </label>
            <div class="flex w-full gap-x-2">
              <div className="w-1/3">
                <label for="fixedSalary" class="block">
                  Fixed Salary
                </label>
                <input
                  type="number"
                  id="fixedSalary"
                  name="fixedSalary"
                  placeholder="Eg. 32"
                  step="0.01"
                  value={user.currentSalary.fixedSalary}
                  class="w-full border border-[#55B962] bg-[#F2F2F266] font-semibold text-[0.8rem] rounded-md px-2 py-1 mr-2"
                />
              </div>
              <div className="w-1/3">
                <label for="fixedSalary" class="block">
                  Variable
                </label>
                <input
                  type="number"
                  id="fixedSalary"
                  name="fixedSalary"
                  placeholder="Eg. 4.2"
                  step="0.01"
                  value={user.currentSalary.variable}
                  class="w-full border border-[#55B962] bg-[#F2F2F266] font-semibold text-[0.8rem] rounded-md px-2 py-1 mr-2"
                />
              </div>
              <div className="w-1/3">
                <label for="fixedSalary" class="block">
                  Stocks per year
                </label>
                <input
                  type="number"
                  id="fixedSalary"
                  name="fixedSalary"
                  placeholder="Eg. 12"
                  step="0.01"
                  value={user.currentSalary.stocks}
                  class="w-full border border-[#55B962] bg-[#F2F2F266] font-semibold text-[0.8rem] rounded-md px-2 py-1 mr-2"
                />
              </div>
            </div>
          </div>

          <div class="mb-4">
            <label for="expectedSalary" class="block text-sm">
              What is your expected cash salary (in LPA)?
              <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="expectedSalary"
              name="expectedSalary"
              placeholder="Eg. 45"
              value={user.expectedSalary}
              class="w-full border border-[#55B962] bg-[#F2F2F266] font-semibold text-[0.8rem] rounded-md px-2 py-1"
            />
          </div>

          <div class="mb-4">
            <label for="jobSwitch" class="block text-sm">
              How likely are you to switch jobs?
              <span className="text-red-500">*</span>
            </label>
            <select
              id="jobSwitch"
              name="jobSwitch"
              class="w-full border border-[#55B962] bg-[#F2F2F266] font-semibold text-[0.8rem] rounded-md px-2 py-1"
            >
              {jobStatusOptions.map((option) => (
                <option value={option}>{option}</option>
              ))}
            </select>
          </div>

          <div class="mb-4">
            <label for="email" class="block text-sm">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              class="w-full border border-[#55B962] bg-[#F2F2F266] font-semibold text-[0.8rem] rounded-md px-2 py-1"
            />
          </div>

          <div class="mb-4">
            <label for="whatsapp" class="block text-sm">
              Whatsapp Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              placeholder="+91"
              value={`+91 ${user.wnumber}`}
              class="w-full border border-[#55B962] bg-[#F2F2F266] font-semibold text-[0.8rem] rounded-md px-2 py-1"
              require
            />
          </div>

          <div class="mb-4">
            <label for="resume" class="block text-sm">
              Upload Resume<span className="text-red-500">*</span>
            </label>
            <div class="flex flex-col items-center px-2">
              <input type="file" id="resume" name="resume" class="hidden" />
              <label
                for="resume"
                class="w-full cursor-pointer flex flex-col items-center border border-dashed border-black bg-[#F2F2F266] font-semibold text-[0.8rem] rounded-xl p-5 mt-4"
              >
                <div className="text-lg font-light">
                  <CloudUploadOutlinedIcon className="mr-2" />
                  Click to upload
                </div>

                <div class="ml-2 mt-2">Upload only .pdf or .doc files</div>
              </label>
            </div>
          </div>

          <div class="mb-4 text-sm">
            <label for="confidentiality" class="block">
              How confidential do you want your job search to be?
            </label>
            <div class="flex flex-col space-y-2">
              <div class="flex items-center">
                <input
                  type="radio"
                  id="feature"
                  name="confidentiality"
                  value="Feature/promote with Weekday"
                  class="mr-2"
                />
                <label for="feature">Feature/promote with Weekday</label>
              </div>
              <div class="flex items-center">
                <input
                  type="radio"
                  id="referrer"
                  name="confidentiality"
                  value="Allow referrer for reference checks"
                  class="mr-2"
                />
                <label for="referrer">
                  Allow referrer for reference checks ℹ️
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="radio"
                  id="confidential"
                  name="confidentiality"
                  value="Completely confidential"
                  class="mr-2"
                />
                <label for="confidential">Completely confidential</label>
              </div>
            </div>
          </div>

          <div class="mb-4 text-sm">
            <label for="referrals" class="block">
              Would you be open to giving referrals to other job-seekers in your
              current company?
            </label>
            <div class="flex">
              <label class="flex items-center mr-4">
                <input
                  type="radio"
                  id="referralsYes"
                  name="referrals"
                  value="Yes"
                  class="mr-2"
                />
                Yes
              </label>
              <label class="flex items-center">
                <input
                  type="radio"
                  id="referralsNo"
                  name="referrals"
                  value="No"
                  class="mr-2"
                />
                No
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileComponentForm;
