import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import 'react-credit-cards-2/dist/es/styles-compiled.css'
import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import { FormWrapper } from '../../../../components/PersonalInformationForm/FormWrapper';
import { formatCreditCardNumber, formatcvv, formatExpirationDate } from './utils';
import { toast } from 'react-toastify';

export default function PaymentForm(props) {
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvv: '',
        name: '',
        focus: '',
        issuer: ''
    });

    const handleInputChangPayment = (evt) => {
        const { name, value } = evt.target;
      
        const formatValue = {
          number: formatCreditCardNumber,
          expiry: formatExpirationDate,
          cvv: formatcvv,
        };
      
        const formattedValue = formatValue[name] ? formatValue[name](value) : value;
      
        setState((prev) => ({ ...prev, [name]: formattedValue }));
      };

    const handleSubmit = e => {
        e.preventDefault();
        const set = props.props[1];
        set(true);
        toast('Informações salvas com sucesso!');
    };

    return (
        <>
            <Typography variant="h6" color="#8E8E8E">Pagamento</Typography>
            <FormWrapper onSubmit={handleSubmit}>
                <Container>
                    <Cards
                        number={state.number}
                        expiry={state.expiry}
                        cvv={state.cvv}
                        name={state.name}
                        focused={state.focus}
                    />
                    <Form>
                        <input
                            type="tel"
                            name="number"
                            required
                            placeholder="Card Number"
                            className="big"
                            value={state.number}
                            onChange={handleInputChangPayment}
                            onFocus={handleInputFocus}
                        />
                        <Typography variant="subtitle1" color="#8E8E8E">E.g.: 49..., 51..., 36..., 37...</Typography>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Name"
                            className="big"
                            value={state.name}
                            onChange={handleInputChangPayment}
                            onFocus={handleInputFocus}
                        />
                        <div>
                            <input
                                type="tel"
                                name="expiry"
                                required
                                placeholder="Valid thru"
                                className="small"
                                value={state.expiry}
                                onChange={handleInputChangPayment}
                                onFocus={handleInputFocus}
                            />
                            <input
                                type="tel"
                                name="cvv"
                                required
                                placeholder="cvv"
                                className="small"
                                value={state.cvv}
                                onChange={handleInputChangPayment}
                                onFocus={handleInputFocus}
                            />
                        </div>
                    </Form>
                </Container>
                <FinishPaymentButton type="submit">FINALIZAR PAGAMENTO ??</FinishPaymentButton>
            </FormWrapper>
        </>
    );
}

const Container = styled.span`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    margin: 10px 0px;
`

const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    max-width: 400px;

    input{
        max-height: 40px;
        border-radius: 7px;
        border: solid 1px #8E8E8E;
        padding: 10px;

        color: #454545;
        font-size: 18px;
    }

    div{
        display: flex;
        gap: 10px;
    }

    .big{
        width: 100%;
    }

    .small{
        width: 50%;
    }
`

const FinishPaymentButton = styled.button`
  cursor: pointer;
  padding: 11px;
  border-radius: 4px;
  border: none;
  background: #E0E0E0;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.25);
  font-size: 14px;
  margin-top: 25px;
`