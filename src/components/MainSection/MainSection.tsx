import { Experience } from "./Experience"
import { Portfolio } from "./Portfolio"
import { YMap } from "./YMap"
import s from './MainSection.module.sass'
import { SampleCode } from "./SampleCode"
import { Availability } from "./Availability"
import { PreferredEnviroment } from "./PreferredEnvironment"
import { ClientsQoute } from "./ClientsQoute"
import { AmazingQoute } from "./AmazingQoute"

export const MainSection = () => {
    return <section className={s.wrapper}>
        <div className={s.topInfo}>
            <div className={s.expSection}>
                <Portfolio />
                <Experience />
            </div>
            
            <div className={s.codeSection}>
                <SampleCode />
                <div className={s.info}>
                    <Availability/>
                    <PreferredEnviroment />
                </div>
            </div>
        </div>
        <div className={s.bottomInfo}>
            <div className={s.quotesSection}>
                <ClientsQoute />
                <AmazingQoute />
            </div>
            <div className={s.mapSection}>
                <YMap />
            </div>
        </div>
    </section>
}