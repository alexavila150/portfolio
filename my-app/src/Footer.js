import React from 'react';
import { Icon, Grid } from '@material-ui/core'
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import IconButton from '@material-ui/core/IconButton';
import {GitHub, LinkedIn, PictureAsPdf} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  customHoverFocus: {
		"&:hover, &.Mui-focusVisible": { color: "yellow" },
		"&.MuiIconButton-colorInherit": { color: "#DFEDF2"},
		"&.MuiIconButton-root": {size:"5rem", fontSize: "4rem"},
		"&.MuiIcon-fontSizeInherit": {fontSize: "4rem"}
  }
}));

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
		<div className="Footer">
			<Grid
				container
				spacing={0}
				direction="column"
				alignItems="center"
				justify="center"
			>

				<Grid>
					<IconButton href="https://www.linkedin.com/in/alexavila150/" className={classes.customHoverFocus} color="inherit" target="_blank">
						<LinkedIn fontSize="inherit"/>
					</IconButton>
					<IconButton href="https://github.com/alexavila150" className={classes.customHoverFocus} color="inherit" target="_blank">
						<GitHub fontSize="inherit"/>
					</IconButton>
					<IconButton href="/images/Avila_Alex_Resume.pdf" className={classes.customHoverFocus} color="inherit" target="_blank">
						<PictureAsPdf fontSize="inherit"/>
						<p>Resume</p>
					</IconButton>
				</Grid>   

			</Grid> 
		</div>
		
  );
}
