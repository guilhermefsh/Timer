import { createContext, useEffect, useReducer, useState } from "react";
import { cyclesReducer } from "../reducers/cycles/reducer";
import { addNewCycleAction, interruptCurrenteCycleAction, markCurrenteCycleAsFinishedAction } from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";
import {
    CreateCycleProps,
    CycleProps, CyclesContextProps,
    CyclesContextProviderProps,
} from "../interfaces/CycleProps";

export const CyclesContext = createContext({} as CyclesContextProps)

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {

    const [cyclesState, dispatch] = useReducer(cyclesReducer,
        {
            cycles: [],
            activeCycleId: null,
        }, (initialState) => {
            const storedStateAsJson = localStorage.getItem('@timer:cycles-state-1.0.0');
            if (storedStateAsJson) {
                return JSON.parse(storedStateAsJson)
            }

            return initialState
        })

    const { cycles, activeCycleId } = cyclesState;
    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(
                new Date(),
                new Date(activeCycle.startDate),
            )
        }
        return 0;
    })

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)

        localStorage.setItem('@timer:cycles-state-1.0.0', stateJSON)
    }, [cyclesState])


    function createNewCycle(data: CreateCycleProps) {
        const id = String(new Date().getTime());
        const newCycle: CycleProps = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }
        dispatch(addNewCycleAction(newCycle))
        setAmountSecondsPassed(0)
    }

    function markCurrentCycleAsFinished() {

        dispatch(markCurrenteCycleAsFinishedAction())
    }

    function interruptCycle() {
        dispatch(interruptCurrenteCycleAction())
    }

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    return (
        <CyclesContext.Provider value={{
            cycles,
            activeCycle,
            activeCycleId,
            markCurrentCycleAsFinished,
            amountSecondsPassed,
            setSecondsPassed,
            createNewCycle,
            interruptCycle,
        }}>
            {children}
        </CyclesContext.Provider>
    )
}