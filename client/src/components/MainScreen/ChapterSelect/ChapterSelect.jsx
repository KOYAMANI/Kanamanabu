import React from "react";
import styles from "./ChapterSelect.module.css";
import Kana from "../../../data/mainMenuSelections";


function ChapterSelect() {

    let Hiragana = Kana.slice(0,9);
    console.log(Hiragana)

    return (
        <div className={styles.main}>
            {/* <div className={styles.row}>
                <span className={styles.capital}> </span>
                <span>a</span>
                <span>i</span>
                <span>u</span>
                <span>e</span>
                <span>o</span>
                <span className={styles.practicenow}>Practice now</span>
            </div>
            <div className={styles.row}>
                <span className={styles.capital}>k</span>
                {Hiragana.map((HiraganaLetters, index) => {
                    return (
                        <span>{HiraganaLetters.letters}</span>
                    )
                })}
                <span className={styles.practicenow}>Practice now</span>
            </div> */}
            {Hiragana.map((HiraganaCategories, index) => {
                return (
                    <div className="styles.row">
                        <span className="styles.capital">{HiraganaCategories.consonant}</span>
                        {HiraganaCategories.letters.map((HiraganaLetters, index) => {
                            return (
                                <span>{HiraganaLetters}</span>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default ChapterSelect;