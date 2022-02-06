import { Link as RouterLink } from "react-router-dom"
import { Link, Box } from "@chakra-ui/react"

const Aside = () => {
  return (
    <Box pt={10}>
      <Link as={RouterLink} to="/" color="white">
        Home
      </Link>
    </Box>
  )
}

export default Aside
