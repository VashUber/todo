import {
	Alert,
	AlertDescription,
	AlertIcon,
	AlertTitle,
	Box,
	Button,
	CloseButton,
	Flex,
	Input,
	Slide,
} from "@chakra-ui/react";
import { useState } from "react";
import Card from "../components/Card";
import { Task } from "../types";
import uniqid from "uniqid";

const Tasks = () => {
	const [taskInput, setTaskInput] = useState("");
	const [tasks, setTasks] = useState<Task[]>([]);
	const [show, setShow] = useState(false);

	const addTask = () => {
		if (taskInput.length !== 0) {
			const text = taskInput[0].toUpperCase() + taskInput.slice(1).toLowerCase();
			const id = uniqid();
			setTasks((prev) => [...prev, { id, text, complete: false }]);
			setShow(false);
			setTaskInput("");
		} else setShow(true);
	};

	const complete = (id: string) => {
		setTasks((prev) => [
			...prev.map((elem) => {
				if (elem.id === id) return { ...elem, complete: true };
				return elem;
			}),
		]);
	};

	return (
		<>
			<Box p={4}>
				<Flex gap={10} mb={10}>
					<Input
						w={60}
						value={taskInput}
						onChange={(e) => setTaskInput(e.target.value)}
						placeholder="Enter a task..."
						onKeyDown={(e) => {
							if (e.key === "Enter") addTask();
						}}
					/>
					<Button
						bg="gray.600"
						_hover={{ background: "gray.500" }}
						onClick={addTask}
					>
						Add task
					</Button>
				</Flex>
				<Slide direction="bottom" in={show} style={{ zIndex: 10 }}>
					<Alert status="error" bg="red.500">
						<AlertIcon color="white" />
						<AlertTitle mr={2}>Please enter a task!</AlertTitle>
						<AlertDescription>You can't create an empty task</AlertDescription>
						<CloseButton
							position="absolute"
							right="8px"
							top="8px"
							onClick={() => setShow(!show)}
						/>
					</Alert>
				</Slide>
				{tasks.map((elem, index) => (
					<Card cardInfo={elem} key={index} method={complete} />
				))}
			</Box>
		</>
	);
};

export default Tasks;
