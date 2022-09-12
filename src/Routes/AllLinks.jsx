import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Styles from "../components/All.module.css";
import { Box, Text, Button, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function AllLinks() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const titleRef = useRef();

  // function handleBackClick() {
  //   // Scroll back to the title element..
  //   titleRef.current.scrollIntoView({ behavior: "smooth" });
  // }

  return (
    <>
      <Box
        w="100%"
        // border="1px solid red"
        display="flex"
        justifyContent="space-between"
      >
        <Box w="20%" display="flex" mt="10px" fontFamily="cursive">
          <Text fontSize="3xl" fontWeight="bold" ml="20px">
            FAI
          </Text>
          <Text fontSize="3xl" fontWeight="bold" color="#A3E900">
            ZAN
          </Text>
        </Box>
        <Box
          // border="1px solid black"
          display="flex"
          justifyContent="space-around"
          w="50%"
          fontWeight="bold"
          alignItems="center"
          mt="10px"
        >
          <Text fontSize="xl">
            <NavLink to="/" className={Styles.nav}>
              HOME
            </NavLink>
          </Text>
          <Text fontSize="xl">
            <NavLink to="about" className={Styles.nav}>
              ABOUT
            </NavLink>
          </Text>
          <Text fontSize="xl">
            <NavLink to="project" className={Styles.nav}>
              PROJECT
            </NavLink>
          </Text>
          <Text fontSize="xl">
            <NavLink to="skill" className={Styles.nav}>
              SKILLS
            </NavLink>
          </Text>
          <Text fontSize="xl">
            <NavLink to="contact" className={Styles.nav}>
              CONTACT
            </NavLink>
          </Text>
          <Text fontSize="xl">
            <NavLink to="resume" className={Styles.nav}>
              RESUME
            </NavLink>
          </Text>
          <Button fontSize="2xl" onClick={toggleColorMode}>
            {colorMode === "light" ? "Dark" : "Light"}
            {colorMode == "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Box>
      </Box>
    </>
  );
}
