import { LazyQueryExecFunction, useLazyQuery } from "@apollo/client";
import { GET_SPACESHIPS } from "../gql/queries/getSpaceships";
import { MatchAction, MatchState } from "../reducers/matchReducer";
import { Dispatch, useEffect } from "react";
import { Exact, GetSpaceshipsQuery, InputMaybe } from "../gql/generated/graphql";

interface Props {
    matchState: MatchState;
    dispatch: Dispatch<MatchAction>;
}

interface ReturnType {
    refetch: LazyQueryExecFunction<
        GetSpaceshipsQuery,
        Exact<{
            page?: InputMaybe<number> | undefined;
            pageSize?: InputMaybe<number> | undefined;
        }>
    >;
}

export const useSpaceshipQuery = ({ dispatch, matchState }: Props): ReturnType => {
    const [refetch, { loading, error }] = useLazyQuery(GET_SPACESHIPS, {
        onCompleted: (data) => {
            const [firstSpaceship, secondSpaceship] = data?.spaceships ?? [];

            if (firstSpaceship && secondSpaceship) {
                dispatch({ type: "CHANGE_SPACESHIP", payload: { player: 1, spaceship: firstSpaceship } });
                dispatch({ type: "CHANGE_SPACESHIP", payload: { player: 2, spaceship: secondSpaceship } });

                const diff = firstSpaceship[matchState.selectedProperty] - secondSpaceship[matchState.selectedProperty];

                switch (true) {
                    case diff > 0:
                        dispatch({ type: "CHANGE_WINNER", payload: { player: 1 } });
                        dispatch({ type: "INCREMENT_SCORE", payload: { player: 1 } });
                        break;
                    case diff < 0:
                        dispatch({ type: "CHANGE_WINNER", payload: { player: 2 } });
                        dispatch({ type: "INCREMENT_SCORE", payload: { player: 2 } });
                        break;
                    default:
                        dispatch({ type: "CHANGE_WINNER", payload: { player: null } });
                        break;
                }
            }
        },
    });

    useEffect(() => {
        if (loading) {
            dispatch({ type: "CHANGE_QUERY_LOADING", payload: true });
        } else {
            dispatch({ type: "CHANGE_QUERY_LOADING", payload: false });
        }
    }, [loading, dispatch]);

    useEffect(() => {
        if (error) {
            dispatch({ type: "CHANGE_QUERY_ERROR", payload: true });
        } else {
            dispatch({ type: "CHANGE_QUERY_ERROR", payload: false });
        }
    }, [error, dispatch]);

    return { refetch };
};
