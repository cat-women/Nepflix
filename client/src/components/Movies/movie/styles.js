import { makeStyles } from '@material-ui/core/styles'

export default makeStyles({
  media: {
    height: '160px',
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
    borderRadius: '12px',
    margin: '30px'
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
    padding: '2px'
  },
  detail: {
    padding: '2px'
  },

  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    background: '#545050',
    color: 'rgb(255,255,255)'
  }
})
