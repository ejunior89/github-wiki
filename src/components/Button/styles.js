import styled from "styled-components";

export const ButtonContainer = styled.button`
    background-color: #fafafa;
    border: 1px solid #fafafa;
    
    height: 62px;
    width: 80%;

    margin: 20px;
    font-size: 20px;

    &: hover {
        background-color: #6697DB; 
        color: #fff;
        border: 1px solid #22272e;
        cursor: pointer;
        box-shadow: 0 0 10px #2C3E57;
        transition: 0.5s;
    }
`;
