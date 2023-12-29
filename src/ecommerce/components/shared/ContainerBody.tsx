import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ListCardProduct } from '../products/ListCardProduct';

export const ContainerBody = () => {
  return (
    <>
      <CssBaseline />
      <Container>
        <ListCardProduct />
      </Container>
    </>
  );
};
