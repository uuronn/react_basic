export const Timer = (props) => {
  const { timer, disabled, onClickStart } = props;
  
  return (
    <div>
      <p>{timer}</p>
      <button disabled={disabled} onClick={onClickStart}>スタート</button>
    </div>
    )
  }
