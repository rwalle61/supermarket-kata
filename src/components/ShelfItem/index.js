import { connect } from 'react-redux';
import { addItemToBasket } from '../../actions';
import ShelfItem from './ShelfItem';

const mapDispatchToProps = (dispatch) => ({
  addItemToBasket: (...args) => {
    dispatch(addItemToBasket(...args));
  },
});

export default connect(null, mapDispatchToProps)(ShelfItem);
