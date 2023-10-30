import styled from "styled-components"

export default function OptionType ({children}) {
    return (
        <Type>{children}</Type>
    )
};

const Type = styled.p`
    color: #454545;
    font-size: 16px;
    margin-bottom: 5px;
`