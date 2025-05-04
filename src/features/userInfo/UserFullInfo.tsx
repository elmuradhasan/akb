import React from "react";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Icon,
  Badge,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { useUserStore } from "../../store/userStore";
import { MdBookmark } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

function UserFullInfo() {
  const user = useUserStore((state) => state.user);
  const navigate = useNavigate();

  return (
    <Box
      flex="1"
      minW={{ base: "100%", md: "100%" }}
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    //   bg="blue.100"
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
          <Heading fontSize={["2xl", "3xl", "4xl", "5xl"]}>
            {user?.name}
          </Heading>
          <Text color="gray.500" margin="10px 0">
            @{user?.login}
          </Text>
        </Box>
      </Flex>

      {user?.bio && (
        <Text mb={4} fontStyle="italic">
          {user.bio}
        </Text>
      )}

      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
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
          <Link to={user?.html_url} color="blue.500" isExternal>
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
  );
}

export default UserFullInfo;
