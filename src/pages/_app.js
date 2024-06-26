// import Footer from "@/component/Footer";
import Footer from "@/component/Footer";
import Nav from "@/component/Nav";
import theme from "@/lib/theme";
import "@/styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "@/styles/fonts.css"; // 調整路徑以符合你的檔案結構

import nextI18NextConfig from "../../next-i18next.config";
import { appWithTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PageLoading from "@/component/PageLoading";

const App = ({ Component, pageProps }) => {
  const [isContactUsOpen, setIsContactUsOpen] = useState(false);

  const [nonce, setNonce] = useState();

  useEffect(() => {
    setNonce(`nonce-${Math.random().toString(36).substr(2, 9)}`);
  }, []);

  const siteSEO = {
    title: "寰宇食品-天下第一豆",
    description:
      "寰宇食品致力於提供健康、創新且品質保證的農產品，包含各類豆類、芋頭、地瓜等。堅持不添加任何食品添加物及防腐劑，產地直銷，當天現切現煮，完全新鮮。",
    keywords:
      "寰宇食品, 健康食品, 創新農產品, 無添加食品, 產地直銷, 台灣農產品, 豆類加工, 新鮮食材",
    author: "寰宇食品",
  };

  return (
    <>
      <Head>
        <title key="title">{siteSEO.title}</title>
        <meta
          key="description"
          name="description"
          content={siteSEO.description}
        />
        <meta name="keywords" content={siteSEO.keywords} />
        <meta key="og_title" property="og:title" content={siteSEO.title} />
        <meta
          key="og_image"
          property="og:image"
          content="/images/meta_pic.png"
        />
        <meta key="og_type" property="og:type" content="website" />
        <meta
          key="og_description"
          property="og:description"
          content={siteSEO.description}
        />
        <link rel="icon" href="/images/logo/logo_1.png" sizes="32x32" />
      </Head>
      <Box bg="#FCFCFC" minH="100vh">
        <ChakraProvider theme={theme}>
          <Box overflowY={"scroll"}>
            <PageLoading />
            <Nav
              isContactUsOpen={isContactUsOpen}
              setIsContactUsOpen={setIsContactUsOpen}
            />
            <Component
              {...pageProps}
              nonce={nonce}
              isContactUsOpen={isContactUsOpen}
              setIsContactUsOpen={setIsContactUsOpen}
            />
            <Footer
              isContactUsOpen={isContactUsOpen}
              setIsContactUsOpen={setIsContactUsOpen}
            />
          </Box>
        </ChakraProvider>
      </Box>
    </>
  );
};

export async function getStaticProps(context) {
  const { res, locale } = context;
  res.setHeader("Cache-Control", "no-store");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default appWithTranslation(App, nextI18NextConfig);
