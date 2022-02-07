import { Outlet } from "react-router-dom"
import { Grid, GridItem } from "@chakra-ui/react"
import Aside from "../components/Aside"

const Default = () => {
  return (
    <Grid h="100vh" templateRows="repeat(2, 1fr)" templateColumns="repeat(6, 1fr)">
      <GridItem rowSpan={2} colSpan={1} bg="gray.800">
        <Aside />
      </GridItem>
      <GridItem colSpan={5} rowSpan={2} bg="gray.900" color="white" p={6}>
        <Outlet />
      </GridItem>
    </Grid>
  )
}

export default Default
