import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import Homepage from "./pages/Homepage";
import Popup from "./pages/Popup";
 import { useState } from "react";
function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [head, setHead] = useState("Popup title");
  const [desc,setDesc] = useState("Descrption");

   function handlepopup(){
     setIsPopupOpen(!isPopupOpen)
   };
   const head_func = (label,description)=>{
        setHead(label);
        setDesc(description);
   }

  
  return (  
    <>  
      <div>
        <Popup isOpen={isPopupOpen} onClose={handlepopup} title={head}  note={desc}/>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signup onClose={handlepopup} pop_func = {head_func} />} />
          <Route path="/signin" element={<Signin onClose={handlepopup} pop_func = {head_func}/>} />
          <Route path="/dashboard" element={<Dashboard pop_func = {head_func}  onClose={handlepopup} />} />
          <Route path="/send" element={<SendMoney   onClose={handlepopup}  pop_func = {head_func} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
