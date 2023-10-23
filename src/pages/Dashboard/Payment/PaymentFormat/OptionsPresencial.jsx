import React, { useState } from "react";
import styled from "styled-components";
import Typography from '@mui/material/Typography';

const OptionButton = ({ label, price, isSelected, onClick }) => (
  <ModalityButton onClick={onClick} className={isSelected ? 'selected' : ''}>
    <h6>{label}</h6>
    <p>{`+ R$ ${price}`}</p>
  </ModalityButton>
);

export default function OptionsPresencial({ setBookSelected, hotel, setHotel }) {
  return (
    <Container>
      <h1>Opções de Hospedagem</h1>
      <h2>Selecione a opção de hospedagem desejada:</h2>
      <Buttons>
        <OptionButton
          label="Sem Hotel"
          price={0}
          isSelected={!hotel}
          onClick={() => setHotel(false)}
        />
        <OptionButton
          label="Com Hotel"
          price={350}
          isSelected={hotel}
          onClick={() => setHotel(true)}
        />
      </Buttons>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    font-family: Roboto;
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #000;
    margin-bottom: 30px;
  }

  h2 {
    font-family: Roboto;
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #8E8E8E;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

const ModalityButton = styled.div`
  cursor: pointer;
  width: 145px;
  height: 145px;
  border-radius: 20px;
  border: 1px solid #CECECE;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 24px;

  h6 {
    color: #454545;
    font-size: 16px;
    margin-bottom: 3px;
  }

  p {
    color: #898989;
    font-size: 14px;
  }

  &.selected {
    border: none;
    background: #FFEED2;
  }
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
  color: #8E8E8E;
`;
