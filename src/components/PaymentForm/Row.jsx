import styled from "styled-components"

export default function Row ({children}) {
    return (
        <RowContainer>
          {children}
        </RowContainer>
    )
};

const RowContainer = styled.section`
    display: flex;
    margin-bottom: 30px;
`;