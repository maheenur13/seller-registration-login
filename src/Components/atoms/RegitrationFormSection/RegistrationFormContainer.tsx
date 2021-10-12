import styled from "styled-components";

export const RegistrationFormContainer = styled.div`
width: 390px;
border-radius: 25px;
box-shadow: 0px 0px 6px #8a8a8a3d;
border: 1px solid #ececec;
background-color: var(--white);
margin-left: 125px;
padding: 24px 30px;
@media only screen and (max-width: 425px) {
    width: 95%;
    padding: 24px 30px;
}
@media only screen and (max-width: 768px) {
    padding: 18px 25px;
}
@media only screen and (max-width: 1440px) {
    margin-left: 0px;
}
`;