import { Center, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
	return (
		<Center h={"100vh"}>
			<Text color="gray.500" fontSize={20}>
				Page not found.{" "}
				<Link as={RouterLink} to="/">
					Go back to the main page -{">"}
				</Link>
			</Text>
		</Center>
	);
};

export default NotFound;
