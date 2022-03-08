import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { Task } from "../types";

const Card = ({
	cardInfo,
	method,
}: {
	cardInfo: Task;
	method: (id: string) => void;
}) => {
	return (
		<Flex
			bg="whiteAlpha.400"
			py={2}
			px={8}
			borderRadius={4}
			mt={4}
			justify="space-between"
		>
			<Text
				fontSize="2xl"
				textDecoration={cardInfo.complete ? "line-through" : "none"}
			>
				{cardInfo.text}
			</Text>
			<Checkbox onChange={() => method(cardInfo.id)}></Checkbox>
		</Flex>
	);
};

export default Card;
