import Animation from "@/component/Animation";
import CarouselItem from "@/component/CarouselItem";
import ItemList from "@/component/ItemList";
import ItemSwiper from "@/component/ItemSwiper";
import LogoBtn from "@/component/LogoBtn";
import NewsList from "@/component/NewsList";
import { Box, Flex, Image, Text, keyframes } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect } from "react";

const fadeInOut = keyframes`
    from, to { opacity: 0; }
    100% { opacity: 1; }
  `;

export default function Home() {
  const { t } = useTranslation("common");
  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    const elements = document.querySelectorAll(".animate-item");
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
  return (
    <Box bg="#FCFCFC" overflow="hidden">
      <Box pos="relative">
        <Box zIndex="999" pos="absolute" top="0" w="100%">
          <Animation />
        </Box>
        <Box pos="relative">
          <Box zIndex="0">
            <Box
              as="video"
              playsInline
              autoPlay
              muted
              loop
              w="full"
              // minH={{ lg: "330px" }}
              src="images/videos/video_long_small.mp4"
              type="video/mp4"
            />
          </Box>
        </Box>

        <Box
          pos="relative"
          zIndex="9960"
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
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
          >
            <path
              d="M0 30 Q 150 50 300 30 Q 450 10 600 30 Q 750 50 900 30 Q 1050 10 1200 30 V 60 H 0 Z"
              fill="#FCFCFC"
            ></path>
          </svg>
        </Box>

        <Flex mt="24px" justify="center" display={{ base: "flex", md: "none" }}>
          <LogoBtn />
        </Flex>

        <Box w="100%" align="center" zIndex="9994" pb="50px">
          {/* <Text
            fontSize="30px"
            fontWeight="600"
            pt="48px"
            pb="24px"
            color="#313131"
          >
            {t("index_title")}
          </Text> */}
          <Flex
            align="center"
            maxW="1000px"
            flexDir={{ md: "row", base: "column-reverse" }}
          >
            <Box
              mx={{ base: "0px", md: "48px" }}
              w="100%"
              maxW="500px"
              py={{ base: "0px", md: "24px" }}
              pos="relative"
            >
              <Box
                // boxShadow="0 0 2px 0 rgba(0, 0, 0, .4)"
                boxShadow="lg"
                w="100%"
                overflow="hidden"
                borderRadius="20px"
              >
                <Image
                  _hover={{
                    overflow: "hidden",
                    transform: "scale(1.15)",
                    w: "100%",
                    transition: "all 0.3s",
                    opacity: "0.9",
                  }}
                  src="./images/swiper/swiper_1.jpeg"
                />
              </Box>
              <Box
                zIndex="9970"
                pos="absolute"
                left={{ base: "0px", lg: "-100px" }}
                bottom="0px"
              >
                <Image
                  w={{ base: "65px", md: "7vw" }}
                  src="./images/dec/dec_2.png"
                />
              </Box>
            </Box>
            <Flex pos="relative">
              <Box
                pos="absolute"
                right={{ base: "-100px", lg: "-150px", xl: "-200px" }}
                bottom="0px"
              >
                <Image
                  w={{ base: "85px", md: "10vw" }}
                  src="./images/dec/dec_1.png"
                />
              </Box>
              <Text
                h={{ base: "250px", md: "400px" }}
                lineHeight={{ base: "2", md: "2" }}
                textAlign="start"
                sx={{ writingMode: "vertical-rl" }}
                px={{ base: "24px", md: "48px" }}
                py={{ base: "24px", md: "48px" }}
                ml={{ base: "0px", md: "48px" }}
                color="#313131"
              >
                {t("index_info")}
              </Text>
            </Flex>
          </Flex>
        </Box>

        <Box className="animate-item">
          <Box
            mt={{
              base: "-18px",
              md: "-30px",
              lg: "-40px",
              xl: "-50px",
              "2xl": "-60px",
            }}
            pox="relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 60"
              preserveAspectRatio="none"
            >
              <path
                d="M0 30 Q 150 50 300 30 Q 450 10 600 30 Q 750 50 900 30 Q 1050 10 1200 30 V 60 H 0 Z"
                fill="#F5F2EF"
              ></path>
            </svg>
          </Box>
          <Flex w="full" bg="#F5F2EF" justify="center" py="50px">
            <ItemList />
          </Flex>
        </Box>

        <Box>
          <Box
            mt={{
              base: "-18px",
              md: "-30px",
              lg: "-40px",
              xl: "-50px",
              "2xl": "-60px",
            }}
            pox="relative"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 60"
              preserveAspectRatio="none"
            >
              <path
                d="M0 30 Q 150 50 300 30 Q 450 10 600 30 Q 750 50 900 30 Q 1050 10 1200 30 V 60 H 0 Z"
                fill="#FCFCFC"
              ></path>
            </svg>
          </Box>
          <Flex
            className="animate-item"
            justify="center"
            w={{ base: "full", md: "80vw" }}
            mx={{ base: "20px", md: "36px" }}
            mt="16px"
            flexDir={{ base: "column", md: "row" }}
          >
            <Flex
              mr="60px"
              justify="center"
              flexDir={{ base: "row", md: "column" }}
              align="center"
            >
              <Text
                display={{ base: "none", md: "block" }}
                fontSize="18px"
                sx={{ writingMode: "vertical-rl" }}
                textAlign="center"
                mb="36px"
              >
                關於我們的最新消息
              </Text>
              <Text
                display={{ base: "block", md: "none" }}
                fontSize="18px"
                textAlign="center"
                mr="48px"
              >
                關於我們的最新消息
              </Text>
              <Image w="180px" src="./images/news/dec.png" />
            </Flex>
            <NewsList />
          </Flex>
        </Box>

        <Flex
          w="full"
          mt="60px"
          justify="center"
          align="center"
          flexDir="column"
          className="animate-item"
        >
          <Image
            w={{ base: "full", md: "80vw" }}
            borderRadius={{ base: "0px", md: "20px" }}
            src="./images/item/taro_2.jpeg"
          />
          <Flex justify="center" w={{ base: "full", md: "80vw" }}>
            <Text w="100%" mt="60px" mx="20px" color="#313131" fontWeight="500">
              {t("index_info_2")}
            </Text>
          </Flex>
          <Text
            px="16px"
            py="8px"
            borderRadius="10px"
            bg="#D74C37"
            color="white"
            mt="24px"
            mb="60px"
            cursor="pointer"
            _hover={{ bg: "#D74C37", opacity: 0.8 }}
            onClick={() => {
              router.push({ pathname: "/about" });
            }}
          >
            {t("read_more")}
          </Text>
        </Flex>

        <CarouselItem />
      </Box>
    </Box>
  );
}

export async function getServerSideProps(context) {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
