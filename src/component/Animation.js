import { Box } from "@chakra-ui/react";
import { Bean } from "./Bean";
import styled, { keyframes } from "styled-components";

const rotate = (startDeg) => keyframes`
  0% {
    transform: rotate(-${startDeg}deg);
  }
  50% {
    transform: rotate(${startDeg}deg);
  }
  100% {
    transform: rotate(-${startDeg}deg);
  }
`;

// 使用 styled-components 創建一個帶動畫的 Box 容器
const AnimatedBean = styled(Box)`
  display: inline-block;
  animation: ${(props) => rotate(props.startDeg || 45)}
    ${(props) => props.second || 3}s infinite;
`;

const Animation = () => {
  return (
    <Box zIndex="99">
      <Box
        zIndex="99"
        w="100%"
        h="600px"
        pos="relative"
        display={{ base: "none", md: "block" }}
      >
        {/* left */}
        <>
          <AnimatedBean
            pos="absolute"
            top="10px"
            left="-40px"
            transform="rotate(45deg)"
            second={3}
          >
            <Bean w="110px" />
          </AnimatedBean>
          <AnimatedBean
            pos="absolute"
            top="140px"
            left="0px"
            transform="rotate(-30deg)"
            second={2}
          >
            <Bean w="100px" />
          </AnimatedBean>
          <AnimatedBean
            pos="absolute"
            top="260px"
            left="-30px"
            transform="rotate(45deg)"
            second={4}
          >
            <Bean w="120px" />
          </AnimatedBean>
          <AnimatedBean
            pos="absolute"
            top="400px"
            left="10px"
            transform="rotate(-10deg)"
            second={3.5}
          >
            <Bean w="100px" />
          </AnimatedBean>
          <AnimatedBean
            pos="absolute"
            top="500px"
            left="-10px"
            transform="rotate(50deg)"
            second={2.5}
          >
            <Bean w="100px" />
          </AnimatedBean>
        </>

        {/* right */}
        <>
          <AnimatedBean
            pos="absolute"
            top="10px"
            right="0px"
            transform="rotate(-30deg)"
            second={3}
          >
            <Bean w="110px" />
          </AnimatedBean>
          <AnimatedBean
            pos="absolute"
            top="140px"
            right="-20px"
            transform="rotate(45deg)"
            second={2}
          >
            <Bean w="120px" />
          </AnimatedBean>
          <AnimatedBean
            pos="absolute"
            top="260px"
            right="-10px"
            transform="rotate(10deg)"
            second={4}
          >
            <Bean w="100px" />
          </AnimatedBean>
          <AnimatedBean
            pos="absolute"
            top="400px"
            right="-30px"
            transform="rotate(-10deg)"
            second={3.5}
          >
            <Bean w="90px" />
          </AnimatedBean>
          <AnimatedBean
            pos="absolute"
            top="500px"
            right="-10px"
            transform="rotate(50deg)"
            second={2.5}
          >
            <Bean w="120px" />
          </AnimatedBean>
        </>
      </Box>
      <Box
        zIndex="99"
        w="100%"
        h="600px"
        pos="relative"
        display={{ base: "block", md: "none" }}
      >
        {/* left */}
        <>
          <AnimatedBean
            pos="absolute"
            top="10px"
            left="-10px"
            transform="rotate(45deg)"
            second={3}
          >
            <Bean w="60px" />
          </AnimatedBean>
          <AnimatedBean
            pos="absolute"
            top="100px"
            left="0px"
            transform="rotate(-30deg)"
            second={2}
          >
            <Bean w="50px" />
          </AnimatedBean>
          {/* <AnimatedBean
            pos="absolute"
            top="200px"
            left="-30px"
            transform="rotate(45deg)"
            second={4}
          >
            <Bean w="80px" />
          </AnimatedBean> */}
          {/* <AnimatedBean
            pos="absolute"
            top="360px"
            left="0px"
            transform="rotate(-10deg)"
            second={3.5}
          >
            <Bean w="60px" />
          </AnimatedBean> */}
        </>

        {/* right */}
        <>
          <AnimatedBean
            pos="absolute"
            top="10px"
            right="0px"
            transform="rotate(-30deg)"
            second={3}
          >
            <Bean w="50px" />
          </AnimatedBean>
          <AnimatedBean
            pos="absolute"
            top="140px"
            right="-20px"
            transform="rotate(45deg)"
            second={2}
          >
            <Bean w="80px" />
          </AnimatedBean>
          {/* <AnimatedBean
            pos="absolute"
            top="260px"
            right="-10px"
            transform="rotate(-30deg)"
            second={4}
          >
            <Bean w="60px" />
          </AnimatedBean> */}
          {/* <AnimatedBean
            pos="absolute"
            top="380px"
            right="-30px"
            transform="rotate(-10deg)"
            second={3.5}
          >
            <Bean w="80px" />
          </AnimatedBean> */}
        </>
      </Box>
    </Box>
  );
};
export default Animation;
