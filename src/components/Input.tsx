import { FC } from "react";

import {
  Input as NativeBaseInput,
  FormControl,
  IInputProps,
} from "native-base";

type Props = IInputProps & {
  label?: string;

  error?: string;
};

const Input: FC<Props> = ({ label, error, ...props }) => (
  <FormControl isInvalid={!!error}>
    <FormControl.Label>{label}</FormControl.Label>
    <NativeBaseInput
      bg="gray.700"
      h={14}
      px={4}
      borderWidth={0}
      fontSize="md"
      color="white"
      fontFamily="body"
      mb={4}
      placeholderTextColor="gray.300"
      _focus={{
        bg: "gray.700",
        borderWidth: 1,
        borderColor: "green.500",
      }}
      {...props}
    />
    <FormControl.ErrorMessage>{error}</FormControl.ErrorMessage>
  </FormControl>
);

export default Input;
