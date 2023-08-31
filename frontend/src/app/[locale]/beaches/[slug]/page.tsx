import { IconGrain, IconCompass } from '@tabler/icons-react'
import { useLocale, useTranslations } from 'next-intl'
import { notFound } from 'next/navigation'
import {
  GetBeachQuery,
  graphql,
  gqlClient,
  simplifyResponse,
  SimpleResponse,
  NonNullableItem,
  typeDynamicZone,
} from '@/lib/gql'
import ReactMarkdown from 'react-markdown'
import PlaceLayout from '@/layouts/placeLayout'

const getBeachQuery = graphql(`
  query getBeach($locale: I18NLocaleCode!, $slug: String!) {
    places(
      locale: $locale
      filters: { and: [{ type: { eq: "beach" }, slug: { eq: $slug } }] }
    ) {
      data {
        attributes {
          name
          description
          content
          type
          latitude
          longitude
          cover {
            data {
              attributes {
                url
                height
                width
                alternativeText
              }
            }
          }
          detailsGlobal {
            ... on ComponentPlaceDetailsGlobalBeachGlobal {
              waterEntry
              sandType
              orientation
            }
          }
        }
      }
    }
  }
`)

export default async function PageWrapper({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const locale = useLocale()

  const { data } = await gqlClient().query({
    query: getBeachQuery,
    variables: { locale, slug },
  })
  const beaches = simplifyResponse(data)
  const beach = beaches?.[0]

  if (!beach) notFound()

  return <Page beach={beach} />
}

function Page({
  beach,
}: {
  beach: NonNullableItem<SimpleResponse<GetBeachQuery>>
}) {
  const t = useTranslations('BeachView')
  const te = useTranslations('Enums')

  const detailsGlobal = typeDynamicZone(beach.detailsGlobal[0])
  if (!detailsGlobal) return <h1>Error fetching data</h1> // TODO: Do better error handling

  return (
    <PlaceLayout place={beach}>
      <h3 className="text-center text-2xl font-bold mb-2 leading-none">
        {t('data')}
      </h3>
      <div className="border border-gray-300 bg-gray-100 rounded-xl p-4">
        <div className="space-y-2">
          <div className="flex items-center">
            <IconGrain className="inline-block mr-1 shrink-0" />
            <div>{te(`sandType.${detailsGlobal.sandType}`)}</div>
          </div>
          <div className="flex items-center">
            <IconCompass className="inline-block mr-1 shrink-0" />
            <div>{te(`orientation.${detailsGlobal.orientation}`)}</div>
          </div>
        </div>
      </div>

      <div className="prose mt-8 prose-h2:mt-4 prose-h2:mb-2">
        {beach.content && <ReactMarkdown>{beach.content}</ReactMarkdown>}
      </div>
    </PlaceLayout>
  )
}