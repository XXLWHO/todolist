import React from "react";
import styles from "./Footer.module.css";
export const Footer:React.FC = ()=>{
    return(
        <>
        <div className ={styles.footer}>
        <div className="f-a-sa ">
                    <div className ={styles.item}>
                        <span>
                           <i className="iconfont">&#xe81c;</i> 
                        </span>
                    </div>
                    <div className ={styles.item}>
                        <span>
                            <i className="iconfont">
                            &#xe60f;
                            </i>
                        </span>
                    </div>
                    <div className ={styles.item}>
                        <span>
                        <i className="iconfont">
                        &#xe710;
                        </i>
                        </span>
                    </div>
            </div>
        </div>
        </>
    )
}