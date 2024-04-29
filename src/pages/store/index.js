import ItemSwiper from "@/component/ItemSwiper";
import {
  Box,
  Flex,
  Image,
  Text,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect } from "react";

const IMAGE_LIST = [
  "/images/store/lead_slider_1_1.png",
  "/images/store/lead_slider_1_2.png",
  "/images/store/lead_slider_2_1.png",
  "/images/store/lead_slider_2_2.png",
  "/images/store/lead_slider_1_1.png",
  "/images/store/lead_slider_1_2.png",
  "/images/store/lead_slider_2_1.png",
  "/images/store/lead_slider_2_2.png",
];

const PRODUCT_LIST = [
  {
    id: 1,
    image: "/images/store/mede_2a.jpg",
    title_image: "/images/store/ninjin.svg",
    description:
      "「山」「畑」「海」の食材を食べて育ったとりから生まれた、リッチなたまごです。低カロリーかつ栄養満点！",
  },
  {
    id: 2,
    image: "/images/store/mede_2a.jpg",
    title_image: "/images/store/ninjin.svg",
    description:
      "「山」「畑」「海」の食材を食べて育ったとりから生まれた、リッチなたまごです。低カロリーかつ栄養満点！",
  },
  {
    id: 3,
    image: "/images/store/mede_2a.jpg",
    title_image: "/images/store/ninjin.svg",
    description:
      "「山」「畑」「海」の食材を食べて育ったとりから生まれた、リッチなたまごです。低カロリーかつ栄養満点！",
  },
  {
    id: 4,
    image: "/images/store/mede_2a.jpg",
    title_image: "/images/store/ninjin.svg",
    description:
      "「山」「畑」「海」の食材を食べて育ったとりから生まれた、リッチなたまごです。低カロリーかつ栄養満点！",
  },
  {
    id: 5,
    image: "/images/store/mede_2a.jpg",
    title_image: "/images/store/ninjin.svg",
    description:
      "「山」「畑」「海」の食材を食べて育ったとりから生まれた、リッチなたまごです。低カロリーかつ栄養満点！",
  },
];

const CarouselItem = () => {
  const moveup = keyframes`
0% { transform: translateX(0%); }
100% { transform: translateX(-50%); }
`;

  const preferReducedMotion = usePrefersReducedMotion();
  const animation = preferReducedMotion
    ? undefined
    : `${moveup} 60s linear 0s infinite`;

  return (
    <Box overflow="hidden" zIndex="9950" pos="relative" mb="-20px">
      <Flex
        w={{ base: "1600px", md: "1600px" }}
        overflow="hidden"
        direction="row"
        animation={animation}
      >
        {IMAGE_LIST.map((product, index) => {
          return (
            <Box
              key={index}
              w={{ base: "200px", md: "200px" }}
              h="100%"
              border="4px solid white"
            >
              <Image borderRadius="8px" src={product} w="100%" />
            </Box>
          );
        })}
        {IMAGE_LIST.map((product, index) => {
          return (
            <Box
              key={index}
              w={{ base: "200px", md: "200px" }}
              h="100%"
              border="4px solid white"
            >
              <Image w="100%" borderRadius="8px" src={product} />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

const Store = ({ isContactUsOpen, setIsContactUsOpen }) => {
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
  return (
    <Box>
      <Box pos="relative" className="animate-item">
        <Image w="100%" src="/images/store/hero-pc.jpg" />

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
              {t("index_title")}
            </Text>
          </Flex>
        </Flex>
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
        pb={{ base: "300px", md: "400px" }}
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

        <Text
          fontSize="36px"
          textAlign="center"
          mt={{ base: "100px", md: "200px" }}
        >
          {t("index_title")}
        </Text>
        <Flex justify="center">
          <Text
            mt="40px"
            fontSize="24px"
            textAlign="center"
            maxW={{ base: "350px", md: "400px" }}
          >
            {t("index_info")}
          </Text>
        </Flex>

        <Flex w="full" pos="absolute" bottom={{ base: "40px", md: "100px" }}>
          <CarouselItem />
          {/* <Image
            ml="40px"
            src="/images/store/lead_slider_1_1.png"
            w={{ base: "60px", md: "200px" }}
          />
          <Flex flex="1"></Flex>
          <Image
            mr="40px"
            src="/images/store/lead_slider_2_1.png"
            w={{ base: "60px", md: "200px" }}
          /> */}
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
            fill="white"
          ></path>
        </svg>
      </Box>
      <Box bg="white" mt="-1px">
        {PRODUCT_LIST.map((product, index) => {
          return (
            <Flex
              key={product.id}
              className="animate-item"
              w="full"
              flexDir={{
                base: "column",
                md: index % 2 === 0 ? "row" : "row-reverse",
              }}
            >
              <Flex p="20px">
                <Image
                  border="4px solid white"
                  borderRadius="4px"
                  src={product.image}
                  w={{ base: "100%", md: "50vw" }}
                />
              </Flex>
              <Flex flex="1" align="center" justify="center" p="24px">
                <Flex
                  w="100%"
                  maxW="400px"
                  flexDir="column"
                  align="center"
                  justify="center"
                >
                  <Image src={product.title_image} w="100px" />
                  <Text
                    mt="24px"
                    fontSize="24px"
                    fontWeight="500"
                    textAlign="center"
                  >
                    {product.description}
                  </Text>

                  <Flex w="full" align="center" justify="space-between">
                    <Text>6個入 ¥430(税込)</Text>
                    <Flex
                      w="150px"
                      h="40px"
                      align="center"
                      justify="center"
                      bg="#CE0000"
                      my="48px"
                      borderRadius="25px"
                      cursor="pointer"
                      _hover={{ bg: "#CE0000" }}
                      onClick={() => {
                        setIsContactUsOpen(true);
                      }}
                    >
                      <Text fontWeight="500" fontSize="20px" color="white">
                        {t("nav_contact")}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          );
        })}
      </Box>

      {/* <Flex
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
      </Flex> */}
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
