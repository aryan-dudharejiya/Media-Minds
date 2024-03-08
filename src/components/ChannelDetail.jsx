import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
      setLoading(false);
    });
  }, [id]);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
        setLoading(false);
      }
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      {loading ? (
        <Typography>Loading...</Typography>
      ) : (
        <>
          <Box>
            <div
              style={{
                background: "white",
                zIndex: 10,
                height: "300px",
              }}
            />
            <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
          </Box>
          <Box display="flex" p="2">
            <Videos videos={videos} />
          </Box>
        </>
      )}
    </Box>
  );
};

export default ChannelDetail;
