import { Profile } from 'components/Profile/Profile';
import userInfo from 'user.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
    </div>
  );
};
