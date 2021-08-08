import s from './SampleCode.module.sass'


export const SampleCode = () => {
    return <div className={s.wrapper}>
        <h1>Sample Code</h1>
        <div className={s.code}>
<pre>{`1. <div class='golden-grid'>
2.    <div style='grid-area:
3.      11 /  1 / span 10 / span
4.      12;'>
5.    </div> 
6. </div>
`}</pre>
        </div>
    </div>

}