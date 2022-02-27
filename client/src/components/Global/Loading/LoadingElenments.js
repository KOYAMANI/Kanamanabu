
import styled from 'styled-components';
import { Spinner } from 'react-bootstrap'

export const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const LoadingSpinner = styled(Spinner)`
    width: ${({ width }) => width || "100"};,
    height: ${({ height }) => height || "100"};,
`
