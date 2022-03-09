import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	components: { Link: { baseStyle: { _focus: { boxShadow: "none" } } } },
});

export default theme;
