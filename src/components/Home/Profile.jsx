import style from "./Profile.module.css";
import React from "react";
import {
  Box,
  Text,
  Heading,
  Image,
  Wrap,
  Avatar,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import image from "../Home/my.jpg";

export default function Profile() {
  return (
    <Box mt="8%">
      <SimpleGrid columns={[1, 1, 2]} spacing="0px">
        <Box m="10%">
          <Box className={style.mainBox}>
            <Text fontSize="40px" display="flex">
              Hello
              <Box w="8%">
                <img
                  src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif"
                  alt=""
                />
              </Box>{" "}
              my name is
            </Text>
            <Heading as="h1" size="4xl">
              Faizan khan
            </Heading>
          </Box>
          <Box className={style.tagLine}>
            <Box id={style.faizan}>
              <Heading as="h1" className={style.run}>
                <span>I</span>m<span>Full Stack Developer</span>
              </Heading>
            </Box>
            <Button mt="20px" bg="#A3E900" fontSize="3xl" h="50px">
              Resume
            </Button>
          </Box>
        </Box>
        <Box
          _hover={{
            transform: "scale(1.2)",
            cursor: "pointer",
          }}
        >
          <Image src={image} boxSize="400px" ml="20%" borderRadius="100%" />
        </Box>
      </SimpleGrid>
    </Box>
  );
}
