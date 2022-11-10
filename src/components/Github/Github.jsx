import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Image } from "@chakra-ui/react";
// import "./GitHub.css";

import { Box, Text } from "@chakra-ui/react";
const GitHub = () => {
  const github = {
    margin: "auto",
    border: "5px solid #A3E900",
    padding: "20px",
    borderRadius: "10px",
  };
  let Theme = "";
  let x = localStorage.getItem("chakra-ui-color-mode");
  if (x === "dark") {
    Theme = "tokyonight";
  } else {
    Theme = "default";
  }

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

      <Box
        m="auto"
        mt="30px"
        w={["100%", "100%", "65%"]}
        border="5px solid #A3E900"
      >
        <Image
          align="center"
          src={`https://github-readme-stats.vercel.app/api?username=faizankhan99&theme=${Theme}`}
          alt="Faizankhan "
          width="100%"
          height="100%"
        />
      </Box>

      <Box
        m="auto"
        mt="30px"
        w={["100%", "100%", "65%"]}
        border="5px solid #A3E900"
      >
        <Image
          align="center"
          alt="error"
          src={`https://github-readme-streak-stats.herokuapp.com/?user=faizankhan99&theme=${Theme}`}
          width="100%"
        />
      </Box>
    </div>
  );
};

export default GitHub;
