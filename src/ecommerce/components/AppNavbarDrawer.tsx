import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { AppDrawer } from './AppDrawer';

export default function AppNavbarDrawer() {
  return (
    <Box sx={{ paddingBottom: '20px' }}>
      <AppBar position="static">
        <Toolbar>
          <AppDrawer />
          <Typography sx={{ marginLeft: '10px' }} variant="h6">
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
