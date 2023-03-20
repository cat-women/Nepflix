import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import useStyle from './styles.js'

export default function MediaCard () {
  const classess = useStyle()

  return (
    <Card sx={{ maxWidth: 400 }} className={classess.card}>
      <CardMedia
        className={classess.media}
        image='./1.jpg'
        title='Avatar the way of water'
      />
      <CardContent className={classess.content}>
        <Typography gutterBottom className={classess.title}>
          Lizard
        </Typography>
        <Typography variant='subtitle1' className={classess.detail}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions className={classess.cardActions}>
        <Button size='small'>Share</Button>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}
