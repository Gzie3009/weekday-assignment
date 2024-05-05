import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Jobs from "./Jobs";

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

const MyTabs = () => {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="flex justify-center">
        <Tabs className="relative" value={value} onChange={handleChange}>
          <Tab label="Applied Jobs" />
          <Tab label="Search Jobs" />
          <p className="rounded-full bg-blue-600 text-white text-xs h-max p-1 px-3 -ml-4">947</p>
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <Typography>Applied Jobs</Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Jobs />
      </TabPanel>
    </div>
  );
};

export default MyTabs;
1;
