import { useEffect, useState } from "react";
import { Timer } from "./components/Timer";

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
        <div>キャラクターコンポーネント
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="35" viewBox="0 0 16 35">
  <g id="グループ_1" data-name="グループ 1" transform="translate(-260 -201)">
    <g id="長方形_1" data-name="長方形 1" transform="translate(265 201)" fill="#fff" stroke="#707070" stroke-width="1">
      <rect width="6" height="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="5" height="5" fill="none"/>
    </g>
    <g id="長方形_2" data-name="長方形 2" transform="translate(263 207)" fill="#fff" stroke="#707070" stroke-width="1">
      <rect width="10" height="17" stroke="none"/>
      <rect x="0.5" y="0.5" width="9" height="16" fill="none"/>
    </g>
    <g id="長方形_3" data-name="長方形 3" transform="translate(260 209)" fill="#fff" stroke="#707070" stroke-width="1">
      <rect width="3" height="12" stroke="none"/>
      <rect x="0.5" y="0.5" width="2" height="11" fill="none"/>
    </g>
    <g id="長方形_5" data-name="長方形 5" transform="translate(264 224)" fill="#fff" stroke="#707070" stroke-width="1">
      <rect width="3" height="12" stroke="none"/>
      <rect x="0.5" y="0.5" width="2" height="11" fill="none"/>
    </g>
    <g id="長方形_7" data-name="長方形 7" transform="translate(273 209)" fill="#fff" stroke="#707070" stroke-width="1">
      <rect width="3" height="12" stroke="none"/>
      <rect x="0.5" y="0.5" width="2" height="11" fill="none"/>
    </g>
    <g id="長方形_8" data-name="長方形 8" transform="translate(269 224)" fill="#fff" stroke="#707070" stroke-width="1">
      <rect width="3" height="12" stroke="none"/>
      <rect x="0.5" y="0.5" width="2" height="11" fill="none"/>
    </g>
  </g>
</svg>

        </div>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="79" height="56" viewBox="0 0 79 56">
  <g id="グループ_2" data-name="グループ 2" transform="translate(-417.5 -113.5)">
    <g id="長方形_9" data-name="長方形 9" transform="translate(417.5 113.5)" fill="#230707" stroke="#fff" stroke-width="1">
      <rect width="79" height="12" rx="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="78" height="11" rx="5.5" fill="none"/>
    </g>
    <g id="長方形_12" data-name="長方形 12" transform="translate(417.5 157.5)" fill="#230707" stroke="#fff" stroke-width="1">
      <rect width="79" height="12" rx="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="78" height="11" rx="5.5" fill="none"/>
    </g>
    <g id="長方形_15" data-name="長方形 15" transform="translate(417.5 135.5)" fill="#230707" stroke="#fff" stroke-width="1">
      <rect width="79" height="12" rx="6" stroke="none"/>
      <rect x="0.5" y="0.5" width="78" height="11" rx="5.5" fill="none"/>
    </g>
  </g>
</svg>
</div>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="277" height="506" viewBox="0 0 277 506">
  <g id="長方形_14" data-name="長方形 14" fill="#c3ce88" stroke="#707070" stroke-width="1">
    <rect width="277" height="506" stroke="none"/>
    <rect x="0.5" y="0.5" width="276" height="505" fill="none"/>
  </g>
</svg>
</div>
      </main>
    </>
  );
}
