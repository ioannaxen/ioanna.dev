import * as React from 'react'
import styled from 'styled-components'

import { GlobalStyle } from '../globalStyles'
import { colors } from '../styles'

const Footer = styled.footer`
  color: ${colors.richBlack};
`

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <React.Fragment>
    <GlobalStyle />
    <main>{children}</main>
    <Footer>© {new Date().getFullYear()} by Ioanna Xenaki</Footer>
  </React.Fragment>
)
export default Layout
