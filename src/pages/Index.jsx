import React from "react";
import { Box, Text, useTheme, keyframes } from "@chakra-ui/react";

const scroll = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
`;

const Index = () => {
  const theme = useTheme();
  const tickerSpeed = "20s";

  const newsHeadlines = ["Breaking News: Peace talks show promise after recent negotiations.", "Market Update: Stocks rally as new trade deals are announced.", "Weather Alert: Category 5 hurricane is approaching the eastern coastline.", "Sports Tonight: Local team secures championship after a stunning victory."];

  return (
    <Box position="fixed" bottom="0" width="full" overflow="hidden" bg="gray.600" p={2} boxShadow="lg">
      <Box as="marquee" display="inline-block" whiteSpace="nowrap" animation={`${scroll} ${tickerSpeed} linear infinite`} fontSize={theme.fontSizes.md} fontWeight={theme.fontWeights.bold} lineHeight="normal" color="white" py={2} px={4} bg="blue.800">
        {newsHeadlines.map((headline, index) => (
          <Text as="span" key={index} mx={10}>
            {headline}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default Index;
