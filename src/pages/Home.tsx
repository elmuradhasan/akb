import { Box, HStack } from "@chakra-ui/react";
import UserSearchForm from "@features/UserSearch";
import React from "react";

function Home() {
  return (
    <Box p={4} bg="gray.100" minH="100vh" justifyContent="center" alignItems="center"  width={"100%"}>
        <UserSearchForm />
    </Box>
  );
}

export default Home;
