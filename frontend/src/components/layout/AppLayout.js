import { Link } from "react-router-dom";
import {
  AppBar,
  Container,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Tooltip,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
export const Applayout = () => {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: "flex", mr: 1 }} />
            <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: "flex",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "white",
                }}
              >
                Library Management System
              </Typography>
            </Link>
            <Box
              sx={{
                flexGrow: 0,
              }}
            >
              <>
                <Tooltip title="Open settings">
                  <IconButton sx={{ p: 0 }}>
                    <Avatar> </Avatar>
                  </IconButton>
                </Tooltip>
              </>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
