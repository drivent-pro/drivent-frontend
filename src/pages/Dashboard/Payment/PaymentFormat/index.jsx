import PaymentForm from "./Card";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import React from 'react';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

export default function PaymentComponent({ info }) {
  const [paid, setPaid] = useState(false);

  return (
    <>
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
      <>
        <Typography variant="h6" color="#8E8E8E">Ingresso escolhido</Typography>
        <Summary>
          <Typography variant="body1" color="#454545">{info.props.isRemote ? "Online" : ("Presencial" + (info.props.hotel ? "Com Hotel" : "Sem Hotel"))}</Typography>
          <Typography variant="body2" color="#898989">R$ {info.props.price}</Typography>
        </Summary>
      </>
      {
        paid ?
          <>
            <Typography variant="h6" color="textSecondary">Pagamento</Typography>
            <Container>
              <Icon />
              <AlignText>
                <Title>Pagamento confirmado!</Title>
                <Subtitle>Prossiga para escolha de hospedagem e atividades</Subtitle>
              </AlignText>
            </Container>
          </> :
          <PaymentForm props={[paid, setPaid]} />
      }
    </>
  );
}


const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Icon = styled(IoCheckmarkCircleSharp)`
  font-size: 40.33px;
  color: #36B853;
  margin-right: 14px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const sharedTextStyles = `
  color: #454545;
  font-size: 16px;
  line-height: 18.75px;
`;

const Title = styled.h6`
  ${sharedTextStyles}
  font-weight: 700;
`;

const Subtitle = styled.h6`
  ${sharedTextStyles}
  font-weight: 300;
`;

const Summary = styled.div`
    background-color: #FFEED2;
    width: 290px;
    height: 108px;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    margin: 10px 0px;
`