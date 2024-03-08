import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion"; // Import motion from framer-motion

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <motion.div // Wrap the card with motion.div
      whileHover={{ scale: 1.05 }} // Apply scale effect on hover
      whileTap={{ scale: 0.95 }} // Apply scale effect on tap
    >
      <Card
        sx={{
          width: { xs: "100%", sm: "358px", md: "320px" },
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Added shadow for depth
          borderRadius: "8px", // Rounded corners
          transition: "transform 0.3s ease",
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            component="img"
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{ width: "100%", height: 180, borderRadius: "8px 8px 0 0" }} // Rounded top corners
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Link
            to={videoId ? `/video/${videoId}` : demoVideoUrl}
            style={{ textDecoration: "none" }}
          >
            <Typography variant="subtitle1" fontWeight="bold" color="white" sx={{ lineHeight: 1.2 }}>
              {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link
            to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
            style={{ textDecoration: "none" }}
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VideoCard;
