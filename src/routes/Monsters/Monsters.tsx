import React from 'react'
import styled from '@emotion/styled'
import { Input, Select } from 'antd'
import MonstersTable from './MonstersTable'
import Filters from './Filters'
import { ModalState } from './index'

type Props = {
  setOpen: (open: boolean) => void
  setModalState: (state: ModalState) => void
}

export default function ({ setOpen, setModalState }: Props) {
  return (
    <Container>
      <Card>
        <ControlBar>
          <CardTitle>Monsters</CardTitle>
          <ControlGroup>
            <Input.Search
              placeholder="Search by Monster"
              style={{
                marginRight: '10px',
              }}
            />
            <Select placeholder="Sort by">
              <Select.Option key={1} value={1}>
                Newest
              </Select.Option>
              <Select.Option key={2} value={2}>
                Oldest
              </Select.Option>
            </Select>
          </ControlGroup>
        </ControlBar>
        <Filters />
        <Divider />
        <MonstersTable setOpen={setOpen} setModalState={setModalState} />
      </Card>
    </Container>
  )
}

const Container = styled.div`
  background-color: #f6f7f9;
  flex-grow: 1;
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  display: block;
`

const Card = styled.div`
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background-color: #ffffff;
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 30px;
`

const ControlBar = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
`

const CardTitle = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #121212;
  -webkit-font-smoothing: antialiased;
  margin-bottom: 16px;
  padding-right: 10px;
`

const ControlGroup = styled.div`
  display: flex;
  margin-bottom: 16px;
`

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e8e8e8;
  margin-bottom: 20px;
  margin-top: 20px;
`
