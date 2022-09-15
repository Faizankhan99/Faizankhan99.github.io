import { Box, Heading, SimpleGrid, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import style from "../Skill/Skill.module.css";
import bootstrap from "../Skill/bootstrap.svg";
import chakra from "../Skill/chakraui.png";
import css from "../Skill/css.svg";
import express from "../Skill/express.svg";
import git from "../Skill/git.svg";
import html from "../Skill/html.svg";
import javascript from "../Skill/javascript.svg";
import materialui from "../Skill/materialui.svg";
import mongodb from "../Skill/mongodb.svg";
import mongoose from "../Skill/mongoose.png";
import nodejs from "../Skill/nodejs.svg";
import npm from "../Skill/npm.svg";
import postman from "../Skill/postman.png";
import react from "../Skill/react.svg";
import redux from "../Skill/redux.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Skill(props) {
  const { Skills } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const skill = [
    { src: html, title: "html", id: 1 },
    { src: css, title: "css", id: 2 },
    { src: javascript, title: "javascript", id: 3 },
    { src: bootstrap, title: "bootstrap", id: 4 },
    { src: react, title: "react", id: 5 },
    { src: chakra, title: "chakra", id: 6 },
    { src: express, title: "express", id: 7 },
    { src: mongodb, title: "mongodb", id: 8 },
    { src: git, title: "git", id: 9 },
    // { src: materialui, title: "materialui" ,id:10},
    { src: mongoose, title: "mongoose", id: 11 },
    { src: nodejs, title: "nodejs", id: 12 },
    { src: npm, title: "npm", id: 13 },
    { src: postman, title: "postman", id: 14 },
    { src: redux, title: "redux", id: 15 },
  ];
  return (
    <>
      <Box m="auto" mt="20%" ref={Skills}>
        {/* <marquee scrollamount="13"> */}
        <Box display="flex">
          <Heading ml={["20%", "20%", "40%"]}>My</Heading>
          <Heading ml={["0.6%"]} color="#A3E900">
            Technial
          </Heading>
          <Heading ml={["0.6%"]}>Skills</Heading>
        </Box>
        {/* </marquee> */}
        <Box w="90%" m="auto" mt="6%">
          <SimpleGrid columns={[2, 3, 7]} alignItems="center" spacing={10}>
            {skill.map((elem, index) => (
              <Box
                w="90%"
                cursor="pointer"
                textAlign="center"
                // alignItems="center"
                // border="1px solid black"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                key={elem.id}
              >
                {/* {console.log(elem.id)} */}
                <Image
                  // key={elem.id}
                  transition=" all .3s ease-in-out"
                  _hover={{
                    transform: "scale(1.3)",
                  }}
                  boxSize="80%"
                  src={elem.src}
                  m="auto"
                ></Image>
                <Text fontSize="150%" mt="10%">
                  {elem.title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
