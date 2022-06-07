import * as Font from './Font.styles.js'

export function H6Base(props) {
  const {
    color,
    text,
    nav //boolean
  } = props

  return (
    <Font.H6 color={color} nav={nav}>{text}</Font.H6>
  )
}

