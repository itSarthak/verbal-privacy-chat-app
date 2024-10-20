import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import ChatIcon from "@mui/icons-material/Chat";

const PersonalCallContainer = () => {
  return (
    <Box className="personal_code_connecting_container">
      <Typography
        className="personal_code_connecting_paragraph font-bold"
        variant="h6"
      >
        Connect Now
      </Typography>
      <Box className="personal_code_connecting_input_container mt-2">
        <TextField
          fullWidth
          variant="outlined"
          label="Callee Code"
          className="personal_code_input rounded-mg"
          id="personal_code_input filled-white"
          sx={{
            // Medium rounded corners
            borderRadius: 2, // Or use '8px' for more precision

            // Default background color
            backgroundColor: "white", // Light grey when not focused

            "& .MuiOutlinedInput-root": {
              borderRadius: 2, // Ensure the input itself has rounded corners

              "&.Mui-focused": {
                backgroundColor: "white", // Change to white when focused
              },

              "& fieldset": {
                borderColor: "grey", // Customize border color if needed
              },
            },
          }}
        />
      </Box>
      <Box className="personal_code_connecting_buttons_container flex mt-5 justify-between">
        <Button
          variant="contained"
          startIcon={<VideoCallIcon />}
          className="connecting_button "
          id="personal_code_chat_button"
          size="large"
        >
          Video
        </Button>
        <Button
          variant="contained"
          startIcon={<ChatIcon />}
          className="connecting_button"
          id="personal_code_video_button"
          size="large"
        >
          Chat
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalCallContainer;
