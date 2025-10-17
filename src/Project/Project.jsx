import { SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { HiEye } from "react-icons/hi";
import { AiOutlinePlayCircle } from "react-icons/ai";
// import { useState } from "react";
import Roomhero from "../Project/RoomHero.png";
import monitair from "../Project/monitair.png";
import clockify from "../Project/clockify.png";
import portfolio from "../Project/Portfolio.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = (props) => {
  const { project } = props;
  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  return (
    <Box className="mainDiv" mt={["20%", "20%", "10%"]} ref={project}>
      <Heading fontSize={40} ml={["20%", "25%", "40%"]}>
        My <span style={{ color: "#A3E900" }}>Projects</span>
      </Heading>
      <SimpleGrid
        m={"auto"}
        mt={"20"}
        w={"80%"}
        columns={[1, 1, 2]}
        spacing="40px"
        className="ProjectDiv"
        textAlign={"center"}
        pb={"100px"}
      >
        {/* mynta................................ ....................................................................*/}
        <Box data-aos="zoom-in" borderRadius={10} p={4} boxShadow="dark-lg">
          <Image
            w={"100%"}
            borderRadius={10}
            src={monitair}
            alt="monitair-com"
            border="5px solid #A3E900"
          />
          <Heading mt={4} fontSize={"22px"}>
            MonitAir
          </Heading>
          <Text
            fontSize={["14px", "14px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            MonitAir® is an all-in-one, HIPAA-compliant platform that combines
            remote patient monitoring (RPM) and telemedicine (TM) to help
            physicians improve patient outcomes while increasing practice
            revenues. It was designed by doctors for doctors who manage patients
            on PAP/NIV for chronic sleep and respiratory conditions,
            predominantly obstructive sleep apnea (OSA) and chronic obstructive
            pulmonary disease (COPD).
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["14px", "14px", "17px"]}>
            <b> Team Project </b>| <b>Duration: </b> 1 year
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["13px", "13px", "15px"]}>
            <span style={{ color: "#A3E900", fontSize: "16px" }}>
              TECH STACK:-
            </span>
            <span style={{ fontSize: "16px" }} ml="30px">
              {" "}
              JAVASCRIPT | CSS | ReactJS | TypeScript | Redux | NestJS | JSON
              SERVER | NodeJs | GraphQL | AWS | Microservices | Docker
            </span>
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "40px"]}
            className="ProjectIcon"
          >
            <a href="linkedin.com/company/monitairhealt">
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a href="https://www.monitairhealth.com/">
              <AiOutlinePlayCircle
                className="gitEye"
                style={{ marginTop: "3" }}
              />
            </a>
            <a href="https://www.monitairhealth.com/">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>
        {/*Roomhero................................................................................................... */}

        <Box data-aos="zoom-in" borderRadius={10} p={4} boxShadow="dark-lg">
          <Image
            w={"100%"}
            //  h={"350px"}
            borderRadius={10}
            src={Roomhero}
            alt="RoomHero-com"
            border="5px solid #A3E900"
          />
          <Heading mt={4} fontSize={"22px"}>
            RoomHero
          </Heading>
          <Text
            fontSize={["14px", "14px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            This website is a "RoomHero.com". ROOMHERO is online interior
            designer for Residential real estate. As Europe's first digital,
            fully integrated interior designer. I worked in a team of 20 members
            to build this project. i worked frontend and bakend both.
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["14px", "14px", "17px"]}>
            <b> Group Project: </b>| 20 Collaborators | <b>Duration: </b> 1 year
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["13px", "13px", "15px"]}>
            <span style={{ color: "#A3E900", fontSize: "16px" }}>
              TECH STACK:-
            </span>
            <span style={{ fontSize: "16px" }} ml="30px">
              {" "}
              JAVASCRIPT | CSS | ReactJS | TypeScript | Redux | ExpressJS |JSON
              SERVER NodeJs | MongoDB | AWS
            </span>
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "40px"]}
            className="ProjectIcon"
          >
            <a href="#">
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a href="https://www.roomhero.de/">
              <AiOutlinePlayCircle
                className="gitEye"
                style={{ marginTop: "3" }}
              />
            </a>
            <a href="https://www.roomhero.de/">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* ..............................Clockify ..........................................*/}
        <Box data-aos="zoom-in" borderRadius={10} p={4} boxShadow="dark-lg">
          <Image
            w={"100%"}
            borderRadius={10}
            src={clockify}
            alt="CLokify"
            border="5px solid #A3E900"
          />
          <Heading mt={4} fontSize={"22px"}>
            Clockify - Clone
          </Heading>
          <Text
            fontSize={["14px", "14px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            This website is a of "Clockify". Clockify is a time tracker
            and timesheet app that lets you track work hours across projects.
            Unlimited users, free forever.
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["14px", "14px", "17px"]}>
            <b> Group Project: </b>| 5 Collaborators | <b>Duration: </b> 04 Days
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["13px", "13px", "15px"]}>
            <span style={{ color: "#A3E900", fontSize: "16px" }}>
              TECH STACK:-
            </span>
            <span style={{ fontSize: "16px" }} ml="30px">
              REACT | CSS | Express.js | CHAKRA UI |Mongo db | Firebase
            </span>
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "40px"]}
            className="ProjectIcon"
          >
            <a href="https://github.com/saurabhsolanki/unused-library-4088">
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a href="https://clockyf.netlify.app">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* ...............................Portfolio................................. */}

        <Box data-aos="zoom-in" borderRadius={10} p={4} boxShadow="dark-lg">
          <Image
            w={"100%"}
            borderRadius={10}
            src={portfolio}
            alt="Myntra-com"
            border="5px solid #A3E900"
          />
          <Heading mt={4} fontSize={"22px"}>
            Portfolio
          </Heading>
          <Text
            fontSize={["14px", "14px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            This is my fully responsive portfolio which I recently made using
            React & Chakra UI, This website has Dark mode, Scrolling
            functionality etc. This is private repository to protect the code
            for its uniqueness.
          </Text>{" "}
          <br />
          <Text mt={2} textAlign={"left"} fontSize={["14px", "14px", "17px"]}>
            <b> Individual Project </b> | <b>Duration: </b> 06 Days
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["13px", "13px", "15px"]}>
            <span style={{ color: "#A3E900", fontSize: "16px" }}>
              TECH STACK:-
            </span>
            <span style={{ fontSize: "16px" }} ml="30px">
              {" "}
              REACT JS | CSS | JavaScript | Chakra UI
            </span>
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "40px"]}
            className="ProjectIcon"
          >
            <a href="https://github.com/UrsTrulyAditya/Sephora-Clone">
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a href="https://www.linkedin.com/posts/faizan7_python-html-css-activity-6945353972337520640-nnFZ?utm_source=share&utm_medium=member_desktop">
              <AiOutlinePlayCircle
                className="gitEye"
                style={{ marginTop: "3" }}
              />
            </a>
            <a href="https://sphoraclone.netlify.app/homepage.html">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Projects;
