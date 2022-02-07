import { Button, Flex, Grid, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Card from "../components/Card"

const Tasks = () => {
  const { pathname } = useLocation()
  const [taskInput, setTaskInput] = useState("")
  const [tasks, setTasks] = useState<string[]>([])

  const addTask = () => {
    setTasks((prev) => [...prev, taskInput])
    setTaskInput("")
  }

  return (
    <Grid p={4}>
      <Flex gap={10} mb={10}>
        <Input
          w={60}
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <Button bg="gray.600" _hover={{ background: "gray.500" }} onClick={addTask}>
          Add task
        </Button>
      </Flex>
      {tasks.map((elem, index) => (
        <Card elem={elem} key={index} />
      ))}
    </Grid>
  )
}

export default Tasks
