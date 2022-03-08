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
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import uniqid from "uniqid";
import { RootState } from "../store";
import { addNewTask, setTaskComplete } from "../store/tasksSlice";

const Tasks = () => {
	const [taskInput, setTaskInput] = useState("");
	const [show, setShow] = useState(false);
	const tasks = useSelector((state: RootState) => state.tasksState.tasks);
	const dispatch = useDispatch();

	const addTask = () => {
		if (taskInput.length !== 0) {
			const text = taskInput[0].toUpperCase() + taskInput.slice(1).toLowerCase();
			const id = uniqid();
			dispatch(addNewTask({ id, text, complete: false }));
			setShow(false);
			setTaskInput("");
		} else setShow(true);
	};

	const changeComplete = (id: string) => {
		dispatch(setTaskComplete(id))
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
					<Card cardInfo={elem} key={index} method={changeComplete} />
				))}
			</Box>
		</>
	);
};

export default Tasks;
