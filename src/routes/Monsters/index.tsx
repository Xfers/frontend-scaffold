import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Layout from '~/components/Layout'
import Monsters from './Monsters'
import SampleModal from './SampleModal'

import { getMonsters } from '~/store/monsters/actions'

export type ModalState = null | {
  monsterUrl: string
}

export default function () {
  const [open, setOpen] = useState(false)
  const [modalState, setModalState] = useState<ModalState>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(getMonsters())
    }, 1000)
  }, [dispatch])

  return (
    <>
      <Layout>
        <Monsters setOpen={setOpen} setModalState={setModalState} />
      </Layout>
      <SampleModal open={open} modalState={modalState} onClose={() => setOpen(false)} />
    </>
  )
}
