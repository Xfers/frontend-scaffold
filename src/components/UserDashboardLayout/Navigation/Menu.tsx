import React from 'react'
import styled from '@emotion/styled'
import { css } from 'emotion'
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
    const { path } = this.props.match

    return (
      <Container>
        <Menu mode="inline" openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
          <Menu.Item key="1" className={path === PATHS.MONSTERS ? activeLinkClass : ''}>
            <Link to={'/'}>
              <SubMenuTitle>Monsters</SubMenuTitle>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" className={path === PATHS.DASHBOARD ? activeLinkClass : ''}>
            <Link to={PATHS.DASHBOARD}>
              <SubMenuTitle>Dashboard</SubMenuTitle>
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
  padding-left: 15px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 47px;

  .ant-menu-item &:hover {
    background-color: #2f8dee;
    color: white;
  }

  .ant-menu-item &:hover circle {
    stroke: white !important;
  }

  .ant-menu-item &:hover path {
    fill: white !important;
  }

  .ant-menu-item &:hover .company rect.outline {
    fill: white !important;
  }

  .ant-menu-item &:hover .company path.door {
    stroke: white !important;
    fill: #2f8dee !important;
  }

  .ant-menu-item &:hover .company path.hider {
    fill: #2f8dee !important;
  }

  .ant-menu-item &:hover .user path {
    stroke: white !important;
    fill-opacity: 0 !important;
  }
`

const activeLinkClass = css`
  &.ant-menu-item ${SubMenuTitle} {
    background-color: #2f8dee;
    color: white;
  }

  &.ant-menu-item ${SubMenuTitle} circle {
    stroke: white !important;
  }

  &.ant-menu-item ${SubMenuTitle} path {
    fill: white !important;
  }

  &.ant-menu-item ${SubMenuTitle} .company rect.outline {
    fill: white !important;
  }

  &.ant-menu-item ${SubMenuTitle} .company path.door {
    stroke: white !important;
    fill: #2f8dee !important;
  }

  &.ant-menu-item ${SubMenuTitle} .company path.hider {
    fill: #2f8dee !important;
  }

  &.ant-menu-item ${SubMenuTitle} .user path {
    stroke: white !important;
    fill-opacity: 0 !important;
  }
`

const Container = styled.div`
  padding-bottom: 45px;

  & .ant-menu-inline {
    border: 0;
  }

  & .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    height: unset;
    margin: 0;
    padding-left: 20px;
    padding-right: 20px;
  }

  & .ant-menu-inline > .ant-menu-submenu {
    padding-top: 7px;
    padding-bottom: 7px;
  }

  & .ant-menu-inline .ant-menu-item {
    height: unset;
    margin: 0;
    padding-bottom: 7px;
    padding-top: 7px;
    padding-left: 20px !important;
    padding-right: 20px !important;
  }

  & .ant-menu-inline .ant-menu-submenu {
    padding-bottom: 0;
  }

  & .ant-menu-submenu-title:hover {
    color: #959595;
  }

  & .ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::after {
    background: #959595;
  }

  & .ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before {
    background: #959595;
  }

  & .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::after {
    background: #959595;
  }

  & .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow::before {
    background: #959595;
  }

  & .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: transparent;
  }

  & .ant-menu-inline .ant-menu-item-selected::after {
    display: none;
  }

  & .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected ${SubMenuTitle} {
    background-color: #2f8dee;
    color: white;
  }

  & .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    right: 30px;
    line-height: 47px;
  }

  & .ant-menu-sub.ant-menu-inline > .ant-menu-item {
    padding: 0;
    padding-left: 71px !important;
  }

  & .ant-menu-item > a::before {
    display: none;
  }
`
