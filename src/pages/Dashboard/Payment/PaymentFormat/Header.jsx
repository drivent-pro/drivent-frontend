import Typography from '@mui/material/Typography';
import styled from 'styled-components';

export default function PaymentHeader(){
    return (
        <>
          <StyledTypography variant="h4">Ingresso e pagamento</StyledTypography>
        </>
    )
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;