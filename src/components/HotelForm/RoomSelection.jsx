import { useState } from "react";
import MOTD from "../PaymentForm/MOTD";
import Rooms from "./Rooms";
import styled from "styled-components";


export default function RoomSelection () {
    const [rooms, setRooms] = useState([1,1,1,1,1,1,1,1,1,1]);

    return (
        <Container>
            <MOTD text={"Ótima pedida! Agora escolha seu quarto:"}></MOTD>
            <RoomContainer>
            {rooms.length === 0 ? "" : rooms.map((r, i) => {
                return <Rooms key={i}></Rooms>
            })}
            </RoomContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
`;

const RoomContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`