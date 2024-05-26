import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog } from '..';
import { FavoriteTable } from './FavoriteTable';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';


export type NavbarProps = {
	// types...
}

const Navbar: React.FC<NavbarProps>  = () => {
  useSelector((store: AppStore) => store.favorites);

    const handleClick = () => {
      dialogOpenSubject$.setSubject = true;
    }


    return (
      <>
        <CustomDialog>
        <FavoriteTable/>
        </CustomDialog>
        <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            CHALLENGE SENIOR DESARROLLADOR FRONT END
          </Typography>
          <Button variant= "contained" onClick={handleClick}>Open favorites</Button>
        </Toolbar>
      </AppBar>
      </>
    )
}

export default Navbar