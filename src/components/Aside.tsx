import { Link as RouterLink, useLocation } from "react-router-dom"
import { Link, Flex } from "@chakra-ui/react"

const Aside = () => {
  const { pathname } = useLocation()

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
      <Link
        as={RouterLink}
        to="/dailytasks"
        pl={6}
        my={8}
        textDecoration={pathname === "/dailytasks" ? "underline" : ""}
      >
        Daily Tasks
      </Link>
    </Flex>
  )
}

export default Aside
