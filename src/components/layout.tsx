import React, { FunctionComponent, PropsWithChildren } from 'react'

import styled from 'styled-components'

import { GlobalStyle } from '../globalStyles'
import { colors } from '../styles'

const Footer = styled.footer`
  color: ${colors.richBlack};
  padding: 1rem;
`

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <>
    <GlobalStyle />
    <main>{children}</main>
    <Footer>© {new Date().getFullYear()} by Ioanna Xenaki</Footer>
  </>
)
export default Layout
