import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { useNavigate, useLocation } from "react-router-dom";

const MyComponent = () => {
  // State variables to hold selected filter values
  const [selectedRole, setSelectedRole] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedBasePay, setSelectedBasePay] = useState(null);
  const [searchCompany, setSearchCompany] = useState("");

  // React Router hooks
  const navigate = useNavigate();
  const location = useLocation();

  // Load filter values from URL parameters when component mounts
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setSelectedRole(params.getAll("selectedRole"));

    setSelectedExperience(parseInt(params.get("selectedExperience")) || null);
    setSelectedBasePay(parseInt(params.get("selectedBasePay")) || null);
    setSearchCompany(params.get("searchCompany") || "");
  }, [location.search]);

  // Update URL parameters when filter values change
  useEffect(() => {
    const params = new URLSearchParams();
    selectedRole &&
      selectedRole.forEach((role) => params.append("selectedRole", role));

    selectedExperience &&
      params.set("selectedExperience", selectedExperience || "");
    selectedBasePay && params.set("selectedBasePay", selectedBasePay || "");
    searchCompany && params.set("searchCompany", searchCompany);
    navigate({ search: params.toString() });
  }, [
    selectedRole,

    selectedExperience,
    selectedBasePay,
    searchCompany,
    navigate,
  ]);

  // Event handlers for filter value changes
  const handleRoleChange = (event, newValue) => setSelectedRole(newValue);

  const handleExperienceChange = (event, newValue) =>
    setSelectedExperience(newValue);
  const handleBasePayChange = (event, newValue) => setSelectedBasePay(newValue);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-3 px-3 mb-5">
      {/* Autocomplete for Role */}
      <Autocomplete
        getOptionLabel={(option) => option}
        multiple
        options={["ios", "android", "backend", "frontend"]}
        value={selectedRole}
        onChange={handleRoleChange}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              label={option}
              {...getTagProps({ index })}
              onDelete={() =>
                setSelectedRole(selectedRole.filter((_, i) => i !== index))
              }
              key={option}
            />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Role" />
        )}
      />
      {/* Autocomplete for Years of Experience */}
      <Autocomplete
        getOptionLabel={(option) => option.toString()}
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        value={selectedExperience}
        onChange={handleExperienceChange}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Years of Experience"
          />
        )}
      />
      {/* Autocomplete for Base Pay */}
      <Autocomplete
        getOptionLabel={(option) => option.toString()}
        options={[10000, 30000, 50000, 70000, 90000]}
        value={selectedBasePay}
        onChange={handleBasePayChange}
        renderInput={(params) => (
          <TextField {...params} variant="outlined" label="Base Pay" />
        )}
      />
      {/* Textfield for Search Company */}
      <TextField
        csssx={{ width: "50%" }}
        variant="outlined"
        label="Search Company"
        value={searchCompany}
        onChange={(event) => setSearchCompany(event.target.value)}
      />
    </div>
  );
};

export default MyComponent;
