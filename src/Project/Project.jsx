import { SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsGithub } from "react-icons/bs";
import { HiEye } from "react-icons/hi";
import { AiOutlinePlayCircle } from "react-icons/ai";
// import { useState } from "react";
import myntra from "../Project/myntra.png";
import Sephora from "../Project/sephora.png";
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
            src={myntra}
            alt="Myntra-com"
            border="5px solid #A3E900"
          />
          <Heading mt={4} fontSize={"22px"}>
            Myntra - Clone
          </Heading>
          <Text
            fontSize={["14px", "14px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            This website is a clone of "myntra.com". Myntra is a E-commerce
            website, where you can buy buy products I have cloned it
            individually
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["14px", "14px", "17px"]}>
            <b> Individual Project </b>| <b>Duration: </b> 04 Days
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["13px", "13px", "15px"]}>
            <span style={{ color: "#A3E900", fontSize: "16px" }}>
              TECH STACK:-
            </span>
            <span style={{ fontSize: "16px" }} ml="30px">
              {" "}
              REACT | CSS | JAVASCRIPT | JSON SERVER | CHAKRA UI
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
            <a href="https://github.com/Faizankhan99/used-lace-1162">
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a href="https://www.linkedin.com/posts/faizan7_myntra-project-react-activity-6970441473116782592-FTAe?utm_source=share&utm_medium=member_desktop">
              <AiOutlinePlayCircle
                className="gitEye"
                style={{ marginTop: "3" }}
              />
            </a>
            <a href="https://myntraaaa.netlify.app/">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* Sephora............................................................................................... */}

        <Box data-aos="zoom-in" borderRadius={10} p={4} boxShadow="dark-lg">
          <Image
            w={"100%"}
            borderRadius={10}
            src={Sephora}
            alt="Myntra-com"
            border="5px solid #A3E900"
          />
          <Heading mt={4} fontSize={"22px"}>
            Sephora - Clone
          </Heading>
          <Text
            fontSize={["14px", "14px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
          >
            This website is a clone of "Sephora.com". Sephora is a Beauty
            website, Buy cosmetics & beauty products online from Sephora, the
            online shopping beauty store. Browse makeup,more from top beauty
            brands
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["14px", "14px", "17px"]}>
            <b> Group Project: </b>| 5 Collaborators | <b>Duration: </b> 04 Days
          </Text>
          <Text mt={2} textAlign={"left"} fontSize={["13px", "13px", "15px"]}>
            <span style={{ color: "#A3E900", fontSize: "16px" }}>
              TECH STACK:-
            </span>
            <span style={{ fontSize: "16px" }} ml="30px">
              {" "}
              HTML | CSS | JAVASCRIPT | JSON SERVER
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
