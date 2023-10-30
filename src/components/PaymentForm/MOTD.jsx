import styled from "styled-components";

export default function MOTD ({text}) {
    return (
        <Paragraph>
            {text}
        </Paragraph>
    )
};

const Paragraph = styled.p`
    color: #8E8E8E;
    font-size: 20px;
    margin-bottom: 20px;
`;