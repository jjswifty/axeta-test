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
    return <main className={s.wrapper}>
        <section className={s.topInfo}>
            <section className={s.expSection}>
                <Portfolio />
                <Experience />
            </section>
            <section className={s.codeSection}>
                <SampleCode />
                <div className={s.info}>
                    <Availability/>
                    <PreferredEnviroment />
                </div>
            </section>
        </section>
        <section className={s.bottomInfo}>
            <section className={s.quotesSection}>
                <ClientsQoute />
                <AmazingQoute />
            </section>
            <section className={s.mapSection}>
                <YMap />
            </section>
        </section>
    </main>
}