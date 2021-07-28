import React from "react";
import styles from "./PopWindow.module.css";
interface propsType {
    title:string,
    time:string,
    remarks:string | null,
    priority:number | null
}
export const PopWindow:React.FC<propsType>=({title,time,remarks,priority})=>{
    return (
        <>
            <div>
                <div className ={styles.pop}></div>
                <div className ="f-j" >
                     <div className ={styles["content-box"]} style={{position:"relative"}}>
                            <form >
                                <table style={{width:"100%"}}>
                                    <thead >
                                        <tr className="f-j" style={{borderBottom:"1px solid #007AFF",paddingBottom:"5px"}}>
                                            <th className={styles["title"]}>今日TODO</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        <tr className={styles["item-one"]}>
                                            <td className="f-a">
                                                <span className={styles["item-one-title"]}>
                                                    标题:
                                                </span>
                                            <input type="text" value= {title} className={styles["item-input"]}/>
                                               </td>
                                        </tr>
                                        <tr className={styles["item-one"]}>
                                            <td className="f-a">
                                                <span className={styles["item-one-title"]}>
                                                    标题:
                                                </span>
                                            <input type="text" value= {title} className={styles["item-input"]}/>
                                               </td>
                                        </tr>
                                        <tr className={styles["item-one"]}>
                                            <td className="f-a">
                                                <span className={styles["item-one-title"]}>
                                                    标题:
                                                </span>
                                            <input type="text" value= {title} className={styles["item-input"]}/>
                                               </td>
                                        </tr>
                                      
                                    </tbody>
                                    <tfoot className={ `${styles["item-btns"]} f-a-sb` }>
                                        <button className={styles.btn} style={{backgroundColor:"#17C2C2"}}>确认</button>
                                        <button className={styles.btn} style={{backgroundColor:"#FC9B17"}}>关闭</button>
                                    </tfoot>
                                </table>
                            </form>
                    </div>
                </div>
               
            </div>
        </>
    )
}