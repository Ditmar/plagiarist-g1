import { Link } from 'react-router-dom';
import { items } from '../nav/components/data/items';
import useStyles from './menuComponent.styles';

const MenuComponent = () => {
    const classes = useStyles();
    return (
    <div className={classes.menu}>
        <ul>
            {items.map(item => (
               <li key={item.name}>
                   <Link  to={item.to}>{item.name}</Link>

               </li> 
            ))}
        </ul>
    </div>)

}
export default MenuComponent;