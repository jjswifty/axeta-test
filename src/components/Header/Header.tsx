import { Layout } from '../Layout'
import s from './Header.module.sass'
import { About } from './UserInfo/About'
import { Location } from './UserInfo/About/Location'

export const Header = () => {
    return (
        <header className={s.header}>
            <Layout>
                <>
                    <About/>
                    <Location />
                </>
            </Layout>
        </header>
        
    )
}