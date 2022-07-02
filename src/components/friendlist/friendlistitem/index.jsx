import PropTypes from 'prop-types';
import style from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline, id}) => {
  return (
    <li className={style.item} key={id}>
      <span className={isOnline ? style.online : style.offline}></span>
      <img className={style.avatar} src={avatar} alt={name} width="48" />
      <p className={style.name}>{name}</p>
    </li>
  )
}

FriendListItem.propsType = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
  key: PropTypes.number.isRequired,
}

export default FriendListItem;