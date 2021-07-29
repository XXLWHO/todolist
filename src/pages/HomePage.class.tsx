import React, { useState } from "react";
import styles from "./HomePage.module.css";

 class HomePage extends React.Component {
     state ={
         type:"wait",
         isShow:false,
         form:{
            proprity: "1",
            remarks:"",
            time:"",
            title:"",
            status:"true"
         },
         list:[
            {
                proprity: "1",
                remarks:"备注",
                time:"2021-7-29 4:44",
                title:"代办1",
                status:"true"
            },
            {
                proprity: "1",
                remarks:"备注",
                time:"2021-7-29 4:44",
                title:"代办2",
                status:"true"
            }
         ],
         finish_list:[
            {
                proprity: "1",
                remarks:"备注",
                time:"2021-7-29 4:44",
                title:"已完成的代办项目",
                status:"false"
            }
         ],
         history_list:[{
            proprity: "1",
            remarks:"备注",
            time:"2021-7-29 4:44",
            title:"历史记录",
            status:"false"
        }]
     }
    addItem = ()=>{
        let proprity = String(window.sessionStorage.getItem("proprity"));
        let remarks = String(window.sessionStorage.getItem("remarks"));
        let title= String(window.sessionStorage.getItem("title"));
        let time = String(window.sessionStorage.getItem("time"));
        let status = String(window.sessionStorage.getItem("status"));
        console.log(proprity,remarks);
        this.state.list.push(
            {
                proprity: proprity,
                remarks:remarks,
                time:time,
                title:title,
                status:"true"
            }
        );
        this.setState({list: this.state.list})
        window.sessionStorage.setItem("proprity","1")
        window.sessionStorage.setItem("remarks","")
        window.sessionStorage.setItem("title","")
        window.sessionStorage.setItem("time","")
       window.sessionStorage.setItem("status","true")
    }
    deleteItem =(index)=>{
        switch (this.state.type) {
            case "wait":
                this.state.list.splice(index, 1);
                this.setState({ list: this.state.list})
                break;
            case "finish":
                this.state.finish_list.splice(index, 1);
                this.setState({ finish_list: this.state.finish_list})
                    break;
            case "history":
                this.state.history_list.splice(index, 1);
                this.setState({ history_list: this.state.history_list})
                    break;
        }
       
        
    }
    changeList =(type)=>{
        console.log(    );
        
        this.setState({type:type})
        console.log(this.state.type);
        
    };
    finishItem = (index)=>{
        this.state.finish_list.push(this.state.list[index]);
        this.state.list[index].status = "false";
        this.state.list.splice(index,1);
        this.setState({finish_list:this.state.finish_list})
    }
    historyItem = (index)=>{
        this.state.history_list.push(this.state.list[index]);
        this.state.list.splice(index,1);
        this.setState({finish_list:this.state.finish_list})
    }
    showAdd = (isShow)=>{
        this.state.isShow = !isShow;
        this.setState({isShow:this.state.isShow})
    }
    recoveryItem = (index)=>{ 
        this.state.finish_list[index].status = "true";
        this.state.list.push(this.state.finish_list[index]);
        this.state.finish_list.splice(index,1);
        this.setState({finish_list:this.state.finish_list});
    }
    changeItem = (index)=>{
        console.log(index);
        
    }
    render() {
    const { list,finish_list,history_list,type} = this.state;
    let data;
    const judge = (type) =>{
        switch (type) {
            case "wait":
                data  = list;
                break;
            case "finish":
                    data  = finish_list;
                    break;
            case "history":
                data  = history_list;
                break;
        }
    }
    judge(type)
    return (
        <>
            <div>
                <div className={`f-a-sb ${styles.header}`}>
                    <div className={styles.title}>
                        <h1 >TODO</h1>
                    </div>
                    <div className={styles.btns} >
                        <button className={styles.btn} onClick={()=>this.showAdd(this.state.isShow)}><i className="iconfont icon-add" >&#xe60c;</i></button>
                    </div>
                </div>
            </div>
            <div>
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
                            <tbody className={styles.showInput}   >
                                    <tr className={this.state.isShow?styles.add:styles.noDisplay} >
                                        <td>
                                            <select  className={styles.select} onChange={(e) => {window.sessionStorage.setItem("proprity",e.target.value)}
                                            }>
                                                <option value="1" >
                                                    1
                                                </option>
                                                <option value="2" >
                                                    2
                                                </option>
                                                <option value="3" >
                                                    3
                                                </option>
                                            </select>
                                        </td>
                                        <td>
                                            <i className="iconfont">
                                                &#xe710;
                                            </i>
                                        </td>
                                        <td>
                                            <input type="text" className={styles.input}  onChange={(e) => {window.sessionStorage.setItem("title",e.target.value)}} />
                                        </td>
                                        <td>
                                            <input type="text" className={styles.input} onChange={(e) => {window.sessionStorage.setItem("remarks",e.target.value)}} />
                                        </td>
                                        <td>
                                            <input type="datetime-local" id="" className={styles.input} onChange={(e) => {window.sessionStorage.setItem("time",e.target.value)}} />
                                        </td>
                                        <td>
                                            <input type="button" className={styles.btn} style={{ backgroundColor: "#27C841" }}  value="添加" onClick={this.addItem}/>
                                            <input type="reset" className={styles.btn} style={{ backgroundColor: "#FF6057" }} value="取消" />
                                        </td>
                                    </tr>
                            </tbody>
                            <tbody>
                                {data.map((item, key) => {
                                    return (
                                        <tr key={key} className={styles["list-item"]}>
                                            <td>
                                                <select disabled={true}  value={item.proprity}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </td>
                                            <td>
                                                {item.status =="true"? <i className="iconfont">&#xe710;</i> :  <i className="iconfont" style={{color:"#27C841"}}>&#xe60f;</i>}
                                            </td> 
                                             <td>
                                                <input type="text" className={styles.input} value={item.title} disabled={true} />
                                            </td>
                                            <td>
                                            <input type="text" className={styles.input} value={item.remarks} disabled={true} />
                                            </td>
                                            <td>
                                            <input type="text" className={styles.input} value= {item.time} disabled={true} />
                                                
                                               </td>
                                            <td>
                                            {this.state.type == "wait"?
                                                <input type="button" className={styles.btn} style={{ backgroundColor: "#FEBD2E" }} value="更改" onClick={()=>this.changeItem(key)}/>:""
                                                }
                                                {this.state.type == "wait"?
                                                <input type="button" className={styles.btn} style={{ backgroundColor: "#27C841" }} value="完成" onClick={()=>this.finishItem(key)}/>:""
                                                }
                                                {this.state.type=="finish"?
                                                <input type="button" className={styles.btn} style={{ backgroundColor: "#27C841" }} value="恢复" onClick={()=>this.recoveryItem(key)}/>:""

                                                }
                                                {this.state.type !="history"?
                                                <input type="button" className={styles.btn} style={{ backgroundColor: "#9266F9" }} value="撤销" onClick={()=>this.historyItem(key)}/>:""
                                                }
                                                {/* <input type="button" className={styles.btn} style={{ backgroundColor: "#FF6057" }} onClick={()=> (setList(list.splice(key,1)))} value="删除" /> */}
                                                <input type="button" className={styles.btn} style={{ backgroundColor: "#FF6057" }}  value="删除" onClick={()=>this.deleteItem(key)} />
                                            </td>
                                        </tr>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
            </div>
                                <div>
                                <div className ={styles.footer}>
        <div className="f-a-sa ">
                    <div className ={styles.item}>
                        <span className={styles["item-on-btn"]} onClick={()=>this.changeList("wait")}>
                        <i className="iconfont"> 
                               &#xe81c;
                               </i> 
                        </span>
                    </div>
                    <div className ={styles.item}>
                        <span className={styles["item-on-btn"]} onClick={()=>this.changeList("finish")}>
                            <i className="iconfont">
                            &#xe60f;
                            </i>
                        </span>
                    </div>
                    <button className ={styles.item}>
                        <span className={styles["item-on-btn"]} onClick={()=>this.changeList("history")}>
                        <i className="iconfont">
                        &#xe710;
                        </i>
                        </span>
                    </button>
            </div>
        </div>
                                </div>
        </>
    )
}

}
export const Home =HomePage;