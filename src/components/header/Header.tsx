import React from "react";
import styles from "./Header.module.css";
export const Header:React.FC = ()=>{
    return (
        <>
            <div className={`f-a-sb ${styles.header}`}>
                <div className={styles.title}>
                    <h1 >TODO</h1>
                </div>
                <div className ={styles.btns}>
                        <button className={styles.btn}><i className="iconfont icon-add" >&#xe60c;</i></button>
                </div>
            </div>
        </>
    )
}