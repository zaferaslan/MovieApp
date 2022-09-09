import React from "react";
import MovieCards from "../components/MovieCards";
import { Text, Spinner } from "@chakra-ui/react";
import KEYS from "../Config";
import useFetch from "../hooks/useFetch";

function ViewHome() {
  const {
    data: movies,
    page,
    loading,
    error,
  } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${KEYS}`
  );
  return (
    <>
      <Text
        as={"h2"}
        fontSize={"2xl"}
        mt={"32"}
        fontWeight={"semibold"}
        textAlign={"center"}
        textTransform={"capitalize"}
        letterSpacing={"wide"}
      >
        Popular Movies
      </Text>
      {!loading ? (
        <MovieCards movies={movies} />
      ) : (
        <Spinner
          color={"red.200"}
          emptyColor={"pink.50"}
          size={"xl"}
          speed={"0.7s"}
        />
      )}
      {error && <p>{error}</p>}
    </>
  );
}

export default ViewHome;
