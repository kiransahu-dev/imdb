import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Box, Typography, InputBase } from '@mui/material'
import { logoUrl } from '../../constants/constant'
import HeaderMenu from './HeaderMenu';
import { useNavigate } from 'react-router-dom';
import { routePath } from './../../constants/route';

import MenuIcon from '@mui/icons-material/Menu';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




// header components
const Header = () => {

    // open menu
    const [open, setOpen] = useState(null);
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    }

    // existing to main menue
    const handleClose = () => {
        setOpen(null);
    }

    return (
        <AppBar position='static'>
            {/* border bar */}
            <StyledToolBar>
                <Logo style={{ cursor: 'pointer' }} src={logoUrl} alt='logo/title' onClick={() => navigate(routePath.home)} />
                <Box onClick={handleClick}>
                    {/* menu bar */}
                    <MenuIcon />
                    <Typography>Menu</Typography>
                </Box>
                {/* menu bar */}
                <HeaderMenu open={open} handleClose={handleClose} />
                {/* input field */}
                <InputSearch placeholder="Search for movies"
                    value={search}
                    onChange={(e) => { setSearch(e.target.value) }}
                >
                </InputSearch>
                {/* bookmark field */}
                <Box>
                    <BookmarkAddIcon />
                    <Typography>Watchlist</Typography>
                </Box>
                {/* authentication */}
                <Typography>Sign In</Typography>
                {/* lang selection */}
                <Box>
                    <Typography>En</Typography>
                    <ExpandMoreIcon />
                </Box>
            </StyledToolBar>
        </AppBar>
    )
}

export default Header;


// Styled components

const StyledToolBar = styled(Toolbar)`
    background: #121212;
    min-height: 56px !important;
    padding: 0 115px !important;
    justify-content: space-between;
    & > *
    {
        padding: 16px;
    } 
    & > div
    {
        display: flex;
        align-items: center;
        cursor: pointer;
        & > p
        {
            font-size: 14px;
            font-weight: 700;
        }
    }
    & > p
    {
        font-style: 14px;
        font-weight: 700;
    }
`
const InputSearch = styled(InputBase)`
    background: #ffffff;
    height: 30px;
    width: 55%;
    border-radius: 5px;
`

const Logo = styled('img')({
    width: 64
});