import { FormContainer, MinutesAmountInput, TaskInput } from "./styles"
import { useContext } from "react";
import { CyclesContext } from '../../../../contexts/CyclesContexts'
import { useFormContext } from "react-hook-form";

export const NewCycleForm = () => {

    const { activeCycle } = useContext(CyclesContext);
    const { register } = useFormContext()

    return (
        <FormContainer>
            <label htmlFor="">Vou trabalhar em</label>
            <TaskInput
                id="task"
                placeholder="Dê um nome para o seu projeto!"
                list="task-suggetions"
                disabled={!!activeCycle}
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
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span>minutos.</span>
        </FormContainer>
    )
}
