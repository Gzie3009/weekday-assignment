import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Avatar from "./Avatar";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../Core/Redux/slice/drawerSlice";
import { SidebarToggleButton } from "./Navbar";

const buttonData = [
  {
    label: "My applied jobs",
    icon: <PersonOutlineIcon />,
  },
  {
    label: "Search jobs",
    icon: <SearchIcon />,
  },
  {
    label: "Search Salary",
    icon: <CurrencyRupeeIcon />,
  },
];

function Sidebar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div
      className={`h-[100vh] flex flex-col justify-between items-center py-5 px-3 border rounded-r-lg border-gray-300 relative ${
        isOpen ? "w-[21rem]" : "w-[8rem]"
      }`}
    >
      <div>
        <div className="flex justify-center items-center flex-col">
          {isOpen ? (
            <div className="flex gap-x-5 w-full items-center">
              <img
                className="w-3/4 p-2"
                src="https://jobs.weekday.works/_next/static/media/logo.268caeb2.png"
              />
              <button
                onClick={() => dispatch(toggleSidebar(false))}
                className="w-max h-max ml-2"
              >
                <ChevronLeftIcon
                  className="border-2 rounded-[8px]"
                  sx={{ fontSize: 27 }}
                />
              </button>
            </div>
          ) : (
            <>
              <img
                src="https://jobs.weekday.works/_next/static/media/logo-small.08826abd.png"
                className="h-11 w-11"
              />
            </>
          )}
          <p className="mt-2 mb-5 border-gray-100 border w-full" />
        </div>
        <div className={isOpen && "px-3"}>
          <p
            className={`text-[0.6rem] text-gray-500 py-2 ${
              isOpen ? "text-start" : "text-center"
            }`}
          >
            {isOpen ? "LOOKING FOR A JOB" : "GET JOBS"}
          </p>
          <div
            className={`flex flex-col gap-y-5 text-[0.8rem] text-gray-500 ${
              isOpen ? "items-start" : "items-center"
            }`}
          >
            {buttonData.map((button, index) => (
              <button key={index}>
                {button.icon}
                {isOpen && <span className="ml-2">{button.label}</span>}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={`flex items-center ${isOpen && "w-full px-2"}`}>
        <Avatar />
        {isOpen && (
          <span className="ml-2 text-sm font-light text-gray-500">
            {user.firstName ? `${user.firstName}` : "User"}
          </span>
        )}
      </div>

      {!isOpen && (
        <div className="w-max h-max absolute top-6 left-[78%] z-50">
          <SidebarToggleButton
            direction={"right"}
            onClick={() => dispatch(toggleSidebar(true))}
          />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
