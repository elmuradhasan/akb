// components/Loader.tsx
import { Flex, Spinner, Text } from '@chakra-ui/react';

const LoaderPage = ({ message = "Yüklənir..." }: { message?: string }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="20vh"
      gap={4}
    >
      <Spinner
        strokeWidth="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
      <Text fontSize="lg" color="gray.600">
        {message}
      </Text>
    </Flex>
  );
};

export default LoaderPage;
