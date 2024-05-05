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
  return (
    <>
      <Head>
        <title key="title">寰宇食品-天下第一豆</title>
        {/* <meta
          key="description"
          name="description"
          content="MRKT5 成立於 2016 年，是專為現代忙碌人所開啟的感官概念店，同時也提供藝術聚會的場所。 空間採取預約制與線上購物平台，提供生活、設計、藝術和時尚等多元服務，打造線上與線下完善服務的精品店。獨創性的系列品牌與產品，從日常用品、護膚保養品到食品，以啟發感官為概念出發——聽覺、視覺、嗅覺、味覺和紋身。"
        /> */}
        {/* <meta key="og_title" property="og:title" content="MRKT5" /> */}
        <meta
          key="og_image"
          property="og:image"
          content="/images/meta_pic.png"
        />
        {/* <meta
          key="og_url"
          property="og:url"
          content=""
        /> */}
        <meta key="og_type" property="og:type" content="website" />
        {/* <meta
          key="og_description"
          property="og:description"
          content="MRKT5 成立於 2016 年，是專為現代忙碌人所開啟的感官概念店，同時也提供藝術聚會的場所。 空間採取預約制與線上購物平台，提供生活、設計、藝術和時尚等多元服務，打造線上與線下完善服務的精品店。獨創性的系列品牌與產品，從日常用品、護膚保養品到食品，以啟發感官為概念出發——聽覺、視覺、嗅覺、味覺和紋身。"
        /> */}
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

export async function getServerSideProps(context) {
  const { res, locale } = context;
  res.setHeader("Cache-Control", "no-store");
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default appWithTranslation(App, nextI18NextConfig);
