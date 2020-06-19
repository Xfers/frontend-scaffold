import React from 'react'
import styled from '@emotion/styled'
import { Link, withRouter } from 'react-router-dom'
import { Location, History } from 'history'
import Menu from 'antd/es/menu'
import 'antd/es/menu/style/css'
import { PATHS } from '~/routes/Routes'

type State = {
  openKeys: string[]
}

type Props = {
  location: Location
  history: History
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: any
}

class NavigationMenu extends React.Component<Props, State> {
  state = {
    openKeys: [],
  }

  onOpenChange = (openKeys: State['openKeys']) => {
    this.setState({ openKeys })
  }

  render() {
    return (
      <Container>
        <Menu mode="horizontal" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
          <Menu.Item key="1">
            <Link to={'/'}>
              <SubMenuTitle>Monsters</SubMenuTitle>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={PATHS.SPELLS}>
              <SubMenuTitle>Spells</SubMenuTitle>
            </Link>
          </Menu.Item>
        </Menu>
      </Container>
    )
  }
}

export default withRouter(NavigationMenu)

const SubMenuTitle = styled.div`
  transition: 0.2s all ease !important;
  font-family: Helvetica;
  font-weight: 500;
  font-size: 14px;
  color: #959595;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 47px;
`

const Container = styled.div``
