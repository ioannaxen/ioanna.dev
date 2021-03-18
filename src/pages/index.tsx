import * as React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
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

const Span = styled.span`
  color: ${colors.ultraRed};
  font-weight: 700;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Wrapper>
      <Header>
        Hi, my name is <Span>Ioanna Xenaki</Span>
      </Header>
      <Header>I'm a Frontend Developer.</Header>
    </Wrapper>
  </Layout>
)

export default IndexPage
