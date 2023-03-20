import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#17181a',
    display: 'flex',
    position: 'relative',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    alignContent: 'stretch'
  },
  title: {
    flexGrow: 1
  },
  toolBar: {
    justifyContent: 'space-evenly'
  }
}))

export default useStyles
