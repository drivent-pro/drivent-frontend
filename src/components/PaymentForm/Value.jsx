import styled from "styled-components"

export default function OptionValue ({children}) {
    return (
        <Value>{children}</Value>
    )
};

const Value = styled.p`
    color: #898989;
    font-size: 14px;
`;