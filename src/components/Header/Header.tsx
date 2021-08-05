import { Layout } from '../Layout'
import s from './Header.module.sass'
import { About } from './UserInfo/About'

export const Header = () => {
    return (
        <header className={s.header}>
            <Layout>
                <>
                    <About/>
                </>
            </Layout>
        </header>
        
    )
}