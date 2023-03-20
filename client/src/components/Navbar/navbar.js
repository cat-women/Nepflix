import React from 'react'

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField
} from '@material-ui/core'
import useStyles from './styles.js'

function Navbar () {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ background: '#0c0c0c' }}>
        <Toolbar className={classes.toolBar}>
          <Typography variant='h6' className={classes.title}>
            Nepflix
          </Typography>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Contact</Button>
          <TextField
            label='Search'
            variant='standard'
          />
          <Button color='inherit'>login/logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
