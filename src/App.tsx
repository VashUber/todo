import { Grid, GridItem } from "@chakra-ui/react"
import Router from "./router"
import Aside from "./components/Aside"

function App() {
  return (
    <Grid h="100vh" templateRows="repeat(2, 1fr)" templateColumns="repeat(6, 1fr)">
      <GridItem rowSpan={2} colSpan={1} bg="gray.800">
        <Aside />
      </GridItem>
      <GridItem colSpan={5} rowSpan={2} bg="gray.900">
        <Router />
      </GridItem>
    </Grid>
  )
}
export default App
