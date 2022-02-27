import React from 'react';
import { useSelector } from "react-redux";
import styles from "./ChaptertSideMenu.module.css";
import {Link, useNavigate} from "react-router-dom";
import QuizSelectionCard from "../../Quiz/QuizSelection/QuizSelectionCard";
const ChapterSideMenu =()=> {

    const chapter = useSelector(state => state.currentChapter);
    const {currentChapter} = chapter;

    let navigate = useNavigate();

    const onClickHandler = (category, subcategory) =>{
        console.log(category)
        console.log(subcategory)
        navigate('/quiz',{state: {category: category, subcategory:subcategory}});
    }

    return (
            <div className={styles.main}>
                {currentChapter?
                (currentChapter[0].title === 'hiragana'
                ||currentChapter[0].title === 'katakana')?
                <div>
                    {currentChapter.map(chapter =>
                        <div className={styles.row} key={chapter.consonant}>
                            <div className={styles.letters} >
                                {chapter.consonant}
                            </div>
                            {chapter.letters.map(letters =>
                                <div className={styles.letters} >
                                    {letters}
                                </div>
                            )}
                            <button className={styles.practiceButton}
                                    key={chapter.consonant}
                                    onClick={
                                        () => onClickHandler(chapter.title, chapter.consonant)}>
                                Practice now
                            </button>
                        </div>
                    )}
                </div>
                    :<div className={styles.letters}>
                        {currentChapter[0].title}
                    </div>
                : 'no chapter'
            }</div>
        );
}


export default ChapterSideMenu;