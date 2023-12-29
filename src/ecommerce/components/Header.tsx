import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  return (
    <AppBar position="sticky" color="primary" sx={{ margin: 0, padding: 0 }}>
      <Toolbar sx={{ display: 'flex', gap: 3 }}>
        <Typography variant="h5" sx={{ flexGrow: 3 }}>
          fonseDev - Ecommerce
        </Typography>
        <Typography variant="h6">Hola</Typography>
        <Typography variant="h6">Hola</Typography>
        <Typography variant="h6">Hola</Typography>
        <Typography variant="h6">Hola</Typography>
      </Toolbar>
    </AppBar>
  );
};
