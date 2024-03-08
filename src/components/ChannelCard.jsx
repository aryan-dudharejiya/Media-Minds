import { Box, CardContent, CardMedia, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import { CenterFocusStrong, Favorite } from "@mui/icons-material";

const ChannelCard = ({ channelDetail, marginTop }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px'},
      height: '326px',
      margin: 'auto',
      marginTop,
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <CardContent sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>

        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}
        />

        <Typography variant="h6">
          {channelDetail?.snippet?.title}
        </Typography>

        {channelDetail?.statistics?.subscriberCount && (
          <Typography>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
          </Typography>
        )}

        {/* Example of adding a social media link */}
        <IconButton aria-label="Visit Twitter" sx={{ color: '#1DA1F2' }}>
          <CenterFocusStrong />
        </IconButton>

        {/* Example of adding favorite button */}
        <IconButton aria-label="Add to Favorites" sx={{ color: '#FF5722' }}>
          <Favorite />
        </IconButton>

      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
