import { Box, Typography } from "@mui/material";
import React from "react";

const Description = () => {
  return (
    <Box className="description_container">
      <Typography
        variant="h3"
        className="description_container_paragraph tracking-tighter font-bold text-left"
      >
        A privacy-driven
        <br />
        real-time
        <br />
        video chat application.
      </Typography>
    </Box>
  );
};

export default Description;
