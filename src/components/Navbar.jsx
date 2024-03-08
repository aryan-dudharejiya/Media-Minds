import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

// Styled components for animation
const AnimatedLink = styled(motion(Link))`
  display: flex;
  align-items: center;
  &:hover {
    transform: scale(1.05);
  }
`;

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      sx={{
        position: "sticky",
        background: "#333", // Darker background color
        top: 0,
        zIndex: 1000,
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <AnimatedLink
        to="/"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src={logo}
          alt="logo"
          height={40}
          style={{ marginRight: 10 }}
        />
        <span style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          Media Minds
        </span>
      </AnimatedLink>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
