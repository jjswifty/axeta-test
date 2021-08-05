import { PropsWithChildren } from 'react'
import s from './Layout.module.sass'

export const Layout = ({ children, color }: PropsWithChildren<{color?: string}>) => {
    return (
        <div className={s.wrapper} style={{backgroundColor: color}}>
            {children}
        </div>
    )
}