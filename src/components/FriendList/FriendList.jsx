import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendListItem item={friends} />
    </ul>
  );
};
FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};