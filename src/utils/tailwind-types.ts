// Generated by https://quicktype.io

export interface Tailwindcss {
  theme: Theme
}

export interface Theme {
  screens: Screens
  colors: Colors
  spacing: Spacing
  backgroundPosition: Position
  backgroundSize: BackgroundSize
  borderRadius: BorderRadius
  borderWidth: BorderWidth
  boxShadow: BoxShadow
  cursor: Cursor
  fill: Fill
  flex: Flex
  flexGrow: FlexGrowClass
  flexShrink: FlexGrowClass
  fontFamily: FontFamily
  fontSize: { [key: string]: string }
  fontWeight: FontWeight
  inset: Inset
  letterSpacing: LetterSpacing
  lineHeight: LineHeight
  listStyleType: ListStyleType
  maxHeight: MaxHeight
  minHeight: MinHeight
  minWidth: MinWidth
  objectPosition: Position
  opacity: { [key: string]: string }
  order: GridColumnEnd
  stroke: Fill
  strokeWidth: { [key: string]: string }
  zIndex: ZIndex
  gridTemplateColumns: GridColumnEnd
  gridColumn: { [key: string]: string }
  gridColumnStart: GridColumnEnd
  gridColumnEnd: GridColumnEnd
  gridTemplateRows: Grid
  gridRow: GridRow
  gridRowStart: Grid
  gridRowEnd: Grid
  transformOrigin: TransformOrigin
  scale: { [key: string]: string }
  rotate: Rotate
  skew: Skew
  transitionProperty: TransitionProperty
  transitionTimingFunction: TransitionTimingFunction
  transitionDuration: { [key: string]: string }
}

export interface Position {
  bottom: string
  center: string
  left: string
  "left-bottom": string
  "left-top": string
  right: string
  "right-bottom": string
  "right-top": string
  top: string
}

export interface BackgroundSize {
  auto: string
  cover: string
  contain: string
}

export interface BorderRadius {
  none: string
  sm: string
  default: string
  md: string
  lg: string
  full: string
}

export interface BorderWidth {
  "0": string
  "2": string
  "4": string
  "8": string
  default: string
}

export interface BoxShadow {
  xs: string
  sm: string
  default: string
  md: string
  lg: string
  xl: string
  "2xl": string
  inner: string
  outline: string
  none: string
}

export interface Colors {
  transparent: string
  black: string
  white: string
  gray: { [key: string]: string }
  red: { [key: string]: string }
  orange: { [key: string]: string }
  yellow: { [key: string]: string }
  green: { [key: string]: string }
  teal: { [key: string]: string }
  blue: { [key: string]: string }
  indigo: { [key: string]: string }
  purple: { [key: string]: string }
  pink: { [key: string]: string }
}

export interface Cursor {
  auto: string
  default: string
  pointer: string
  wait: string
  text: string
  move: string
  "not-allowed": string
}

export interface Fill {
  current: string
}

export interface Flex {
  "1": string
  auto: string
  initial: string
  none: string
}

export interface FlexGrowClass {
  "0": string
  default: string
}

export interface FontFamily {
  sans: string[]
  serif: string[]
  mono: string[]
}

export interface FontWeight {
  hairline: string
  thin: string
  light: string
  normal: string
  medium: string
  semibold: string
  bold: string
  extrabold: string
  black: string
}

export interface GridColumnEnd {
  "1": string
  "2": string
  "3": string
  "4": string
  "5": string
  "6": string
  "7": string
  "8": string
  "9": string
  "10": string
  "11": string
  "12": string
  "13"?: string
  auto?: string
  none?: string
  first?: string
  last?: string
}

export interface GridRow {
  auto: string
  "span-1": string
  "span-2": string
  "span-3": string
  "span-4": string
  "span-5": string
  "span-6": string
}

export interface Grid {
  "1": string
  "2": string
  "3": string
  "4": string
  "5": string
  "6": string
  "7"?: string
  auto?: string
  none?: string
}

export interface Inset {
  "0": string
  auto: string
}

export interface LetterSpacing {
  tighter: string
  tight: string
  normal: string
  wide: string
  wider: string
  widest: string
}

export interface LineHeight {
  "3": string
  "4": string
  "5": string
  "6": string
  "7": string
  "8": string
  "9": string
  "10": string
  none: string
  tight: string
  snug: string
  normal: string
  relaxed: string
  loose: string
}

export interface ListStyleType {
  none: string
  disc: string
  decimal: string
}

export interface MaxHeight {
  full: string
  screen: string
}

export interface MinHeight {
  "0": string
  full: string
  screen: string
}

export interface MinWidth {
  "0": string
  full: string
}

export interface Rotate {
  "0": string
  "45": string
  "90": string
  "180": string
  "-180": string
  "-90": string
  "-45": string
}

export interface Screens {
  sm: string
  md: string
  lg: string
  xl: string
}

export interface Skew {
  "0": string
  "3": string
  "6": string
  "12": string
  "-12": string
  "-6": string
  "-3": string
}

export interface Spacing {
  "0": string
  "1": string
  "2": string
  "3": string
  "4": string
  "5": string
  "6": string
  "8": string
  "10": string
  "12": string
  "16": string
  "20": string
  "24": string
  "32": string
  "40": string
  "48": string
  "56": string
  "64": string
  px: string
}

export interface TransformOrigin {
  center: string
  top: string
  "top-right": string
  right: string
  "bottom-right": string
  bottom: string
  "bottom-left": string
  left: string
  "top-left": string
}

export interface TransitionProperty {
  none: string
  all: string
  default: string
  colors: string
  opacity: string
  shadow: string
  transform: string
}

export interface TransitionTimingFunction {
  linear: string
  in: string
  out: string
  "in-out": string
}

export interface ZIndex {
  "0": string
  "10": string
  "20": string
  "30": string
  "40": string
  "50": string
  auto: string
}