import Typography from "@mui/material/Typography";
import styled from "styled-components";
import TicketOptions from "./TicketType";
import { useState } from "react";
import MOTD from "./MOTD";

export default function PaymentForm() {
    const [firstOption, setFirstOption] = useState(false);
    const [secondOption, setSecondOption] = useState(false);
    const [total, setTotal] = useState(0);

    console.log({firstOption, secondOption})
  

    function selectFirstOption (selected) {
        if (selected) {
            setFirstOption(false);
        } else {
            setFirstOption(true);
        }
    };

    function selectSecondOption (selected) {
        if (selected) {
            setSecondOption(false);
        } else {
            setSecondOption(true);
        }
    };

  return (
    <Wrapper>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      <TicketOptions
        $selectFirst={selectFirstOption}
        $firstType={"Presencial"}
        $firstValue={"R$ 250"}
        $secondType={"Online"}
        $secondValue={"R$ 100"}
        $message={"Primeiro, escolha sua modalidade de ingresso"}
      ></TicketOptions>
      {firstOption ? <TicketOptions
      $selectSecond={selectSecondOption}
      $firstType={"Sem Hotel"}
      $firstValue={"+ R$ 0"}
      $secondType={"Com Hotel"}
      $secondValue={"+ R$ 350"}
      $message={"Ótimo! Agora escolha sua modalidade de hospedagem"}
      ></TicketOptions> : ""}
      {firstOption && secondOption ? <MOTD text={`Fechado! O total ficou em R$ ${total}. Agora é só confirmar:`}></MOTD> : ""}
    </Wrapper>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;

const Wrapper = styled.main`
  font-family: "Roboto", sans-serif;
`;
