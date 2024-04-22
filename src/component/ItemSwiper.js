import { Box, Image, Link } from "@chakra-ui/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const IMAGE_LIST = [
  {
    id: 1,
    name: "swiper_1",
  },
  {
    id: 2,
    name: "swiper_2",
  },
  {
    id: 3,
    name: "swiper_3",
  },
  {
    id: 4,
    name: "swiper_4",
  },
  {
    id: 5,
    name: "swiper_5",
  },
  {
    id: 6,
    name: "swiper_6",
  },
  {
    id: 7,
    name: "swiper_7",
  },
  {
    id: 8,
    name: "swiper_8",
  },
  {
    id: 9,
    name: "swiper_9",
  },
];

const ItemSwiper = () => {
  return (
    <Swiper
      loop={true}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <Box>
        {IMAGE_LIST.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Image
                w="full"
                src={`/images/swiper/${item.name + ".jpeg"}`}
                alt="image"
              />
            </SwiperSlide>
          );
        })}
      </Box>
    </Swiper>
  );
};
export default ItemSwiper;
