import "./Icons.css"

const iconStyle: React.CSSProperties = {
  fillRule: "evenodd",
  clipRule: "evenodd",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeMiterlimit: 1.5,
}

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="icon svg-arrow">
    <path 
      d="M19,11H9l3.29-3.29a1,1,0,0,0,
      0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2,0,
      0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,
      1,0,1,0,1.41-1.42L9,13H19a1,1,0,0,0,0-2Z"
    />
  </svg>
)
const Dropdown = () => (
  <svg viewBox="0 0 24 24" className="icon">
    <path
      d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,
      4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,
      0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,
      3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"
    />
  </svg>
)
const Menu = () => (
  <svg className="icon svg-menu" viewBox="0 0 100 100" style={iconStyle}>
    <rect className="top" x="0" y="10" width="100" height="10" fill="var(--black)"/>
    <rect className="middle" x="0" y="45" width="100" height="10" fill="var(--black)"/>
    <rect className="bottom" x="0" y="80" width="100" height="10" fill="var(--black)"/>
  </svg>
)
const Recife = () => (
  <svg className="image svg-recife" viewBox="0 0 390 445" style={iconStyle}>
    <path
      d="m167.151 137.614 23.442 15.8-27.392 29.091-3.168 44.082-39.625 
      59.252-33.236 36.044-13.424-11.919.385-26.094 7.259-6.746 12.37-27.004-1.454-14.822 
      2.096-11.169 5.338-5.563 6.945-24.283 10.079-13.483 
      24.133-16.074 26.252-27.112ZM25.359 236.136l9.685 8.183m73.793-68.413 6.766 
      6.48m-33.541 93.162-23.79-11.192m15.793 23.316-18.615-2.14m25.153 30.701-14.979 
      9.855M1.692 433.548l15.887 9.605 8.494-6.543 3.263-11.03 11.899-6.745 7.497-5.746 
      38.555-49.916-2.554-.623-42.628 52.715-4.474 2.562-3.702-.103-6.419 4.222-3.227 
      2.954-22.591 8.648Zm7.27-72.846 36.13-4.745 5.42-4.064 
      18.473-21.896-13.076-15.735-2.526-10.421 6.913-57.137-8.724-6.959-9.43.7-7.098 
      3.874m-9.685-8.183 18.611-12.491 12.82-4.756 14.187-8.824.706-2.615 16.891-13.691 
      1.342-3.819 4.138-3.339 3.939-.621 10.215-7.983 1.768-6.704 4.079-2.098-1.609-2.755 
      5.412-5.046-4.168-4.272 1.205-1.254-8.18-5.672.491-2.014 10.711-12.252 6.541-6.25 
      37.981-26.295 4.271-17.677 3.086-2.577 18.745 15.075 5.465 2.126 13.146-9.854 
      14.558-22.002 13.755-9.166 2.483-4.344 24.57-15.687 61.09-22.997 28.618 11.401 
      35.965-26.15"
      style={{stroke: "var(--white)", fill: "var(--black)"}}
    />
  </svg>
)
const ReadingFlow = () => (
  <svg className="icon" viewBox="0 0 1269 603" style={iconStyle}>
    <g>
      <rect x="7.683" y="7.286" width="1253.68" height="250" style={{fill: "none"}}/>
      <rect x="7.683" y="457" width="549.886" height="137.786" style={{fill: "none"}}/>
      <path
        d="M138.949,132.286l997.41,-4.122l-997.41,404.122l300,-0"
        style={{ fill: "none", stroke: "#fff", strokeWidth: "40px" }}
      />
      <path
        d="M138.949,132.286l997.41,-4.122l-997.41,404.122l300,-0"
        style={{ fill: "none", strokeLinecap: "butt", strokeMiterlimit:2 }}
      />
      <circle cx="1136.11" cy="128.373" r="29.42" style={{ fill: "#fff" }}/>
      <circle cx="140.272" cy="132.539" r="29.42" style={{ fill: "#fff" }}/>
      <circle cx="138.949" cy="532.032" r="29.42" style={{ fill: "#fff" }}/>
      <circle cx="436.612" cy="532.286" r="29.42" style={{ fill: "#fff" }}/>
    </g>
  </svg>
)
const Database = () => (
  <svg className="icon" viewBox="0 0 1267 590" style={iconStyle}>
    <g>
      <g>
        <rect x="7.829" y="132.286" width="500.981" height="450.022" style={{fill: "none"}}/>
        <path d="M7.829,277.191l500.982,-0" style={{fill: "none"}}/>
      </g>
      <g>
        <rect x="757.829" y="7.302" width="500.981" height="450.022" style={{fill: "none"}}/>
        <path d="M757.829,152.207l500.982,0" style={{fill: "none"}}/>
      </g>
      <path d="M508.811,382.308l125,-0l-0.491,-149.995l124.509,0" style={{fill: "none"}}/>
    </g>
  </svg>
)
const Network = () => (
  <svg className="icon" viewBox="0 0 1186 490" style={iconStyle}>
    <g>
      <path d="M36.066,453.315l169.142,-336.55l697.506,286.398l245.899,-366.526" style={{fill: "none"}}/>
      <circle cx="902.669" cy="403.163" r="29.42" style={{fill: "#fff"}}/>
      <circle cx="206.021" cy="122.003" r="29.42" style={{fill: "#fff"}}/>
      <circle cx="36.066" cy="453.315" r="29.42" style={{fill: "#fff"}}/>
      <circle cx="1148.61" cy="36.637" r="29.42" style={{fill: "#fff"}}/>
    </g>
  </svg>
)

const ColumnFirst = () => (
  <svg className="svg-column-first" viewBox="0 0 725 2571" style={iconStyle}>
    <path
      d="m32.043 37.686-.686 238.2 77.161 86.744-1.761 181.474s-1.149 11.044 3.889 22.301c5.336 11.924 11.818 17.838 11.818 17.838l3.217 1950.28 505.723 3.481-1.191-2126.41 62.63.993V183.849L615.379 31.444l-583.336 6.25Z"
      style={{fill: "#000"}}
    />
    <path
      d="m32.043 37.686-.686 238.2 77.161 86.744-1.761 181.474s-1.149 11.044 3.889 22.301c5.336 11.924 11.818 17.838 11.818 17.838l3.217 1950.28 505.723 3.481-1.191-2126.41 62.63.993V183.849L615.379 31.444l-583.336 6.25Z"
      style={{fill: "none", stroke: "#000", strokeWidth: "62.5px"}}
    />
    <path
      d="m32.043 37.686-.686 238.2 77.161 86.744-1.761 181.474s-1.149 11.044 3.889 22.301c5.336 11.924 11.818 17.838 11.818 17.838l3.217 1950.28 505.723 3.481-1.191-2126.41 62.63.993V183.849L615.379 31.444l-583.336 6.25Zm660.8 374.893H629.34M108.518 362.63l-77.161-86.744"
      style={{fill: "none", strokeWidth: "12.5px", strokeLinecap: "round", strokeMiterlimit: 1.5}}
    />
    <path
      d="m31.357 275.886.686-238.2 583.336-6.25m77.464 377.034V183.841L615.379 31.436M106.515 363.563c26.782-72.976 122.478-118.355 220.685-127.136"
      style={{fill: "none", strokeWidth: "12.5px", strokeLinecap: "round", strokeMiterlimit: 1.5,}}
    />
    <path
      d="M368.087 419.026c-121.552 7.922-220.779 51.221-241.662 101.577-3.071 7.407-4.448 14.966-3.951 22.589l.011.159-.017 40.892c-9.85-10.429-14.795-21.97-15.801-34.373-5.009-61.788 113.933-125.758 262.089-137.769l-.669 6.925Z"
      style={{strokeWidth: "12.5px", strokeLinecap: "round", strokeMiterlimit: 1.5}}
    />
    <path
      d="m106.757 544.104.453-180.541-.095 32.097m18.566 2138.86-3.138-1982.03-.079-42.975M277.487 2535.56l-4.75-2102.25m-104.321 2101.5.427-2045.83.007-16.223M631.658 2467.07l-2.89-2053.5"
      style={{fill: "none", strokeWidth: "12.5px", strokeLinecap: "round", strokeMiterlimit: 1.5}}
    />
  </svg>
)
const ColumnSecond = () => (
  <svg className="svg-column-second" viewBox="0 0 544 2021" style={iconStyle}>
    <path
      d="m7.497 12.16-.729 197.675 60.852 68.409-.349 139.072s-.919 8.836 3.112 17.842c4.269 9.539 9.454 14.271 9.454 14.271l2.574 1560.3 404.6 2.786-1.651-1624.74 50.874-.079-.069-48.78V230.501L421.369 7.727 7.497 12.162Z"
      style={{fill: "#000", strokeWidth: "12.5px"}}
    />
    <path
      d="M67.077 272.875c21.427-58.384 97.988-94.689 176.558-101.714"
      style={{fill: "none", strokeWidth: "12.5px"}}
    />
    <path
      d="M276.346 317.248c-97.247 6.338-176.632 40.979-193.339 81.266-2.458 5.926-3.559 11.974-3.162 18.072l.009.128-.013 32.715c-7.88-8.344-11.837-17.577-12.642-27.5-4.007-49.433 91.151-100.611 209.682-110.221l-.535 5.54Z"
      style={{strokeWidth: "12.5px"}}
    />
    <path
      d="m67.271 417.316.362-144.44-.076 25.678M82.411 2009.73l-2.51-1585.7-.064-34.382M203.863 2010.62l-3.801-1681.94m-82.816 1679.33-.512-1634.81-.005-12.964M487.214 1955.77 485.05 417.8"
      style={{fill: "none", strokeWidth: "12.5px"}}
    />
  </svg>
)

const Icon = ({name}: {name?: string}) => {
  switch (name) {
    case 'Recife': return <Recife/>
    case 'ColumnFirst': return <ColumnFirst/>
    case 'ColumnSecond': return <ColumnSecond/>
    case 'Dropdown': return <Dropdown/>
    case 'Menu': return <Menu/>
    case 'ReadingFlow': return <ReadingFlow/>
    case 'Database': return <Database/>
    case 'Network': return <Network/>
    default:
    case 'Arrow': return <Arrow/>
  }
} 

export {Icon}