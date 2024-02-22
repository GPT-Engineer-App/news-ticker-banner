import React from "react";
import { Box, Button, VStack } from "@chakra-ui/react";

const TickerControlPanel = () => {
  return (
    <Box position="fixed" top="4" right="4" p="4" bg="white" boxShadow="base" borderRadius="md">
      <VStack spacing={3}>
        <Button size="sm">Slow</Button>
        <Button size="sm">Fast</Button>
        <Button size="sm">Pause</Button>
      </VStack>
    </Box>
  );
};

export default TickerControlPanel;
