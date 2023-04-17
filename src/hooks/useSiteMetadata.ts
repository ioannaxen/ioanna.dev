import { graphql, useStaticQuery } from 'gatsby'

// Copied from https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-seo-component/

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}
