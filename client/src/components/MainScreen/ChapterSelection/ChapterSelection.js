import React from 'react'
import { Col } from 'react-bootstrap'
import { 
    ChapterSelectionTitle,
    ChapterSelectionSubTitle,
    ChapterSelectionBox,
} from './ChapterSelectionElements';


const ChapterSelection = ({category}) => {
    return (
        <ChapterSelectionBox background={ Object.values(category.imageUrl) }>
            <Col>
                <ChapterSelectionTitle>
                    {category.category}
                </ChapterSelectionTitle>
                <ChapterSelectionSubTitle>
                    {category.title}
                </ChapterSelectionSubTitle>
            </Col>
        </ChapterSelectionBox>
    )
}

export default ChapterSelection
