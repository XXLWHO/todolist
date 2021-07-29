// import styles from "./App.module.css";
import { useState} from "react";
import { Header,Footer,PopWindow,ListItem} from "./components"
function App() {
  const list =[
    {
      status:"11",
      title:"11",
      time:"111"
    }]
    const [isShow,setShow] = useState(false);
    const changeStatus = (status)=>{
      setShow(status);
    }
  return (
    <div className="App">
           <Header getStatus={changeStatus} />
     {list.map((item,key)=>{
       return (
             <ListItem key={key} list={item} status={isShow}/>
       )
     })}
     <Footer/>
      {/* {
        isShow? <PopWindow/>:""
      }
    */}
    </div>
  );
}

export default App;
