import { Box, Flex, Image, Text } from "@chakra-ui/react";

const NEWS = [
  {
    id: 1,
    date: "2024.04.15",
    title: "新聞標題1",
    content: "新聞內容1",
    img: "./images/news/icon.jpg",
  },
  {
    id: 2,
    date: "2024.04.16",
    title: "新聞標題2",
    content: "新聞內容2",
    img: "./images/news/icon.jpg",
  },
  {
    id: 3,
    date: "2024.04.17",
    title: "新聞標題3",
    content: "新聞內容3",
    img: "./images/news/icon.jpg",
  },
];

const NewsList = () => {
  return (
    <Box>
      {NEWS.map((news, index) => {
        return (
          <Flex align="center" ml={{ base: "0px", md: index % 2 ? "32px" : "0px" }} my="16px">
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
