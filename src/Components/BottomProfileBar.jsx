import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Edit } from "@mui/icons-material";
import ProfileComponentForm from "./ProfileComponentForm";

const BottomProfileBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="px-10 my-5">
      <button className="bg-green-500 p-3 w-full md:hidden rounded-xl" onClick={toggleDrawer}>
        Open Drawer <Edit />
      </button>
      <Drawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer}
        sx={{ "& .MuiDrawer-paper": { width: "100%", maxWidth: "500px" } }}
      >
        <div>
            <ProfileComponentForm user={user}/>
        </div>
      </Drawer>
    </div>
  );
};

export default BottomProfileBar;
