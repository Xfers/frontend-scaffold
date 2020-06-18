import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from '~/store/types'
import { PATHS } from '~/routes/Routes'
import xfersPng from '~/assets/xfers.png'

const { Header, Content, Footer, Sider } = Layout

type Props = {
  children: React.ReactNode
}

export default function ({ children }: Props) {
  const userName = useSelector((state: RootState) => state.user.userName)

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider breakpoint="lg" collapsedWidth="0">
        <img
          src={xfersPng}
          style={{
            width: '50%',
            marginLeft: '25%',
            marginTop: '20px',
            marginBottom: '20px',
          }}
        />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1">
            <Link to={PATHS.HOME}>Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={PATHS.DASHBOARD}>Dashboard</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, color: 'white' }}>Username: {userName}</Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Xfers ©2020 Created by Xfers Frontend Team</Footer>
      </Layout>
    </Layout>
  )
}
