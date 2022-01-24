export const Menu = () => {

  const menuStyle = {
    position: "absolute",
    right: "0",
    top: 0,
    width: "60px",
    height: "auto"
  }

  const onClickMenu = () => {
    alert("test")
  }
  
  return (
    <div>
      <svg onClick={onClickMenu} xmlns="http://www.w3.org/2000/svg" width="79" height="56" viewBox="0 0 79 56" style={menuStyle}>
        <g transform="translate(-417.5 -113.5)">
          <g transform="translate(417.5 113.5)" fill="#230707" stroke="#fff" stroke-width="1">
            <rect width="79" height="12" rx="6" stroke="none"/>
            <rect x="0.5" y="0.5" width="78" height="11" rx="5.5" fill="none"/>
          </g>
          <g transform="translate(417.5 157.5)" fill="#230707" stroke="#fff" stroke-width="1">
            <rect width="79" height="12" rx="6" stroke="none"/>
            <rect x="0.5" y="0.5" width="78" height="11" rx="5.5" fill="none"/>
          </g>
          <g transform="translate(417.5 135.5)" fill="#230707" stroke="#fff" stroke-width="1">
            <rect width="79" height="12" rx="6" stroke="none"/>
            <rect x="0.5" y="0.5" width="78" height="11" rx="5.5" fill="none"/>
          </g>
        </g>
      </svg>
      <div>
        <button>タイマーページ</button>
        <button>おみくじページ</button>
      </div>
    </div>
  )
}