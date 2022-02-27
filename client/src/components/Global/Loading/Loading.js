import React from 'react'
import { 
    LoadingContainer, 
    LoadingSpinner 
} from './LoadingElenments';


const Loading = ({size = 100}) => {
    return (
        <LoadingContainer>
            <LoadingSpinner 
            width = {size}
            height = {size}
            animation = "border"
            />       
        </LoadingContainer>
    )
}

export default Loading
