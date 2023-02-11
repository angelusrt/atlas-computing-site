import { useEffect, useRef } from "react"
import { transition, useAnimateOnScroll } from "../../functions/transition"
import "./Icons.css"

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

function Recife() {
  const ref = useRef<SVGSVGElement>(null!)

  useAnimateOnScroll(
    '.svg-recife', transition
  )

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      const isMobile = window.innerWidth < 725
      const scrollUnit = isMobile ? window.scrollY/40 : window.scrollY/20
      const offset = isMobile ? 765 : 790

      const rotate = scrollUnit - offset

      ref.current.style.transform = `
        rotateX(${rotate}deg) 
        rotateZ(0deg)
      `
    })
  },[])
  
  return(
    <svg 
      ref={ref}
      className="svg-recife"
      viewBox="0 0 3875 4646" 
      style={{
        fillRule: "evenodd", 
        clipRule: "evenodd", 
        strokeLinecap: "round", 
        strokeLinejoin: "round",
        strokeMiterlimit: 1.5
      }}
    >
      <path 
        style={{
          fill:"none",
          strokeWidth:"12.7px"
        }}
        d="M957.856,3402.08l14.907,-18.252l14.564,
        -39.251l-18.4,-73.169m2238.55,
        -2029.28l162.199,109.322l-189.534,
        201.285l-21.916,305.012l-274.177,
        409.978l-229.963,249.391l-92.886,
        -82.468l2.662,-180.549l50.231,
        -46.676l85.589,-186.845l-10.063,
        -102.561l14.503,-77.277l36.934,
        -38.492l48.055,-168.019l69.737,
        -93.287l166.987,-111.224l181.642,
        -187.59Zm-3079.16,1537.03l29.763,
        159.474l77.898,68.369l288.612,
        -8.048l357.801,151.447l76.39,
        -28.506l68.123,3.57l42.286,
        -14.29l30.641,26.864l24.737,
        -10.902l-134.498,-147.028l55.678,
        -35.478l26.101,-49.278l31.315,
        -22.798l8.734,-18.615l1251.03,
        -101.049l37.503,-28.123l127.816,
        -151.499l-90.476,-108.875l-17.479,
        -72.108l47.837,-395.343l-60.367,
        -48.15l-65.244,4.844l-64.616,
        35.629l-108.318,64.945l-96.702,
        97.374l-73.168,37.308l-209.498,
        14.637l-93.478,21.092l-55.426,
        60.438l-48.768,73.583l-20.516,
        44.585l-138.11,97.814l-70.998,
        4.619l-126.39,-61.669l-232.138,
        -215.356l-115.44,-76.079l-170.53,
        -44.651l-86.772,-7.471l-92.611,
        -52.249l-84.831,42.031l-330.013,
        270.77l-40.559,47.335l-8.21,
        97.117l46.323,93.736l6.74,
        66.021l-2.125,76.403l1.958,
        37.56Zm1253.51,-326.645l61.357,
        -12.597l65.743,-46.301l9.585,
        -34.4l71.552,-80.712l5.47,
        -19.403l64.525,-68.644l90.545,
        -41.006l220.53,-13.361l54.225,
        -64.155l55.309,-35.333l131.467,
        -108.747l143.031,-90.458l88.699,
        -32.908l98.162,-61.054l4.884,
        -18.094l116.876,-94.733l9.288,
        -26.424l28.63,-23.102l27.254,
        -4.296l70.681,-55.239l12.234,
        -46.388l28.224,-14.511l-11.136,
        -19.067l37.445,-34.915l-28.836,
        -29.552l8.335,-8.681l-56.596,
        -39.244l3.397,-13.935l74.109,
        -84.772l45.26,-43.246l262.799,
        -181.944l29.549,-122.307l21.351,
        -17.833l129.706,104.305l37.81,
        14.712l90.959,-68.178l100.73,
        -152.241l95.17,-63.418l17.185,
        -30.059l170.003,-108.538l-4.904,
        -40.526l-91.461,-91.789l-55.852,
        -58.804l-194.84,-124.614l-256.395,
        -133.999l-175.557,-77.113l-64.281,
        -26.543l-344.222,46.871l-423.477,
        36.782l-156.574,29.91l-488.858,
        -79.026l-121.858,14.823l-205.781,
        109.783l-90.183,26.778l-8.316,
        14.686l-22.775,-2.019l-422.185,
        76.338l28.563,45.826l-2.844,14.71l23.091,
        32.652l4.957,71.608l-50.359,
        129.475l49.027,146.896l-4.091,
        55.589l-30.855,57.684l-133.276,
        150.922l-32.315,98.898l5.647,
        36.939l-20.185,118.375l27.394,
        95.395l85.974,99.265l14.788,
        38.112l1.383,109.075l-19.843,
        29.331l-39.304,84.183l-25.886,
        35.503l-39.292,155.611l5.868,
        80.292l59.9,79.697l88.283,
        23.657l8.964,-21.083l117.976,
        36.308l40.338,12.897l97.724,
        63.657l220.214,184.851l105.658,
        89.683l54.509,13.233Zm-998.342,
        730.889l-149.203,15.535l-49.464,
        35.82l-39.593,43.403l-57.705,
        122.906l-57.374,84.645l-9.917,
        44.066l-11.822,64.612l20.294,
        34.043l69.969,20.125l53.149,
        -11.607l76.424,23.707l86.788,
        -19.822l52.514,-27.946l83.063,
        25.272l14.908,16.704l104.2,
        20.908l27.068,28.248l39.887,
        7.254l6.471,-13.126l48.939,
        21.228l-61.597,37.396l-98.386,
        5.136l-43.11,20.494l-66.4,-8.309l-17.224,
        16.385l-3.261,47.488l12.286,
        18.579l-78.273,101.287l-15.902,
        43.664l5.87,45.159l37.513,34.992l100.689,
        197.428l90.439,63.968l42.124,
        57.279l-20.961,45.543l791.784,
        192.996l247.582,-424.314l3.985,
        -69.758l65.719,-44.22l56.394,-143.692l63.899,
        -26.833l115.985,-177.37l269.715,
        -360.609l-19.596,-17.512l1.202,
        -18.343l58.776,-45.271l22.578,-76.316l82.329,
        -46.671l51.869,-39.76l266.775,
        -345.377l-17.676,-4.309l-294.947,
        364.746l-30.959,17.725l-25.612,
        -0.714l-44.414,29.215l-22.334,
        20.435l-156.31,59.839l-250.192,
        63.395l-296.238,37.894l-18.135,18.914l-101.528,
        1.221l-16.205,14.989l-126.996,
        -7.925l-94.207,-50.312l-111.729,38.769l-38.126,
        -7.707l-30.703,14.428l-37.604,-20.584l-46.957,
        6.044l-9.488,16.878l-46.446,2.859l-16.702,
        -12.601l-56.936,-2.371l-71.119,-49.761l15.484,
        -68.212l-30.601,-32.816l-141.475,-38.073l-17.524,
        -13.958l-87.928,-14.971l-23.247,5.326l-24.545,
        -7.777Zm514.651,-34.052l149.266,257.348m-60.069,
        -281.157l151.779,249.335m91.967,-1013.45l-13.009,
        66.571m539.352,-279.668l26.886,54.758m204.893,
        -83.999l73.306,38.719m6.57,
        -108.622l57.674,45.437m97.009,-171.825l69.642,
        57.646m510.587,-473.363l46.815,44.836m-232.072,
        644.609l-164.611,-77.437m109.272,
        161.322l-128.796,-14.805m174.036,
        212.427l-103.639,68.187" 
      />
    </svg>
  )
}

function Cables() {
  const ref = useRef<SVGSVGElement>(null!)

  useAnimateOnScroll(
    '.svg-cables', transition
  )

  window.addEventListener("scroll", (e) => {
    const isMobile = window.innerWidth < 725
    const scrollUnit = isMobile ? window.scrollY/40 : window.scrollY/20
    const offset = isMobile ? 780 : 825

    const rotate = scrollUnit - offset

    ref.current.style.transform = `
      rotateX(${rotate}deg) 
      rotateZ(${isMobile ? 30 : 0}deg)
    `
  })

  return (
    <svg
      ref={ref}
      className="svg-cables"
      viewBox="0 0 6469 5934"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.5,
      }}
    >
      <g>
        <path
          style={{
            fill: "none",
            strokeWidth: "12.5px",
          }}
          d="M2428.1,3162.07l57.309,154.984l152.047,
          145.613l500.109,114.108l938.074,-414.659l555.102,
          -442.634l533.092,-477.989l138.183,-630.407l-204.424,
          -376.54l-195.789,-193.325l-381.968,-140.243m-0,0l559.535,
          -193.211l499.231,835.536l-65.203,909.968l-383.224,
          547.394l-598.672,429.713l-1325.89,403.099l-543.419,
          3.922l-601.445,-341.716l-122.919,-418.717m0,-0l160.256,
          143.2l211.159,17.34l118.854,-75.436m-490.269,-85.104l-72.984,
          130.856l-245.322,391.354l-1612.53,901.814m4512.84,
          -3600.01l307.505,257.106l136.319,188.04l-16.342,302.289l-137.857,
          242.686l-762.088,484.41m-2109.54,701.457l141.871,
          106.465l229.731,17.469l118.667,-38.83m-490.269,-85.104l-29.423,
          138.995l-181.575,459.471l-1719.84,825.558m4512.84,
          -3600.01l487.273,-893.986l1455.2,1328.89l-92.871,2419.48l-1998.53,
          2170l-4363.92,-1424.37m1930.84,-1424.02l129.501,
          283.779l391.658,267.276l741.342,160.053l1204.92,-412.012l591.019,
          -452.707l422.076,-534.409l93.68,-843.207l-455.656,-723.658l-537.97,
          74.433m-2580.57,2180.45l161.804,74.165l220.964,17.617l107.501,
          -6.678m-490.269,-85.104l-4.768,173.348l-95.061,494.082l-1831.01,
          756.594m4512.84,-3600.01l360.592,171.925l183.475,228.802l172.709,
          327.746l-176.322,562.875l-1107.98,901.154l-829.194,413.226l-473.106,
          -71.246l-155.209,-139.756l-66.698,-133.634m-490.269,
          -85.104l143.463,259.595l406.68,267.042l708.245,121.846l1105.59,
          -421.862l598.981,-435.355l432.055,-527.847l108.002,
          -780.153l-405.478,-632.007l-516.972,-31.711m-2580.57,2180.45l14.963,
          734.741l-1945.8,689.283m4512.84,-3600.01l328.683,226.136l163.856,
          253.9l-15.841,307.305l-138.168,243.023l-689.563,521.439m351.033,
          -1551.8l578.077,-292.149l587.708,910.229l-105.75,1151.34l-490.369,
          618.25l-735.734,475.535l-1135.17,290.825l-832.181,-111.509l-361.542,
          -358.527l-87.039,-508.008m2230.97,-624.185l-456.8,503.606l-622.988,
          422.845l-409.082,-14.002l-169.43,-99.649l-82.402,-103.511m2091.74,
          -2261.09l607.295,-623.784l902.071,1037.23l26.87,1841.22m-1536.24,
          -2254.67l611.281,-380.101l615.28,890.353l9.565,1407.81m-3648.04,
          471.409l-170.087,-213.483m2582,-2175.99l643.181,-488.173l699.17,
          924.196l-5.852,1657.83m-1336.5,-2093.85l569.257,-771.509l1212.84,
          1259.06l-126.414,2184.83l-1894.81,1848.21l-4273.71,-920.578m2421.11,
          -1338.92l42.235,168.863l138.293,157.874l563.7,160.708l1014.52,
          -416.775l574.113,-438.076l476.355,-509.306l134.746,-714.81l-343.558,
          -528.635l-510.104,-145.399m-471.027,1479l-449.411,510.325l-525.014,
          420.148l-373.711,9.375l-139.477,-77.329l-131.659,-75.958l-107.392,
          113.656l-212.79,14.723m2410.48,-2393.93l349.403,206.383l180.209,
          242.927l111.907,306.594l-188.766,501.366l-1064.55,831.263l-800.562,
          457.275l-441.541,-37.621l-169.699,-108.997l-66.698,-133.634m3327.86,
          -343.03l-577.132,735.868l-837.013,482.858l-1166.15,285.263l-886.319,
          -225.679l-282.483,-372.746l-69.035,-647.638m3918.5,-82.134l-839.057,
          887.725l-1400.56,737.674l-3609.72,-119.241m6049.08,-1345.34l-858.044,
          991.76l-1360.36,870.066l-3830.68,-516.483"
        />
      </g>
    </svg>
  );
} 

function ReadingFlow() {
  return(
    <svg
      className="svg-project"
      viewBox="0 0 1269 603"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit:1.5,
      }}
    >
      <g>
        <rect
          x="7.683"
          y="7.286"
          width="1253.68"
          height="250"
          style={{
            fill: "none",
            strokeWidth: "12.7px",
          }}
        />
        <rect
          x="7.683"
          y="457"
          width="549.886"
          height="137.786"
          style={{
            fill: "none",
            strokeWidth: "12.7px",
          }}
        />
        <path
          d="M138.949,132.286l997.41,
          -4.122l-997.41,404.122l300,-0"
          style={{
            fill: "none",
            stroke: "#fff",
            strokeWidth: "37.5px",
          }}
        />
        <path
          d="M138.949,132.286l997.41,
          -4.122l-997.41,404.122l300,-0"
          style={{
            fill: "none",
            strokeWidth: "12.5px",
            strokeLinecap: "butt",
            strokeMiterlimit:2,
          }}
        />
        <circle
          cx="1136.11"
          cy="128.373"
          r="29.42"
          style={{
            fill: "#fff",
            strokeWidth: "12.5px",
          }}
        />
        <circle
          cx="140.272"
          cy="132.539"
          r="29.42"
          style={{
            fill: "#fff",
            strokeWidth: "12.5px",
          }}
        />
        <circle
          cx="138.949"
          cy="532.032"
          r="29.42"
          style={{
            fill: "#fff",
            strokeWidth: "12.5px",
          }}
        />
        <circle
          cx="436.612"
          cy="532.286"
          r="29.42"
          style={{
            fill: "#fff",
            strokeWidth: "12.5px",
          }}
        />
      </g>
    </svg>
  )
}

function Database() {
  return (
    <svg
      className="svg-project"
      viewBox="0 0 1267 590"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit:1.5,
      }}
    >
      <g>
        <g>
          <rect
            x="7.829"
            y="132.286"
            width="500.981"
            height="450.022"
            style={{
              fill: "none",
              strokeWidth: "12.7px",
            }}
          />
          <path
            d="M7.829,277.191l500.982,-0"
            style={{
              fill: "none",
              strokeWidth: "12.5px",
            }}
          />
        </g>
        <g>
          <rect
            x="757.829"
            y="7.302"
            width="500.981"
            height="450.022"
            style={{
              fill: "none",
              strokeWidth: "12.7px",
            }}
          />
          <path
            d="M757.829,152.207l500.982,0"
            style={{
              fill: "none",
              strokeWidth: "12.5px",
            }}
          />
        </g>
        <path
          d="M508.811,382.308l125,
          -0l-0.491,-149.995l124.509,0"
          style={{
            fill: "none",
            strokeWidth: "12.5px",
          }}
        />
      </g>
    </svg>
  )
}

function Network() {
  return (
    <svg
      className="svg-project"
      viewBox="0 0 1186 490"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.5,
      }}
    >
      <g>
        <path
          d="M36.066,453.315l169.142,-336.55l697.506,
          286.398l245.899,-366.526"
          style={{
            fill: "none",
            strokeWidth: "12.5px",
          }}
        />
        <circle
          cx="902.669"
          cy="403.163"
          r="29.42"
          style={{
            fill: "#fff",
            strokeWidth: "12.5px",
          }}
        />
        <circle
          cx="206.021"
          cy="122.003"
          r="29.42"
          style={{
            fill: "#fff",
            strokeWidth: "12.5px",
          }}
        />
        <circle
          cx="36.066"
          cy="453.315"
          r="29.42"
          style={{
            fill: "#fff",
            strokeWidth: "12.5px",
          }}
        />
        <circle
          cx="1148.61"
          cy="36.637"
          r="29.42"
          style={{
            fill: "#fff",
            strokeWidth: "12.5px",
          }}
        />
      </g>
    </svg>
  )
}

const iconComponent = {
  'Arrow': <Arrow/>,
  'Dropdown': <Dropdown/>,
  'Recife': <Recife/>,
  'Cables': <Cables/>,
  'ReadingFlow': <ReadingFlow/>,
  'Database': <Database/>,
  'Network': <Network/>
}
type iconProps = {
  name: 'Arrow' | 'Dropdown' | 'Recife' | 
  'Cables' | 'ReadingFlow' | 'Database' | 'Network'
}

const Icon = (props: iconProps) => iconComponent[props.name]

export {Icon}