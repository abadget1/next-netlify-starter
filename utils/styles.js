import { createMuiTheme, makeStyles } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '2.2rem',
      fontWeight: 400,
      margin: '2rem 0',
      color: "white",

    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 400,
      margin: '1rem 0',
      color: "white",

    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 400,
      margin: '1rem 0',
      color: "white",

    },
  },
  palette: {
    primary: {
      main: '#f0c000',
    },
    secondary: {
      main: '#208080',
    },
    error: {
      main: '#f04000',
    },
    background: {
      color: "white",
      default: 'black',
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    backgroundColor: 'black',
    color: 'white'
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: '1rem',
  },
  main: {
    padding: '1rem',
    color: "white",

  },
  largeImage: {
    maxWidth: '50rem',
    width: '100%',
  },
  mt1: {
    marginTop: '1rem !important',
  },
  p1: {
    padding: '1rem !important',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%',
  },
}));
