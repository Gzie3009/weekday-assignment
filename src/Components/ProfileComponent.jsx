import React from "react";
import Avatar from "./Avatar";
import CreateIcon from "@mui/icons-material/Create";
import { useDispatch, useSelector } from "react-redux";
import { toggleProfile } from "../Core/Redux/slice/drawerSlice";
import ProfileComponentForm from "./ProfileComponentForm";
import { SidebarToggleButton } from "./Navbar";
function ProfileComponent() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isProfileOpen);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className={`bg-[#BCFCEA] ${isOpen && "w-[35vw]"} border-l relative hidden md:block`}>
      {!isOpen && (
        <div className="w-[6rem] py-5 px-2">
          <div className="flex justify-center items-center flex-col">
            <Avatar />
          </div>
          <p className=" w-full border-[1.5px] border-gray-400 my-7" />
          <button
            onClick={() => dispatch(toggleProfile(true))}
            className="flex flex-col justify-center items-center text-gray-500"
          >
            <CreateIcon />
            Edit Profile
          </button>
        </div>
      )}
      {isOpen && <ProfileComponentForm user={user} />}
      {!isOpen && (
        <div className="w-max h-max absolute top-6 right-[90%] z-50">
          <SidebarToggleButton
            direction={"left"}
            onClick={() => dispatch(toggleProfile(true))}
          />
        </div>
      )}
    </div>
  );
}

export default ProfileComponent;
