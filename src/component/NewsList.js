import { Box, Flex, Image, Text } from "@chakra-ui/react";

// 0415 鋁袋新包裝上市
// 0520 魯白筍甜蜜上市
// 0525 端午節快樂

const NEWS = [
  {
    id: 1,
    date: "2024.04.15",
    title: "鋁袋新包裝上市",
    content: "",
    img: "./images/news/new.png",
  },
  {
    id: 2,
    date: "2024.05.20",
    title: "魯白筍甜蜜上市",
    content: "",
    img: "./images/news/new.png",
  },
  {
    id: 3,
    date: "2024.05.25",
    title: "端午節快樂",
    content: "",
    img: "./images/news/new.png",
  },
];

const NewsList = () => {
  return (
    <Box>
      {NEWS.map((news, index) => {
        return (
          <Flex
            align="center"
            ml={{ base: "0px", md: index % 2 ? "32px" : "0px" }}
            my="16px"
          >
            <Image src={news.img} w="145px" />
            <Box ml="24px">
              <Flex>
                <Text color="#c8a856">{news.date}</Text>
                <Text ml="16px">{news.title}</Text>
              </Flex>
              <Text>{news.content}</Text>
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};
export default NewsList;
