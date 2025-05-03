import React from "react";
import {
  Image,
  Box,
  Button,
  Heading,
  Link,
  SimpleGrid,
  Text,
  Badge,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useUserStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";
import { MdBookmark } from "react-icons/md";
import ReposSection from "@features/ReposSection";

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
      <Box
        flex="1"
        minW={{ base: "100%", md: "100%" }}
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        bg="blue.100"
      >
        <Flex
          direction={{ base: "column", sm: "row" }}
          align="center"
          gap={4}
          mb={6}
        >
          <Image
            src={user?.avatar_url}
            height="150px"
            width="150px"
            objectFit="cover"
            borderRadius="full"
          />
          <Box textAlign={{ base: "center", sm: "left" }}>
            <Heading size="md">{user?.name}</Heading>
            <Text color="gray.500">@{user?.login}</Text>
          </Box>
        </Flex>

        {user.bio && (
          <Text mb={4} fontStyle="italic">
            {user.bio}
          </Text>
        )}

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box>
            <Text fontWeight="bold">Şirkət:</Text>
            <Text>{user?.company || "—"}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Email:</Text>
            <Text>{user?.email || "—"}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Yer:</Text>
            <Text>{user?.location || "—"}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">GitHub linki:</Text>
            <Link href={user?.html_url} color="blue.500" isExternal>
              {user?.html_url} <Icon as={MdBookmark} color="blue.400" ml={1} />
            </Link>
          </Box>
          <Box>
            <Text fontWeight="bold">Public Repos:</Text>
            <Badge colorScheme="purple">{user?.public_repos}</Badge>
          </Box>
          <Box>
            <Text fontWeight="bold">İzləyicilər:</Text>
            <Badge colorScheme="green">{user?.followers}</Badge>
          </Box>
          <Box>
            <Text fontWeight="bold">İzlədikləri:</Text>
            <Badge colorScheme="orange">{user?.following}</Badge>
          </Box>
          <Box>
            <Text fontWeight="bold">Qoşulduğu tarix:</Text>
            <Text>{new Date(user?.created_at).toLocaleDateString()}</Text>
          </Box>
        </SimpleGrid>

        <Button mt={6} colorScheme="blue" onClick={() => navigate("/")}>
          Axtarışa geri dön
        </Button>
      </Box>

      <Box
        w={["100%", "100%", "100%"]} // mobil üçün 100%, böyük ekran üçün 50%
        mx="auto"
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        bg="blue.100"
        height={["auto", "auto", 700]}
      >
        <ReposSection />
      </Box>
    </Flex>
  );
};

export default DetailPage;
