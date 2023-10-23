import { useEffect, useState } from "react";
import styled from "styled-components";
import Typography from '@mui/material/Typography';
import useToken from '../../../../hooks/useToken.js';
import { toast } from 'react-toastify';
import axios from 'axios';

async function saveTicketInformation(ticketTypeId) {
  const body = { ticketTypeId };
  return axios.post(`${import.meta.env.VITE_API_URL}/tickets`, body, config);
}

function showSuccessNotification() {
  toast('Informações salvas com sucesso!');
}

function handleRequestError(error) {
  console.error(error);
  toast('Não foi possível salvar suas informações!');
}


export default function ConfirmaBooking({total, ticket, setCardPage}) {
  const token = useToken();
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }

  async function bookingId(ticket) {
    const ticketTypeId = ticket.id;
  
    try {
      const response = await saveTicketInformation(ticketTypeId);
      showSuccessNotification();
      return response.data;
    } catch (error) {
      handleRequestError(error);
    }
  }
  
  return (
    <>
      <StyledTypography variant="h6">Fechado! O total ficou em <strong>R$ {total},00</strong>. Agora é só confirmar:</StyledTypography>
      <bookingIdButton onClick={() => bookingId(ticket)}>RESERVAR INGRESSO</bookingIdButton>

    </>
  )
}


const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
  color: #8E8E8E;

  &:nth-child(1) {
    color: #000000;
  }
`;
const bookingIdButton = styled.button`
  cursor: pointer;
  padding: 11px;
  border-radius: 4px;
  border: none;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
`
