import styles from './../page.module.css';
import React from 'react';
const Game=(props)=>{
    return(
        <div className =""> 
            <div className={styles.card}>
            <img src={props.src} className={styles.image}/>
            <p>{props.name}</p>
            <p> {props.date} </p>
            </div>
        </div>
    )

}

export default Game;