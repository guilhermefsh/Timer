import { IoPlayOutline } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import zod from 'zod'
import {
    CountDownContainer,
    FormContainer,
    HomeContainer,
    MinutesAmountInput,
    Separator,
    StartCountDownButton,
    TaskInput
} from "./styles";

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
        .number().
        min(5, 'o ciclo precisa ser de no mínimo 60 minutos').
        max(60, 'o ciclo precisa ser de no máximo 60 minutos'),
})
type NewCycleProps = zod.infer<typeof newCycleFormValidationSchema>
export const Home = () => {

    const { register, handleSubmit, watch, reset } = useForm<NewCycleProps>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    function handleCreateNewCycle(data) {
        console.log(data);
        reset();
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        placeholder="Dê um nome para o seu projeto!"
                        list="task-suggetions"
                        {...register('task')}
                    />

                    <datalist id="task-suggetions">
                        <option value="projeto 1" />
                        <option value="projeto 2" />
                        <option value="projeto 3" />
                        <option value="projeto 4" />
                        <option value="projeto 5" />
                    </datalist>

                    <label htmlFor="">Durante</label>
                    <MinutesAmountInput
                        id="minutesAmount"
                        type="number"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />

                    <span>minutos.</span>
                </FormContainer>
                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <StartCountDownButton type="submit" disabled={isSubmitDisabled}>
                    <IoPlayOutline size={24} />
                    Start
                </StartCountDownButton>
            </form>
        </HomeContainer>
    )
}
