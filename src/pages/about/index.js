import Map from "@/component/Map";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useEffect } from "react";

const About = ({ nonce }) => {
  const { t } = useTranslation("common");

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

  const aboutSEO = {
    title: "關於我們 - 寰宇食品",
    description:
      "了解寰宇食品的創辦理念與堅持。創辦人謝揚松專注於保留豆類的純正風味，致力於提供健康、創新且品質保證的產品，服務世界近三十年。",
    keywords:
      "寰宇食品, 創辦人謝揚松, 健康食品, 創新農產品, 無添加食品, 豆類加工",
    author: "寰宇食品",
    canonical: "https://www.example.com/about",
  };

  return (
    <>
      <Head>
        <title key="title">{aboutSEO.title}</title>
        <meta
          key="description"
          name="description"
          content={aboutSEO.description}
        />
        <meta name="keywords" content={aboutSEO.keywords} />
        <meta key="og_title" property="og:title" content={aboutSEO.title} />
        <meta
          key="og_image"
          property="og:image"
          content="/images/meta_pic.png"
        />
        <meta key="og_type" property="og:type" content="website" />
        <meta
          key="og_description"
          property="og:description"
          content={aboutSEO.description}
        />
        <link rel="icon" href="/images/logo/logo_1.png" sizes="32x32" />
      </Head>
      <Box bg="white">
        <Box pos="relative">
          <Image w="100%" src="/images/about/hero.jpg" />

          <Flex
            pos="absolute"
            top="0px"
            bottom="0px"
            left="0px"
            right="0px"
            w="100%"
            h="auto"
            zIndex="999"
          >
            <Flex flex="1" align="center" justify="center" p="12px">
              <Text
                fontSize={{ base: "24px", md: "36px" }}
                fontWeight="500"
                color="white"
              >
                {t("about_title")}
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box
          className="animate-item"
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
        <Box className="animate-item">
          <Flex bg="#FCFCFC" flexDir={{ base: "column", md: "row" }}>
            <Flex flex="1" justify="center">
              <Text
                maxH="500px"
                sx={{ writingMode: "vertical-rl" }}
                fontSize="16px"
                color="#313131"
                p="24px"
                fontWeight="500"
              >
                {t("about_info_1")}
              </Text>
            </Flex>
            <Flex
              mb={{ base: "-10px", md: "-50px" }}
              flex="1"
              zIndex="990"
              justify="center"
            >
              <Image
                w={{ base: "100%", md: "500px" }}
                src="/images/about/intro_figure.png"
              />
            </Flex>
          </Flex>
          <Box
            pos="relative"
            zIndex="99"
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
                fill="#56815E"
              ></path>
            </svg>
          </Box>
        </Box>
        <Flex
          className="animate-item"
          mt="-2px"
          bg="#56815E"
          flexDir={{ base: "column", md: "row" }}
        >
          <Box minH="400px">
            <Text
              maxW="600px"
              fontSize={{ base: "16px", md: "20px" }}
              color="white"
              fontWeight="500"
              p="24px"
            >
              {t("about_info_2")}
            </Text>
          </Box>
          <Flex align="end" justify="end" flex="1">
            <Image
              mr="20px"
              w={{ base: "100px", md: "200px" }}
              src="/images/about/intro_illust_2.png"
            />
          </Flex>
        </Flex>
        <Flex
          className="animate-item"
          bg="#FCFCFC"
          w="100%"
          flexDir={{ base: "column", md: "row" }}
        >
          <Flex flex="1" pt="20px" px="20px">
            <Image borderRadius="4px" src="/images/about/certification.jpg" />
          </Flex>
          <Flex flex="1" align="center">
            <Text
              fontSize="16px"
              color="#313131"
              pt="24px"
              px="24px"
              fontWeight="500"
            >
              {t("about_info_1_1")}
            </Text>
          </Flex>
        </Flex>
        <Flex
          className="animate-item"
          w="100%"
          flexDir={{ base: "column", md: "row-reverse" }}
          bg="#FCFCFC"
          pb="24px"
          pos="relative"
        >
          <Flex px="24px" justify="end" mt={{ base: "40px", md: "0px" }}>
            <Image
              w={{ base: "200px", md: "300px" }}
              borderRadius="4px"
              src="/images/item/fullitem.png"
            />
          </Flex>
          <Flex
            display={{ base: "none", md: "flex" }}
            flex="1"
            pos="absolute"
            top={{ base: "0px", md: "200px" }}
            left="40px"
            align="center"
          >
            <Text
              ml="40px"
              fontSize="16px"
              color="#313131"
              p="24px"
              fontWeight="500"
              maxW="500px"
            >
              {t("about_info_2")}
            </Text>
          </Flex>
        </Flex>
        <Flex
          className="animate-item"
          bg="#FCFCFC"
          display={{ base: "flex", md: "none" }}
          flex="1"
          left="40px"
          align="center"
        >
          <Text
            ml="20px"
            fontSize="16px"
            color="#313131"
            p="24px"
            fontWeight="500"
            maxW="500px"
          >
            {t("about_info_2")}
          </Text>
        </Flex>
        <Flex
          className="animate-item"
          pt="40px"
          bg="#FCFCFC"
          flex="1"
          justify="end"
          display={{ base: "flex", md: "flex" }}
        >
          <Image
            w={{ base: "300px", md: "50vw" }}
            borderRadius="4px"
            src="/images/about/love_figure_3-pc.jpg"
          />
        </Flex>
        <Box
          className="animate-item"
          pt="100px"
          bg="#FCFCFC"
          pb={{ base: "36px", md: "60px" }}
        >
          <Flex flex="1" p="20px">
            <Map nonce={nonce} />
            {/* <Image borderRadius="4px" src="/images/item/world.png" /> */}
          </Flex>
        </Box>
      </Box>
    </>
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
