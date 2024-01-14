import { CssBaseline } from "@mui/material";
import { Header } from "../components/Header"
import { Outlet } from "react-router-dom";


export const PublicLayout = () => {
  return (
    <>
        <CssBaseline />
        <Header />
        <Outlet/>
    </>
  )
}