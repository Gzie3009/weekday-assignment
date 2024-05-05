import React from "react";
import PersonIcon from "@mui/icons-material/Person";

function Avatar() {
  return (
    <button className="bg-gray-400 grid justify-items-center rounded-full p-1">
      <PersonIcon className="text-white" sx={{fontSize:40}} />
    </button>
  );
}

export default Avatar;
