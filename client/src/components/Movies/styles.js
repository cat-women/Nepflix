import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  cards: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'start',
    overflowX: 'scroll',
    overflowY: 'hidden',
    transition: 'all 0.2s',
    padding: '20px',
    background: 'dark',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 15%)',
    '&::-webkit-scrollbar': {
      width: '12',
      height: '12 px'
    },
    '&::-webkit-scrollbar-track': {
      boxShadow: 'inset 0 0 6px rgb(247, 252, 249)',
      webkitBoxShadow: 'inset 0 0 6px rgb(247, 252, 249)',
      borderRadius: ' 92px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      outline: 'px solid slategrey'
    },
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 100%',
    padding: '20px',
    scrollSnapAlign: 'start',
    transition: 'all 0.2s'
  }
}))

export default useStyles
