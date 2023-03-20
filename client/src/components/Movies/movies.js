import React from 'react'
import { Grid } from '@material-ui/core'

import MediaCard from './movie/movie.js'
import useStyle from './styles.js'

export default function Movies () {
  const classess = useStyle()
  return (
    <Grid className={classess.cards}>
      <Grid item className={classess.card}>
        {Array.from(Array(20).keys()).map(i => (
          <MediaCard key={i} />
        ))}
      </Grid>
    </Grid>
  )
}
