import styled from "styled-components";

const Button = styled.button`
    color: var(--white);
    border: 2px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 10px;
    text-decoration: none;
    display: inline-block;
    transition: background-color .5s ease-in;

    &:hover,
    &:focus {
      background-color: var(--primaryBold);
    }
`;

export default Button;