import {Avatar as AntdAvatar} from 'antd';
import propTypes from 'prop-types';
import defaultAvatar from '../images/avatar.jpg';

const Avatar = ({user, ...rest}) => {
  return (
    <AntdAvatar src={user.avatar || defaultAvatar} {...rest}/>
  );
};

Avatar.propTypes = {
  user: propTypes.shape({
    avatar: propTypes.string,
  }),
};

export default Avatar;
