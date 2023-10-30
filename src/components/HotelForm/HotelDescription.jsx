import styled from "styled-components"

export default function HotelDescription () {
    return (
        <HotelInfo>
            <HotelTitle>Nome do Hotel</HotelTitle>
            <Acomodations>
                <Subtitle>
                    Tipos de acomodações:
                </Subtitle>
                <SubDescription>
                    single, double and triple
                </SubDescription>
            </Acomodations>
            <Vacancy>
                <Subtitle>
                    Vagas disponíveis:
                </Subtitle>
                <SubDescription>
                    10
                </SubDescription>
            </Vacancy>
        </HotelInfo>
    )
};

const HotelInfo = styled.div`
    height: 120px;
    width: 170px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px 0px;
`;

const HotelTitle = styled.p`
    font-size: 20px;
    color: #343434;
`;

const Acomodations = styled.div`
    font-size: 10px;
`;

const Vacancy = styled.div`
    font-size: 10px;
`;

const Subtitle = styled.p`
    color: #3C3C3C;
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 5px;
`;

const SubDescription = styled.p`
    color: #3C3C3C;
    font-size: 12px;
`;