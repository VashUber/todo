import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  CloseButton,
  Flex,
  Grid,
  Input,
  Slide,
  useDisclosure,
} from "@chakra-ui/react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Card from "../components/Card"

const Tasks = () => {
  const { pathname } = useLocation()
  const [taskInput, setTaskInput] = useState("")
  const [tasks, setTasks] = useState<string[]>([])
  const [show, setShow] = useState(false)

  const addTask = () => {
    if (taskInput.length !== 0) {
      setTasks((prev) => [...prev, taskInput])
      setShow(false)
    } else setShow(true)
    setTaskInput("")
  }

  return (
    <>
      <Grid p={4}>
        <Flex gap={10} mb={10}>
          <Input
            w={60}
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
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
          <Alert status="error" bg="red.400">
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
          <Card elem={elem} key={index} />
        ))}
      </Grid>
    </>
  )
}

export default Tasks
