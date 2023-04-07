import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import useStyle from './styles.js';

export default function MediaCard (props) {
  const classess = useStyle();
  return (
    <Card sx={{ maxWiydth: 400, backgroundColor: '#545050' }} className={classess.card}>
      <CardMedia className={classess.media} image={props.Poster_Link} title={props.Series_Title} />
      <CardContent className={classess.content}>
        <Typography gutterBottom className={classess.title} variant="h4">
          {props.Series_Title}
        </Typography>
        <Typography variant="subtitle1" className={classess.detail}>
          {props.Overview}
        </Typography>
      </CardContent>
      <CardActions className={classess.cardActions}>
        {Array.from({ length: 5 }).map((_, index) =>
          <React.Fragment key={index}>
            <StarBorderIcon />
          </React.Fragment>
        )}
      </CardActions>
    </Card>
  );
}
