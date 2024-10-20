// HomePage/index.jsx
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutUsSection from "./AboutUsSection";
import HomePageSection from "./HomePageSection";
import { Heading, Flex, Box, Button, Image, Container } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function HomePagePage() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLearnMoreClick = () => {
    navigate("/aboutus"); // Navigate to the About Us page
  };

  return (
    <>
      <Helmet>
        <title>Ravi Ariv Institute Empowering Through Education</title>
        <meta
          name="description"
          content="Join the Ravi Ariv Institute and embrace Service Above Self with our free learning resources. Discover tax laws, advisory services, and capacity development for community betterment"
        />
      </Helmet>
      <Box bg="white.a700" w="100%">
        <Flex
          gap={{ md: "70px", base: "35px", sm: "20px" }} // Adjusted gap for smaller screens
          flexDirection="column"
        >
          <Header />

          {/* Conditional rendering of the About Us section */}
          <Flex display={{ base: "none", md: "flex" }} flexDirection="column" alignItems="center">
            <AboutUsSection />
          </Flex>

          <Flex flexDirection="column" alignItems="center">
            <Container px={{ md: "0px", base: "20px" }}>
              <Flex
                mr={{ md: "10px", base: "0px" }}
                gap="10px"
                alignItems="center"
                flexDirection={{ md: "row", base: "column" }}
              >
                <Image
                  src="images/img_businessman_checking_bankbook.png"
                  alt="Businessman Image"
                  h={{ md: "388px", base: "250px" }} // Responsive height
                  w={{ md: "50%", base: "100%" }}
                  fit="contain"
                  borderRadius="4px"
                />
                <Flex
                  mb="16px"
                  gap="24px"
                  flex={1}
                  flexDirection="column"
                  alignItems="start"
                  justifyContent="center"
                  py={{ md: "64px", base: "20px" }}
                  alignSelf={{ md: "auto", base: "stretch" }}
                >
                  <Flex
                    gap="16px"
                    alignSelf="end"
                    w={{ md: "94%", base: "100%" }}
                    flexDirection="column"
                    alignItems="start"
                  >
                    <Button
                      size="sm"
                      colorScheme="white_A700"
                      leftIcon={
                        <Image
                          src="images/img_contrast.svg"
                          alt="Contrast"
                          h="15px"
                          w="15px"
                          my="6px"
                        />
                      }
                      fontWeight={900}
                      gap="0px"
                      borderColor="blue_gray.100"
                      borderWidth="2px"
                      borderStyle="solid"
                      minW="100px"
                      borderRadius="6px"
                    >
                      About us
                    </Button>
                    <Heading
                      size="heading2xl"
                      as="h1"
                      color="gray.900"
                      letterSpacing="-0.96px"
                      w="100%"
                      lineHeight="45px"
                      fontSize={{ base: "24px", sm: "28px", md: "32px", lg: "40px" }} // Responsive font size
                    >
                      Our mission is to make sure the community is a better place
                    </Heading>
                  </Flex>
                  <Heading
                    size="textlg"
                    color="blue_gray.700"
                    ml={{ lg: "40px", md: "25px", base: "0px" }} // Responsive margin-left
                    fontWeight={400}
                    w={{ md: "88%", base: "100%" }}
                    lineHeight="30px"
                    fontSize={{ base: "16px", sm: "17px", md: "18px", lg: "20px" }} // Responsive font size
                    textAlign="justify" // Added text alignment
                  >
                    Our mission is to make sure that taxes and taxation are fairly and accurately legislated, imposed and administered by all stakeholders.
                  </Heading>
                  <Button
                    size="xl"
                    color="white.a700"
                    ml={{ lg: "32px", md: "20px", base: "70px" }}
                    fontWeight={600}
                    borderColor="light_blue.600"
                    borderWidth="1px"
                    borderStyle="solid"
                    boxShadow="xs"
                    minW="128px"
                    borderRadius="8px"
                    onClick={handleLearnMoreClick} // Handle the click to navigate
                  >
                    Learn more
                  </Button>
                </Flex>
              </Flex>
            </Container>
            <Box
              mt="-40px"
              position="relative"
              bg="white.a700"
              alignSelf="stretch"
              px={{ base: "20px", sm: "32px" }}
            >
              <Flex
                bg="white.a700"
                justifyContent="flex-start"
                p={{ base: "20px", sm: "32px" }}
                flexDirection="column"
                alignItems="flex-start"
              >
                <Flex
                  gap="10px"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Heading
                    size="headingxs"
                    as="h3"
                    textAlign={{ base: "center", md: "start" }} // Responsive text alignment
                    color="light_blue.a700"
                    fontSize={{ base: "16px", sm: "18px", md: "20px", lg: "22px" }} // Responsive font size
                    fontWeight={600}
                    mb="0px"
                    ml={{ lg: "65px", md: "25px", base: "0px" }} // Responsive margin-left
                  >
                    Get Our Services Today
                  </Heading>
                  <Heading
                    size="heading2xl"
                    as="h4"
                    color="gray.900"
                    letterSpacing={{ base: "-0.5px", md: "-0.96px", lg: "-1px" }} // Responsive letter spacing
                    mb="0px"
                    ml={{ lg: "65px", md: "25px", base: "0px" }} // Responsive margin-left
                    fontSize={{ base: "20px", sm: "22px", md: "24px", lg: "26px" }} // Responsive font size
                  >
                    What we provide
                  </Heading>
                </Flex>
              </Flex>

              {/* Home page section */}
              <HomePageSection />
            </Box>
          </Flex>
          <Footer mt="0px" />
        </Flex>
      </Box>
    </>
  );
}
