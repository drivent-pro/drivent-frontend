import styled from "styled-components";
import MOTD from "../PaymentForm/MOTD";
import { useState } from "react";
import HotelCard from "./Hotel";

export default function HotelSelection ({$hotelSelection, $selectedHotel}) {
    const [hotels, setHotels] = useState([1,2,2]);

    return (
        <>
        <MOTD text={"Primeiro, escolha o seu hotel"}></MOTD>
        <WrapperHotelSelection>
        {hotels.length === 0 ? "" : hotels.map((h, i) => {
            return <HotelCard key={i} $selectedHotel={$selectedHotel} $hotelSelection={$hotelSelection}/>
        })}
        </WrapperHotelSelection>
        </>
    );
};

const WrapperHotelSelection = styled.div`
    display: flex;
    margin-bottom: 20px;
    `