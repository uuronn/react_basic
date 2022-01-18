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
    setTimeout(() => {
      setTimer(prevState => prevState - 1)
    }, 1000)
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
        <Timer timer={timer} disabled={disabled} onClickStart={onClickStart}/>
        <Character/>
        <Menu/>
        <Divination/>
      </main>
    </>
  );
}
