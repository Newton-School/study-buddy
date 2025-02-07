import React from 'react'
import { DIVL } from './singledivL.styled'
import {DIVR} from './singledivR.styled'
import { Styledheader } from './page.styled'

const Header = () => {
  return (
    <Styledheader>
        <DIVL></DIVL>
        <DIVR></DIVR>
    </Styledheader>
  )
}

export default Header