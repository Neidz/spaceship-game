import { Box, Skeleton, Typography } from "@mui/material";
import { ShipCard } from "../shipCard";
import { MatchState } from "../../reducers/matchReducer";
import { FC } from "react";

interface Props {
    matchState: MatchState;
}

export const Match: FC<Props> = ({ matchState }) => {
    console.log(matchState);
    if (!matchState.firstPlayerSpaceship || !matchState.secondPlayerSpaceship) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "end", gap: "1rem" }}>
                <Skeleton variant="rounded" width={150} height={500} />
                <Skeleton variant="rounded" width={150} height={500} />
            </Box>
        );
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "end", gap: "1rem" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "center" }}>
                <Typography>My score: {matchState.firstPlayerScore}</Typography>
                <ShipCard spaceship={matchState.firstPlayerSpaceship} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "center" }}>
                <Typography>Opponent: {matchState.secondPlayerScore}</Typography>
                <ShipCard spaceship={matchState.secondPlayerSpaceship} />
            </Box>
        </Box>
    );
};
