import React from 'react'
import styled from '@emotion/styled'
import Card from '~/components/Card'
import { DESKTOP_VIEW } from '~/common/breakPoints'
import MonstersTable from './MonstersTable'
import { ModalState } from './index'

type Props = {
  setOpen: (open: boolean) => void
  setModalState: (state: ModalState) => void
}

export default function ({ setOpen, setModalState }: Props) {
  return (
    <Container>
      <Card
        style={{
          paddingTop: '34px',
          paddingLeft: '30px',
          paddingRight: '30px',
          background: 'white',
          marginBottom: '24px',
        }}
      >
        <Title>Spells</Title>
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
  display: none;

  ${DESKTOP_VIEW} {
    display: block;
  }
`

const Title = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #121212;
`

const Divider = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  height: 1px;
  background: #e8e8e8;
`
