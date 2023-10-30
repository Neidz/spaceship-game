import { Spaceship } from "../gql/generated/graphql";
import { PlayableSpaceshipProperty } from "../constants/spaceshipproperties";

export interface MatchState {
    firstPlayerSpaceship: Spaceship | null;
    secondPlayerSpaceship: Spaceship | null;

    firstPlayerScore: number;
    secondPlayerScore: number;

    winner: 1 | 2 | null;
    selectedProperty: PlayableSpaceshipProperty;

    queryLoading: boolean;
    queryError: boolean;
    matchStarted: boolean;
}

export type MatchAction =
    | { type: "CHANGE_SPACESHIP"; payload: { player: 1 | 2; spaceship: Spaceship } }
    | { type: "INCREMENT_SCORE"; payload: { player: 1 | 2 } }
    | { type: "CHANGE_WINNER"; payload: { player: 1 | 2 | null } }
    | { type: "CHANGE_PLAYABLE_PROPERTY"; payload: PlayableSpaceshipProperty }
    | { type: "CHANGE_QUERY_LOADING"; payload: boolean }
    | { type: "CHANGE_QUERY_ERROR"; payload: boolean }
    | { type: "CHANGE_MATCH_STARTED"; payload: boolean };

const initialMatchState: MatchState = {
    firstPlayerSpaceship: null,
    secondPlayerSpaceship: null,

    firstPlayerScore: 0,
    secondPlayerScore: 0,

    winner: null,
    selectedProperty: "crewSize",

    queryLoading: false,
    queryError: false,
    matchStarted: false,
};

const matchReducer = (state: MatchState, action: MatchAction): MatchState => {
    switch (action.type) {
        case "CHANGE_SPACESHIP":
            if (action.payload.player === 1) {
                return { ...state, firstPlayerSpaceship: action.payload.spaceship };
            }
            return { ...state, secondPlayerSpaceship: action.payload.spaceship };
        case "INCREMENT_SCORE":
            if (action.payload.player === 1) {
                return { ...state, firstPlayerScore: state.firstPlayerScore + 1 };
            }
            return { ...state, secondPlayerScore: state.secondPlayerScore + 1 };
        case "CHANGE_WINNER":
            return { ...state, winner: action.payload.player };
        case "CHANGE_PLAYABLE_PROPERTY":
            return { ...state, selectedProperty: action.payload };
        case "CHANGE_QUERY_LOADING":
            return { ...state, queryLoading: action.payload };
        case "CHANGE_QUERY_ERROR":
            return { ...state, queryError: action.payload };
        case "CHANGE_MATCH_STARTED":
            return { ...state, matchStarted: action.payload };
        default:
            return state;
    }
};

export { initialMatchState, matchReducer };
