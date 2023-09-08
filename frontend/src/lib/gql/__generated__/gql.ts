/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getPlace($locale: I18NLocaleCode!, $slug: String!) {\n    places(locale: $locale, filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          name\n          content\n          description\n          latitude\n          longitude\n          googleMapsPlaceId\n          cover {\n            data {\n              attributes {\n                url\n                height\n                width\n                placeholder\n                alternativeText\n              }\n            }\n          }\n          detailsGlobal {\n            ... on ComponentPlaceDetailsGlobalBeachGlobal {\n              sandType\n              orientation\n            }\n            ... on ComponentPlaceDetailsGlobalLandmarkGlobal {\n              isVisitable\n              year\n            }\n          }\n          type {\n            data {\n              attributes {\n                name\n                nameGender\n                namePlural\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetPlaceDocument,
    "\n  query getPlaceType($locale: I18NLocaleCode!, $slug: String!) {\n    placeTypes(locale: $locale, filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          name\n          namePlural\n          nameGender\n          slug\n          content\n        }\n      }\n    }\n  }\n": types.GetPlaceTypeDocument,
    "\n  query getAllPlacesOfType($locale: I18NLocaleCode!, $placeTypeSlug: String!) {\n    places(\n      locale: $locale\n      pagination: { limit: 1000 }\n      filters: { type: { slug: { eq: $placeTypeSlug } } }\n    ) {\n      data {\n        attributes {\n          name\n          slug\n          description\n          cover {\n            data {\n              attributes {\n                url\n                height\n                width\n                alternativeText\n                placeholder\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAllPlacesOfTypeDocument,
    "\n  query getAllPlaceTypes($locale: I18NLocaleCode!) {\n    placeTypes(locale: $locale) {\n      data {\n        attributes {\n          name\n          namePlural\n          nameGender\n          slug\n        }\n      }\n    }\n  }\n": types.GetAllPlaceTypesDocument,
    "\n  query getLanding($locale: I18NLocaleCode!) {\n    landing(locale: $locale) {\n      data {\n        attributes {\n          heroTitle\n          heroDescription\n        }\n      }\n    }\n  }\n": types.GetLandingDocument,
    "\n  query getAllPlaces($locale: I18NLocaleCode!) {\n    places(locale: $locale, pagination: { limit: 1000 }) {\n      data {\n        attributes {\n          name\n          slug\n          description\n          latitude\n          longitude\n          cover {\n            data {\n              attributes {\n                url\n                height\n                width\n                alternativeText\n                placeholder\n              }\n            }\n          }\n          type {\n            data {\n              attributes {\n                slug\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAllPlacesDocument,
    "\n  query getUserProfile($userId: ID!) {\n    userProfiles(filters: { user: { id: { eq: $userId } } }) {\n      data {\n        attributes {\n          biography\n          name\n          isPublic\n          visitedPlaces {\n            data {\n              attributes {\n                slug\n                name\n                type {\n                  data {\n                    attributes {\n                      slug\n                    }\n                  }\n                }\n              }\n            }\n          }\n          favoritePlaces {\n            data {\n              attributes {\n                slug\n                name\n                type {\n                  data {\n                    attributes {\n                      slug\n                    }\n                  }\n                }\n              }\n            }\n          }\n          wantToGoPlaces {\n            data {\n              attributes {\n                slug\n                name\n                type {\n                  data {\n                    attributes {\n                      slug\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetUserProfileDocument,
    "\n  mutation login($identifier: String!, $password: String!) {\n    login(input: { identifier: $identifier, password: $password }) {\n      jwt\n      user {\n        username\n        id\n      }\n    }\n  }\n": types.LoginDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPlace($locale: I18NLocaleCode!, $slug: String!) {\n    places(locale: $locale, filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          name\n          content\n          description\n          latitude\n          longitude\n          googleMapsPlaceId\n          cover {\n            data {\n              attributes {\n                url\n                height\n                width\n                placeholder\n                alternativeText\n              }\n            }\n          }\n          detailsGlobal {\n            ... on ComponentPlaceDetailsGlobalBeachGlobal {\n              sandType\n              orientation\n            }\n            ... on ComponentPlaceDetailsGlobalLandmarkGlobal {\n              isVisitable\n              year\n            }\n          }\n          type {\n            data {\n              attributes {\n                name\n                nameGender\n                namePlural\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPlace($locale: I18NLocaleCode!, $slug: String!) {\n    places(locale: $locale, filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          name\n          content\n          description\n          latitude\n          longitude\n          googleMapsPlaceId\n          cover {\n            data {\n              attributes {\n                url\n                height\n                width\n                placeholder\n                alternativeText\n              }\n            }\n          }\n          detailsGlobal {\n            ... on ComponentPlaceDetailsGlobalBeachGlobal {\n              sandType\n              orientation\n            }\n            ... on ComponentPlaceDetailsGlobalLandmarkGlobal {\n              isVisitable\n              year\n            }\n          }\n          type {\n            data {\n              attributes {\n                name\n                nameGender\n                namePlural\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPlaceType($locale: I18NLocaleCode!, $slug: String!) {\n    placeTypes(locale: $locale, filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          name\n          namePlural\n          nameGender\n          slug\n          content\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPlaceType($locale: I18NLocaleCode!, $slug: String!) {\n    placeTypes(locale: $locale, filters: { slug: { eq: $slug } }) {\n      data {\n        attributes {\n          name\n          namePlural\n          nameGender\n          slug\n          content\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllPlacesOfType($locale: I18NLocaleCode!, $placeTypeSlug: String!) {\n    places(\n      locale: $locale\n      pagination: { limit: 1000 }\n      filters: { type: { slug: { eq: $placeTypeSlug } } }\n    ) {\n      data {\n        attributes {\n          name\n          slug\n          description\n          cover {\n            data {\n              attributes {\n                url\n                height\n                width\n                alternativeText\n                placeholder\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllPlacesOfType($locale: I18NLocaleCode!, $placeTypeSlug: String!) {\n    places(\n      locale: $locale\n      pagination: { limit: 1000 }\n      filters: { type: { slug: { eq: $placeTypeSlug } } }\n    ) {\n      data {\n        attributes {\n          name\n          slug\n          description\n          cover {\n            data {\n              attributes {\n                url\n                height\n                width\n                alternativeText\n                placeholder\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllPlaceTypes($locale: I18NLocaleCode!) {\n    placeTypes(locale: $locale) {\n      data {\n        attributes {\n          name\n          namePlural\n          nameGender\n          slug\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllPlaceTypes($locale: I18NLocaleCode!) {\n    placeTypes(locale: $locale) {\n      data {\n        attributes {\n          name\n          namePlural\n          nameGender\n          slug\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getLanding($locale: I18NLocaleCode!) {\n    landing(locale: $locale) {\n      data {\n        attributes {\n          heroTitle\n          heroDescription\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getLanding($locale: I18NLocaleCode!) {\n    landing(locale: $locale) {\n      data {\n        attributes {\n          heroTitle\n          heroDescription\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllPlaces($locale: I18NLocaleCode!) {\n    places(locale: $locale, pagination: { limit: 1000 }) {\n      data {\n        attributes {\n          name\n          slug\n          description\n          latitude\n          longitude\n          cover {\n            data {\n              attributes {\n                url\n                height\n                width\n                alternativeText\n                placeholder\n              }\n            }\n          }\n          type {\n            data {\n              attributes {\n                slug\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getAllPlaces($locale: I18NLocaleCode!) {\n    places(locale: $locale, pagination: { limit: 1000 }) {\n      data {\n        attributes {\n          name\n          slug\n          description\n          latitude\n          longitude\n          cover {\n            data {\n              attributes {\n                url\n                height\n                width\n                alternativeText\n                placeholder\n              }\n            }\n          }\n          type {\n            data {\n              attributes {\n                slug\n                name\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUserProfile($userId: ID!) {\n    userProfiles(filters: { user: { id: { eq: $userId } } }) {\n      data {\n        attributes {\n          biography\n          name\n          isPublic\n          visitedPlaces {\n            data {\n              attributes {\n                slug\n                name\n                type {\n                  data {\n                    attributes {\n                      slug\n                    }\n                  }\n                }\n              }\n            }\n          }\n          favoritePlaces {\n            data {\n              attributes {\n                slug\n                name\n                type {\n                  data {\n                    attributes {\n                      slug\n                    }\n                  }\n                }\n              }\n            }\n          }\n          wantToGoPlaces {\n            data {\n              attributes {\n                slug\n                name\n                type {\n                  data {\n                    attributes {\n                      slug\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUserProfile($userId: ID!) {\n    userProfiles(filters: { user: { id: { eq: $userId } } }) {\n      data {\n        attributes {\n          biography\n          name\n          isPublic\n          visitedPlaces {\n            data {\n              attributes {\n                slug\n                name\n                type {\n                  data {\n                    attributes {\n                      slug\n                    }\n                  }\n                }\n              }\n            }\n          }\n          favoritePlaces {\n            data {\n              attributes {\n                slug\n                name\n                type {\n                  data {\n                    attributes {\n                      slug\n                    }\n                  }\n                }\n              }\n            }\n          }\n          wantToGoPlaces {\n            data {\n              attributes {\n                slug\n                name\n                type {\n                  data {\n                    attributes {\n                      slug\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation login($identifier: String!, $password: String!) {\n    login(input: { identifier: $identifier, password: $password }) {\n      jwt\n      user {\n        username\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation login($identifier: String!, $password: String!) {\n    login(input: { identifier: $identifier, password: $password }) {\n      jwt\n      user {\n        username\n        id\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;