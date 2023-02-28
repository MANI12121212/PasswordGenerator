 import { useState } from 'react';
import './App.css';
import Button from "./Components/Button"
import CheckBox from './Components/CheckBox'
import {  numberArray,
  symbolsArray,
  lowerCaseArray,
  upperCaseArray, } from "./Components/Constant"
import Length from "./Components/Length";
import PasswordGenerator from "./Components/PasswordGenerator";

function App() {
  const [password , setPassword] = useState({
    uppercase : false,
    lowercase : false,
    number : false,
    symbol : false,
    length : 5,
  });
   const [handelText, setHandelText] = useState("");
   const [copied, setCopied] = useState(false);
   const [generatedPass, setGenPass] = useState(false);
    
   const handelUppercaseChange = () => {
    setPassword({
      ...password,
      uppercase: !password.uppercase,
    });
  };
  const handelLowercaseChange = () => {
    setPassword({
      ...password,
      lowercase: !password.lowercase,
    });
  };
  const handelNumberChange = () => {
    setPassword({
      ...password,
      number: !password.number,
    });
  };
  const handelSymbolChange = () => {
    setPassword({
      ...password,
      symbols: !password.symbols,
    });
  };
  const handelLengthChange = (value) => {
    setPassword({
      ...password,
      length: value,
    });
  };

  const generatePassword = () => {
    const { uppercase, lowercase, number, symbols, length } = password;

    const generateWord = (uppercase, lowercase, number, symbols, length) => {
      const availableValue = [
        ...(uppercase ? upperCaseArray : []),
        ...(lowercase ? lowerCaseArray : []),
        ...(number ? numberArray : []),
        ...(symbols ? symbolsArray : []),
      ];

      const shuffleArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
      };

      const char = shuffleArray(availableValue).slice(0, length);
      console.log(char.join(""));
      setHandelText(char.join(""));
      setGenPass(true)
      setInterval(()=>{
        setGenPass(false)

      },3000)
      return  char;
    };
    generateWord(uppercase, lowercase, number, symbols, length);
  };

  return (
    
    <div className="App">
      <h1>PassWord Generator</h1> 
       <header className="App-header">
        <PasswordGenerator
          handelText={handelText}
          setHandelText={setHandelText}
          copied={copied}
          setCopied={setCopied}
        />
        <CheckBox label={"uppercase"} onchange={handelUppercaseChange} />
        <CheckBox label={"lowercase"} onchange={handelLowercaseChange} />
        <CheckBox label={"number"} onchange={handelNumberChange} />
        <CheckBox label={"symbols"} onchange={handelSymbolChange} />
        <Length label={"length"} onchange={handelLengthChange} />
        <Button onclick={generatePassword} generatedPass={generatedPass} setGenPass={setGenPass} />
      </header>
    </div>
  );
}

export default App;
