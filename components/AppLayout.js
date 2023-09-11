import PropTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>menu</div>
      {children}
    </div>
  )
}

AppLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;