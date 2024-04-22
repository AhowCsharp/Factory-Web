import { Box, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";

const ItemList = () => {
  const ITEMS = [
    {
      id: 1,
      name: "item1",
      img: "./images/swiper/swiper_1.jpeg",
      info: "紅豆含豐富蛋白質和纖維，是營養又健康的食材",
    },
    {
      id: 2,
      name: "item2",
      img: "./images/swiper/swiper_5.jpeg",
      info: "果醬多用於點心，甜美果味增添豐富的層次感",
    },
    {
      id: 3,
      name: "item3",
      img: "./images/swiper/swiper_3.jpeg",
      info: "筍子口感鮮嫩，是春季菜餚中不可缺少的佳品",
    },
  ];

  return (
    <Wrap spacing="2vw" justify="center">
      {ITEMS.map((item) => {
        return (
          <WrapItem w={{ base: "47vw", md: "30vw" }}>
            <Box>
              <Box border="4px solid white">
                <Image src={item.img} w="100%" />
              </Box>
              <Text mx="8px" mt="16px" fontSize="16px" color="#191919" textAlign="start">
                {item.info}
              </Text>
            </Box>
          </WrapItem>
        );
      })}
      <WrapItem w={{ base: "47vw", md: "30vw" }}></WrapItem>
    </Wrap>
  );
};
export default ItemList;
