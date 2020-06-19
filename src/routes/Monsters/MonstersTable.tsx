import React from 'react'
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'
import { Table, Button } from 'antd'
import { RootState } from '~/store/types'
import detailsIcon from '~/assets/details.svg'
import { ModalState } from '~/routes/Monsters'

type Props = {
  setOpen: (open: boolean) => void
  setModalState: (state: ModalState) => void
}

export default function ({ setOpen, setModalState }: Props) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      ellipsis: true,
      render: (name: string) => <Text>{name}</Text>,
      width: '80%',
    },
    {
      title: 'URL',
      dataIndex: 'url',
      ellipsis: true,
      width: '20%',
      render: (url: string) => {
        return (
          <Button
            style={{
              width: '36px',
              height: '36px',
              boxShadow: 'none',
              padding: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => {
              setOpen(true)
              setModalState({
                monsterUrl: url,
              })
            }}
          >
            <img src={detailsIcon} />
          </Button>
        )
      },
    },
  ]

  const isLoading = useSelector((state: RootState) => state.monsters.isLoading)
  const monsters = useSelector((state: RootState) => state.monsters.monsters)

  return (
    <Container>
      <Table rowKey="name" columns={columns} dataSource={monsters} loading={isLoading} />
    </Container>
  )
}

const Container = styled.div``

export const Text = styled.div`
  font-style: normal;
  font-size: 14px;
  line-height: 48px;
  user-select: none;
  color: #959595;
`
