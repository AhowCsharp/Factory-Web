import {
  Box,
  Flex,
  Image,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";

const PRODUCT_LIST = [
  "./images/swiper/swiper_1.jpeg",
  "./images/swiper/swiper_2.jpeg",
  "./images/swiper/swiper_3.jpeg",
  "./images/swiper/swiper_4.jpeg",
  "./images/swiper/swiper_5.jpeg",
  "./images/swiper/swiper_6.jpeg",
  "./images/swiper/swiper_7.jpeg",
  "./images/swiper/swiper_8.jpeg",
  "./images/swiper/swiper_9.jpeg",
];

const CarouselItem = () => {
  const moveup = keyframes`
0% { transform: translateX(0%); }
100% { transform: translateX(-50%); }
`;

  const preferReducedMotion = usePrefersReducedMotion();
  const animation = preferReducedMotion
    ? undefined
    : `${moveup} 60s linear 0s infinite`;

  return (
    <Box overflow="hidden" zIndex="9950" pos="relative" mb="-20px">
      <Flex w="5040px" overflow="hidden" direction="row" animation={animation} >
        {PRODUCT_LIST.map((product, index) => {
          return (
            <Box key={index} w="560px" h="100%" border="4px solid white">
              <Image borderRadius="8px" src={product} w="100%" />
            </Box>
          );
        })}
        {PRODUCT_LIST.map((product, index) => {
          return (
            <Box key={index} w="560px" h="100%" border="4px solid white">
              <Image w="100%" borderRadius="8px" src={product} w="100%" />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
export default CarouselItem;
