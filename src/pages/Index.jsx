import { Container, VStack, Heading, Input, FormControl, FormLabel } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl" mb={6}>
          Smart World
        </Heading>

        <FormControl id="incoming-power">
          <FormLabel>Incoming Power</FormLabel>
          <Input placeholder="Enter incoming power" />
        </FormControl>

        <FormControl id="pv-generation">
          <FormLabel>PV Generation</FormLabel>
          <Input placeholder="Enter PV generation" />
        </FormControl>

        <FormControl id="battery-size">
          <FormLabel>Battery Size</FormLabel>
          <Input placeholder="Enter battery size" />
        </FormControl>
      </VStack>
    </Container>
  );
};

export default Index;
