import css from './FriendList.module.css';

const FriendListItem = ({ item }) => {
  return (
    <>
      {item.map(({ avatar, name, isOnline, id }) => (
        <li className={css.item} key={id}>
          <span className={`${css.status} ${css[isOnline]} `}></span>
          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </>
  );
};
export default FriendListItem;
