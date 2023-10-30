import { Box, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { MatchAction, MatchState } from "../../reducers/matchReducer";
import { Dispatch, FC } from "react";
import {
    PlayableSpaceshipProperty,
    playableSpaceshipProperties,
    spaceshipPropertyLabels,
} from "../../constants/spaceshipproperties";
import { getRandomInteger } from "../../utils/getRandomInt";
import { useSpaceshipQuery } from "../../hooks/useSpaceshipQuery";

interface Props {
    matchState: MatchState;
    dispatch: Dispatch<MatchAction>;
}

export const Menu: FC<Props> = ({ matchState, dispatch }) => {
    const { refetch } = useSpaceshipQuery({ matchState, dispatch });

    const play = () => {
        const randomPage = getRandomInteger(1, 50);
        refetch({ variables: { page: randomPage, pageSize: 2 } });

        if (!matchState.matchStarted) {
            dispatch({ type: "CHANGE_MATCH_STARTED", payload: true });
        }
    };

    const changeProperty = (property: PlayableSpaceshipProperty) => {
        dispatch({ type: "CHANGE_PLAYABLE_PROPERTY", payload: property });
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", gap: "3rem", flexWrap: "wrap", paddingTop: "20px" }}>
            <Button onClick={() => play()}>
                {matchState.firstPlayerSpaceship && matchState.secondPlayerSpaceship ? "Play again" : "Play"}
            </Button>
            <FormControl sx={{ minWidth: "250px" }}>
                <InputLabel>Property</InputLabel>
                <Select
                    value={matchState.selectedProperty}
                    label="Property"
                    onChange={(e) => changeProperty(e.target.value as PlayableSpaceshipProperty)}
                >
                    {playableSpaceshipProperties.map((property) => (
                        <MenuItem value={property} key={property}>
                            {spaceshipPropertyLabels[property]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};
