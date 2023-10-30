import { mockedSpaceship } from "../test/mockedSpaceship";
import { initialMatchState, matchReducer, MatchAction } from "./matchReducer";

describe("matchReducer", () => {
    it("should handle CHANGE_SPACESHIP action", () => {
        const spaceship1 = mockedSpaceship;
        const spaceship2 = mockedSpaceship;

        const action1: MatchAction = { type: "CHANGE_SPACESHIP", payload: { player: 1, spaceship: spaceship1 } };
        const state1 = matchReducer(initialMatchState, action1);

        expect(state1.firstPlayerSpaceship).toEqual(spaceship1);
        expect(state1.secondPlayerSpaceship).toBeNull();

        const action2: MatchAction = { type: "CHANGE_SPACESHIP", payload: { player: 2, spaceship: spaceship2 } };
        const state2 = matchReducer(state1, action2);

        expect(state2.firstPlayerSpaceship).toEqual(spaceship1);
        expect(state2.secondPlayerSpaceship).toEqual(spaceship2);
    });

    it("should handle INCREMENT_SCORE action", () => {
        const action1: MatchAction = { type: "INCREMENT_SCORE", payload: { player: 1 } };
        const state1 = matchReducer(initialMatchState, action1);

        expect(state1.firstPlayerScore).toBe(1);

        const action2: MatchAction = { type: "INCREMENT_SCORE", payload: { player: 2 } };
        let state2 = matchReducer(state1, action2);
        state2 = matchReducer(state2, action2);

        expect(state2.secondPlayerScore).toBe(2);
    });

    it("should handle CHANGE_WINNER action", () => {
        const action1: MatchAction = { type: "CHANGE_WINNER", payload: { player: 1 } };
        const state1 = matchReducer(initialMatchState, action1);

        expect(state1.winner).toBe(1);

        const action2: MatchAction = { type: "CHANGE_WINNER", payload: { player: 2 } };
        const state2 = matchReducer(state1, action2);

        expect(state2.winner).toBe(2);

        const action3: MatchAction = { type: "CHANGE_WINNER", payload: { player: null } };
        const state3 = matchReducer(state2, action3);

        expect(state3.winner).toBeNull();
    });

    it("should handle CHANGE_PLAYABLE_PROPERTY action", () => {
        const action1: MatchAction = { type: "CHANGE_PLAYABLE_PROPERTY", payload: "maxSpeed" };
        const state1 = matchReducer(initialMatchState, action1);

        expect(state1.selectedProperty).toBe("maxSpeed");

        const action2: MatchAction = { type: "CHANGE_PLAYABLE_PROPERTY", payload: "crewSize" };
        const state2 = matchReducer(state1, action2);

        expect(state2.selectedProperty).toBe("crewSize");
    });

    it("should handle CHANGE_QUERY_LOADING action", () => {
        const action1: MatchAction = { type: "CHANGE_QUERY_LOADING", payload: true };
        const state1 = matchReducer(initialMatchState, action1);

        expect(state1.queryLoading).toBe(true);

        const action2: MatchAction = { type: "CHANGE_QUERY_LOADING", payload: false };
        const state2 = matchReducer(state1, action2);

        expect(state2.queryLoading).toBe(false);
    });

    it("should handle CHANGE_QUERY_ERROR action", () => {
        const action1: MatchAction = { type: "CHANGE_QUERY_ERROR", payload: true };
        const state1 = matchReducer(initialMatchState, action1);

        expect(state1.queryError).toBe(true);

        const action2: MatchAction = { type: "CHANGE_QUERY_ERROR", payload: false };
        const state2 = matchReducer(state1, action2);

        expect(state2.queryError).toBe(false);
    });

    it("should handle CHANGE_MATCH_STARTED action", () => {
        const action1: MatchAction = { type: "CHANGE_MATCH_STARTED", payload: true };
        const state1 = matchReducer(initialMatchState, action1);

        expect(state1.matchStarted).toBe(true);

        const action2: MatchAction = { type: "CHANGE_MATCH_STARTED", payload: false };
        const state2 = matchReducer(state1, action2);

        expect(state2.matchStarted).toBe(false);
    });
});
