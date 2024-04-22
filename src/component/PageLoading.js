import Router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Spinner,
  Flex,
  Box,
  Stack,
  Image,
  keyframes,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const fadeInOut = keyframes`
    from, to { opacity: 0.2; }
    50% { opacity: 1; }
  `;
function PageLoading() {
  const { t } = useTranslation("common");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    // 確保網頁加載完成後關閉加載畫面
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 假設加載時間至少 500 毫秒

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setTimeout(() => setLoading(false), 500);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <Flex
      pointerEvents={loading ? "visible" : "none"}
      zIndex="10000"
      justify="center"
      align="center"
      pos="fixed"
      left="0"
      top="0"
      w="100vw"
      h="100vh"
      bgColor="#fff"
      opacity={loading ? 1 : 0}
      transition={!loading ? "0.5s ease" : ""}
    >
      <Stack
        cursor="pointer"
        spacing={"12px"}
        align="center"
        justify="center"
        w="50%"
        maxW="150px"
      >
        <Flex>
          <Text
            sx={{ writingMode: "vertical-rl" }}
            mb="24px"
            fontSize="18px"
            mt="60px"
          >
            {t("loading_text_2")}
          </Text>
          <Text sx={{ writingMode: "vertical-rl" }} mb="24px" fontSize="18px">
            {t("loading_text_1")}
          </Text>
        </Flex>
        <Box
          width={{ base: "170px", lg: "243px" }}
          animation={`${fadeInOut} 2.5s ease-in-out infinite`}
        >
          <Image src={`/images/logo/logo_1.png`} alt="Logo" />
        </Box>
      </Stack>
    </Flex>
  );
}

export default PageLoading;
