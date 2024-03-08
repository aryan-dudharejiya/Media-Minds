import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, InputBase } from "@mui/material";
import { Search, Clear } from "@mui/icons-material";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        alignItems: "center",
        borderRadius: 50, // Increased border-radius for a smoother look
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // Subtle shadow
        transition: "box-shadow 0.3s ease",
        "&:hover": {
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.2)", // Slightly increased shadow on hover
        },
      }}
    >
      <IconButton type="submit">
        <Search />
      </IconButton>
      <InputBase
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ ml: 1, flex: 1, color: "#333" }} // Changed text color to a darker shade
      />
      {searchTerm && (
        <motion.div whileHover={{ scale: 1.1 }}>
          <IconButton onClick={handleClear}>
            <Clear />
          </IconButton>
        </motion.div>
      )}
    </Paper>
  );
};

export default SearchBar;
