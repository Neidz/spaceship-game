import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_SPACESHIPS } from "./gql/queries/getSpaceships";
import { ShipCard } from "./components/shipCard";

function App() {
    const { data, error, loading } = useQuery(GET_SPACESHIPS);

    if (loading) {
        return <Box sx={{ height: "100%" }}>Loading</Box>;
    }

    if (error) {
        return <Box sx={{ height: "100%" }}>Error</Box>;
    }

    return (
        <Box sx={{ minHeight: "100%", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
            {data?.spaceships.map((el) => (
                <ShipCard key={el.id} spaceship={el} />
            ))}
        </Box>
    );
}

export default App;
