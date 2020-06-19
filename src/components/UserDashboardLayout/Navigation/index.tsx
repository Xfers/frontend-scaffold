import React from 'react'
import styled from '@emotion/styled'
import xfersLogo from '~/assets/xfers.png'
import Menu from './Menu'

export default function () {
  return (
    <SideContainer>
      <LogoPanel>
        <Logo src={xfersLogo} />
      </LogoPanel>
      <Menu />
    </SideContainer>
  )
}

const SideContainer = styled.div`
  min-height: 100vh;
  width: 256px;
  flex-shrink: 0;
  display: block;
`

const LogoPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 52px;
`

const Logo = styled.img`
  width: 100px;
  height: 33px;
`
