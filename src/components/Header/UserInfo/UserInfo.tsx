import { About } from "./About"
import { Avatar } from "./Avatar"
import { Skills } from "./Skills"
import s from './UserInfo.module.sass'

export const UserInfo = () => {
    return (
        <div className={s.wrapper}>
            <div>
                <Avatar />
            </div>
            <div className={s.aboutAndSkills}>
                <About />
                <Skills />
            </div>
        </div>
    )
}