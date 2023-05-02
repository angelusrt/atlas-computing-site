import "./Blocks.css"

type BlockType = {
  name: string,
  children?: any,
  style ?: React.CSSProperties,
  blockRef ?: React.LegacyRef<HTMLElement>,
  func ?: any
}

const Block = (prop: BlockType) => (
  <div ref={prop.blockRef} className={prop.name} style={prop.style} {...prop.func}>
    {prop.children}
  </div>
)

export {Block}