import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Image, Text, VStack,Button } from "@chakra-ui/react";
import ViewNoMatch from "./ViewNoMatch";

const ViewDetails = () => {
  const location = useLocation();
  console.log("Logging the location -->", location);

  return location.state !== null ? (
    <Container
      mt={"32"}
      pt={"2"}
      borderWidth={"thin"}
      borderColor={"blackAlpha.800"}
      borderRadius={"lg"}
    >
    <div>
    <a href="/">
      <Button colorScheme='teal' variant='ghost'>Back To List</Button>
    </a>
    
    </div>
      <VStack>
        <Image
          src={`https://image.tmdb.org/t/p/w300_and_h450_face/${location.state.poster_path}`}
          alt={location.state.title}
          border={"1px"}
          borderRadius={"lg"}
          boxShadow={"md"}
        />
        <Text as={"header"} fontSize={"3xl"} color={"blackAlpha.800"}>
          {location.state.title}
        </Text>
        <div>
        <h5>Release Date</h5>
          <Text
          as={"section"}
          fontFamily={"IBM Plex Sans"}
          fontSize={"medium"}
          lineHeight={"8"}
          color={"blackAlpha.800"}
          // textAlign={"justify"}
        >
          {location.state.release_date}
        </Text>
        <br />
        <h5>Vote Average</h5>
          <Text
          as={"section"}
          fontFamily={"IBM Plex Sans"}
          fontSize={"medium"}
          lineHeight={"8"}
          color={"blackAlpha.800"}
          // textAlign={"justify"}
        >
          {location.state.vote_average}
        </Text>
        <br />
          <h5>Overview</h5>
          <Text
          as={"section"}
          fontFamily={"IBM Plex Sans"}
          fontSize={"medium"}
          lineHeight={"8"}
          color={"blackAlpha.800"}
          // textAlign={"justify"}
        >
          {location.state.overview}
        </Text>
        <br />
        </div>

      </VStack>
    </Container>
  ) : (
    <ViewNoMatch />
  );
};

export default ViewDetails;
