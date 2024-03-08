import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Grid } from "@mui/material";
import { motion } from "framer-motion"; // Import motion from framer-motion

import { fetchFromAPI } from "../utils/fetchFromAPI";

import { Videos } from './'

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch video details and related videos when the component mounts or the ID changes
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
      
  }, [id]);

  // Render loading state while fetching data
  if (!videoDetail?.snippet) return 'Loading...';

  // Destructure video details
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box sx={{ position: "sticky", top: "86px" }}>
            {/* ReactPlayer for playing the video */}
            <motion.div
              whileHover={{ scale: 1.05 }} // Apply scale effect on hover
              whileTap={{ scale: 0.95 }} // Apply scale effect on tap
            >
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
                width="100%"
              />
            </motion.div>
            {/* Title, channel information, view count, and like count */}
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${channelId}`} style={{ textDecoration: 'none' }}>
                <Typography variant="subtitle1" color="#fff">
                  {channelTitle}
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views 👁
                </Typography>
                <Typography variant="body1" sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} Likes ❤
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
        {/* Display related videos */}
        <Grid item xs={12} md={4}>
          <Box p={2}>
            {videos && <Videos videos={videos} direction="column"/>}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VideoDetail;
