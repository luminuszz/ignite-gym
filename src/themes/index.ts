import { extendTheme } from "native-base";

export const defaultTheme = extendTheme({
  colors: {
    green: {
      700: "#00875F",
      500: "#00B37E",
    },
    gray: {
      700: "#121214",
      600: "#202024",
      500: "#29292E",
      400: "#323238",
      300: "#7C7C8A",
      200: "#C4C4CC",
      100: "#E1E1E6",
    },
    white: "#FFFFFF",
    red: {
      500: "#F75A68",
    },
  },
  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  sizes: {
    14: 56,
    33: 148,
  },

  components: {
    Button: {
      baseStyle: {
        rounded: "sm",
        w: "full",
        h: 14,
      },
      variants: {
        solid: {
          bg: "green.700",
          _pressed: {
            bg: "green.500",
          },
          borderWidth: 0,
        },

        outline: {
          bg: "transparent",
          borderColor: "green.500",
          _pressed: {
            bg: "gray.500",
          },
          borderWidth: 1,
        },
      },
    },
  },
});
