import styled from "styled-components";

export const FormContainer = styled.div`
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
background-image: url('/images/form-bg.svg');
background-repeat: no-repeat;
background-size: 100% 92%;
background-position: 55px 100%;
min-height: 100vh;

@media only screen and (max-width: 1440px) {
    background-size: 100% 92%;
    background-position: 100% 95%;
    min-height:80vh;
}
`;