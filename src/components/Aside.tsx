import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link, Flex } from "@chakra-ui/react";

const Aside = () => {
	const { pathname } = useLocation();

	return (
		<Flex direction="column" color="white" my={8}>
			<Link
				as={RouterLink}
				to="/"
				pl={6}
				textDecoration={pathname === "/" ? "underline" : ""}
			>
				Tasks
			</Link>
		</Flex>
	);
};

export default Aside;
