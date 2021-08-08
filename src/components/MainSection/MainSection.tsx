import { Experience } from "./Experience"
import { Portfolio } from "./Portfolio"
import { YMap } from "./YMap"
import s from './MainSection.module.sass'
import { SampleCode } from "./SampleCode"
import { Availability } from "./Availability"
import { PreferredEnviroment } from "./PreferredEnvironment"

export const MainSection = () => {
    return <section className={s.wrapper}>
        <div className={s.topInfo}>
            <div className={s.expSection}>
                <Portfolio />
                <Experience />
            </div>
            
            <div className={s.codeSection}>
                <SampleCode />
                <div>
                    <Availability/>
                    <PreferredEnviroment />
                </div>
            </div>
        </div>
        <div className={s.bottomInfo}>
            <div className={s.mapSection}>
                <YMap />
            </div>
        </div>
    </section>
}