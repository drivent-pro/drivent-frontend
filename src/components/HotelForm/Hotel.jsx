import styled from "styled-components";
import HotelDescription from "./HotelDescription";
import { useState } from "react";

export default function HotelCard({$selectedHotel, $hotelSelection}) {

    const [selection, setSelection] = useState(false);

    function selectHotel () {
        if(selection){
            setSelection(false);
        } else {
            setSelection(true);
        }
        
        if($selectedHotel){
            $hotelSelection(false);
        } else {
            $hotelSelection(true);
        }
    };

    return (
        <Container onClick={selectHotel} $bgColor={selection}>
            <HotelImg src="https://static.vecteezy.com/ti/fotos-gratis/t2/22653879-fantasia-ilha-com-cachoeiras-3d-ilustracao-elementos-do-isto-imagem-mobiliado-de-nasa-generativo-ai-gratis-foto.jpg"/>
            <HotelDescription>
                
            </HotelDescription>
        </Container>
    );
};

const Container = styled.div`
    height: 264px;
    width: 196px;
    border-radius: 10px;
    background-color: ${props => props.$bgColor ? "#FFEED2" : "#EBEBEB"};
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HotelImg = styled.img`
    height: 110px;
    width: 170px;
    border-radius: 7px;
`;

