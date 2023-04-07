import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  media: {
    height: '160px',
    paddingTop: '56.25%',
    backgroundBlendMode: 'darken'
  },
  border: {
    border: 'solid'
  },
  fullHeightCard: {
    height: '100%'
  },
  card: {
    position: 'relative',
    width: '400px',
    height: '800px',
    borderRadius: '12px',
    margin: '30px',
    backgroundColor: '#545050'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white'
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white'
  },
  grid: {
    display: 'flex'
  },
  content: {
    marginTop: 'auto',
    padding: '2px',
    height: 'auto',
    background: '#545050',
    color: 'rgb(255,255,255)'
  },
  details: {
    margin: '1px',
    overflow: 'auto',
    wordWrap: 'break-word'
  },
  title: {
    padding: '2px',
    fontSize: 12
  },
  detail: {
    padding: '2px'
  },

  cardActions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '0 16px 8px 16px',
    display: 'flex',
    background: '#545050',
    color: 'rgb(255,255,255)'
  }
});
