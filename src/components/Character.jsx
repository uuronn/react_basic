export const Character = (props) => {
  const { timer } = props;

  const timerStyle = {
    borderRadius: "20px",
    width: "140px",
    background: "#bdbdbd",
    textAlign: "center",
    lineHeight: "100px",
    marginLeft: "auto",
    marginRight: "auto"
  }
  
  return (
    <div>
      <p style={timerStyle}>
        {timer}
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="35" viewBox="0 0 16 35">
        <g transform="translate(-260 -201)">
          <g transform="translate(265 201)" fill="#fff" stroke="#707070" stroke-width="1">
            <rect width="6" height="6" stroke="none"/>
            <rect x="0.5" y="0.5" width="5" height="5" fill="none"/>
          </g>
            <g transform="translate(263 207)" fill="#fff" stroke="#707070" stroke-width="1">
            <rect width="10" height="17" stroke="none"/>
            <rect x="0.5" y="0.5" width="9" height="16" fill="none"/>
          </g>
          <g transform="translate(260 209)" fill="#fff" stroke="#707070" stroke-width="1">
            <rect width="3" height="12" stroke="none"/>
            <rect x="0.5" y="0.5" width="2" height="11" fill="none"/>
          </g>
          <g transform="translate(264 224)" fill="#fff" stroke="#707070" stroke-width="1">
            <rect width="3" height="12" stroke="none"/>
            <rect x="0.5" y="0.5" width="2" height="11" fill="none"/>
          </g>
          <g transform="translate(273 209)" fill="#fff" stroke="#707070" stroke-width="1">
            <rect width="3" height="12" stroke="none"/>
            <rect x="0.5" y="0.5" width="2" height="11" fill="none"/>
          </g>
          <g transform="translate(269 224)" fill="#fff" stroke="#707070" stroke-width="1">
            <rect width="3" height="12" stroke="none"/>
            <rect x="0.5" y="0.5" width="2" height="11" fill="none"/>
          </g>
        </g>
      </svg>
    </div>
  )
}
