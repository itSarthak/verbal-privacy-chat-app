"use client";

import { Alert, Box, Button, Typography } from "@mui/material";
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
    <Box className="personal_code_container bg-blue-100 shadow-xl rounded-md p-5">
      <Box className="personal_code_title_container">
        <Typography
          className="personal_code_title_paragraph tracking-tight"
          variant="h5"
        >
          Your Personal Code
        </Typography>
      </Box>
      <Box className="personal_code_value_container flex justify-between ">
        <Typography
          className="personal_code_value_paragraph pt-2"
          variant="body2"
          id="personal_code_paragraph"
        >
          {personalCode}
        </Typography>
        <Button
          variant="contained"
          className="target:shadow-lg"
          onClick={() => copyButton(personalCode)}
        >
          <ContentCopyOutlinedIcon />
        </Button>
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
