import React, { useState,useEffect } from "react";
import styles from "./ListItem.module.css";
interface listProps {
    status: boolean,
    title: string,
    time: string
}
export const ListItem: React.FC<listProps> = (props) => {

    const { status } = props;
    const [proprity, setProprity] = useState(1);
    const [title, setTitle] = useState("");
    const [remarks, setRemarks] = useState("");
    const [time, setTime] = useState("");
    const [form, setForm] = useState({
        proprity: proprity,
        title: title,
        remarks: remarks,
        time: time,
    })
    const [list, setList] = useState([{
        proprity: 2,
        status:"true",
        title: "test",
        remarks:"备注",
        time: "xxx",
    }])
    // 添加列表
    const addList = () => {
        setForm({
            proprity: proprity,
            title: time,
            remarks: remarks,
            time: time,
        });
        list.push(form);
        setList(list)
        // setForm({})
        // form.reset();
    }
    // 删除某一项
    // useEffect(() => {
    //     //action on update of list
    // list.splice(0,1);
    // setList(list);

    // }, [list]);
    useEffect(() => {
        console.log(list) //dx1
        // setList([])
      },list)
    const deleteItem = (index) => {
            console.log(index);
            
        // let result = window.confirm("要删除此代办项吗🤔？");
        // if(result == true){
        list.splice(index,1)
        // set
       
        
    }
    return (
        <>
            <div className={styles.content}>
                <div className="f-a-sb">
                    <form style={{ width: "100%" }} id="input_form" >
                        <table style={{ width: "100%" }}  >
                            <thead>
                                <tr >
                                    <th className={styles["th-title"]}>优先级</th>
                                    <th className={styles["th-title"]}>状态</th>
                                    <th className={styles["th-title"]}>事件</th>
                                    <th className={styles["th-title"]}>备注</th>
                                    <th className={styles["th-title"]}>时间</th>
                                    <th className={styles["th-title"]}>操作</th>
                                </tr>
                            </thead>
                            <tbody className={styles.showInput}  >
                                {status ? (
                                    <tr className={styles.add}>
                                        <td>
                                            <select name="l_pro" id="" className={styles.select} onChange={(e) => setProprity(e.target.value)
                                            }>
                                                <option value="1" >
                                                    1
                                                </option>
                                                <option value="2" >
                                                    2
                                                </option>

                                            </select>

                                            {/* <span className={styles.status}>{(<i className="iconfont">&#xe710;</i>)<i className="iconfont" style={{color:"#17C2C2"}}>&#xe60f;</i>}</span> */}
                                        </td>
                                        <td>
                                            {/* <span className={styles.status}>{(<i className="iconfont">&#xe710;</i>)<i className="iconfont" style={{color:"#17C2C2"}}>&#xe60f;</i>}</span> */}
                                            <i className="iconfont">
                                                &#xe710;
                                            </i>
                                        </td>
                                        <td>
                                            <input type="text" className={styles.input} onChange={(e) => setTitle(e.target.value)} />
                                        </td>
                                        <td>
                                            <input type="text" className={styles.input} onChange={(e) => setRemarks(e.target.value)} />
                                        </td>
                                        <td>
                                            <input type="datetime-local" id="" className={styles.input} onChange={(e) => setTime(e.target.value)} />
                                        </td>
                                        <td>
                                            <input type="button" className={styles.btn} style={{ backgroundColor: "#27C841" }} onClick={addList} value="添加" />
                                            <input type="reset" className={styles.btn} style={{ backgroundColor: "#FF6057" }} value="取消" />
                                        </td>
                                    </tr>)
                                    : null
                                }
                            </tbody>
                            <tbody>
                                {list.map((item, key) => {
                                    return (
                                        <tr key={key} className={styles["list-item"]}>
                                            <td>
                                                <select disabled  value={item.proprity}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" className={styles.input} value={item.title} disabled={true} />
                                            </td>
                                            <td>
                                            <input type="text" className={styles.input} value={item.status} disabled={true} />
                                               </td>
                                            <td>
                                            <input type="text" className={styles.input} value={item.remarks} disabled={true} />
                                            </td>
                                            <td>
                                            <input type="text" className={styles.input} value= {item.time}f disabled={true} />
                                                
                                               </td>
                                            <td>
                                                <input type="button" className={styles.btn} style={{ backgroundColor: "#FFC02E" }} value="修改" />
                                                <input type="button" className={styles.btn} style={{ backgroundColor: "#27C841" }} value="完成" />
                                                <input type="button" className={styles.btn} style={{ backgroundColor: "#9266F9" }} value="撤销" />
                                                {/* <input type="button" className={styles.btn} style={{ backgroundColor: "#FF6057" }} onClick={()=> (setList(list.splice(key,1)))} value="删除" /> */}
                                                <input type="button" className={styles.btn} style={{ backgroundColor: "#FF6057" }} onClick={()=> (deleteItem(key))} value="删除" />
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </form>
                    {/* <div className="f-a">
                    <span className={styles.status}>{!status?(<i className="iconfont">&#xe710;</i>):<i className="iconfont" style={{color:"#17C2C2"}}>&#xe60f;</i>}</span>
                    <h2 style={{color:"#101419",marginRight:"10px"}}>{title}</h2>
                    <span className={styles.remarks}>.....
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eum reiciendis ipsum aperiam incidunt ducimus. Aspernatur deleniti eos ducimus at saepe similique quia voluptatibus, voluptas eveniet neque vero error fugit.
                    .</span>
                </div>
                <div>
                    <span className={styles.time}>
                        {time}
                    </span>
                </div> */}
                </div>
            </div>
        </>
    )
}