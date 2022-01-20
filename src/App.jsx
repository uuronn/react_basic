import { useEffect, useState } from "react";
import { Timer } from "./components/Timer";
import { Character } from "./components/Character";
import { Menu } from "./components/Menu";
import { Divination } from "./components/Divination";

export const App = () => {
  const time = 5
  const [timer, setTimer] = useState(time)
  const [disabled, setDisabled] = useState(false)

  const onClickStart = () => {
    setDisabled({disabled: true});
    // const aaa = console.log("test")
    // const timerID = setInterval(() => {
    //   setTimer(prevState => prevState - 1)
    // }, 1000)
    setTimeout(() => {
      setTimer(prevState => prevState - 1)
    }, 1000)
  }

  const onClickStop = () => {
    // clearInterval(this.aaa);
  }
  
  useEffect(() => {
    if(timer === time) return;
    if(timer === 0) return;
    onClickStart()
  }, [timer])
  
  return (
    <>
      <header>ヘッダーコンポーネント</header>
      <main>
        <Timer
          timer={timer}
          disabled={disabled}
          onClickStart={onClickStart}
          onClickStop={onClickStop}
        />
        <Character timer={timer}/>
        <Menu/>
        <Divination/>
      </main>
    </>
  );
}
