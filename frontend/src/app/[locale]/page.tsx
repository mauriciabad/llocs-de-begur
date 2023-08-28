import { IconBeach } from '@tabler/icons-react'
import Footer from '@/components/footer'
import { useTranslations, useLocale } from 'next-intl'
import { MyLink } from '@/navigation'
import { graphql } from '@/gql'
import { GetLandingQuery } from '@/gql/graphql'
import { graphqlClient } from '@/lib/graphql'

const getLandingQuery = graphql(`
  query getLanding($locale: I18NLocaleCode!) {
    landing(locale: $locale) {
      data {
        attributes {
          heroTitle
          heroDescription
        }
      }
    }
  }
`)

export default async function PageWrapper() {
  const locale = useLocale()

  const { data: landingInfo } = await graphqlClient.query({
    query: getLandingQuery,
    variables: { locale }
  })

  if (!landingInfo) return <h1>Error fetching data</h1> // TODO: Do better error handling

  return <Page landingInfo={landingInfo} />
}

function Page({ landingInfo }: { landingInfo: GetLandingQuery }) {
  const t = useTranslations('Landing')

  return (
    <main>
      <header className="bg-sky-900 text-white min-h-[50vh] flex items-center justify-center flex-col p-4 text-center">
        <h1 className="font-bold text-6xl">
          {landingInfo.landing?.data?.attributes?.heroTitle}
        </h1>
        <p className="text-xl mt-4">
          {landingInfo.landing?.data?.attributes?.heroDescription}
        </p>
      </header>

      <section className="text-center mx-auto max-w-2xl p-4">
        <IconBeach className="mx-auto text-sky-950 mb-4 mt-8 h-12 w-12 stroke-1" />
        <h2 className="font-bold text-3xl">{t('beaches')}</h2>
        <MyLink
          href="/platjes"
          className="p-4 leading-none bg-sky-900 text-white uppercase rounded-lg inline-block mt-6 outline-none hover:bg-sky-800 focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-gray-700"
        >
          {t('view-all')}
        </MyLink>
      </section>

      <Footer />
    </main>
  )
}
