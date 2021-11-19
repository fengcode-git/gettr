// import { createTheme } from '@material-ui/core/styles';
// import { red } from '@material-ui/core/colors';

import { red } from "@mui/material/colors";
// import { createTheme } from "@mui/material/styles";
import { createTheme } from '@mui/material/styles';
// import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;