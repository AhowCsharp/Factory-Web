import ItemSwiper from "@/component/ItemSwiper";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Store = ({ isContactUsOpen, setIsContactUsOpen }) => {
  const { t } = useTranslation("common");
  return (
    <Box w="100%" align="center" zIndex="9994">
      <Text
        fontSize="30px"
        fontWeight="600"
        pt="48px"
        pb="24px"
        color="#313131"
      >
        {t("index_title")}
      </Text>
      <Flex
        justify="space-between"
        align="center"
        maxW="1000px"
        flexDir={{ md: "row", base: "column" }}
      >
        <Box
          mx={{ base: "0px", md: "48px" }}
          w="100%"
          maxW="500px"
          overflow="hidden"
          py={{ base: "0px", md: "24px" }}
        >
          <ItemSwiper />
        </Box>
        <Text
          w="100%"
          px={{ base: "24px", md: "48px" }}
          py={{ base: "24px", md: "48px" }}
          color="#313131"
        >
          {t("index_info")}
        </Text>
      </Flex>

      <Flex
        w="200px"
        h="50px"
        align="center"
        justify="center"
        bg="#C1A9BA"
        my="48px"
        borderRadius="25px"
        cursor="pointer"
        _hover={{ bg: "#D9C4D3" }}
        onClick={() => {
          setIsContactUsOpen(true);
        }}
      >
        <Text fontWeight="500" fontSize="20px">
          {t("nav_contact")}
        </Text>
      </Flex>
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

export default Store;
