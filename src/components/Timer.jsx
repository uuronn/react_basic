export const Timer = (props) => {
  const { timer, disabled, onClickStart, onClickStop } = props;
  
  return (
    <div>
      <p>{timer}</p>
      <button disabled={disabled} onClick={onClickStart}>スタート</button>
      <button onClick={onClickStop}>ストップ</button>
    </div>
    )
  }
