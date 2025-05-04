import React from "react";
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { useUserStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";
import ReposSection from "@features/repo/ReposSection";
import UserFullInfo from "@features/userInfo/UserFullInfo";

const DetailPage = () => {
  const user = useUserStore((state) => state.user);

  const navigate = useNavigate();

  if (!user) {
    return (
      <Box textAlign="center" mt={10}>
        <Text>İstifadəçi məlumatı tapılmadı.</Text>
        <Button mt={4} colorScheme="blue" onClick={() => navigate("/")}>
          Axtarışa geri dön
        </Button>
      </Box>
    );
  }

  return (
    <Flex
      direction={{ base: "column", lg: "row" }}
      gap={8}
      alignItems="center"
      width="100%"
      flexWrap="wrap"
    >
      <UserFullInfo />
      <Box
        w={["100%", "100%", "100%"]}
        mx="auto"
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        // bg="blue.100"
        height={["auto", "auto", "auto"]}
      >
        <ReposSection />
      </Box>
    </Flex>
  );
};

export default DetailPage;
