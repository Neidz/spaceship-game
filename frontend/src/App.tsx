import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import { Box } from "@mui/material";
import { Match } from "./components/match";
import { Menu } from "./components/menu";
import { useReducer } from "react";
import { initialMatchState, matchReducer } from "./reducers/matchReducer";

function App() {
    const [matchState, dispatch] = useReducer(matchReducer, initialMatchState);

    return (
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <Match matchState={matchState} />
            <Menu matchState={matchState} dispatch={dispatch} />
        </Box>
    );
}

export default App;
