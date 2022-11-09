import { FC } from "react";

import { IButtonProps, Button as NativeBaseButton, Text } from "native-base";

type Props = IButtonProps & {
  title: string;
};

const Button: FC<Props> = ({ title, ...props }) => (
  <NativeBaseButton {...props}>
    <Text
      fontFamily="heading"
      fontSize="sm"
      color={props.variant === "outline" ? "green.500" : "white"}
    >
      {title}
    </Text>
  </NativeBaseButton>
);

export default Button;
