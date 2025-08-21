import {
  type ComponentPropsWithRef
} from 'react'

// UseDotButtonType imported from hooks/useDotButton

// useDotButton is now imported from hooks/useDotButton

type PropType = ComponentPropsWithRef<'button'>

export const DotButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props

  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}
