import ItemSwiper from "@/component/ItemSwiper";
import {
  Box,
  Flex,
  Image,
  Text,
  Wrap,
  WrapItem,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import { useEffect, useState } from "react";

const IMAGE_LIST = [
  "/images/store/lead_slider_1_1.jpg",
  "/images/store/lead_slider_1_2.jpg",
  "/images/store/lead_slider_1_3.jpg",
  "/images/store/lead_slider_1_4.jpg",
  "/images/store/lead_slider_1_5.jpg",
  "/images/store/lead_slider_1_6.jpg",
  "/images/store/lead_slider_1_7.jpg",
];

const PRODUCT_LIST = [
  {
    id: 1,
    image: "/images/store/bean_1.jpg",
    title_image: "/images/store/ninjin.svg",
    price: "",
    description: "store_main_product_1",
  },
  {
    id: 2,
    image: "/images/store/bean_2.jpg",
    title_image: "/images/store/ninjin.svg",
    price: "",
    description: "store_main_product_2",
  },
  // {
  //   id: 3,
  //   image: "/images/store/mede_2a.jpg",
  //   title_image: "/images/store/ninjin.svg",
  //   price: "3KG $TWD 300",
  //   description:
  //     "「山」「畑」「海」の食材を食べて育ったとりから生まれた、リッチなたまごです。低カロリーかつ栄養満点！",
  // },
  // {
  //   id: 4,
  //   image: "/images/store/mede_2a.jpg",
  //   title_image: "/images/store/ninjin.svg",
  //   price: "3KG $TWD 300",
  //   description:
  //     "「山」「畑」「海」の食材を食べて育ったとりから生まれた、リッチなたまごです。低カロリーかつ栄養満点！",
  // },
  // {
  //   id: 5,
  //   image: "/images/store/mede_2a.jpg",
  //   title_image: "/images/store/ninjin.svg",
  //   price: "3KG $TWD 300",
  //   description:
  //     "「山」「畑」「海」の食材を食べて育ったとりから生まれた、リッチなたまごです。低カロリーかつ栄養満点！",
  // },
];

const items = {
  jar: {
    bean: [
      {
        id: "jar-bean-1",
        img: "/images/store/product/ex.jpg",
        name: "紫米紅豆(3KG)",
        price: "300",
        info: "紫米與紅豆的完美結合，口感豐富，適合各種甜品和湯品。",
      },
      {
        id: "jar-bean-2",
        img: "/images/store/product/ex.jpg",
        name: "紫米紅豆(2KG)",
        price: "300",
        info: "紫米與紅豆的完美結合，口感豐富，適合各種甜品和湯品。",
      },
      {
        id: "jar-bean-3",
        img: "/images/store/product/ex.jpg",
        name: "紫米紅豆(900G)",
        price: "300",
        info: "紫米與紅豆的完美結合，口感豐富，適合各種甜品和湯品。",
      },
      {
        id: "jar-bean-4",
        img: "/images/store/product/ex.jpg",
        name: "紫米紅豆(600G)",
        price: "300",
        info: "紫米與紅豆的完美結合，口感豐富，適合各種甜品和湯品。",
      },

      {
        id: "jar-bean-5",
        img: "/images/store/product/jar-bean-2_1.jpg",
        name: "紅豆(3KG)",
        price: "300",
        info: "紅豆是經典的甜品食材，口感綿密，味道濃郁。",
      },
      {
        id: "jar-bean-6",
        img: "/images/store/product/jar-bean-2_2.jpg",
        name: "紅豆(2KG)",
        price: "300",
        info: "紅豆是經典的甜品食材，口感綿密，味道濃郁。",
      },
      {
        id: "jar-bean-7",
        img: "/images/store/product/jar-bean-2_3.jpg",
        name: "紅豆(900G)",
        price: "300",
        info: "紅豆是經典的甜品食材，口感綿密，味道濃郁。",
      },
      {
        id: "jar-bean-8",
        img: "/images/store/product/jar-bean-2_4.jpg",
        name: "紅豆(600G)",
        price: "300",
        info: "紅豆是經典的甜品食材，口感綿密，味道濃郁。",
      },

      {
        id: "jar-bean-9",
        img: "/images/store/product/jar-bean-3.jpg",
        name: "綠豆(3KG)",
        price: "300",
        info: "綠豆富含蛋白質和纖維，適合製作各種健康料理。",
      },
      {
        id: "jar-bean-10",
        img: "/images/store/product/ex.jpg",
        name: "綠豆(2KG)",
        price: "300",
        info: "綠豆富含蛋白質和纖維，適合製作各種健康料理。",
      },
      {
        id: "jar-bean-11",
        img: "/images/store/product/ex.jpg",
        name: "綠豆(900G)",
        price: "300",
        info: "綠豆富含蛋白質和纖維，適合製作各種健康料理。",
      },
      {
        id: "jar-bean-12",
        img: "/images/store/product/ex.jpg",
        name: "綠豆(600G)",
        price: "300",
        info: "綠豆富含蛋白質和纖維，適合製作各種健康料理。",
      },
      {
        id: "jar-bean-13",
        img: "/images/store/product/jar-bean-4.jpg",
        name: "花豆(3KG)",
        price: "300",
        info: "花豆外觀美麗，口感濃郁，常用於甜品和湯品。",
      },
      {
        id: "jar-bean-14",
        img: "/images/store/product/ex.jpg",
        name: "花豆(2KG)",
        price: "300",
        info: "花豆外觀美麗，口感濃郁，常用於甜品和湯品。",
      },
      {
        id: "jar-bean-15",
        img: "/images/store/product/ex.jpg",
        name: "花豆(900G)",
        price: "300",
        info: "花豆外觀美麗，口感濃郁，常用於甜品和湯品。",
      },
      {
        id: "jar-bean-16",
        img: "/images/store/product/ex.jpg",
        name: "花豆(600G)",
        price: "300",
        info: "花豆外觀美麗，口感濃郁，常用於甜品和湯品。",
      },
    ],
    rhizome: [
      {
        id: "jar-rhizome-1",
        img: "/images/store/product/ex.jpg",
        name: "紫米(3KG)",
        price: "300",
        info: "富含營養的紫米，具有天然的甜味和獨特的口感。",
      },
      {
        id: "jar-rhizome-2",
        img: "/images/store/product/ex.jpg",
        name: "紫米(2KG)",
        price: "300",
        info: "富含營養的紫米，具有天然的甜味和獨特的口感。",
      },
      {
        id: "jar-rhizome-3",
        img: "/images/store/product/ex.jpg",
        name: "紫米(900G)",
        price: "300",
        info: "富含營養的紫米，具有天然的甜味和獨特的口感。",
      },
      {
        id: "jar-rhizome-4",
        img: "/images/store/product/ex.jpg",
        name: "紫米(600G)",
        price: "300",
        info: "富含營養的紫米，具有天然的甜味和獨特的口感。",
      },

      {
        id: "jar-rhizome-5",
        img: "/images/store/product/jar-rhizome-2_1.jpg",
        name: "花生(3KG)",
        price: "300",
        info: "香脆可口的花生，富含蛋白質和健康脂肪。",
      },
      {
        id: "jar-rhizome-6",
        img: "/images/store/product/jar-rhizome-2_2.jpg",
        name: "花生(2KG)",
        price: "300",
        info: "香脆可口的花生，富含蛋白質和健康脂肪。",
      },
      {
        id: "jar-rhizome-7",
        img: "/images/store/product/jar-rhizome-2_3.jpg",
        name: "花生(900G)",
        price: "300",
        info: "香脆可口的花生，富含蛋白質和健康脂肪。",
      },
      {
        id: "jar-rhizome-8",
        img: "/images/store/product/jar-rhizome-2_4.jpg",
        name: "花生(600G)",
        price: "300",
        info: "香脆可口的花生，富含蛋白質和健康脂肪。",
      },

      {
        id: "jar-rhizome-9",
        img: "/images/store/product/ex.jpg",
        name: "薏仁(3KG)",
        price: "300",
        info: "薏仁具有多種健康益處，是理想的養生食材。",
      },
      {
        id: "jar-rhizome-10",
        img: "/images/store/product/jar-rhizome-3_3.jpg",
        name: "薏仁(2KG)",
        price: "300",
        info: "薏仁具有多種健康益處，是理想的養生食材。",
      },
      {
        id: "jar-rhizome-11",
        img: "/images/store/product/jar-rhizome-3_2.jpg",
        name: "薏仁(900G)",
        price: "300",
        info: "薏仁具有多種健康益處，是理想的養生食材。",
      },
      {
        id: "jar-rhizome-12",
        img: "/images/store/product/jar-rhizome-3.jpg",
        name: "薏仁(600G)",
        price: "300",
        info: "薏仁具有多種健康益處，是理想的養生食材。",
      },

      {
        id: "jar-rhizome-13",
        img: "/images/store/product/jar-rhizome-4_1.jpg",
        name: "芋頭(1cm丁/2cm塊)(3KG)",
        price: "300",
        info: "切丁或切塊的芋頭，口感綿密，適合各種料理。",
      },
      {
        id: "jar-rhizome-14",
        img: "/images/store/product/jar-rhizome-4_2.jpg",
        name: "芋頭(1cm丁/2cm塊)(2KG)",
        price: "300",
        info: "切丁或切塊的芋頭，口感綿密，適合各種料理。",
      },
      {
        id: "jar-rhizome-15",
        img: "/images/store/product/jar-rhizome-4_3.jpg",
        name: "芋頭(1cm丁/2cm塊)(900G)",
        price: "300",
        info: "切丁或切塊的芋頭，口感綿密，適合各種料理。",
      },
      {
        id: "jar-rhizome-16",
        img: "/images/store/product/jar-rhizome-4_4.jpg",
        name: "芋頭(1cm丁/2cm塊)(600G)",
        price: "300",
        info: "切丁或切塊的芋頭，口感綿密，適合各種料理。",
      },

      {
        id: "jar-rhizome-17",
        img: "/images/store/product/ex.jpg",
        name: "紫/黃地瓜(1cm丁/2cm塊)(3kG)",
        price: "300",
        info: "富含維生素的地瓜，口感甜美，適合多種烹飪方式。",
      },
      {
        id: "jar-rhizome-18",
        img: "/images/store/product/jar-rhizome-5_1.jpg",
        name: "紫/黃地瓜(1cm丁/2cm塊)(2KG)",
        price: "300",
        info: "富含維生素的地瓜，口感甜美，適合多種烹飪方式。",
      },
      {
        id: "jar-rhizome-19",
        img: "/images/store/product/jar-rhizome-5_2.jpg",
        name: "紫/黃地瓜(1cm丁/2cm塊)(900G)",
        price: "300",
        info: "富含維生素的地瓜，口感甜美，適合多種烹飪方式。",
      },
      {
        id: "jar-rhizome-20",
        img: "/images/store/product/jar-rhizome-5_3.jpg",
        name: "紫/黃地瓜(1cm丁/2cm塊)(600G)",
        price: "300",
        info: "富含維生素的地瓜，口感甜美，適合多種烹飪方式。",
      },

      {
        id: "jar-rhizome-21",
        img: "/images/store/product/jar-rhizome-6.jpg",
        name: "燕麥粒(3KG)",
        price: "300",
        info: "燕麥粒富含纖維和營養，是健康的選擇。",
      },
      {
        id: "jar-rhizome-22",
        img: "/images/store/product/ex.jpg",
        name: "燕麥粒(2KG)",
        price: "300",
        info: "燕麥粒富含纖維和營養，是健康的選擇。",
      },
      {
        id: "jar-rhizome-23",
        img: "/images/store/product/ex.jpg",
        name: "燕麥粒(900G)",
        price: "300",
        info: "燕麥粒富含纖維和營養，是健康的選擇。",
      },
      {
        id: "jar-rhizome-24",
        img: "/images/store/product/ex.jpg",
        name: "燕麥粒(600G)",
        price: "300",
        info: "燕麥粒富含纖維和營養，是健康的選擇。",
      },
    ],
    other: [
      {
        id: "jar-other-1",
        img: "/images/store/product/ex.jpg",
        name: "銀耳(3KG)",
        price: "300",
        info: "銀耳富含膠質，常用於甜品，具有養生功效。",
      },
      {
        id: "jar-other-2",
        img: "/images/store/product/ex.jpg",
        name: "銀耳(2KG)",
        price: "300",
        info: "銀耳富含膠質，常用於甜品，具有養生功效。",
      },
      {
        id: "jar-other-3",
        img: "/images/store/product/ex.jpg",
        name: "銀耳(900G)",
        price: "300",
        info: "銀耳富含膠質，常用於甜品，具有養生功效。",
      },
      {
        id: "jar-other-4",
        img: "/images/store/product/ex.jpg",
        name: "銀耳(600G)",
        price: "300",
        info: "銀耳富含膠質，常用於甜品，具有養生功效。",
      },
    ],
  },
  pouch: {
    bean: [
      {
        id: "pouch-bean-1",
        img: "/images/store/product/ex.jpg",
        name: "紫米紅豆(1KG)",
        price: "300",
        info: "紫米與紅豆的完美結合，口感豐富，適合各種甜品和湯品。",
      },
      {
        id: "pouch-bean-2",
        img: "/images/store/product/ex.jpg",
        name: "紅豆(1KG)",
        price: "300",
        info: "紅豆是經典的甜品食材，口感綿密，味道濃郁。",
      },
      {
        id: "pouch-bean-3",
        img: "/images/store/product/ex.jpg",
        name: "綠豆(1KG)",
        price: "300",
        info: "綠豆富含蛋白質和纖維，適合製作各種健康料理。",
      },
      {
        id: "pouch-bean-4",
        img: "/images/store/product/ex.jpg",
        name: "花豆(1KG)",
        price: "300",
        info: "花豆外觀美麗，口感濃郁，常用於甜品和湯品。",
      },
    ],
    rhizome: [
      {
        id: "pouch-rhizome-1",
        img: "/images/store/product/ex.jpg",
        name: "紫米(1KG)",
        price: "300",
        info: "富含營養的紫米，具有天然的甜味和獨特的口感。",
      },
      {
        id: "pouch-rhizome-2",
        img: "/images/store/product/ex.jpg",
        name: "花生(1KG)",
        price: "300",
        info: "香脆可口的花生，富含蛋白質和健康脂肪。",
      },
      {
        id: "pouch-rhizome-3",
        img: "/images/store/product/ex.jpg",
        name: "薏仁(1KG)",
        price: "300",
        info: "薏仁具有多種健康益處，是理想的養生食材。",
      },
      {
        id: "pouch-rhizome-4",
        img: "/images/store/product/ex.jpg",
        name: "芋頭(1cm丁/2cm塊)(1KG)",
        price: "300",
        info: "切丁或切塊的芋頭，口感綿密，適合各種料理。",
      },
      {
        id: "pouch-rhizome-5",
        img: "/images/store/product/ex.jpg",
        name: "紫/黃地瓜(1cm丁/2cm塊)(1KG)",
        price: "300",
        info: "富含維生素的地瓜，口感甜美，適合多種烹飪方式。",
      },
      {
        id: "pouch-rhizome-6",
        img: "/images/store/product/ex.jpg",
        name: "燕麥粒(1KG)",
        price: "300",
        info: "燕麥粒富含纖維和營養，是健康的選擇。",
      },
    ],
    jelly: [
      {
        id: "pouch-jelly-1",
        img: "/images/store/product/ex.jpg",
        name: "嫩仙草凍(1KG)",
        price: "300",
        info: "嫩滑的仙草凍，口感細膩。",
      },
      {
        id: "pouch-jelly-2",
        img: "/images/store/product/ex.jpg",
        name: "愛玉凍(1KG)",
        price: "300",
        info: "清爽的愛玉凍，口感滑順。",
      },
      {
        id: "pouch-jelly-3",
        img: "/images/store/product/ex.jpg",
        name: "荔枝凍(1KG)",
        price: "300",
        info: "香甜的荔枝凍，口感滑順。",
      },
      {
        id: "pouch-jelly-4",
        img: "/images/store/product/ex.jpg",
        name: "烏龍茶凍(1KG)",
        price: "300",
        info: "淡雅的烏龍茶凍，口感清新。",
      },
      {
        id: "pouch-jelly-5",
        img: "/images/store/product/ex.jpg",
        name: "胭脂茶凍(1KG)",
        price: "300",
        info: "鮮豔的胭脂茶凍，口感滑順。",
      },
    ],
    jam: [
      {
        id: "pouch-jam-1",
        img: "/images/store/product/ex.jpg",
        name: "芒果粒醬(1KG)",
        price: "300",
        info: "香甜的芒果粒醬，適合搭配各種甜品。",
      },
      {
        id: "pouch-jam-2",
        img: "/images/store/product/ex.jpg",
        name: "草莓醬(1KG)",
        price: "300",
        info: "酸甜的草莓醬，適合搭配吐司和甜品。",
      },
      {
        id: "pouch-jam-3",
        img: "/images/store/product/ex.jpg",
        name: "鳳梨醬(1KG)",
        price: "300",
        info: "香甜的鳳梨醬，適合搭配吐司和甜品。",
      },
      {
        id: "pouch-jam-4",
        img: "/images/store/product/ex.jpg",
        name: "火龍果醬(1KG)",
        price: "300",
        info: "獨特的火龍果醬，風味獨特。",
      },
      {
        id: "pouch-jam-5",
        img: "/images/store/product/ex.jpg",
        name: "打碎荔枝醬(1KG)",
        price: "300",
        info: "清香的打碎荔枝醬，適合搭配甜品。",
      },
      {
        id: "pouch-jam-6",
        img: "/images/store/product/ex.jpg",
        name: "紅柚醬(1KG)",
        price: "300",
        info: "酸甜的紅柚醬，適合搭配各種甜品。",
      },
    ],
    juice: [
      {
        id: "pouch-juice-1",
        img: "/images/store/product/ex.jpg",
        name: "黑糖冬瓜露(1KG)",
        price: "300",
        info: "濃郁的黑糖冬瓜露，口感甜美，適合夏日消暑。",
      },
      {
        id: "pouch-juice-2",
        img: "/images/store/product/ex.jpg",
        name: "燕麥豆奶(1KG)",
        price: "300",
        info: "營養豐富的燕麥豆奶，口感滑順。",
      },
      {
        id: "pouch-juice-3",
        img: "/images/store/product/ex.jpg",
        name: "仙草汁(1KG)",
        price: "300",
        info: "清涼的仙草汁，消暑解渴。",
      },
    ],
    other: [
      {
        id: "pouch-other-1",
        img: "/images/store/product/ex.jpg",
        name: "水煮桂竹筍(1KG)",
        price: "300",
        info: "清爽的水煮桂竹筍，口感脆嫩。",
      },
      {
        id: "pouch-other-2",
        img: "/images/store/product/ex.jpg",
        name: "滷花生(1KG)",
        price: "300",
        info: "味道濃郁的滷花生，是理想的小吃。",
      },
      {
        id: "pouch-other-3",
        img: "/images/store/product/ex.jpg",
        name: "銀耳(1KG)",
        price: "300",
        info: "銀耳富含膠質，常用於甜品，具有養生功效。",
      },
    ],
  },
};

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
        w={{ base: "4200px", md: "5600px" }}
        overflow="hidden"
        direction="row"
        animation={animation}
      >
        {IMAGE_LIST.map((product, index) => {
          return (
            <Box
              key={index}
              w={{ base: "300px", md: "400px" }}
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
              w={{ base: "300px", md: "400px" }}
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
  const [selectedItem, setSelectedItem] = useState("All");
  const [selectedResult, setSelectedResult] = useState([]);

  useEffect(() => {
    if (selectedItem === "All") {
      setSelectedResult([
        ...items.jar.bean,
        ...items.jar.rhizome,
        ...items.jar.other,
        ...items.pouch.bean,
        ...items.pouch.rhizome,
        ...items.pouch.jelly,
        ...items.pouch.jam,
        ...items.pouch.juice,
        ...items.pouch.other,
      ]);
    } else if (selectedItem === "Jar") {
      setSelectedResult([
        ...items.jar.bean,
        ...items.jar.rhizome,
        ...items.jar.other,
      ]);
    } else if (selectedItem === "Pouch") {
      setSelectedResult([
        ...items.pouch.bean,
        ...items.pouch.rhizome,
        ...items.pouch.jelly,
        ...items.pouch.jam,
        ...items.pouch.juice,
        ...items.pouch.other,
      ]);
    } else {
      const key1 = selectedItem.split("-")[0];
      const key2 = selectedItem.split("-")[1];

      setSelectedResult(items[key1][key2]);
    }
  }, [selectedItem]);

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

  const businessSEO = {
    title: "餐飲業務專區 - 寰宇食品",
    description:
      "寰宇食品為餐飲業提供多元包裝與穩定品質的健康農產品，包含各類豆類、芋頭、地瓜等。有效期限可保存2年，適合各行各業使用。",
    keywords:
      "寰宇食品, 餐飲業務, 健康食品, 創新農產品, 豆類加工, 多元包裝, 穩定品質",
    author: "寰宇食品",
    canonical: "https://www.example.com/business",
  };
  return (
    <>
      <Head>
        <title key="title">{businessSEO.title}</title>
        <meta
          key="description"
          name="description"
          content={businessSEO.description}
        />
        <meta name="keywords" content={businessSEO.keywords} />
        <meta key="og_title" property="og:title" content={businessSEO.title} />
        <meta
          key="og_image"
          property="og:image"
          content="/images/meta_pic.png"
        />
        <meta key="og_type" property="og:type" content="website" />
        <meta
          key="og_description"
          property="og:description"
          content={businessSEO.description}
        />
        <link rel="icon" href="/images/logo/logo_1.png" sizes="32x32" />
      </Head>
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
            {t("our_products")}
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
                      {t(product.description)}
                    </Text>

                    <Flex
                      mt="20px"
                      w="full"
                      align="center"
                      justify="space-between"
                    >
                      <Text>{product.price}</Text>
                      {/* <Flex
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
                    </Flex> */}
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

        <Flex
          bg="white"
          ml={{ base: "20px", md: "80px" }}
          mr={{ base: "20px", md: "40px" }}
          py={{ base: "20px", md: "40px" }}
          flexDir={{ base: "column", md: "row" }}
        >
          <Box w="300px" minW="300px" mr="20px">
            <Text
              p="5px"
              fontSize="20px"
              lineHeight="28px"
              color="#313131"
              fontWeight="600"
              cursor="pointer"
              onClick={() => setSelectedItem("All")}
              bg={selectedItem === "All" ? "#F7F7F7" : "white"}
            >
              {t("store_category")}
            </Text>
            <Box mt="10px">
              <Text
                p="5px"
                ml="20px"
                fontSize="20px"
                lineHeight="28px"
                color="#313131"
                fontWeight="500"
                cursor="pointer"
                bg={selectedItem === "Jar" ? "#F7F7F7" : "white"}
                onClick={() => setSelectedItem("Jar")}
              >
                {t("store_category_jar")}
              </Text>
              <Box ml="40px" mt="5px">
                <Text
                  p="5px"
                  cursor="pointer"
                  bg={selectedItem === "jar-bean" ? "#F7F7F7" : "white"}
                  onClick={() => setSelectedItem("jar-bean")}
                >
                  {t("store_category_bean")}({items.jar.bean.length})
                </Text>
                <Text
                  p="5px"
                  cursor="pointer"
                  bg={selectedItem === "jar-rhizome" ? "#F7F7F7" : "white"}
                  onClick={() => setSelectedItem("jar-rhizome")}
                >
                  {t("store_category_rhizome")}({items.jar.rhizome.length})
                </Text>
                <Text
                  p="5px"
                  cursor="pointer"
                  bg={selectedItem === "jar-other" ? "#F7F7F7" : "white"}
                  onClick={() => setSelectedItem("jar-other")}
                >
                  {t("store_category_other")}({items.jar.other.length})
                </Text>
              </Box>
            </Box>
            <Box mt="10px">
              <Text
                p="5px"
                ml="20px"
                fontSize="20px"
                lineHeight="28px"
                color="#313131"
                fontWeight="500"
                cursor="pointer"
                bg={selectedItem === "Pouch" ? "#F7F7F7" : "white"}
                onClick={() => setSelectedItem("Pouch")}
              >
                {t("store_category_pouch")}
              </Text>
              <Box ml="40px" mt="5px">
                <Text
                  p="5px"
                  cursor="pointer"
                  bg={selectedItem === "pouch-bean" ? "#F7F7F7" : "white"}
                  onClick={() => setSelectedItem("pouch-bean")}
                >
                  {t("store_category_bean")}({items.pouch.bean.length})
                </Text>
                <Text
                  p="5px"
                  cursor="pointer"
                  bg={selectedItem === "pouch-rhizome" ? "#F7F7F7" : "white"}
                  onClick={() => setSelectedItem("pouch-rhizome")}
                >
                  {t("store_category_rhizome")}({items.pouch.rhizome.length})
                </Text>
                <Text
                  p="5px"
                  cursor="pointer"
                  bg={selectedItem === "pouch-jelly" ? "#F7F7F7" : "white"}
                  onClick={() => setSelectedItem("pouch-jelly")}
                >
                  {t("store_category_jelly")}({items.pouch.jelly.length})
                </Text>
                <Text
                  p="5px"
                  cursor="pointer"
                  bg={selectedItem === "pouch-jam" ? "#F7F7F7" : "white"}
                  onClick={() => setSelectedItem("pouch-jam")}
                >
                  {t("store_category_jam")}({items.pouch.jam.length})
                </Text>
                <Text
                  p="5px"
                  cursor="pointer"
                  bg={selectedItem === "pouch-juice" ? "#F7F7F7" : "white"}
                  onClick={() => setSelectedItem("pouch-juice")}
                >
                  {t("store_category_juice")}({items.pouch.juice.length})
                </Text>
                <Text
                  p="5px"
                  cursor="pointer"
                  bg={selectedItem === "pouch-other" ? "#F7F7F7" : "white"}
                  onClick={() => setSelectedItem("pouch-other")}
                >
                  {t("store_category_other")}({items.pouch.other.length})
                </Text>
              </Box>
            </Box>
          </Box>

          <Wrap maxW="">
            {selectedResult.map((product, index) => {
              return (
                <WrapItem key={product.id}>
                  <Box
                    key={product.id}
                    w={{ base: "320px", md: "300px" }}
                    h="350px"
                    m="20px"
                    bg="#F7F7F7"
                    borderRadius="8px"
                  >
                    <Image
                      src={product.img}
                      w="100%"
                      h="200px"
                      borderRadius="8px 8px 0px 0px"
                    />
                    <Flex flexDir="column" p="16px" h="100%">
                      <Text fontSize="20px" fontWeight="500">
                        {t(product.id)}
                      </Text>
                      <Text fontSize="16px" color="#313131">
                        {t(`${product.id}_info`)}
                      </Text>
                      {/* <Flex justify="space-between" align="center" mt="10px">
                        <Text fontSize="16px" color="#313131">
                          $TWD {product.price}
                        </Text>
                      </Flex> */}
                    </Flex>
                  </Box>
                </WrapItem>
              );
            })}
          </Wrap>
        </Flex>
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

export default Store;
