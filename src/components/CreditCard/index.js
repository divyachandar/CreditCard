import {useState} from 'react'
import {
  AppContainer,
  CardContainer,
  CardHeader,
  CreditCardImage,
  CardNumber,
  CardTitle,
  CardName,
  PaymentContainer,
  PaymentMethod,
  PaymentHeader,
  CardNumberInput,
  CardNameInput,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const onChangeCardNumber = event => {
    setCardNumber(event.target.value)
  }
  const onChangeCardName = event => {
    setCardName(event.target.value)
  }
  return (
    <AppContainer>
      <CardContainer>
        <CardHeader>CREDIT CARD</CardHeader>
        <CreditCardImage data-testId="creditCard">
          <CardNumber>{cardNumber}</CardNumber>
          <CardTitle>CARDHOLDER NAME</CardTitle>
          <CardName>{cardName}</CardName>
        </CreditCardImage>
      </CardContainer>
      <PaymentContainer>
        <PaymentMethod>
          <PaymentHeader>PAYMENT METHOD</PaymentHeader>
          <CardNumberInput
            type="text"
            value={cardNumber}
            onChange={onChangeCardNumber}
            placeholder="Card Number"
          />
          <CardNameInput
            type="text"
            value={cardName}
            onChange={onChangeCardName}
            placeholder="Cardholder Name"
          />
        </PaymentMethod>
      </PaymentContainer>
    </AppContainer>
  )
}

export default CreditCard
