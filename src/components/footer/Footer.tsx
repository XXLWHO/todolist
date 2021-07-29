import React from "react";
import styles from "./Footer.module.css";
export const Footer:React.FC = ()=>{
    return(
        <>
        <div className ={styles.footer}>
        <div className="f-a-sa ">
                    <div className ={styles.item}>
                        <span className={styles["item-on-btn"]}>
                           <i className={[`iconfont ${styles["item-hover-btn"]}`]}>&#xe81c;</i> 
                        </span>
                    </div>
                    <div className ={styles.item}>
                        <span className={styles["item-on-btn"]}>
                            <i className={[`iconfont ${styles["item-hover-btn"]}`]}>
                            &#xe60f;
                            </i>
                        </span>
                    </div>
                    <button className ={styles.item}>
                        <span className={styles["item-on-btn"]}>
                        <i className={[`iconfont ${styles["item-hover-btn"]}`]}>
                        &#xe710;
                        </i>
                        </span>
                    </button>
            </div>
        </div>
        </>
    )
}