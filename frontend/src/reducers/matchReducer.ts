import { Spaceship } from "../gql/generated/graphql";

export interface MatchState {
    firstPlayerSpaceship: Spaceship | null;
    secondPlayerSpaceship: Spaceship | null;

    firstPlayerScore: number;
    secondPlayerScore: number;

    winner: 1 | 2 | null;
}

export type MatchAction =
    | { type: "CHANGE_SPACESHIP"; payload: { player: 1 | 2; spaceship: Spaceship } }
    | { type: "INCREMENT_SCORE"; payload: { player: 1 | 2 } }
    | { type: "CHANGE_WINNER"; payload: { player: 1 | 2 | null } };

const initialMatchState: MatchState = {
    firstPlayerSpaceship: null,
    secondPlayerSpaceship: null,

    firstPlayerScore: 0,
    secondPlayerScore: 0,

    winner: null,
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
        default:
            return state;
    }
};

export { initialMatchState, matchReducer };
