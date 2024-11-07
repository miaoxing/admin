import $ from 'miaoxing';
import propTypes from 'prop-types';

const handleClick = (text, e) => {
  e.preventDefault();
  navigator.clipboard.writeText(text);
  $.suc('复制成功');
};

const CopyLink = ({ text, children, ...props }) => {
  return (
    <a onClick={handleClick.bind(this, text)} {...props}>{children || '复制链接'}</a>
  );
};

CopyLink.propTypes = {
  text: propTypes.string,
  children: propTypes.node,
};

export default CopyLink;
