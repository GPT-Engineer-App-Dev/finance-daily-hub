import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="brand.900" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">Financial Times</Heading>
            <HStack spacing={4}>
              <Link href="#" color="white">Home</Link>
              <Link href="#" color="white">World</Link>
              <Link href="#" color="white">Business</Link>
              <Link href="#" color="white">Tech</Link>
              <Link href="#" color="white">Markets</Link>
              <Link href="#" color="white">Opinion</Link>
              <Link href="#" color="white">Life & Arts</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* Main News Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>Main News</Heading>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="lg">Breaking News: Market Hits Record High</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </Box>

          {/* Secondary News Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>More News</Heading>
            <Flex wrap="wrap" spacing={4}>
              <Box bg="gray.100" p={4} borderRadius="md" flex="1" minW="300px" m={2}>
                <Heading as="h3" size="md">Tech Innovation in 2023</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
              <Box bg="gray.100" p={4} borderRadius="md" flex="1" minW="300px" m={2}>
                <Heading as="h3" size="md">Global Market Trends</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
              <Box bg="gray.100" p={4} borderRadius="md" flex="1" minW="300px" m={2}>
                <Heading as="h3" size="md">Political Landscape</Heading>
                <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
              </Box>
            </Flex>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="brand.900" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={4}>
              <Link href="#" color="white">Privacy Policy</Link>
              <Link href="#" color="white">Terms of Service</Link>
              <Link href="#" color="white">Contact Us</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;