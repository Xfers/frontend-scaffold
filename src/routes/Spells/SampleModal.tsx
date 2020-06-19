import React from 'react'
import styled from '@emotion/styled'
import { Modal } from 'antd'
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

  const { spellUrl } = modalState

  return (
    <Modal visible={open} title="Sample Modal" onOk={() => onClose()} onCancel={() => onClose()}>
      <BodyText>
        <BodyNote>You selected this row: {spellUrl}</BodyNote>
        <BodyNote>
          Click <RouterLink to={PATHS.MONSTERS}>here</RouterLink> to go to Monsters page.
        </BodyNote>
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
  margin-top: 5px;
  padding-top: 20px;
`

const BodyNote = styled.div`
  font-family: Helvetica;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 20px;
`
