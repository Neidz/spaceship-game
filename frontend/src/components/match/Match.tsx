import { Box, Skeleton, Typography } from "@mui/material";
import { ShipCard } from "../shipCard";
import { MatchState } from "../../reducers/matchReducer";
import { FC } from "react";
import { STATE } from "../../constants/enums";

interface Props {
    matchState: MatchState;
}

export const Match: FC<Props> = ({
    matchState: {
        winner,
        matchStarted,
        selectedProperty,
        queryLoading,
        queryError,
        firstPlayerScore,
        firstPlayerSpaceship,
        secondPlayerScore,
        secondPlayerSpaceship,
    },
}) => {
    if (queryLoading || !matchStarted) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "end", gap: "1rem", flexWrap: "wrap" }}>
                <Skeleton variant="rounded" sx={{ width: "250px", minHeight: "400px" }} />
                <Skeleton variant="rounded" sx={{ width: "250px", minHeight: "400px" }} />
            </Box>
        );
    }

    if (queryError || !firstPlayerSpaceship || !secondPlayerSpaceship) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "end", gap: "1rem", flexWrap: "wrap" }}>
                <Skeleton variant="rounded" sx={{ width: "250px", minHeight: "400px", backgroundColor: "error.main" }} />
                <Skeleton variant="rounded" sx={{ width: "250px", minHeight: "400px", backgroundColor: "error.main" }} />
            </Box>
        );
    }

    const firstPlayerState = winner === 1 ? STATE.WON : winner === 2 ? STATE.LOST : STATE.NEUTRAL;
    const secondPlayerState = winner === 2 ? STATE.WON : winner === 1 ? STATE.LOST : STATE.NEUTRAL;

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "end", gap: "1rem", flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "center" }}>
                <Typography>My score: {firstPlayerScore}</Typography>
                <ShipCard spaceship={firstPlayerSpaceship} highlightedProperty={selectedProperty} state={firstPlayerState} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem", textAlign: "center" }}>
                <Typography>Opponent: {secondPlayerScore}</Typography>
                <ShipCard
                    spaceship={secondPlayerSpaceship}
                    highlightedProperty={selectedProperty}
                    state={secondPlayerState}
                />
            </Box>
        </Box>
    );
};
