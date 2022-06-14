import React, { memo } from "react";
import { Box, Center, Heading, Text, Badge } from "@chakra-ui/react";
import { PROMPT_MESSAGE, INPUT_ERROR_MESSAGE } from "./const";
import { Props } from "./type";
import { Input } from "@/components/molecules/Input";
import { Button } from "@/components/atoms/Button";

export const LoginArea: React.FC<Props> = memo(
  ({
    inputEmail,
    handleInputEmailChange,
    inputPassword,
    handleInputPasswordChange,
    isDisabled,
    isError,
    onLogin,
  }) => {
    const property = {
      imageUrl: "https://bit.ly/2Z4KKcF",
      imageAlt: "Rear view of modern home with pool",
      beds: 3,
      baths: 2,
      title: "Modern home in city center in the heart of historic Los Angeles",
      formattedPrice: "$1,900.00",
      reviewCount: 34,
      rating: 4,
    };
    return (
      <>
        <Box maxW="xl">
          <Center m="3">
            <Heading as="h2" size="lg" color="primary">
              ログイン
            </Heading>
          </Center>
          <Box
            maxW="xl"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            overflow="hidden"
          >
            <Box p="6">
              <Center m="5">
                <Text fontSize="lg" fontWeight="bold" color="secondary">
                  {PROMPT_MESSAGE}
                </Text>
              </Center>
              <Center m="2">
                <Input
                  inputType="email"
                  input={inputEmail}
                  handleInputChange={handleInputEmailChange}
                ></Input>
              </Center>
              <Center m="2">
                <Input
                  inputType="password"
                  input={inputPassword}
                  handleInputChange={handleInputPasswordChange}
                ></Input>
              </Center>
              {isError ? (
                <Center m="2">
                  <Text fontSize="md" fontWeight="bold" color="red">
                    {INPUT_ERROR_MESSAGE}
                  </Text>
                </Center>
              ) : (
                <></>
              )}
              <Center m="10">
                <Button
                  type="primary"
                  label="ログイン"
                  isDisabled={isDisabled}
                  onClick={onLogin}
                ></Button>
              </Center>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
);

LoginArea.displayName = "LOGINAREA";
