import { Contatore } from '../section/Contatore'
import { ParagSetting } from '../section/ParagSetting'
import { BottonStyle } from '../section/BottonStyle'

export function MainContent() {
    return (
        <main className='container mt-4 align-center'>
            <section className='container-contatore mt-4 '>
                <Contatore />
            </section>
            <section className='container-paragsetting mt-4'>
                <ParagSetting />
            </section>
            <section className='container-bottonstyle mt-4'>
                <BottonStyle />
            </section>
        </main>
    )
}