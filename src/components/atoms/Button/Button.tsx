import React, { memo } from "react";
import { AppButton } from "@/components/atoms/Button/module.style";
import { Props } from "./type";

export const Button: React.FC<Props> = memo(
  ({ type, size, label, ...props }) => {
    // ボタンタイプによる色とスタイルの決定
    let bg = "primary";
    let color = "white";
    let borderColor = "";
    switch (type) {
      case "secondary":
        bg = "white";
        color = "primary";
        borderColor = "primary";
        break;
      case "accent":
        bg = "accent";
        break;
      case "logout":
        borderColor = "white";
        break;
    }

    // 変数borderColorが存在すれば、propsにborder・borderColorを設定
    const chakraButtonProps = { ...props };
    if (borderColor) {
      Object.assign(chakraButtonProps, {
        border: "2px",
        borderColor: borderColor,
      });
    }
    return (
      <AppButton
        fontSize={size === "small" ? "lg" : "2xl"}
        p="12px 24px"
        buttonsize={size}
        bg={bg}
        color={color}
        {...chakraButtonProps}
      >
        {label}
      </AppButton>
    );
  }
);

Button.displayName = "Button";
