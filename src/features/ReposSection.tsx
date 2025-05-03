import {
  Box,
  Heading,
  Stack,
  Text,
  Badge,
  ButtonGroup,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { useUserRepos, useUserStore } from "../store/userStore";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { Pagination } from "@ark-ui/react";

const pageSize = 3;

const ReposSection = () => {
  const user = useUserStore((state) => state.user);
  const { data: repos, isLoading, isError } = useUserRepos(user?.login);
  const [page, setPage] = useState(1);

  if (isLoading) return <Text>Repolar yüklənir...</Text>;
  if (isError) return <Text textAlign="center">Repolar yüklənə bilmədi.</Text>;
  if (!repos || repos.length === 0)
    return <Text>İstifadəçinin public reposu yoxdur.</Text>;

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleRepos = repos.slice(startIndex, endIndex);

  return (
    <Box>
      <Heading size="md" mb={4}>
        İctimai Repositilər
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        gap={4}
        bg="white"
        p={4}
        borderRadius="md"
        boxShadow="sm"
      >
        {visibleRepos.map((repo) => (
          <Box
            key={repo.id}
            p={4}
            borderWidth="1px"
            borderRadius="md"
            bg="gray.50"
            _hover={{ bg: "yellow.100", cursor: "pointer" }}
            maxH="150px"
            overflowY="auto"
          >
            <Heading size="sm" mb={1}>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "blue" }}
              >
                {repo.name}
              </a>
            </Heading>
            <Text mb={2}>{repo.description || "Açıqlama yoxdur"}</Text>
            <Badge bg="red.100" colorScheme="yellow">★ {repo.stargazers_count}</Badge>
          </Box>
        ))}
      </SimpleGrid>

      <Pagination.Root
        count={repos.length}
        pageSize={pageSize}
        page={page}
        onPageChange={(e) => setPage(e.page)}
      >
        <ButtonGroup
          mt={6}
          size="sm"
          flexWrap="wrap"
          justifyContent="center"
          gap={2}
        >
          <Pagination.PrevTrigger asChild>
            <IconButton>
              <HiChevronLeft />
            </IconButton>
          </Pagination.PrevTrigger>

          {Array.from(
            { length: Math.ceil(repos.length / pageSize) },
            (_, index) => {
              const value = index + 1;
              const isSelected = value === page;
              return (
                <IconButton
                  key={value}
                  aria-label={`Səhifə ${value}`}
                  variant={isSelected ? "solid" : "ghost"}
                  onClick={() => setPage(value)}
                >
                  {value}
                </IconButton>
              );
            }
          )}

          <Pagination.NextTrigger asChild>
            <IconButton>
              <HiChevronRight />
            </IconButton>
          </Pagination.NextTrigger>
        </ButtonGroup>
      </Pagination.Root>
    </Box>
  );
};

export default ReposSection;
