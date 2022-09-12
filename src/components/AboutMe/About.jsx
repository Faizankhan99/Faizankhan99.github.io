import { Box, Button } from "@chakra-ui/react";
import React, { useRef } from "react";

export default function About() {
  const titleRef = useRef();
  const titleRef1 = useRef();

  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function handleBack() {
    titleRef1.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <Button onClick={handleBackClick}>goto 3rd</Button>
      <Button onClick={handleBack}>goto 1st</Button>
      <Box border="1px solid black" h="300px">
        1
      </Box>
      <Box ref={titleRef1} border="1px solid black" h="300px">
        2
      </Box>
      <Box border="1px solid black" h="300px">
        3
      </Box>
      <Box border="1px solid black" h="300px">
        4
      </Box>
      <Box border="1px solid black" h="300px">
        5
      </Box>
      <Box ref={titleRef} border="1px solid black" h="300px">
        6
      </Box>
    </div>
  );
}
