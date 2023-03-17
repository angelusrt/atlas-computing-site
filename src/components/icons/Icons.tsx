import { useAnimateOnView } from "../../functions/transition"
import { trans, TransitionType } from "../../functions/function.types"
import { IconType, SVGIconType } from "./Icons.types"
import "./Icons.css"

const Arrow = () => (
  <svg
    viewBox="0 0 24 24"
    className="icon svg-arrow"
  >
    <path 
      d="M19,11H9l3.29-3.29a1,1,0,0,0,
      0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2,0,
      0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,
      1,0,1,0,1.41-1.42L9,13H19a1,1,0,0,0,0-2Z"
    />
  </svg>
)
const Dropdown = () => (
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
const Menu = () => (
  <svg
    className="icon svg-menu" 
    viewBox="0 30 448 440"
  >
    <path 
      d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 
      32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 
      256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 
      32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 
      416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 
      32-32H416c17.7 0 32 14.3 32 32z" 
    />
  </svg>
)

const Recife = (prop: SVGIconType) => (
  <svg
    ref={prop.elRef}
    className="image svg-recife"
    viewBox="0 0 1374 1376"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
  >
    <g transform="matrix(1,0,0,1,-505,-307)">
      <g transform="matrix(0.703548,0.171488,-0.171488,0.703548,297.007,-109.761)">
        <g transform="matrix(0.807931,-0.196931,0.196931,0.807931,775.963,583.68)">
          <path
            d="M66.771,1283L73.926,1274.24L80.917,1255.4L72.085,1220.28M1146.59,246.224L1224.44,298.699L1133.47,395.315L1122.95,541.721L991.341,738.511L880.959,858.218L836.374,818.633L837.652,731.97L861.763,709.565L902.846,619.88L898.015,570.651L904.976,533.557L922.705,515.082L945.771,434.432L979.245,389.655L1059.4,336.267L1146.59,246.224ZM-331.409,983.996L-317.123,1060.54L-279.732,1093.36L-141.198,1089.5L30.547,1162.19L67.214,1148.51L99.913,1150.22L120.21,1143.36L134.918,1156.26L146.792,1151.03L82.233,1080.45L108.958,1063.42L121.486,1039.77L136.518,1028.83L140.71,1019.89L741.202,971.388L759.204,957.889L820.555,885.169L777.127,832.909L768.737,798.297L791.699,608.532L762.722,585.421L731.406,587.746L700.389,604.847L648.397,636.021L601.98,682.761L566.86,700.669L466.3,707.694L421.431,717.819L394.826,746.829L371.418,782.149L361.57,803.55L295.277,850.5L261.198,852.717L200.531,823.116L89.105,719.745L33.694,683.228L-48.161,661.795L-89.811,658.209L-134.265,633.129L-174.983,653.304L-333.39,783.274L-352.858,805.995L-356.799,852.611L-334.564,897.604L-331.329,929.294L-332.349,965.967L-331.409,983.996ZM-307.536,215.793L-110.638,595.415L-81.886,633.669L-39.51,645.024L-35.207,634.905L21.421,652.332L40.784,658.523L87.691,689.079L193.394,777.807L244.11,820.855L270.274,827.207L299.726,821.16L331.282,798.936L335.883,782.424L370.228,743.682L372.853,734.368L403.826,701.419L447.287,681.737L553.142,675.323L579.169,644.529L605.718,627.569L668.822,575.37L737.477,531.951L780.052,516.155L827.17,486.849L829.515,478.164L885.615,432.692L890.073,420.008L903.816,408.92L916.897,406.857L950.824,380.343L956.697,358.077L970.244,351.111L964.899,341.959L982.873,325.2L969.031,311.015L973.032,306.848L945.866,288.011L947.496,281.322L983.069,240.631L1004.79,219.873L1130.94,132.54L1145.12,73.833L1155.37,65.273L1217.63,115.339L1235.78,122.401L1279.44,89.676L1327.79,16.6L1373.47,-13.841L1381.72,-28.269L1463.32,-80.367L1666.21,-156.747L1761.26,-118.883L1880.71,-205.732M181.852,2068.8L382.319,1672.98L384.232,1639.5L415.777,1618.27L442.846,1549.3L473.517,1536.42L529.19,1451.28L658.653,1278.19L649.248,1269.79L649.825,1260.98L678.037,1239.25L688.874,1202.62L728.392,1180.22L753.29,1161.13L881.341,995.352L872.857,993.284L731.282,1168.36L716.422,1176.87L704.129,1176.53L682.809,1190.55L672.089,1200.36L597.06,1229.08L476.968,1259.51L334.774,1277.7L326.069,1286.78L277.336,1287.37L269.557,1294.56L208.6,1290.76L163.38,1266.61L109.75,1285.22L91.45,1281.52L76.712,1288.44L58.662,1278.56L36.123,1281.46L31.569,1289.56L9.275,1290.94L1.258,1284.89L-26.072,1283.75L-60.209,1259.86L-52.776,1227.12L-67.465,1211.37L-135.373,1193.1L-143.784,1186.4L-185.99,1179.21L-197.149,1181.77L-208.93,1178.03L-280.548,1185.49L-304.29,1202.68L-323.295,1223.52L-350.993,1282.51L-378.533,1323.14L-383.293,1344.29L-388.968,1375.31L-379.226,1391.65L-345.641,1401.31L-320.13,1395.74L-283.446,1407.12L-241.788,1397.6L-216.581,1384.19L-176.711,1396.32L-169.555,1404.34L-119.539,1414.37L-106.547,1427.93L-87.401,1431.41L-84.295,1425.11L-60.804,1435.3L-90.371,1453.25L-137.596,1455.72L-158.289,1465.55L-190.161,1461.57L-198.428,1469.43L-199.993,1492.23L-194.096,1501.14L-231.667,1549.76L-239.3,1570.72L-236.482,1592.39L-218.476,1609.19L-170.146,1703.96L-108.903,1783.38M38.103,1161.69L109.75,1285.22M80.917,1150.26L153.771,1269.94M197.915,783.484L191.671,815.438M450.56,681.197L463.465,707.481M561.814,667.161L597,685.746M600.154,633.608L627.838,655.418M674.402,572.942L707.83,600.612M952.912,373.397L975.383,394.919M863.989,704.331L784.975,667.161M837.426,744.596L775.603,737.489M859.141,839.454L809.394,872.184"
            style={{
              fill: "var(--black)",
            }}
          />
        </g>
      </g>
    </g>
  </svg>
)

const ReadingFlow = () => (
  <svg
    className="icon"
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
        }}
      />
      <rect
        x="7.683"
        y="457"
        width="549.886"
        height="137.786"
        style={{
          fill: "none",
        }}
      />
      <path
        d="M138.949,132.286l997.41,
        -4.122l-997.41,404.122l300,-0"
        style={{
          fill: "none",
          stroke: "#fff",
          strokeWidth: "40px",
        }}
      />
      <path
        d="M138.949,132.286l997.41,
        -4.122l-997.41,404.122l300,-0"
        style={{
          fill: "none",
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
        }}
      />
      <circle
        cx="140.272"
        cy="132.539"
        r="29.42"
        style={{
          fill: "#fff",
        }}
      />
      <circle
        cx="138.949"
        cy="532.032"
        r="29.42"
        style={{
          fill: "#fff",
        }}
      />
      <circle
        cx="436.612"
        cy="532.286"
        r="29.42"
        style={{
          fill: "#fff",
        }}
      />
    </g>
  </svg>
)
const Database = () => (
  <svg
    className="icon"
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
          }}
        />
        <path
          d="M7.829,277.191l500.982,-0"
          style={{
            fill: "none",
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
          }}
        />
        <path
          d="M757.829,152.207l500.982,0"
          style={{
            fill: "none",
          }}
        />
      </g>
      <path
        d="M508.811,382.308l125,
        -0l-0.491,-149.995l124.509,0"
        style={{
          fill: "none",
        }}
      />
    </g>
  </svg>
)
const Network = () => (
  <svg
    className="icon"
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
        }}
      />
      <circle
        cx="902.669"
        cy="403.163"
        r="29.42"
        style={{
          fill: "#fff",
        }}
      />
      <circle
        cx="206.021"
        cy="122.003"
        r="29.42"
        style={{
          fill: "#fff",
        }}
      />
      <circle
        cx="36.066"
        cy="453.315"
        r="29.42"
        style={{
          fill: "#fff",
        }}
      />
      <circle
        cx="1148.61"
        cy="36.637"
        r="29.42"
        style={{
          fill: "#fff",
        }}
      />
    </g>
  </svg>
)

const Hat = () => (
  <svg
    className="svg-image svg-small"
    viewBox="0 0 208 140"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
  >
    <path
      style={{
        strokeWidth: "2.6px",
      }}
      d="M27.269 93.247s1.211-69.155 1.211-70.214c0-9.647 33.213-20.583 
      75.613-20.583s76.824 10.936 76.824 20.583c0 1.059-2.859 69.392-2.859 
      69.392 17.169 4.739 27.694 11.124 27.694 18.143 0 14.602-45.552 
      26.457-101.659 26.457-56.107 0-101.659-11.855-101.659-26.457 
      0-6.621 9.364-12.677 24.835-17.321Z"
    />
  </svg>
)
const Palm = () => (
  <svg
    className="svg-image svg-big"
    viewBox="0 0 338 530"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
  >
    <path
      style={{
        strokeWidth: "3px",
      }}
      d="m132.093 210.411-16.941-51.2 21.562-52.551-56.895 13.522-77.04 
      22.538 41.788-56.97 87.607-33.219 12.546 5.678-17.913-18.38L74.354 
      20l45.889-17.477 47.467 17.518 14.157 22.093 
      5.164-12.463-5.463-18.971-6.683-8.177 19.217 4.05 26.236 
      23.855-2.819 23.325 45.349-4.619 44.307 13.363 27.613 
      48.623-27.613-17.158-30.907-7.772-28.053 1.773-28.346 1.155 38.229 
      10.681 49.896 65.383-12.276 74.53-35.861-48.31-43.315-51.148-18.53 
      55.576-33.252 22.648-28.715 158.214 8.47 150.537-66.54-2.669 
      16.618-139.999 35.918-169.754 1.582-4.396Z"
    />
  </svg>
)
const Rock = () => (
  <svg
    className="svg-image svg-small"
    viewBox="0 0 251 138"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
  >
    <path
      style={{
        strokeWidth: "2.8px",
      }}
      d="m69.961 2.221 116.245 1.534 61.929 72.64-52.712 
      58.495-151.463-2.876L2.645 73.828 69.961 2.221Z"
    />
  </svg>
)
const Clarinete = () => (
  <svg
    className="svg-image svg-small"
    viewBox="0 0 315 185"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
  >
    <path
      style={{
        strokeWidth: "3px",
      }}
      d="M261.651 4.717a20.578 20.578 0 0 0-3.714 2.542L2.257 
      182.269l294.78-105.155h0a24.9 24.9 0 0 0 
      3.209-1.418c33.432-17.614-8.424-87.168-38.595-70.979Z"
    />
  </svg>
)



const ColumnFirst = (prop: SVGIconType) => (
  <svg
    ref={prop.elRef}
    className="svg-column-first"
    viewBox="0 0 725 2571"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
  >
    <path
      d="m32.043 37.686-.686 238.2 77.161 86.744-1.761 181.474s-1.149 11.044 3.889 22.301c5.336 11.924 11.818 17.838 11.818 17.838l3.217 1950.28 505.723 3.481-1.191-2126.41 62.63.993V183.849L615.379 31.444l-583.336 6.25Z"
      style={{
        fill: "#000",
      }}
    />
    <path
      d="m32.043 37.686-.686 238.2 77.161 86.744-1.761 181.474s-1.149 11.044 3.889 22.301c5.336 11.924 11.818 17.838 11.818 17.838l3.217 1950.28 505.723 3.481-1.191-2126.41 62.63.993V183.849L615.379 31.444l-583.336 6.25Z"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: "62.5px",
      }}
    />
    <path
      d="m32.043 37.686-.686 238.2 77.161 86.744-1.761 181.474s-1.149 11.044 3.889 22.301c5.336 11.924 11.818 17.838 11.818 17.838l3.217 1950.28 505.723 3.481-1.191-2126.41 62.63.993V183.849L615.379 31.444l-583.336 6.25Zm660.8 374.893H629.34M108.518 362.63l-77.161-86.744"
      style={{
        fill: "none",
        strokeWidth: "12.5px",
        strokeLinecap: "round",
        strokeMiterlimit: 1.5,
      }}
    />
    <path
      d="m31.357 275.886.686-238.2 583.336-6.25m77.464 377.034V183.841L615.379 31.436M106.515 363.563c26.782-72.976 122.478-118.355 220.685-127.136"
      style={{
        fill: "none",
        strokeWidth: "12.5px",
        strokeLinecap: "round",
        strokeMiterlimit: 1.5,
      }}
    />
    <path
      d="M368.087 419.026c-121.552 7.922-220.779 51.221-241.662 101.577-3.071 7.407-4.448 14.966-3.951 22.589l.011.159-.017 40.892c-9.85-10.429-14.795-21.97-15.801-34.373-5.009-61.788 113.933-125.758 262.089-137.769l-.669 6.925Z"
      style={{
        strokeWidth: "12.5px",
        strokeLinecap: "round",
        strokeMiterlimit: 1.5,
      }}
    />
    <path
      d="m106.757 544.104.453-180.541-.095 32.097m18.566 2138.86-3.138-1982.03-.079-42.975M277.487 2535.56l-4.75-2102.25m-104.321 2101.5.427-2045.83.007-16.223M631.658 2467.07l-2.89-2053.5"
      style={{
        fill: "none",
        strokeWidth: "12.5px",
        strokeLinecap: "round",
        strokeMiterlimit: 1.5,
      }}
    />
  </svg>
)
const ColumnSecond = (prop: SVGIconType) => (
  <svg
    ref={prop.elRef}
    className="svg-column-second"
    viewBox="0 0 544 2021"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
  >
    <path
      d="m7.497 12.16-.729 197.675 60.852 68.409-.349 139.072s-.919 8.836 3.112 17.842c4.269 9.539 9.454 14.271 9.454 14.271l2.574 1560.3 404.6 2.786-1.651-1624.74 50.874-.079-.069-48.78V230.501L421.369 7.727 7.497 12.162Z"
      style={{
        fill: "#000",
        strokeWidth: "12.5px",
      }}
    />
    <path
      d="M67.077 272.875c21.427-58.384 97.988-94.689 176.558-101.714"
      style={{
        fill: "none",
        strokeWidth: "12.5px",
      }}
    />
    <path
      d="M276.346 317.248c-97.247 6.338-176.632 40.979-193.339 81.266-2.458 5.926-3.559 11.974-3.162 18.072l.009.128-.013 32.715c-7.88-8.344-11.837-17.577-12.642-27.5-4.007-49.433 91.151-100.611 209.682-110.221l-.535 5.54Z"
      style={{
        strokeWidth: "12.5px",
      }}
    />
    <path
      d="m67.271 417.316.362-144.44-.076 25.678M82.411 2009.73l-2.51-1585.7-.064-34.382M203.863 2010.62l-3.801-1681.94m-82.816 1679.33-.512-1634.81-.005-12.964M487.214 1955.77 485.05 417.8"
      style={{
        fill: "none",
        strokeWidth: "12.5px",
      }}
    />
  </svg>
)

const firstTrans: TransitionType = {...trans, start: 1500}
const secondTrans: TransitionType = {...trans, start: 1700}

const Icon = (prop: IconType) => {
  const {name, elRef} = prop

  useAnimateOnView('.svg-recife', trans)
  useAnimateOnView('.svg-cables', trans)
  useAnimateOnView('.svg-column-first', firstTrans)
  useAnimateOnView('.svg-column-second', secondTrans)

  switch (name) {
    case 'Recife':
      return <Recife elRef={elRef}/>
    case 'ColumnFirst':
      return <ColumnFirst elRef={elRef}/>
    case 'ColumnSecond':
      return <ColumnSecond elRef={elRef}/>
    case 'Dropdown':
      return <Dropdown/>
    case 'Menu':
      return <Menu/>
    case 'ReadingFlow':
      return <ReadingFlow/>
    case 'Database':
      return <Database/>
    case 'Network':
      return <Network/>
    case 'Hat':
      return <Hat/>
    case 'Palm':
      return <Palm/>
    case 'Rock':
      return <Rock/>
    case 'Clarinete':
      return <Clarinete/>
    default:
    case 'Arrow':
      return <Arrow/>
  }
} 

export {Icon}