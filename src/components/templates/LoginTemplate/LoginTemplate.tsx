import React, { memo } from "react";
import { Center } from "@chakra-ui/layout";
import { Props } from "./type";
import { Header } from "@/components/organisms/Header";
import { LoginArea } from "@/components/organisms/LoginArea";

export const LoginTemplate: React.FC<Props> = memo(
  ({
    inputEmail,
    handleInputEmailChange,
    inputPassword,
    handleInputPasswordChange,
    isDisabledLoginButton,
    isErrorLogin,
    isLogined,
    onLogin,
    onLogout,
  }) => {
    return (
      <>
        <Header isLogined={isLogined} onLogout={onLogout}></Header>
        <Center h="100%">
          <LoginArea
            inputEmail={inputEmail}
            handleInputEmailChange={handleInputEmailChange}
            inputPassword={inputPassword}
            handleInputPasswordChange={handleInputPasswordChange}
            isDisabled={isDisabledLoginButton}
            isError={isErrorLogin}
            onLogin={onLogin}
          ></LoginArea>
        </Center>
      </>
    );
  }
);

LoginTemplate.displayName = "LOGINTEMPLATE";
