import React from 'react'
import styled from '@emotion/styled'
import Navigation from './Navigation'
import { DESKTOP_VIEW } from '~/common/breakPoints'
import { PATHS } from '~/routes/Routes'

type Props = {
  children?: React.ReactNode
  breadcrumb?: boolean
  breadcrumbUrl?: PATHS
}

export default function ({ children }: Props) {
  return (
    <Container>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <MainContainer>
        {children}
        <Footer>Xfers ©2020 Created by Xfers Frontend Team</Footer>
      </MainContainer>
    </Container>
  )
}

const Container = styled.div`
  background-color: #ffffff;
  -webkit-font-smoothing: antialiased;
  display: flex;
`

const MainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  background: #ffffff;
`

const NavigationWrapper = styled.div`
  border-right: 1px solid #e8e8e8;
  display: none;

  ${DESKTOP_VIEW} {
    display: block;
  }
`

const Footer = styled.div`
  min-width: 100%;
  flex-grow: 1;
  color: #777777;
  font-size: 12px;
  line-height: 17px;
  background-color: white;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${DESKTOP_VIEW} {
    background-color: #f6f7f9;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
  }
`
