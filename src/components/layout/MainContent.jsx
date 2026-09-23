import { Contatore } from '../section/Contatore'
import { ParagSetting } from '../section/ParagSetting'
import { BottonStyle } from '../section/BottonStyle'

export function MainContent() {
    return (
        <main>
            <section>
                <Contatore />
            </section>
            <section>
                <ParagSetting />
            </section>
            <section>
                <BottonStyle />
            </section>
        </main>
    )
}