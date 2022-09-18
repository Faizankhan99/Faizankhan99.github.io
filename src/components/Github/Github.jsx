import React from "react";
import GitHubCalendar from "react-github-calendar";
// import "./GitHub.css";

import { Box, Text } from "@chakra-ui/react";
const GitHub = () => {
  const github = {
    margin: "auto",
    border: "5px solid #A3E900",
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div>
      <Text mt="6%">DAYS I CODE</Text>
      <Box
        w={["100%", "100%", "65%"]}
        style={github}
        className="github_Calender"
      >
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="Faizankhan99"
          year={new Date().getFullYear()}
        />
      </Box>
    </div>
  );
};

export default GitHub;
