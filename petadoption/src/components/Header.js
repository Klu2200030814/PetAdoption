import React,{useState} from 'react'
import {AppBar,Tabs,Tab,Toolbar,Typography} from '@mui/material'
import {NavLink} from 'react-router-dom'
import HouseIcon from '@mui/icons-material/House';
const Header = () => {
  const [value, setValue] = useState()
  return (
    <div>
        <AppBar sx={{backgroundColor: 'sky blue'}}  position='sticky'>
          <Toolbar>
          <HouseIcon />
           <Typography>Life Adoption Center</Typography> 
            <Tabs textColor='inherit' indicatorColor='primary' 
            sx={{ml:"auto"}} value={value}
            onChange={(e,val)=>setValue(val)}>
              <Tab  LinkComponent={NavLink} to='/home' label='Home'/>
              <Tab  LinkComponent={NavLink} to='/adopt' label='Adopt'/>
              <Tab LinkComponent={NavLink} to='/accessories' label='Accessories'/>
              <Tab LinkComponent={NavLink} to='/donate' label='Donate'/>
              <Tab LinkComponent={NavLink} to='/help' label='Help'/>
              <Tab LinkComponent={NavLink} to='/Signin' label='Logout'/>
            </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header
