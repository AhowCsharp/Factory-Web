import {
  Box,
  Flex,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LogoBtn from "./LogoBtn";
import ContactUsDrawer from "./ContactUsDrawer";
import { useTranslation } from "next-i18next";
import { EmailIcon } from "@chakra-ui/icons";

// import LogoBtn from "./LogoBtn";

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
        color="#c8a856"
        textAlign="center"
        fontSize="18px"
        lineHeight="26px"
        fontWeight="500"
        className="hoverText"
        transition="color 0.3s"
      >
        {item.name_en}
      </Text>
    </Flex>
  );
};

const Nav = ({ isContactUsOpen, setIsContactUsOpen }) => {
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

  const isLgUp = useBreakpointValue({ base: false, lg: true });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenAnimation, setIsMenuOpenAnimation] = useState(false);

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      if (Math.abs(st - lastScrollTop) <= 50) {
        return; // 如果滾動距離小於或等於50px，則不做任何動作
      }

      if (st > lastScrollTop && st > 205) {
        setHeaderVisible(false);
      } else {
        console.log("headerVisible", true);
        setHeaderVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <Flex justify="center">
      <ContactUsDrawer
        isContactUsOpen={isContactUsOpen}
        setIsContactUsOpen={setIsContactUsOpen}
      />
      {isLgUp ? (
        <Flex pos="relative" maxW="1300px" w="100%">
          {/* 大 nav bar */}
          <Flex
            w="100%"
            pos="absolute"
            top="0"
            align="center"
            zIndex="9990"
            transition="transform 0.5s ease-in-out"
          >
            <Box m="24px" mr="60px">
              <LogoBtn />
            </Box>
            <Flex
              bg="white"
              justify="center"
              flex="1"
              py="30px"
              px="36px"
              borderRadius="full"
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

            <Box m="24px" ml="60px" w="100px" h="100px">
              <Flex
                mt="14px"
                justify="center"
                align="center"
                bg="white"
                w="70px"
                h="70px"
                borderRadius="35px"
                cursor="pointer"
                transition="all 0.3s"
                _hover={{
                  bg: "#c8a856",
                  borderRadius: "35px",
                  transition: "all 0.3s",
                  color: "#191919",
                  transform: "rotate(360deg)",
                  ".mailColor": {
                    // 定義一個自訂類名並在hover時改變其顏色
                    color: "white",
                  },
                }}
                onClick={() => {
                  setIsContactUsOpen(true);
                }}
              >
                <EmailIcon
                  className="mailColor"
                  w="30px"
                  h="30px"
                  color="#c8a856"
                />
              </Flex>
            </Box>
          </Flex>
        </Flex>
      ) : (
        <>
          <Box
            zIndex="9990"
            w="168px"
            h="168px"
            borderRadius="40px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            pos="fixed"
            top="-84px"
            right="-84px"
            bg="white"
          >
            <Flex
              pos="relative"
              mt="110px"
              ml="27px"
              w="100%"
              zIndex="9991"
              align="center"
            >
              <Box
                justifyContent="center"
                onClick={() => {
                  setIsMenuOpen((state) => !state);
                  // 晚0.2秒才開始動畫
                  if (isMenuOpenAnimation === true) {
                    setTimeout(() => {
                      setIsMenuOpenAnimation((state) => !state);
                    }, 200);
                  } else {
                    setIsMenuOpenAnimation((state) => !state);
                  }
                }}
                cursor="pointer"
                mr="20px"
              >
                <Box w="32px" h="2px" bg="#c8a856"></Box>
                <Box w="32px" h="2px" bg="#c8a856" mt="5px"></Box>
                <Box w="32px" h="2px" bg="#c8a856" mt="5px"></Box>
                <Text fontSize="12px" color="#191919" mt="2px">
                  Menu
                </Text>
              </Box>
            </Flex>
          </Box>

          {isMenuOpen && (
            <Box
              w="100%"
              h="100vh"
              pos="fixed"
              top="0"
              left="0"
              zIndex="9980"
              onClick={() => {
                setIsMenuOpen(false);
                setTimeout(() => {
                  setIsMenuOpenAnimation((state) => !state);
                }, 200);
              }}
            ></Box>
          )}
          <Box
            position="fixed"
            left="0"
            top="0"
            w="full"
            h="auto"
            overflowY="auto"
            bg="#D74C37"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            p="12px"
            zIndex="9980"
            display="flex"
            opacity="1"
            flexDirection="column"
            transform={
              isMenuOpenAnimation
                ? "translateY(0) "
                : "translateY(calc(-100% - 68px))"
            }
            transitionDelay={!isMenuOpen ? "0.3s" : "0s"}
            transition={
              isMenuOpen
                ? "transform 0.3s ease-in-out"
                : "transform 0.2s ease-in-out"
            }
            backdropFilter="blur(10px)"
          >
            <Flex
              flexDir={{ base: "column", lg: "row" }}
              pt="38px"
              px="34px"
              bg="white"
              borderRadius="12px"
            >
              <Flex align="center" borderBottom="1px dashed #c8a856">
                <Box
                  opacity={isMenuOpen ? "1" : "0"}
                  transition={
                    isMenuOpen
                      ? "opacity 0.3s ease-in-out"
                      : "opacity 0.2s ease-in-out"
                  }
                  transitionDelay={isMenuOpen ? "0.3s" : "0"}
                >
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
                  ml="16px"
                  opacity={isMenuOpen ? "1" : "0"}
                  transition={
                    isMenuOpen
                      ? "opacity 0.3s ease-in-out"
                      : "opacity 0.2s ease-in-out"
                  }
                  transitionDelay={isMenuOpen ? "0.3s" : "0"}
                  mr={{ base: "0px", lg: "50px" }}
                  py={{ base: "20px", lg: "0px" }}
                  fontSize="18px"
                  lineHeight="26px"
                  fontWeight="500"
                  color="#191919"
                  cursor="pointer"
                  onClick={async () => {
                    router.push("/");
                    setIsMenuOpen(false);

                    setTimeout(() => {
                      setIsMenuOpenAnimation(false);
                    }, 200);
                  }}
                >
                  首頁
                </Text>
                <Text
                  ml="12px"
                  color="#c8a856"
                  fontSize="18px"
                  lineHeight="26px"
                  fontWeight="500"
                  className="hoverText"
                  opacity={isMenuOpen ? "1" : "0"}
                  transition={
                    isMenuOpen
                      ? "opacity 0.3s ease-in-out"
                      : "opacity 0.2s ease-in-out"
                  }
                  transitionDelay={isMenuOpen ? "0.3s" : "0"}
                >
                  Home
                </Text>
              </Flex>
              {ITEM_LIST.map((item) => {
                return (
                  <Flex align="center" borderBottom="1px dashed #c8a856">
                    <Box
                      opacity={isMenuOpen ? "1" : "0"}
                      transition={
                        isMenuOpen
                          ? "opacity 0.3s ease-in-out"
                          : "opacity 0.2s ease-in-out"
                      }
                      transitionDelay={isMenuOpen ? "0.3s" : "0"}
                    >
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
                      ml="16px"
                      opacity={isMenuOpen ? "1" : "0"}
                      transition={
                        isMenuOpen
                          ? "opacity 0.3s ease-in-out"
                          : "opacity 0.2s ease-in-out"
                      }
                      transitionDelay={isMenuOpen ? "0.3s" : "0"}
                      mr={{ base: "0px", lg: "50px" }}
                      py={{ base: "20px", lg: "0px" }}
                      fontSize="18px"
                      lineHeight="26px"
                      fontWeight="500"
                      color="#191919"
                      cursor="pointer"
                      onClick={async () => {
                        if (item.name == "中文") {
                          window.open("/", "_self");
                        } else if (
                          item.name === "聯絡我們" ||
                          item.name === "Contact Us"
                        ) {
                          setIsContactUsOpen(true);
                        } else {
                          router.push(
                            `/${
                              ITEM_LIST.find(
                                (_item) => _item.name === item.name
                              ).value
                            }`
                          );
                        }
                        setIsMenuOpen(false);

                        setTimeout(() => {
                          setIsMenuOpenAnimation(false);
                        }, 200);
                      }}
                    >
                      {item.name}
                    </Text>
                    <Text
                      ml="12px"
                      color="#c8a856"
                      fontSize="18px"
                      lineHeight="26px"
                      fontWeight="500"
                      className="hoverText"
                      opacity={isMenuOpen ? "1" : "0"}
                      transition={
                        isMenuOpen
                          ? "opacity 0.3s ease-in-out"
                          : "opacity 0.2s ease-in-out"
                      }
                      transitionDelay={isMenuOpen ? "0.3s" : "0"}
                    >
                      {item.name_en}
                    </Text>
                  </Flex>
                );
              })}
            </Flex>
            {/* 菜單內容 */}
          </Box>
        </>
      )}
    </Flex>
  );
};
export default Nav;
