import { useLang } from '../i18n/LanguageContext'
import SectionHeading from '../components/SectionHeading'
import DossierCard from '../components/DossierCard'
import { dossiers } from '../data/fde'

export default function Dossiers() {
  const { t } = useLang()

  return (
    <section id="dossiers" className="relative scroll-mt-24 px-5 py-28 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label={t.dossiers.label} heading={t.dossiers.heading} note={t.dossiers.note} />
        <div className="mt-10">
          {dossiers.map((d) => (
            <DossierCard key={d.id} d={d} />
          ))}
        </div>
      </div>
    </section>
  )
}
