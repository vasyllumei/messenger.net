import {mode} from "@chakra-ui/theme-tools";

export const styles = {
    global: (props) => ({
        body: {
            color: mode("gray.800", "whiteAlpha.900")(props),
            bg: mode("#eff8ee", "#101010")(props),
        },
    }),
};

export const config = {
    initialColorMode: "dark",
    useSystemColorMode: true,
};

export const colors = {
    gray: {
        light: "#616161",
        dark: "#1e1e1e",
    },

};