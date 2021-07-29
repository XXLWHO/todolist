import React,{ useState} from "react";
import styles from "./Header.module.css";
export const Header:React.FC = (props)=>{
    const {getStatus} = props;
    const [isShow,setShow] = useState(false);
    const isShowPop = (isShowAdd) => {
        isShowAdd =!isShowAdd;
        setShow(isShowAdd);
        getStatus(isShowAdd)
    }
    return (
        <>
            <div className={`f-a-sb ${styles.header}`}>
                <div className={styles.title}>
                    <h1 >TODO</h1>
                </div>
                <div className ={styles.btns}  onClick={()=>isShowPop(isShow)}>
                    <button className={styles.btn}><i className="iconfont icon-add" >&#xe60c;</i></button>
                </div>
            </div>
        </>
    )
}