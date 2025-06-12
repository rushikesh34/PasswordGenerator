import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [lenght, setlength] = useState(8);
  let [password, setpassword] = useState("");
  let [isnumber, setisnumber] = useState(false);
  let [ischar, setischar] = useState(false);
  let passref=useRef(null)
  console.log(ischar)

let copypassword= useCallback(()=>{
  passref.current.select();
  navigator.clipboard.writeText(passref.current.value)

},[isnumber,ischar,lenght])

  let passwordgenerator = useEffect(()=>{
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (isnumber) {
      str="0123456789"+str ;
      console.log(str)
    }
    if (ischar){
      str="!@#$%&*?"+str ;
      console.log(str)
    } 
    if(ischar && isnumber){
      str="0123456789!@#$%&*?"+str;
    }

    for (let i = 1; i <= lenght; i++) {
      let randomnumber = Math.floor((Math.random() * str.length) + 1);
      console.log(randomnumber)
      pass = pass + str.charAt(randomnumber);
    }
    setpassword(pass);

  },[isnumber,ischar,lenght])

 
  return (
    <>
    <img id="logo" src="./public/logo.png" alt="logo" />
    <h1>Password Generator</h1>
 
      <div className="outerbox">
        
        <div className="main">
          
          <input
            id="pass"
            type="text"
            placeholder="password"
            value={password}
            ref={passref}
          />
          <button id="cpbtn"
          onClick={()=>{
            copypassword();
          }}>Copy</button>
        </div>
      
        <div className="inputs">
          <div className="range input">
            <label htmlFor="range">Range </label>
            <input id="range" type="range" min={0} max={20}
            onChange={(e)=>{
              setlength(e.target.value);
            }}/> <span>Lenght {lenght}</span>
          </div>

          <div className="cheakbox input">
            <label htmlFor="checknum">Numbers </label>
            <input
              type="checkbox"
              id="checknum"
              className="cheak"
              onClick={() => {
                setisnumber(!isnumber);
              }}
            />
          </div>

          <div className="cheakbox input">
            <label htmlFor="checkchar">Special Characters </label>
            <input
              type="checkbox"
              id="checkchar"
              className="cheak"
              onClick={() => {
                setischar(!ischar);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
