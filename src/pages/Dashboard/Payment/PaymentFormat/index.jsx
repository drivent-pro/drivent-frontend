import PaymentSummary from "./Summary";
import PaymentForm from "./Card";
import PaidMessage from "./PaidMessage";
import { useState } from "react";
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

export default function PaymentComponent({ info }) {
  const [paid, setPaid] = useState(false);

  return (
    <>
      
      <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
        
      <PaymentSummary props={info} />
      {
        paid ?
          <PaidMessage /> :
          <PaymentForm props={[paid, setPaid]} />
      }
    </>
  );
}


const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;