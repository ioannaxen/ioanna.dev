import React from 'react'

import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'
import { SEO } from '../components/seo'
import { breakpoints, colors } from '../styles'

const Wrapper = styled.div`
  height: 100vh;
  padding: 10vw;
  padding-top: 30vh;
  padding-bottom: 30vh;
  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 20vh;
    padding-bottom: 20vh;
  }
`

const Header = styled.h1`
  font-size: 3em;
  margin-bottom: 1rem;
  line-height: normal;
  color: ${colors.richBlack};
`

const Paragraph = styled.p`
  font-size: 1.5em;
  padding-bottom: 1rem;
`

const StyledLink = styled(Link)`
  color: ${colors.ultraRed};
  font-weight: 700;
`

const NotFoundPage = () => (
  <Layout>
    <Wrapper>
      <Header>Page Not Found</Header>
      <Paragraph>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Paragraph>
      <Paragraph>
        Why not go back to the <StyledLink to="/">home page</StyledLink>?
      </Paragraph>
    </Wrapper>
  </Layout>
)

export default NotFoundPage

export const Head = () => <SEO title="Page Not Found" />
