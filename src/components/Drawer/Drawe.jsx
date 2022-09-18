import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  Text,
} from "@chakra-ui/react";
import { AiOutlineBars } from "react-icons/ai";
import Styles from "../All.module.css";
import { useRef } from "react";

export function Draw(prop) {
  const {
    handleprojectClick,
    handlecontactClick,
    handleSkillClick,
    handleaboutClick,
    handlehomeClick,
  } = prop;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen} mb="2">
        <AiOutlineBars />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>
            <Box
              justifyContent="space-around"
              w="70%"
              fontWeight="bold"
              alignItems="center"
              mt="35%"
              ml="20%"
            >
              <Text
                fontSize="35px"
                mt="20px"
                className={Styles.nav}
                onClick={handlehomeClick}
              >
                HOME
              </Text>
              <Text
                mt="20px"
                fontSize="35px"
                className={Styles.nav}
                onClick={handleaboutClick}
              >
                ABOUT
              </Text>
              <Text
                mt="20px"
                fontSize="35px"
                className={Styles.nav}
                onClick={handleSkillClick}
              >
                SKILLS
              </Text>
              <Text
                mt="20px"
                fontSize="35px"
                className={Styles.nav}
                onClick={handleprojectClick}
              >
                PROJECT
              </Text>
              <Text
                mt="20px"
                fontSize="35px"
                className={Styles.nav}
                onClick={handlecontactClick}
              >
                CONTACT
              </Text>
              <a href="https://drive.google.com/file/d/12Gd7HGtrqxOvIYEdPkASSUA4ZEc38R8Q/view?usp=sharing">
                <Text
                  mt="20px"
                  fontSize="35px"
                  className={Styles.nav}
                  onClick={handlehomeClick}
                >
                  RESUME
                </Text>
              </a>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
