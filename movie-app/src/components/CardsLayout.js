import React from "react";
import { Container, Image, Text, VStack, Tag, Tooltip } from "@chakra-ui/react";
import { Link } from "react-router-dom";
//import {WrapItem,Button } from "@chakra-ui/react";

const CardsLayout = ({ movie }) => {
  const movieTitle = movie.title;
  const newTitle = movieTitle
    .replace(/\s/g, "-")
    .replace(":", "")
    .toLowerCase();
  return (
    <Container>
      <VStack>
        <Link to={`/movie/${newTitle}`} state={movie}>
          <Image
            border={"1px"}
            borderRadius={"lg"}
            boxShadow={"md"}
            src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
            alt={movie.title}
          />
          <Text textAlign={"center"} fontWeight={"semibold"}>
            {movie.title}
          </Text>
        </Link>
      </VStack>
      <Tooltip
        hasArrow
        label={"Average TMDB Voting"}
        fontSize={"md"}
        fontFamily={"Rubik"}
        fontWeight={"semibold"}
        bg={"gray.200"}
      >
        <Tag
          fontWeight={"semibold"}
        >
          {movie.vote_average}
          
        </Tag>
      </Tooltip>
      {/* <WrapItem>
      <Button width={0.5} height={6} colorScheme='red'>+</Button>
    </WrapItem> */}
      
      
    </Container>
  );
};

export default CardsLayout;
