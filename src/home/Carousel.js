import './../_custom.scss';
import React from 'react';
import styles from './../page.module.css';

const Carousel = ()=>{
    const classImage="img-fluid opacity-100"
    const arr = [<img className={classImage} src='https://raw.githubusercontent.com/taylorhelene/Comic-website-with-no-boilerplate/main/public/images/hulk.png'/>,<img className={classImage} src='https://raw.githubusercontent.com/taylorhelene/Comic-website-with-no-boilerplate/main/public/images/starwars.png'/>,<img className={classImage} src='https://raw.githubusercontent.com/taylorhelene/Comic-website-with-no-boilerplate/main/public/images/naruto.png'/>]
    let [imgArr,setImage]=React.useState(0);

    setTimeout(()=>{
        if (imgArr<arr.length-1){setImage(imgArr+1)} else setImage(imgArr=0)
    },2000)
    return(
        <div className={styles.carousel}>
            {arr[imgArr]}
        </div>
    )
}
export default Carousel;