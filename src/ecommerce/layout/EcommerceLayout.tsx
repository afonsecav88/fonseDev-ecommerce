import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Search } from "../../shared/components/Search";

export const EcommerceLayout = () => {
  return (
    <>
      <Container sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Search />
      </Container>
      <Container
        sx={{
          display: 'flex',
          gap: 5,
          flexWrap: 'wrap',
        }}
      >
        <Outlet/>
      </Container>
    </>
  )
}