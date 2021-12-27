
import styled from 'styled-components';
import { Alert } from 'react-bootstrap'

export const ErrorAlert = styled(Alert)`
    fontSize: 30,
    variant: ${({ message }) => message || "Error"};,
`
