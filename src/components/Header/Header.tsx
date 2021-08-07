import { Layout } from '../Layout'
import s from './Header.module.sass'
import { PrintPageButton } from './PrintPageButton'
import { UserInfo } from './UserInfo'

export const Header = () => {
    return (
        <header className={s.header}>
            <Layout>
                <div className={s.wrapper}>
                    <UserInfo />
                    <PrintPageButton />
                </div>
            </Layout>
        </header>
    )
}