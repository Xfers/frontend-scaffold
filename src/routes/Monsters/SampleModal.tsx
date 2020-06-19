import React from 'react'
import styled from '@emotion/styled'
import { Modal, Button } from 'antd'
import RouterLink from '~/components/RouterLink'
import { PATHS } from '~/routes/Routes'

import { ModalState } from './index'

type Props = {
  open: boolean
  onClose: () => void
  modalState: ModalState
}

export default function ({ open, onClose, modalState }: Props) {
  if (modalState === null) return null

  const { monsterUrl } = modalState

  return (
    <Modal
      onClose={onClose}
      open={open}
      title="Sample Modal"
      footer={
        <>
          <Button
            style={{
              fontWeight: 500,
              fontSize: '16px',
            }}
            onClick={() => onClose()}
          >
            Close
          </Button>
        </>
      }
    >
      <BodyText>
        <>
          <BodyNote>You selected this row: {monsterUrl}</BodyNote>
          <BodyMinorNote>
            Click <RouterLink to={PATHS.DASHBOARD}>here</RouterLink> to go to another page.
          </BodyMinorNote>
        </>
      </BodyText>
    </Modal>
  )
}

const BodyText = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #777777;
  margin-top: 5px;
  padding-top: 20px;
`

const BodyNote = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #121212;
  margin-bottom: 20px;
`

const BodyMinorNote = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #777777;
  margin-bottom: 20px;
`
