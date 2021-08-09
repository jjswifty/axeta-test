import s from './Portfolio.module.sass'

export const Portfolio = () => {
    return <div className={s.wrapper}>
        <h1>Portfolio</h1>
        <div className={s.links}>
            {
                [
                    'Bootstrap 4 Material Design (Sample Link)', 
                    'Modern JavaScript stack',
                    'Datepicker for twitter bootstrap', 
                    'Fast and reliable Bootstrap widgets in Angular ',
                ].map((e, i) => (
                    <a key={i} 
                    className={s.link} 
                    href="https://google.com" 
                    target="_blank" 
                    rel="noreferrer">
                        {e}
                    </a>
                    )
                )
            }
        </div>
    </div>
}