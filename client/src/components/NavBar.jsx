import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import logo from "../assets/images/logo.png";

function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box
      sx={{
        width: "100%",
        height: "20vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "var(--primary-color)",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {[
          <Link to="/" key={Link} style={{ color: "var(--third-color)" }}>
            Acceuil
          </Link>,
          <Link
            to="/historique"
            key={Link}
            style={{ color: "var(--third-color)" }}
          >
            Historique
          </Link>,
        ].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <nav className="navbar">
      <Button id="menu-clic" onClick={toggleDrawer(true)}>
        &#9776;
      </Button>
      <div id="top">&nbsp;</div>
      <img className="img-logo-acceuil" src={logo} alt="logo" />
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="top">
        {DrawerList}
      </Drawer>
    </nav>
  );
}

export default NavBar;
