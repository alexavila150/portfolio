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
import {Container, Row, Col} from 'react-bootstrap';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles(theme => ({
  customHoverFocus: {
		"&:hover, &.Mui-focusVisible": { color: "yellow" },
		"&.MuiIconButton-colorInherit": { color: "#DFEDF2" }
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
					<IconButton className={classes.customHoverFocus} color="inherit">
						<DeleteIcon />
					</IconButton>
					<IconButton className={classes.customHoverFocus} color="inherit">
						<DeleteIcon />
					</IconButton>
					<IconButton className={classes.customHoverFocus} color="inherit">
						<AlarmIcon />
					</IconButton>
					<IconButton className={classes.customHoverFocus} color="inherit">
						<AddShoppingCartIcon />
					</IconButton>
				</Grid>   

			</Grid> 
		</div>
		
  );
}
