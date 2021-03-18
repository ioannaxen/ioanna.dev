import * as React from "react"
import styled from "styled-components"

import { GlobalStyle } from "../globalStyles"

const Container = styled.div`
  max-width: 960;
  padding: 0 1.0875rem 1.45rem;
`

const Footer = styled.footer`
  margin-top: 2rem;
`

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <React.Fragment>
    <GlobalStyle />
    <Container>
      <main>{children}</main>
      <Footer>© {new Date().getFullYear()} by Ioanna Xenaki</Footer>
    </Container>
  </React.Fragment>
)
export default Layout
