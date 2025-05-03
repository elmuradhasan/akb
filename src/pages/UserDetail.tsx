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
  Stack,
} from "@chakra-ui/react";
import { useUserRepos, useUserStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";
import { MdBookmark, } from "react-icons/md";
import ReposSection from "@features/ReposSection";
// import { SpinnerIcon } from "@chakra-ui/icons";
const DetailPage = () => {
  const user = useUserStore((state) => state.user);
  const { data: repos, isLoading, isError } = useUserRepos(user?.login);
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
    <>
      <Box
        w={{ base: "90%", sm: "80%", md: "70%", lg: "60%" }}
        mx="auto"
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        bg="blue.100"
      >
        <Flex align="center" gap={4} mb={6}>
          <Image
            src={user?.avatar_url}
            height={150}
            width={150}
            style={{ objectFit: "cover", borderRadius: "50%" }}
          />
          <Box>
            <Heading size="md">{user?.name}</Heading>
            <Text color="gray.500">@{user?.login}</Text>
          </Box>
        </Flex>

        {user.bio && (
          <Text mb={4} fontStyle="italic">
            {user.bio}
          </Text>
        )}

        <SimpleGrid columns={[1, 2]} gap={4}>
          <Box>
            <Text fontWeight="bold">Şirkət:</Text>
            <Text>{user?.company || "—"}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Email:</Text>
            <Text>{user?.email || "—"}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">Yer</Text>
            <Text>{user?.location || "—"}</Text>
          </Box>
          <Box>
            <Text fontWeight="bold">GitHub linki:</Text>
            <Link href={user?.html_url} color="blue.500">
              {user?.html_url}{" "}
              <Icon size="lg" color="tomato">
                <MdBookmark color="blue" />
              </Icon>
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
        <Button
          mt={6}
          w="full"
          colorScheme="blue"
          width={200}
          onClick={() => navigate("/")}
        >
          Axtarışa geri dön
        </Button>
      </Box>
    <ReposSection />
    </>
  );
};

export default DetailPage;
