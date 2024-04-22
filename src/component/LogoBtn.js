import { Box, Flex, Image, useBreakpoint } from "@chakra-ui/react";
import { useRouter } from "next/router";

const LogoBtn = () => {
  const router = useRouter();
  const isMdUp = useBreakpoint({ base: false, md: true });

  return (
    <Flex
      zIndex="9970"
      _hover={{ transform: "rotate(8deg)", opacity: 0.6 }}
      cursor="pointer"
      onClick={() => {
        router.push("/");
      }}
    >
      <Image
        src={"/images/logo/logo_1.png"}
        h={{ base: "80px", md: "120px" }}
      />
    </Flex>
  );
};
export default LogoBtn;
