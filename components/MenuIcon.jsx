import SVG from 'react-inlinesvg';
import propTypes from 'prop-types';

const MenuIcon = ({ src, ...props }) => {
  if (!src) {
    return '';
  }

  return (
    <SVG src={src} fill="currentColor" width="1em" height="1em" viewBox="0 0 1024 1024" {...props}/>
  );
};

MenuIcon.propTypes = {
  src: propTypes.string,
};

export default MenuIcon;
