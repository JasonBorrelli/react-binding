import { Contatore } from '../section/Contatore'
import { ParagSetting } from '../section/ParagSetting'
import { BottonStyle } from '../section/BottonStyle'
import { CheckList } from '../section/CheckList'

export function MainContent() {
    return (
        <main className='container'>
            <section className='container-contatore mt-4 d-flex align-center flex-column'>
                <Contatore />
            </section>
            <section className='container-paragsetting mt-4 d-flex align-center flex-column'>
                <ParagSetting />
            </section>
            <section className='container-bottonstyle mt-4 d-flex align-center flex-column'>
                <BottonStyle />
            </section>
            <section className='container-checklist mt-4 d-flex align-center flex-column'>
                <CheckList />
            </section>
        </main>
    )
}