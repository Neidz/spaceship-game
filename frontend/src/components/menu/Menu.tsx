import { Box, Button } from "@mui/material";
import { MatchAction, MatchState } from "../../reducers/matchReducer";
import { Dispatch, FC } from "react";
import { useQuery } from "@apollo/client";
import { GET_SPACESHIPS } from "../../gql/queries/getSpaceships";

interface Props {
    matchState: MatchState;
    dispatch: Dispatch<MatchAction>;
}

export const Menu: FC<Props> = ({ matchState, dispatch }) => {
    const { data } = useQuery(GET_SPACESHIPS, { variables: { page: 1, pageSize: 2 } });

    const rollSpaceships = () => {
        const [firstSpaceship, secondSpaceship] = data?.spaceships ?? [];

        if (firstSpaceship && secondSpaceship) {
            dispatch({ type: "CHANGE_SPACESHIP", payload: { player: 1, spaceship: firstSpaceship } });
            dispatch({ type: "CHANGE_SPACESHIP", payload: { player: 2, spaceship: secondSpaceship } });
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={() => rollSpaceships()}>Roll spaceships</Button>
        </Box>
    );
};
