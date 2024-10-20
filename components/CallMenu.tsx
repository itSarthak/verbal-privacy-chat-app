import React from "react";
import PersonalCodeContainer from "./CallMenu/PersonalCodeContainer";
import Description from "./CallMenu/Description";
import { Box } from "@mui/material";
import PersonalCallContainer from "./CallMenu/PersonalCallContainer";

const CallMenu = () => {
  return (
    <Box
      className="dashboard_container rounded-lg flex flex-col pl-10 pr-10 mt-10 bg-blue-300 ml-auto mr-auto w-2/5 pt-4 pb-4 gap-y-5"
      id="dashboard_container"
    >
      <Description />
      <PersonalCodeContainer personalCode="DDDDsD" />
      <PersonalCallContainer />
      <div className="dashboard_blur display_none" id="dashboard_blur"></div>
    </Box>
  );
};

export default CallMenu;
