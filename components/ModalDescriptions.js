import {Modal} from 'antd';
import propTypes from 'prop-types';
import Descriptions from './Descriptions';

const ModalDescriptions = ({title, open, onClose, children, modalProps, ...props}) => {
  return (
    <Modal
      title={title}
      open={open}
      onOk={onClose}
      cancelButtonProps={{hidden: true}}
      {...modalProps}
    >
      <Descriptions
        {...props}
      >
        {children}
      </Descriptions>
    </Modal>
  );
};

ModalDescriptions.propTypes = {
  title: propTypes.string,
  open: propTypes.bool,
  onClose: propTypes.func,
  modalProps: propTypes.object,
  children: propTypes.node,
};

// @experimental
export default ModalDescriptions;
