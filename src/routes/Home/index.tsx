import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import UserDashboardLayout from '~/components/UserDashboardLayout'
import DesktopView from './DesktopView'
import DetailsModal from './DetailsModal'

import { getMonsters } from '~/store/home/actions'

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
      <UserDashboardLayout>
        <DesktopView setOpen={setOpen} setModalState={setModalState} />
      </UserDashboardLayout>
      <DetailsModal open={open} modalState={modalState} onClose={() => setOpen(false)} />
    </>
  )
}
