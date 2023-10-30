import styled from "styled-components";
import personIcon from "../../assets/images/bi_person.svg";
import { useState } from "react";

export default function Rooms () {
    const [vacantRooms, setVacantRooms] = useState([1,2]);

    return (
        <Room>
            <Number>Number</Number>
            <Vacancy>
            {vacantRooms.map((vr, i) => <Availability key={i} src={personIcon}/>)}
            </Vacancy>
        </Room>
    );
};

const Room = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    width: 190px;
    height: 45px;
    border: 1px solid #CECECE;
    border-radius: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
`;

const Number = styled.div`

`;

const Availability = styled.img`

`;

const Vacancy = styled.div`

`