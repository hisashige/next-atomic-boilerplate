import React, { memo } from "react";
import { Flex } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import {} from "@/components/organisms/Header/module.style";

import { HEADER_TITLE } from "./const";
import { Props } from "./type";
import { Button } from "@/components/atoms/Button";

export const Header: React.FC<Props> = memo(({ isLogined, onLogout }) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      h="14"
      mb={8}
      px={4}
      bg="primary"
    >
      <Heading as="h2" size="lg" color="white">
        {HEADER_TITLE}
      </Heading>
      {isLogined ? (
        <Button
          type="logout"
          size="small"
          label="ログアウト"
          onClick={onLogout}
        ></Button>
      ) : (
        <></>
      )}
    </Flex>
  );
});

Header.displayName = "HEADER";
