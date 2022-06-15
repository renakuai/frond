import * as Font from './Font.styles.js'

export function H1Base(props) {
  const {
    children
  } = props

  return (
    <Font.H1>{children}</Font.H1>
  )
}

export function H2Base(props) {
  const {
    children
  } = props

  return (
    <Font.H2>{children}</Font.H2>
  )
}

export function H3Base(props) {
  const {
    children
  } = props

  return (
    <Font.H3 >{children}</Font.H3>
  )
}

export function H4Base(props) {
  const {
    children
  } = props

  return (
    <Font.H4>{children}</Font.H4>
  )
}

export function H5Base(props) {
  const {
    children
  } = props

  return (
    <Font.H5>{children}</Font.H5>
  )
}

export function H6Base(props) {
  const {
    color,
    children,
    nav //boolean
  } = props

  return (
    <Font.H6 color={color} nav={nav}>{children}</Font.H6>
  )
}

export function PBase(props) {
  const {
    color,
    size,
    children,
    weight
  } = props

  return (
    <Font.P color={color} size={size} weight={weight}>{children}</Font.P>
  )
}

export function PLabelBase(props) {
  const {
    color,
    children
  } = props

  return (
    <Font.Label color={color}>{children}</Font.Label>
  )
}

