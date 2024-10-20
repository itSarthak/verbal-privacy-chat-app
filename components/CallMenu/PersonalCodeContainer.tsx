"use client";

import { Alert, Box, IconButton, Typography } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import CheckIcon from "@mui/icons-material/Check";
import React, { useState } from "react";

interface props {
  personalCode: string;
}

const PersonalCodeContainer = ({ personalCode }: props) => {
  const [ifClick, setIfClick] = useState(false);

  const copyButton = (personalCode: string) => {
    navigator.clipboard.writeText(personalCode);
    setIfClick(true);

    setTimeout(() => {
      setIfClick(false);
    }, 3000);
  };

  return (
    <Box className="personal_code_container shadow-xl rounded-md p-5 bg-white">
      <Box className="personal_code_title_container">
        <Typography
          className="personal_code_title_paragraph tracking-tight"
          variant="h5"
        >
          Your Personal Code
        </Typography>
      </Box>
      <Box className="personal_code_value_container flex justify-between items-center ">
        <Typography
          className="personal_code_value_paragraph"
          variant="body2"
          id="personal_code_paragraph"
        >
          {personalCode}
        </Typography>
        <IconButton
          aria-label="copy"
          className="target:shadow-lg"
          onClick={() => copyButton(personalCode)}
        >
          <ContentCopyOutlinedIcon className="text-blue-400" />
        </IconButton>
        {ifClick && (
          <Box className="absolute bottom-3">
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
              Successfully copied to clipboard.
            </Alert>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PersonalCodeContainer;
