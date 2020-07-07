import { connect } from 'react-redux';
import { addItemToBasket, removeItemFromBasket } from '../../actions';
import BasketItem from './BasketItem';

const mapDispatchToProps = (dispatch) => ({
  addItemToBasket: (...args) => {
    dispatch(addItemToBasket(...args));
  },
  removeItemFromBasket: (...args) => {
    dispatch(removeItemFromBasket(...args));
  },
});

export default connect(null, mapDispatchToProps)(BasketItem);
