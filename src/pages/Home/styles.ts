import styled from "styled-components";


export const HomeContainer = styled.main`
    flex:1;

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    form{
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:2.5rem;
    }
`;

export const BaseCountDownButton = styled.button`
    width:100%;
    border:0;
    padding: 1rem;
    border-radius:8px;
    color:${(props) => props.theme['gray-100']};
    display:flex;
    align-items:center;
    justify-content:center;

    gap: 0.5rem;
    font-weight:bold;

    cursor:pointer;
`

export const StartCountDownButton = styled(BaseCountDownButton)`
    background:${props => props.theme['DodgerBlue']};
     &:disabled{
        opacity:0.7;
        cursor:not-allowed;
    }

    &:not(:disabled):hover{
        background:${(props) => props.theme['Blue']};
    }
`

export const StopCountDownButton = styled(BaseCountDownButton)`
    background:${props => props.theme['red-500']};
    

    &:not(:disabled):hover{
        background:${(props) => props.theme['red-700']};
    }
`