import { connect } from 'react-redux';
import Basket from './Basket';

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps)(Basket);
