import s from './AmazingQoute.module.sass'

export const AmazingQoute = () => {
    return <div className={s.wrapper}>
        <h1>In clients I look for...</h1>
        <span className={s.quotes}>
            <h2>There is only one good, knowledge, and one evil, ignorance.</h2>
        </span>  
    </div>
}