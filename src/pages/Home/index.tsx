import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { IoPlayOutline } from "react-icons/io5";
import { IoHandLeftOutline } from "react-icons/io5";
import { NewCycleForm } from "./components/NewCycleForm";
import { CountDown } from "./components/CountDown";
import { zodResolver } from "@hookform/resolvers/zod";
import zod from 'zod';
import { CyclesContext } from "../../contexts/CyclesContexts";
import {
    HomeContainer,
    StartCountDownButton,
    StopCountDownButton
} from "./styles";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
        .number().
        min(1, 'o ciclo precisa ser de no mínimo 60 minutos').
        max(60, 'o ciclo precisa ser de no máximo 60 minutos'),
})

type NewCycleProps = zod.infer<typeof newCycleFormValidationSchema>

export const Home = () => {

    const { activeCycle, createNewCycle, interruptCycle } = useContext(CyclesContext)

    const newCycleForm = useForm<NewCycleProps>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    const { handleSubmit, watch, reset } = newCycleForm
    const task = watch('task')
    const isSubmitDisabled = !task

    function handleCreateNewCycle(data: NewCycleProps) {
        createNewCycle(data)
        reset()
    }

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} >
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <CountDown />
                {activeCycle ? (
                    <StopCountDownButton type='button' onClick={interruptCycle}>
                        <IoHandLeftOutline size={24} />
                        Interromper
                    </StopCountDownButton>
                ) : (
                    <StartCountDownButton type="submit" disabled={isSubmitDisabled}>
                        <IoPlayOutline size={24} />
                        Start
                    </StartCountDownButton>
                )}
            </form>
        </HomeContainer >
    )
}
