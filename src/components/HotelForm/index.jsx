import { Typography } from "@mui/material";
import styled from "styled-components";
import HotelSelection from "./HotelSelection";
import RoomSelection from "./RoomSelection";
import { useState } from "react";

export default function HotelForm() {
    const [selectedHotel, setSelectedHotel] = useState(false);

    function hotelSelection () {
        setSelectedHotel(true);
    };

  return (
    <Wrapper>
    <StyledTypography variant="h4">Escolha de Hotel e Quarto</StyledTypography>
    <HotelSelection $selectedHotel={selectedHotel} $hotelSelection={hotelSelection}></HotelSelection>
    {selectedHotel ? <RoomSelection></RoomSelection> : ""}
    </Wrapper>
  )
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Wrapper = styled.main`
  font-family: "Roboto", sans-serif;
`;