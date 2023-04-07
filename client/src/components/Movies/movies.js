import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import MovieCard from './movie/movie.js';
import useStyle from './styles.js';

export default function Movies () {
  const classess = useStyle();

  const { movies, isLoading } = useSelector(store => store.movie);
  if (isLoading) return <CircularProgress />;
  else {
    return (
      <Grid className={classess.cards}>
        <Grid item className={classess.card}>
          {movies.map(item => {
            return <MovieCard key={item._id} {...item} />;
          })}
        </Grid>
      </Grid>
    );
  }
}
