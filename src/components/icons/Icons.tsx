function Arrow(){
  return(
    <svg
      viewBox="0 0 24 24"
      className="icon"
      style={{transform: "rotate(180deg)"}}
    >
      <path 
        d="M19,11H9l3.29-3.29a1,1,0,0,0,
        0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2,0,
        0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,
        1,0,1,0,1.41-1.42L9,13H19a1,1,0,0,0,0-2Z"
      />
    </svg>
  )
}

function Dropdown() {
  return(
    <svg
      viewBox="0 0 24 24"
      className="icon"
    >
      <path
        d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,
        4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,
        0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,
        3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
      />
    </svg>
  )
}

const iconComponent = {
  'Arrow': <Arrow/>,
  'Dropdown': <Dropdown/>
}
type iconProps = {
  name: 'Arrow' | 'Dropdown'
}

function Icon(props: iconProps){
  return iconComponent[props.name]
}

export {Icon}