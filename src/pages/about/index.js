import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About = () => {
  const { t } = useTranslation("common");
  return (
    <Box bg="white">
      <Flex w="100%" bg="#F5F2EF" h="200px">
        <Flex flex="1" p="24px" display={{ base: "none", md: "flex" }}>
          {/* <Image src="./images/item/taro_2.jpeg" /> */}
        </Flex>
        <Flex flex="1" align="center" justify="center" p="12px">
          <Text
            fontSize={{ base: "24px", md: "36px" }}
            fontWeight="500"
            color="#313131"
          >
            {t("about_title")}
          </Text>
        </Flex>
      </Flex>
      <Flex
        bg="rgb(191, 169, 193, 0.6)"
        w="100%"
        flexDir={{ base: "column-reverse", md: "row" }}
      >
        <Flex flex="1" align="center">
          <Text fontSize="16px" color="#313131" p="24px" fontWeight="500">
            {t("about_info_1")}
          </Text>
        </Flex>
        <Flex flex="1">
          <Image src="/images/item/taro_2.jpeg" />
        </Flex>
      </Flex>
      <Flex
        w="100%"
        flexDir={{ base: "column", md: "row" }}
        bg="#F5F2EF"
        py="24px"
      >
        <Flex flex="1" p="24px">
          <Image borderRadius="8px" src="/images/item/fullitem.png" />
        </Flex>
        <Flex flex="1" align="center">
          <Text fontSize="16px" color="#313131" p="24px" fontWeight="500">
            {t("about_info_2")}
          </Text>
        </Flex>
      </Flex>

      <Box bg="rgb(191, 169, 193, 0.6)" pb={{ base: "36px", md: "60px" }}>
        <Flex flex="1">
          <Image src="/images/item/world.png" />
        </Flex>
        <Flex flex="1" align="center" pt={{ base: "36px", md: "60px" }}>
          <Text
            as="span"
            fontSize="20px"
            color="#313131"
            p="24px"
            fontWeight="500"
            mx={{ base: "24px", md: "60px" }}
          >
            {t("about_info_3_1")}
            <Text color="#B766AD" fontSize="20px" fontWeight="600">
              {t("about_info_3_2")}
            </Text>
            <Text color="#B766AD" fontSize="20px" fontWeight="600">
              {t("about_info_3_3")}
            </Text>
            <Text color="#B766AD" fontSize="20px" fontWeight="600">
              {t("about_info_3_4")}
            </Text>
            {t("about_info_3_5")}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export async function getServerSideProps(context) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default About;
