import { CycleProps } from "../../interfaces/CycleProps";

export enum actionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
    MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED'
}

export function addNewCycleAction(newCycle: CycleProps) {
    return {
        type: actionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle,
        }
    }
}

export function markCurrenteCycleAsFinishedAction() {
    return {
        type: actionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
    }
}

export function interruptCurrenteCycleAction() {
    return {
        type: actionTypes.INTERRUPT_CURRENT_CYCLE,
    }
}