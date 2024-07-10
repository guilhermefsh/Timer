import { IoPlayOutline } from "react-icons/io5";
import { CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountDownButton, TaskInput } from "./styles";


export const Home = () => {
    return (
        <HomeContainer>
            <form>
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <TaskInput
                        id="task"
                        placeholder="Dê um nome para o seu projeto!"
                        list="task-suggetions"
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

                <StartCountDownButton type="submit">
                    <IoPlayOutline size={24} />
                    Start
                </StartCountDownButton>
            </form>
        </HomeContainer>
    )
}
