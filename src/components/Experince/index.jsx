import React, { useEffect } from 'react';
import { Box, Flex, Heading, keyframes, Text, VStack } from '@chakra-ui/react';
import AOS from "aos";
import "aos/dist/aos.css";
const experiences = [
  {
    company: "SynRam Technolab",
    position: "MERN Developer",
    duration: "March 2024 - Present",
    logo: "/synram.jpg",
  },
  {
    company: "KnightFox infotech Pvt. Ltd.",
    position: "Software Developer",
    duration: "Jan 20023 - March 2024",
    logo: "/knightfox.png",
  },
  {
    company: "HexaDecimal Software Pvt Ltd",
    position: "Software Developer",
    duration: "Feb 2021 - Dec 2022",
    logo: "/hexadecimal.jpg",
  },
  {
    company: "Freelancer",
    position: "Full stack Developer",
    duration: "April 2020 - Present",
    logo: "/Freelance.png",
  },
];


const borderRotation = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;


const Timeline = (props) => {

  const { experince } = props;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <Box
      ref={experince}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <Box display="flex" mt="8%">
        <Heading fontSize={["25px", "40px"]} ml={["10%", "20%", "40%"]}>
          My
        </Heading>
        <Heading fontSize={["25px", "40px"]} ml={["0.6%"]} color="#A3E900">
          Technial
        </Heading>
        <Heading fontSize={["25px", "40px"]} ml={["0.6%"]}>
          Experiences
        </Heading>
      </Box>

      <Flex
        justifyContent="flex-end;"
        alignItems="center"
        w="100%"
        paddingTop="10%"
      >
        <VStack
          spacing={16}
          align="stretch"
          position="relative"
          w={{ base: "90%", md: "70%", lg: "50%" }}
        >
          {experiences.map((exp, index) => (
            <Flex
              key={index}
              align="center"
              position="relative"
              direction={{ base: "column", md: "row" }} // Stack items vertically on small screens
              textAlign={{ base: "center", md: "left" }} // Center text on small screens
              w="100%"
              data-aos="fade-down"
                data-aos-easing="linear"
      data-aos-duration="1000"
            >
              {/* Diamond-shaped logo */}
              <Box
                w={{ base: "60px", md: "100px" }}
                h={{ base: "60px", md: "100px" }}
                bg="white"
                transform="rotate(46deg)"
                display="flex"
                justifyContent="center"
                alignItems="center"
                overflow="hidden"
                position="relative"
                mb={{ base: 6, md: 6 }}
                zIndex="1"
                borderRadius="10%"
                border="none"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "-4px",
                  left: "-4px",
                  right: "-4px",
                  bottom: "-4px",
                  border: "4px solid Blue",
                  transformOrigin: "center",
                  animation: `${borderRotation} 4s linear infinite`, // Rotation animation
                  zIndex: "-1", // Ensure it's behind the content
                }}
                _after={{
                  content: '""',
                  position: "absolute",
                  top: "3px",
                  left: "3px",
                  right: "3px",
                  bottom: "3px",
                  //backgroundColor: "#22232e", // Add background color
                  borderRadius: "10%", // Add border-radius if needed
                  zIndex: "-1",
                }}
                
              >
                <Box transform="rotate(-46deg)">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    width="100%"
                    height="100%"
                  />
                </Box>
              </Box>

              {/* Job details */}
              <Box ml={{ base: 0, md: 8 }} mt={{ base: 10, md: 0 }} zIndex="2" data-aos="fade-left">
                {" "}
                {/* Increased left margin for larger screens */}
                <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold" >
                  {" "}
                  {/* Increased font size */}
                  {exp.position}
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} data-aos="fade-up-right">{exp.company}</Text>{" "}
                {/* Increased font size */}
                <Text fontSize={{ base: "sm", md: "md" }} color="gray.500" data-aos="fade-up-left">
                  {exp.duration}
                </Text>
              </Box>

              {/* Vertical Line */}
              {index !== experiences.length - 1 && (
                <Box
                  position="absolute"
                  left={{ base: "50%", md: "49px" }} // Adjusted for centering
                  top={{ base: "70px", md: "80px" }}
                  height={{ base: "100%", md: "100%" }} // Increased line height
                  width="2px"
                  bg="gray.400"
                  transform={{ base: "translateX(-50%)", md: "none" }}
                />
              )}
            </Flex>
          ))}
        </VStack>
      </Flex>
    </Box>
  );
};

export default Timeline;
