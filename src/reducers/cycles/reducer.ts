import { actionTypes } from "./actions"
import { CycleStateProps } from "../../interfaces/CycleProps"
import { produce } from "immer"

// ! aplicando immer nos return e substituir os maps;

export function cyclesReducer(state: CycleStateProps, action: any) {
    switch (action.type) {
        case actionTypes.ADD_NEW_CYCLE:
            return produce(state, draft => {
                draft.cycles.push(action.payload.newCycle);
                draft.activeCycleId = action.payload.newCycle.id
            })
        case actionTypes.INTERRUPT_CURRENT_CYCLE: {
            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })
            if (currentCycleIndex < 0) {
                return state
            }
            return produce(state, draft => {
                draft.activeCycleId = null
                draft.cycles[currentCycleIndex].interruptedDate = new Date()
            })
        }
        case actionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })
            if (currentCycleIndex < 0) {
                return state
            }
            return produce(state, draft => {
                draft.activeCycleId = null
                draft.cycles[currentCycleIndex].finishedDate = new Date()
            })
        }
        default:
            return state
    }
}