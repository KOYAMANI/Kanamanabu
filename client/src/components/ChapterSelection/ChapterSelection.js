import React from 'react';
import { ChapterSelectionContainer } from "./ChapterSelectionElements";
import { useSelector } from "react-redux";

const ChapterSelection =()=> {

    const chapter = useSelector(state => state.currentChapter);
    const {currentChapter} = chapter;

    return (
            <ChapterSelectionContainer>

                <div>{currentChapter?
                    (currentChapter[0].title === 'hiragana'
                    ||currentChapter[0].title === 'katakana')?
                    <div>
                        {currentChapter.map(selection =>
                            <div key={selection.consonant}>
                                <span className="styles.capital" >
                                    {selection.consonant}
                                </span>
                                <span>{selection.letters}</span>
                            </div>
                        )}
                    </div>
                        :<p>{currentChapter[0].title}</p>
                    : 'no selection'
                }</div>
           < / ChapterSelectionContainer>
        );
}


export default ChapterSelection;