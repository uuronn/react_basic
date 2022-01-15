import { useEffect, useState } from "react";

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
        <div>
          <p>{timer}</p>
          <button disabled={disabled} onClick={onClickStart}>スタート</button>
        </div>
        <div>キャラクターコンポーネント</div>
        <div>オプションコンポーネント</div>
        <div>おみくじコンポーネント</div>
      </main>
    </>
  );
}
