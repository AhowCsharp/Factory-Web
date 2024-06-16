import { Box, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const ItemList = () => {
  const { t } = useTranslation("common");
  const ITEMS = [
    {
      id: 1,
      name: "item1",
      img: "./images/swiper/swiper_10.jpg",
      info: t("home_item_1"),
    },
    {
      id: 2,
      name: "item2",
      img: "./images/swiper/swiper_11.jpg",
      info: t("home_item_2"),
    },
    {
      id: 3,
      name: "item3",
      img: "./images/swiper/swiper_12.jpg",
      info: t("home_item_3"),
    },
  ];

  return (
    <Wrap spacing="2vw" justify="center">
      {ITEMS.map((item) => {
        return (
          <WrapItem w={{ base: "47vw", md: "30vw" }}>
            <Box>
              <Box
                boxShadow="0 0 0 1px rgba(0, 0, 0, .1)"
                w="100%"
                overflow="hidden"
                borderRadius="20px"
                border="4px solid white"
              >
                <Image
                  _hover={{
                    overflow: "hidden",
                    transform: "scale(1.15)",
                    w: "100%",
                    transition: "all 0.3s",
                    opacity: "0.9",
                  }}
                  src={item.img}
                  w="100%"
                  h={{ base: "calc(0.56 * 100%)", md: "calc(0.56 * 30vw)" }}
                />
              </Box>
              <Text
                mx="8px"
                mt="16px"
                fontSize="16px"
                color="#191919"
                textAlign="start"
              >
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
