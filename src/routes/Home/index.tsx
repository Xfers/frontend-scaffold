import React from 'react'
import styled from '@emotion/styled'
import { useDispatch } from 'react-redux'
import UserDashboardLayout from '~/components/UserDashboardLayout'

import { setUserName } from '~/store/user/actions'

export default function () {
  const dispatch = useDispatch()

  return (
    <UserDashboardLayout>
      <Container>
        <Header>
          <HeaderTitle>Home</HeaderTitle>
          <HeaderButtonGroup>
            <HeaderBlueButton onClick={() => dispatch(setUserName('Jason'))}>
              Set Username: Jason
            </HeaderBlueButton>
            <HeaderGreenButton onClick={() => dispatch(setUserName('Emily'))}>
              Set Username: Emily
            </HeaderGreenButton>
          </HeaderButtonGroup>
        </Header>
      </Container>
    </UserDashboardLayout>
  )
}

const Container = styled.div``

const Header = styled.div`
  height: 84px;
  display: flex;
  justify-content: space-between;
`

const HeaderTitle = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #121212;
`

const HeaderButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HeaderBlueButton = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  background: #2f8dee;
  padding: 11px 15px;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
`

const HeaderGreenButton = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
  background: #189c08;
  padding: 11px 15px;
  border-radius: 5px;
  cursor: pointer;
`
