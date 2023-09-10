// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from 'next-auth/jwt'
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    jwt: string
    user: {
      username: string
      id: string
    } & DefaultSession['user']
  }
  interface User {
    jwt: string
    username: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    username: string
    id: string
    jwt: string
  }
}
