import React from 'react'
import styled from '@emotion/styled'

type Props = {
  children: React.ReactNode
  style?: Record<string, unknown>
}

export default function ({ children, ...rest }: Props) {
  return <Base {...rest}>{children}</Base>
}

const Base = styled.div`
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #e8e8e8;
`
