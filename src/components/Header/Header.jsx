import { MenuOutlined } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  MenuList,
  IconButton,
  Toolbar,
  Typography,
  Paper,
  InputBase,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./header.styles.js";
import { SearchTheses } from "./SearchTheses";

const NavBar = () => {
  const classes = useStyles();
  const [searchValues, setSearchValues] = useState("");
  const [resultado, setResultado] = useState(null);

  const { searchcriterion } = searchValues;

  const handleInputChange = (e) => {
    setSearchValues({
      ...searchValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Toolbar>
        <MenuList>
          <Typography className={classes.title}>Overview</Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: "24px",
              color: "#252733",
              fontFamily: "Mulish",
              fontWeight: "700",
              marginRight: 25,
            }}
          ></Typography>
          <Typography></Typography>
          <Typography></Typography>
        </MenuList>

        <Typography></Typography>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "right",
            gap: "20px",
          }}
        >
          <div>
            <Paper
              variant="outlined"
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "right",
                width: 400,
                borderRadius: "25px",
                paddingLeft: "5px",
              }}
            >
              <InputBase
                name="searchcriterion"
                value={searchcriterion}
                onChange={handleInputChange}
                sx={{ ml: 1, flex: 1, font: "small-caption" }}
                placeholder="Buscar Documento"
              />
              <IconButton
                type="submit"
                size="small"
                sx={{ p: "10px", padding: "5px" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </div>
          <div style={{ marginRight: "20px" }}>
            <Badge color="primary" variant="dot">
              <NotificationsIcon
                fontSize="small"
                sx={{
                  color: "#C5C7CD",
                }}
              />
            </Badge>
          </div>
          <div>
            <p
              style={{
                color: "#252733",
                fontFamily: ["Mulish", "sans-serif"].join(),
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              Jones Ferdinand
            </p>
          </div>
          <div>
          <Avatar>  
            <img src='componentHeader/avatar.jpeg' alt='Avatar' />    
          </Avatar>
          </div>
        </div>
      </Toolbar>

      {resultado && <SearchTheses resultado={resultado} />}
    </>
  );
};
export default NavBar;
