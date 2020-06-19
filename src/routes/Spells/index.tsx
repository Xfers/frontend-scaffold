import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '~/components/Layout'
import DesktopView from './DesktopView'
import SampleModal from './SampleModal'

import { getSpells } from '~/store/spells/actions'

export type ModalState = null | {
  spellUrl: string
}

export default function () {
  const [open, setOpen] = useState(false)
  const [modalState, setModalState] = useState<ModalState>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(getSpells())
    }, 1000)
  }, [dispatch])

  return (
    <>
      <Layout>
        <DesktopView setOpen={setOpen} setModalState={setModalState} />
      </Layout>
      <SampleModal open={open} modalState={modalState} onClose={() => setOpen(false)} />
    </>
  )
}
