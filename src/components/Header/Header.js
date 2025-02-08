import React from 'react'
import { DIVL } from './DIVL'
import {DIVR} from './DIVR'
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