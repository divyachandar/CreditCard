// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px 4px 16px #7b879416;
`

export const CardContainer = styled.div`
  width: 85%;
  padding-top: 8px;
  padding-bottom: 8px;
  @media screen and (min-width: 768px) {
    max-width: 1000px;
  }
`
export const CardHeader = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`
export const CreditCardImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  border-radius: 12px;
  width: 64%;
  height: 33vh;
  min-width: 325px;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 42vh;
    min-width: 520px;
    max-width: 600px;
  }
`
export const CardLogo = styled.img`
  height: 45px;
`
export const CardNumber = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
`
export const CardTitle = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
`
export const CardName = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
`
export const PaymentContainer = styled.div`
  width: 85%;
  padding-top: 8px;
  padding-bottom: 8px;
  @media screen and (min-width: 768px) {
    max-width: 1000px;
  }
`
export const PaymentMethod = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  border-radius: 12px;
  width: 64%;
  height: 33vh;
  min-width: 325px;
  box-shadow: 0px 1px 1px #434451;
  @media screen and (min-width: 768px) {
    width: 50%;
    height: 42vh;
    min-width: 520px;
    max-width: 600px;
  }
`
export const PaymentHeader = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  line-height: 1.2;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`
export const CardNumberInput = styled.input`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  width: 40%;
  height: 36px;
  border: none;
  border-bottom: 0.5px solid #cbd5e1;
  margin-bottom: 20px;
  outline: none;
`
export const CardNameInput = styled.input`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 16px;
  width: 40%;
  height: 36px;
  border: none;
  border-bottom: 0.5px solid #cbd5e1;
  margin-bottom: 20px;
  outline: none;
`
