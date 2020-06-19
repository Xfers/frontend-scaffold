import styled from '@emotion/styled'
import { Link as ReactRouterLink } from 'react-router-dom'

const RouterLink = styled(ReactRouterLink)`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  color: #2f8dee;
  user-select: none;
  font-weight: 500;

  &:hover {
    color: #2f8dee;
    text-decoration: underline;
  }
`

export default RouterLink
