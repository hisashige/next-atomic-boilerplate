import React, { useState, memo } from "react";
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  IconButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Props } from "./type";
import { INPUT_LABEL_MAP, REQUIRED_MESSAGE } from "./const";

export const Input: React.FC<Props> = memo(
  ({ inputType, input, handleInputChange }) => {
    // 必須エラーチェックフラグ
    const [isInvlid, setIsInvalid] = useState(false);

    // パスワードフォーム用のパスワード表示/非表示フラグ
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    // 必須チェック
    const validate = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.value === "") {
        setIsInvalid(true);
      } else {
        setIsInvalid(false);
      }
    };

    return (
      <FormControl maxW={450} isInvalid={isInvlid}>
        <FormLabel htmlFor={inputType}>{INPUT_LABEL_MAP[inputType]}</FormLabel>
        {inputType === "email" ? (
          // タイプがemailの場合のInputフォーム
          <ChakraInput
            id={inputType}
            type="email"
            value={input}
            onChange={(event) => {
              handleInputChange(event);
              validate(event);
            }}
          />
        ) : (
          // タイプがpasswordの場合のInputフォーム
          <InputGroup size="md">
            <ChakraInput
              id={inputType}
              pr="4.5rem"
              type={show ? "text" : "password"}
              onChange={(event) => {
                handleInputChange(event);
                validate(event);
              }}
            />
            <InputRightElement>
              <IconButton
                variant="outline"
                aria-label="viewicon"
                icon={show ? <ViewOffIcon /> : <ViewIcon />}
                onClick={handleClick}
              />
            </InputRightElement>
          </InputGroup>
        )}

        {!isInvlid ? (
          ""
        ) : (
          <FormErrorMessage>{REQUIRED_MESSAGE}</FormErrorMessage>
        )}
      </FormControl>
    );
  }
);

Input.displayName = "INPUT";
