import React from 'react';
import styles from './Home.module.scss';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import KitchenIcon from '@material-ui/icons/Kitchen';
import TableChartIcon from '@material-ui/icons/TableChart';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <div className={styles.component}>
        <div>
          <h1>Mamma Mia! management system</h1>
          <h3>Please use links below or navigation bar</h3>
        </div>

        <div className={styles.items}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <LockOpenIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<Link to="/panel/login/">Login</Link>}/>
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <KitchenIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<Link to="/panel/kitchen/">Kitchen</Link>}/>
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <TableChartIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<Link to="/panel/tables/">Tables</Link>}/>
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <RoomServiceIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={<Link to="/panel/waiter/">Waiter</Link>}/>
          </ListItem>
        </div>
      </div>
    </div>
  );
};

export default Home;
