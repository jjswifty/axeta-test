import avatar from './../../../../assets/img/avatar.png'
import s from './Avatar.module.sass'

export const Avatar = () => {
    return (
        <div className={s.wrapper}>
            <img alt="avatar" src={avatar} />
        </div>
    )
}