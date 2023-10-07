import React from "react";
import {
  Box,
  Image,
  SimpleGrid,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
const Home = () => {
  return (
    <div>
      <Box>
        {/*  background image */}
        <Box
          height="740px"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          backgroundImage="url(https://www.miningmonthly.com/w-images/d734243d-c0c2-45ce-a6a6-9d3ecba6ed32/2/Dassault-1680x600.png)"
        >
          {/*  content written over background image */}
          <Box paddingTop="100px">
            <SimpleGrid columns={[1, 1, 1, 2]} gap={"30px"}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box textAlign="left">
                  <Heading color="white">
                    Data-Powered Solutions <br />
                    for Industrial Excellence
                  </Heading>

                  <Button color="white" backgroundColor="blue" padding="20px">
                    Read More
                  </Button>
                </Box>
              </Box>
              <Box>
                <Image src="https://ntwist.com/wp-content/uploads/2023/01/home-image-icons-v6.png"></Image>
              </Box>
            </SimpleGrid>
          </Box>
          {/* flag  in background image */}
          <Box marginLeft={"30px"} position="fixed">
            <Button padding={"30px 10px"}>
              <Image
                width={"60%"}
                height={"30px"}
                src="https://i.imgur.com/J6vHKA4.png"
              ></Image>
              <IoMdArrowDropdown fontSize={"20px"} />
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
