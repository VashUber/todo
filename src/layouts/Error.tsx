import { Center } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

const Error = () => {
  return (
    <Center h="100vh" bg="gray.900">
      <Outlet />
    </Center>
  )
}

export default Error
