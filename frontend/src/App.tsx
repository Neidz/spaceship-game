import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { Box, Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_SPACESHIPS } from "./gql/queries/getSpaceships";

function App() {
    const { data } = useQuery(GET_SPACESHIPS);

    return (
        <Box>
            <Button>click me</Button>
        </Box>
    );
}

export default App;
