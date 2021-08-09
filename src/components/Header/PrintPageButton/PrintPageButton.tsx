import s from './PrintPageButton.module.sass'

export const PrintPageButton = () => {
    return (
        <div className={s.wrapper}>
            <button>Print this page</button>
        </div>
    )
}