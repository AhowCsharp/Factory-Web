import {
  Box,
  CloseButton,
  Flex,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const ContactUsDrawer = ({ isContactUsOpen, setIsContactUsOpen }) => {
  const { t } = useTranslation("common");
  const [showContent, setShowContent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: "",
    isCheck: false,
  });

  useEffect(() => {
    if (isContactUsOpen) {
      // 延遲設置內容顯示，等待側拉菜單動畫完成
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 200); // 與側拉菜單動畫持續時間相同

      return () => clearTimeout(timer);
    } else {
      setShowContent(false);
    }
  }, [isContactUsOpen]);

  const submit = () => {
    // 檢查email格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("請填寫正確的email格式");
      return;
    }
    if (
      !formData.name ||
      !formData.email ||
      !formData.content ||
      !formData.isCheck
    ) {
      alert("請填寫必填欄位");
      return;
    }
    const data = {
      name: formData.name,
      email: formData.email,
      content: formData.content,
    };

    // api.postContactUs(data).then((res) => {
    //   if (res.status == 200) {
    //     alert("寄送成功");
    //     setFormData({
    //       name: "",
    //       email: "",
    //       content: "",
    //       isCheck: false,
    //     });
    //     setIsContactUsOpen(false);
    //   }
    // });
  };

  return (
    <>
      {isContactUsOpen && (
        <Box
          bg={{ base: "#000000", md: "none" }}
          opacity="0.8"
          zIndex="9998"
          w="100%"
          h="100%"
          pos="absolute"
          onClick={() => {
            setIsContactUsOpen(false);
          }}
        ></Box>
      )}
      <Box
        position="fixed"
        right={isContactUsOpen ? "0" : "-100%"}
        top="0"
        w={{ base: "370px", md: "775px" }}
        h="100vh"
        bg="rgb(206, 185, 207)"
        zIndex="9999"
        transition="right 0.3s ease-in-out, opacity 0.3s ease-in-out"
        transitionDelay={!isContactUsOpen ? "0.3s" : "0"}
        opacity="1"
        overflowY="scroll"
      >
        <Flex justify="end">
          <CloseButton
            justify="end"
            m="20px"
            w="24px"
            h="24px"
            _hover={{ bg: "none" }}
            onClick={() => {
              setIsContactUsOpen(false);
            }}
          />
        </Flex>
        <Box
          px={{ base: "20px", md: "170px" }}
          opacity={isContactUsOpen ? "1" : "0"}
          transition="opacity 0.3s ease-in-out"
          transitionDelay={isContactUsOpen ? "0.3s" : "0"}
        >
          <Flex
            flexDir="column"
            mt="56px"
            justify="center"
            justifyContent="center"
          >
            <Text
              color="#000000"
              justifySelf="center"
              textAlign="center"
              fontSize="24px"
              lineHeight="26px"
              fontWeight="600"
            >
              Contact us
            </Text>
            <Text
              color="#000000"
              mt="30px"
              mx="15px"
              textAlign="center"
              fontSize="14px"
              lineHeight="21px"
              fontWeight="normal"
            >
              If you have any inquiries or collaboration proposals, please feel
              free to get in touch with us. We look forward to connecting with
              you.
            </Text>
            <Text
              color="#000000"
              mt="20px"
              textAlign="center"
              fontSize="14px"
              lineHeight="21px"
              fontWeight="normal"
            >
              如果您有任何疑問或合作意向，請隨時與我們聯繫，我們期待與您交流。
            </Text>
            <Box>
              <Text
                color="#000000"
                mt="30px"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="medium"
              >
                {t("contact_phone")}
              </Text>
              <Text
                color="#000000"
                mt="8px"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="medium"
              >
                TEL:037-831922
              </Text>
              <Text
                color="#000000"
                mt="30px"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="medium"
              >
                {t("contact_fax_phone")}
              </Text>
              <Text
                color="#000000"
                mt="8px"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="medium"
              >
                FAX:037-833353
              </Text>
              <Text
                color="#000000"
                mt="30px"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="medium"
              >
                {t("contact_address")}
              </Text>
              <Text
                color="#000000"
                mt="8px"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="medium"
              >
                {t("footer_address")}
              </Text>
            </Box>
            {/* <Text
              color="#000000"
              mt="30px"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="medium"
            >
              Name*
            </Text>
            <Input
              mt="8px"
              bg="#EDEDED"
              w="100%"
              borderColor="#EDEDED"
              borderWidth="1px"
              _hover={{ borderWidth: "0px" }}
              _focus={{
                outline: "none", // 移除 focus 時的外框
                boxShadow: "none", // 移除 focus 時的陰影
                borderColor: "#000000",
                borderWidth: "1px",
              }}
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
            <Text
              color="#000000"
              mt="16px"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="medium"
            >
              Email*
            </Text>
            <Input
              mt="8px"
              bg="#EDEDED"
              w="100%"
              borderColor="#EDEDED"
              borderWidth="1px"
              _hover={{ borderWidth: "0px" }}
              _focus={{
                outline: "none", // 移除 focus 時的外框
                boxShadow: "none", // 移除 focus 時的陰影
                borderColor: "#000000",
                borderWidth: "1px",
              }}
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
            <Text
              color="#000000"
              mt="16px"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="medium"
            >
              Content*
            </Text>
            <Textarea
              h="160px"
              numberOfLines={4}
              mt="8px"
              bg="#EDEDED"
              w="100%"
              borderColor="#EDEDED"
              borderWidth="1px"
              _hover={{ borderWidth: "0px" }}
              _focus={{
                outline: "none", // 移除 focus 時的外框
                boxShadow: "none", // 移除 focus 時的陰影
                borderColor: "#000000",
                borderWidth: "1px",
              }}
              value={formData.content}
              onChange={(e) => {
                setFormData({ ...formData, content: e.target.value });
              }}
            />
            <Flex mt="40px" justify="center" align="center">
              {formData?.isCheck ? (
                <Box
                  cursor="pointer"
                  w="18px"
                  h="18px"
                  onClick={() => {
                    setFormData({ ...formData, isCheck: false });
                  }}
                >
                  <Image w="18px" h="18px" src="/images/checked.png" />
                </Box>
              ) : (
                <Box
                  cursor="pointer"
                  w="18px"
                  h="18px"
                  borderColor="#000000"
                  borderWidth="1px"
                  _hover={{ borderWidth: "2px" }}
                  onClick={() => {
                    setFormData({ ...formData, isCheck: true });
                  }}
                ></Box>
              )}
              <Text
                ml="10px"
                color="#000000"
                fontSize="14px"
                lineHeight="21px"
                fontWeight="medium"
              >
                我已閱讀並同意接受本{" "}
              </Text>
              <Text
                color="#797979"
                fontSize="14px"
                lineHeight="21px"
                textDecor="underline"
                fontWeight="medium"
                cursor="pointer"
                onClick={() => {
                  window.open(
                    "https://shop.mrktfive.com/pages/privacy-policy",
                    "_blank"
                  );
                }}
              >
                個資法隱私權聲明
              </Text>
            </Flex>

            <Box
              mb="70px"
              mx={{ base: "0px", md: "44px" }}
              mt="40px"
              py="24px"
              px="131px"
              bg="#000000"
              cursor="pointer"
              onClick={submit}
            >
              <Text color="#FFFFFF" textAlign="center">
                Send 寄送
              </Text>
            </Box> */}
          </Flex>
        </Box>
      </Box>
    </>
  );
};
export default ContactUsDrawer;
