import React from 'react'
import styled from '@emotion/styled'
import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
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
      <DesktopNavigationWrapper>
        <DesktopNavigation />
      </DesktopNavigationWrapper>

      <MainContainer>
        <MobileNavigationWrapper>
          <MobileNavigation />
        </MobileNavigationWrapper>
        {children}
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

const DesktopNavigationWrapper = styled.div`
  border-right: 1px solid #e8e8e8;
  display: none;

  ${DESKTOP_VIEW} {
    display: block;
  }
`

const MobileNavigationWrapper = styled.div`
  border-right: 1px solid #e8e8e8;
  display: block;

  ${DESKTOP_VIEW} {
    display: none;
  }
`
