import React, { FunctionComponent, PropsWithChildren } from 'react'

import { useSiteMetadata } from '../hooks/useSiteMetadata'

interface SEOProps {
  title: string
}

export const SEO: FunctionComponent<PropsWithChildren<SEOProps>> = ({
  title,
  children,
}) => {
  const { title: defaultTitle, description, siteUrl } = useSiteMetadata()

  return (
    <>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description} />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:description" content={description} />
      {children}
    </>
  )
}
