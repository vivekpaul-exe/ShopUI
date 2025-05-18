import styled from "styled-components";

const ButtonContainer =  styled.button`
     text-transform:capitalize;
     font-size:1.4rem;
     background:transparent;
     border:0.05rem solid #8D5FB9;
     border-color : ${props => (props.cart ? "#19161F": "var(--lightBlue)")};
     color: ${prop => (prop.cart ? "#19161F" : "var(--lightblue)")};
     border-radius : 0.5rem;
     padding : 0.2rem 0.5rem;
     cursor:pointer;
     margin:0.2rem 0.5rem 0.2rem 0;     
     transition:all 0.5s ease-in-out;
     &:hover {
         background:${prop => prop.cart ? "#19161F" : "var(--lightBlue)"};
        //  background: var(--mainYellow);
         color:#8D5FB9;

     }
     &:focus{
        outline: none;
     }`;
export default ButtonContainer;