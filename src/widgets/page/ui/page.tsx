import { clsx } from 'clsx'
import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementRef,
  type ElementType,
  type ForwardedRef,
  forwardRef,
  type ReactElement,
} from 'react'
import s from './page.module.scss'

type InferType<T> = T extends ElementType<infer U> ? U : never

type PageProps<T extends ElementType = 'div'> = {
  as?: T
  mt?: CSSProperties['marginTop']
} & ComponentPropsWithoutRef<T>

const Page = forwardRef(
  <T extends ElementType = 'div'>(props: PageProps<T>, ref: ForwardedRef<InferType<T>>) => {
    const { as: Component = 'div', mt = 24, className, style, ...rest } = props

    const classes = clsx(s.container, className)
    const styles: CSSProperties = { marginTop: mt, ...style }

    return <Component className={classes} style={styles} ref={ref} {...rest} />
  }
)

Page.displayName = 'Page'

/** Accepts all props of the native div element. */
export default Page as <T extends ElementType = 'div'>(
  props: PageProps<T> & {
    ref?: ForwardedRef<ElementRef<T>>
  }
) => ReactElement
