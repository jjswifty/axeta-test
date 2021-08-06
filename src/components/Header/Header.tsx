import { Layout } from '../Layout'
import s from './Header.module.sass'
import { UserInfo } from './UserInfo'
import { About } from './UserInfo/About'
import { Location } from './UserInfo/About/Location'

export const Header = () => {
    return (
        <header className={s.header}>
            <Layout>
                <>
                    <UserInfo />
                </>
            </Layout>
        </header>
        
    )
}