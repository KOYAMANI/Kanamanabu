
import React from 'react'
import { ErrorAlert } from './ErrorMessageElements'

const ErrorMessage = ({
    variant= "info", 
    children
}) => {
    return (
        <ErrorAlert 
        variant = {variant}>
            <strong>{children}</strong>
        </ErrorAlert>
    )
}

export default ErrorMessage