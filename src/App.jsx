import {useState} from 'react'
import Container from "./components/Container";
import Display from './components/Display'
import Button from './components/Button';

const App = () => {
  const [calValue, setCalValue] = useState("")

  const onClickHandler=(clickedBtn)=>{
    if (clickedBtn === "C") {
      setCalValue("")
    } else if (clickedBtn === "=") {
      const result = eval(calValue)
      setCalValue(result)
    } else{
      const displayValue =  calValue + clickedBtn
      setCalValue(displayValue)
    }
  }

  return (
    <>
      <Container>
        <Display displayValue={calValue}/>
        <Button onClickHandler={onClickHandler} />
      </Container>
    </>
  );
}

export default App