import { styled } from "styled-components";
import UserContext from "../../../contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function Activities() {
  const { userData } = useContext(UserContext);
  const [infoByUser, setInfoByUser] = useState(null);
  const [loading, setLoading] = useState(true);

  function getInfo() {
    axios
      .get(`${import.meta.env.VITE_API_URL}/users/especify/${userData.user.email}`)
      .then((res) => {
        console.log(res.data);
        setInfoByUser(res.data);
        setLoading(false);
        console.log(userData.user.email);
      })
      .catch((error) => {
        console.error(error.response.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    getInfo();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }
  if (!infoByUser.infoByEnrollment) {
    return (
      <>
        <Title>Escolha de atividades</Title>
        <SubtitleForNoPayment>
          Você precisa ter confirmado pagamento antes<br /> de fazer a escolha de atividades
        </SubtitleForNoPayment>
      </>
    );
  }

  if (infoByUser.infoByTicket.TicketType.includesHotel === false) {
    return (
      <>
        <Title>Escolha de hotel e quarto</Title>
        <SubtitleForNoHotel>
        Sua modalidade de ingresso não necessita escolher<br /> atividade. Você terá acesso a todas as atividades.
        </SubtitleForNoHotel>
      </>
    )
  }

  return (
    <>
      <Title>Escolha de atividades</Title>
      <Subtitle>Primeiro, filtre pelo dia do evento: </Subtitle>
      <ConteinerDays>
        <EventDay>Sexta, 22/11</EventDay>
      </ConteinerDays>
    </>
  );
}

const Title = styled.p`
  font-size: 34px;
  line-height: 39.84px;
  margin-bottom: 37px;
`

const Subtitle = styled.p`
  font-size: 20px;
  color: rgba(142, 142, 142, 1);
  line-height: 23.44px;
  margin-bottom: 25px;
`

const SubtitleForNoPayment = styled.p`
  font-size: 20px;
  color: rgba(142, 142, 142, 1);
  line-height: 23.44px;
  margin-top: 255px;
  text-align: center;
`
const SubtitleForNoHotel = styled.p`
  font-size: 20px;
  color: rgba(142, 142, 142, 1);
  line-height: 23.44px;
  margin-top: 255px;
  text-align: center;
`

const ConteinerDays = styled.div`
  display: flex;
  justify-content: space-between;
`

const EventDay = styled.div`
  background-color: rgba(224, 224, 224, 1);
  width: 131px;
  height: 37px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
`