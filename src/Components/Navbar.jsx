import { LinearProgress } from "@mui/material";
import React from "react";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleProfile, toggleSidebar } from "../Core/Redux/slice/drawerSlice";
export const SidebarToggleButton = ({ direction, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-max h-max ml-2 bg-white rounded-[8px] z-50"
    >
      {direction === "left" ? (
        <ChevronLeft
          className="border-2 rounded-[8px] "
          sx={{ fontSize: 27 }}
        />
      ) : (
        <ChevronRight
          className="border-2 rounded-[8px]"
          sx={{ fontSize: 27 }}
        />
      )}
    </button>
  );
};

function Navbar() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar);
  const user = { username: "Mrinmoy" };
  return (
    <div className="sticky top-0 z-10 bg-white w-full border rounded-lg py-3 px-7 shadow-md flex justify-between items-center">
      <h1 className="text-xl flex gap-x-1 font-semibold">
        <p className="">👋</p>
        {user.username ? user.username : "Guest"}
      </h1>
      <div>
        <div className="flex gap-x-5 pb-2 px-3">
          <p className="text-blue-500 font-bold text-sm">95%</p>
          <p className="text-sm font-bold">Sync in progress ...</p>
        </div>
        <div>
          <LinearProgress
            variant="determinate"
            value={95}
            sx={{
              "& .MuiLinearProgress-barColorPrimary": {
                backgroundColor: "rgb(71, 178, 255)", // Setting the background color to blue-500
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
