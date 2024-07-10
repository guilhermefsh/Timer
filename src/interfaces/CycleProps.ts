import { ReactNode } from "react";

export interface CyclesContextProps {
    cycles: Cycles[];
    activeCycle: CycleProps | undefined;
    activeCycleId: string | null;
    amountSecondsPassed: number;
    markCurrentCycleAsFinished: () => void;
    setSecondsPassed: (seconds: number) => void;
    createNewCycle: (data: CreateCycleProps) => void;
    interruptCycle: () => void;
}

export interface CycleProps {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

export interface CreateCycleProps {
    task: string;
    minutesAmount: number;
}

export interface CyclesContextProviderProps {
    children: ReactNode;
}

export interface CycleStateProps {
    cycles: CycleProps[]
    activeCycleId: string | null;
}