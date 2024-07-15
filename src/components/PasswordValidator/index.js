import {useState} from 'react'

import {
  CompleteValidatorContainer,
  InsideValidateContainer,
  ValidateHeading,
  ValidatorParagraph,
  InputPasswordContainer,
  PasswordErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [userInput, setUserInput] = useState('')

  const handleChange = event => {
    setUserInput(event.target.value)
  }

  const isValidPassword = userInput.length >= 8

  return (
    <CompleteValidatorContainer>
      <InsideValidateContainer>
        <ValidateHeading>Password Validator</ValidateHeading>
        <ValidatorParagraph>
          Check how strong and secure is your password
        </ValidatorParagraph>
        <InputPasswordContainer
          type="password"
          value={userInput}
          onChange={handleChange}
        />
        {!isValidPassword && (
          <PasswordErrorMsg>
            Your password must be at least 8 characters
          </PasswordErrorMsg>
        )}
      </InsideValidateContainer>
    </CompleteValidatorContainer>
  )
}

export default PasswordValidator
