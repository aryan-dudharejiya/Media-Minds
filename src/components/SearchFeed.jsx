import React, { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";
import { Videos } from "./";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTerm } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
      setLoading(false);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2, backgroundColor: "#1f1f1f" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for:{" "}
        <span style={{ color: "#F31503" }}>{searchTerm}</span> videos
      </Typography>

      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="70vh"
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : videos.length === 0 ? (
        <Typography variant="body1" color="white">
          No search results found for "{searchTerm}".
        </Typography>
      ) : (
        <Videos videos={videos} />
      )}
    </Box>
  );
};

export default SearchFeed;
