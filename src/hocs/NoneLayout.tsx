import { ReactNode, useContext } from 'react'
import LayoutContext, { LayoutTypes } from '../shared/contexts/Layout'

export interface NoneLayoutProps {
  children: ReactNode
}

export default function NoneLayout({ children }: NoneLayoutProps): JSX.Element {
  const { changeLayout } = useContext(LayoutContext)

  changeLayout(LayoutTypes.NONE, '', false)
  return <>{children}</>
}
