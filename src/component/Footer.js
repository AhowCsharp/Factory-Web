import { Box, Flex, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import LogoBtn from "./LogoBtn";
import { useRouter } from "next/router";
import { useState } from "react";

const NavItem = ({ children, isContactUsOpen, setIsContactUsOpen, item }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;
  const [isHover, setIsHover] = useState(false);

  const ITEM_LIST = [
    {
      name: "關於我們",
      name_en: "About",
      value: "about",
    },
    // {
    //   name: "最新消息",
    //   value: "whats-on",
    // },
    {
      name: "餐飲業務專區",
      name_en: "Food Service Area",
      value: "store",
    },
    {
      name: "聯絡我們",
      name_en: "Contact Us",
      value: "contact",
    },
    {
      name: locale === "en" ? "中文" : "En",
      name_en: locale === "en" ? "Tw" : "En",
      value: locale === "en" ? "zh-TW" : "en",
    },
  ];

  return (
    <Flex
      mr="50px"
      flexDir={{ base: "row", md: "column" }}
      justify="center"
      _hover={{
        ".hoverText": {
          // 定義一個自訂類名並在hover時改變其顏色
          color: "#CE0000",
          transition: "color 0.3s",
        },
      }}
      transition="color 0.3s"
      align={{ base: "center", md: "start" }}
    >
      <Text
        textAlign="center"
        color="#191919"
        fontSize="18px"
        fontWeight="500"
        cursor="pointer"
        className="hoverText"
        transition="color 0.3s"
        onClick={() => {
          if (children == "中文") {
            window.open("/", "_self");
          } else if (children === "聯絡我們" || children === "Contact Us") {
            setIsContactUsOpen(true);
          } else {
            router.push(
              `/${ITEM_LIST.find((item) => item.name === children).value}`
            );
          }
        }}
      >
        {children}
      </Text>
      <Text
        ml={{ base: "8px", md: "0px" }}
        color="#c8a856"
        textAlign="center"
        fontSize="14px"
        className="hoverText"
        transition="color 0.3s"
      >
        {item.name_en}
      </Text>
    </Flex>
  );
};

const Footer = ({ isContactUsOpen, setIsContactUsOpen }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { locale } = router;

  const ITEM_LIST = [
    {
      name: "關於我們",
      name_en: "About",
      value: "about",
    },
    // {
    //   name: "最新消息",
    //   value: "whats-on",
    // },
    {
      name: "餐飲業務專區",
      name_en: "Food Service Area",
      value: "store",
    },
    {
      name: "聯絡我們",
      name_en: "Contact Us",
      value: "contact",
    },
    {
      name: locale === "en" ? "中文" : "En",
      name_en: locale === "en" ? "Tw" : "En",
      value: locale === "en" ? "zh-TW" : "en",
    },
  ];
  return (
    <Box zIndex="9990" pos="relative">
      <Box
        zIndex="9990"
        mt={{
          base: "-15px",
          md: "-30px",
          lg: "-40px",
          xl: "-50px",
          "2xl": "-60px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30 Q 150 50 300 30 Q 450 10 600 30 Q 750 50 900 30 Q 1050 10 1200 30 V 60 H 0 Z"
            fill="#F5F2EF"
          ></path>
        </svg>
      </Box>
      <Flex
        bg="#F5F2EF"
        w="100%"
        h={{ base: "400px", md: "250px" }}
        p="24px"
        align="start"
        justify="center"
        pos="relative"
        overflow="hidden"
        flexDir={{ base: "column", md: "row" }}
      >
        <Flex
          align={{ base: "center", md: "center" }}
          flexDir={{ base: "row", md: "row" }}
        >
          <LogoBtn />
          <Box ml="36px">
            <Flex flexDir={{ base: "column", md: "row" }}>
              <Box
                ml={{ base: "0px", md: "24px" }}
                mt={{ base: "12px", md: "0px" }}
              >
                <Text color="#7d4918">〒 35241</Text>
                <Text color="#7d4918">{t("footer_address")}</Text>
              </Box>
              <Box
                ml={{ base: "0px", md: "36px" }}
                mt={{ base: "12px", md: "0px" }}
              >
                <Flex flexDir={{ base: "column", md: "row" }}>
                  <Text
                    mr="12px"
                    color="#D74C37"
                    fontWeight="600"
                    fontSize="18px"
                    cursor="pointer"
                  >
                    <a href="tel:037-831922">TEL: 037-831922</a>
                  </Text>
                  <Text color="#D74C37" fontSize="18px" fontWeight="600">
                    FAX: 037-833353
                  </Text>
                </Flex>

                <Flex
                  pos="relative"
                  zIndex="9980"
                  align="center"
                  mt="2px"
                  _hover={{
                    // 位移 2px
                    transform: "translateX(2px)",
                  }}
                >
                  <Box>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 18 18"
                      fill="#D74C37"
                      class="null"
                    >
                      <g>
                        <path d="M18 9a9 9 0 11-9-9 9 9 0 019 9zm-5.436-.246L8.471 6.025a.926.926 0 00-1.44.771v5.457a.926.926 0 001.44.771l4.093-2.724a.926.926 0 000-1.546z"></path>
                      </g>
                    </svg>
                  </Box>
                  <Text
                    textDecor="underline"
                    ml="8px"
                    color="#D74C37"
                    fontWeight="500"
                    cursor="pointer"
                    onClick={() => {
                      // 苗栗縣三灣鄉中正路1巷6之1號
                      window.open(
                        "https://goo.gl/maps/1NjyRQzZ9Hw6t1nX6",
                        "_blank"
                      );
                    }}
                  >
                    Google Map {">"}
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Flex
              display={{ base: "none", md: "flex" }}
              ml={{ base: "0px", md: "24px" }}
              mt="24px"
            >
              {ITEM_LIST.map((item) => (
                <NavItem
                  item={item}
                  key={item.value}
                  isContactUsOpen={isContactUsOpen}
                  setIsContactUsOpen={setIsContactUsOpen}
                >
                  {item.name}
                </NavItem>
              ))}
            </Flex>
          </Box>
        </Flex>

        <Flex display={{ base: "flex", md: "none" }} mt="24px" zIndex="9980">
          <Wrap>
            {ITEM_LIST.map((item) => (
              <WrapItem key={item.value}>
                <NavItem
                  item={item}
                  isContactUsOpen={isContactUsOpen}
                  setIsContactUsOpen={setIsContactUsOpen}
                >
                  {item.name}
                </NavItem>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
        <Flex pos="absolute" bottom="-2" right="-2">
          <Image w="180px" src="./images/dec/footer_1.png" />
        </Flex>
        <Flex pos="absolute" bottom="0" left="0">
          <Image w="100px" src="./images/dec/footer_2.png" />
        </Flex>
      </Flex>
    </Box>
  );
};
export default Footer;
