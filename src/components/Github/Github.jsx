import React from "react";
import GitHubCalendar from "react-github-calendar";
// import "./GitHub.css";

import { Box, Text, Heading, Button, SimpleGrid } from "@chakra-ui/react";
const GitHub = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 12;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  const github = {
    margin: "auto",
    border: "5px solid #A3E900",
    // width: "65%",
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
        {/* <GitHubCalendar
          style={{ margin: "auto" }}
          username="Faizankhan99"
          transformData={selectLastHalfYear}
          hideColorLegend
        /> */}
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
