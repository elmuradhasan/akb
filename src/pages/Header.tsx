import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { ColorModeButton } from '@components/ui/color-mode'


const Header = () => {
  return (
    <Box
      as="header"
      bg="gray.100"
      _dark={{ bg: 'gray.800' }}
      px={{ base: 4, md: 6 }}
      py={4}
      boxShadow="sm"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Flex align="center" justify="space-between">
        <Heading
          size="lg"
          color="gray.800"
          _dark={{ color: 'whiteAlpha.900' }}
        >
          elmuradhasan
        </Heading>
        <ColorModeButton />
      </Flex>
    </Box>
  )
}

export default Header
