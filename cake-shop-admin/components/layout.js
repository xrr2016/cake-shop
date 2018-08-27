import Link from 'next/link'
import Head from 'next/head'

import AdminHeader from '../components/head'
import AdminNav from '../components/nav'

export default ({ children, title = 'Cake Shop Admin' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <AdminHeader />
    <AdminNav />
    {children}
  </div>
)
