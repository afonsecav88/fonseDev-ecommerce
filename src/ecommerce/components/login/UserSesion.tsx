import { Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useHandleSesion } from '../../hooks/login/useHandleSesion';

export const UserSesion = () => {
  const { handleOnClick, isLogged, username } = useHandleSesion();
  if (!isLogged) return;
  return (
    <>
      <Typography color="info.light" variant="h6">
        {username.toUpperCase()}
      </Typography>
      <Button
        onClick={handleOnClick}
        variant="contained"
        color="secondary"
        title="cerrar sesion"
      >
        <LogoutIcon />
      </Button>
    </>
  );
};
