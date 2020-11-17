import PropTypes from 'prop-types';
import {Component} from "react";

class ShopItemClass extends Component {
    static propTypes = {
        item: PropTypes.shape({
            brand: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            descriptionFull: PropTypes.string,
            price: PropTypes.number.isRequired,
            currency: PropTypes.string
        })
    }

    render() {
        const {item} = this.props
        return (
            <div className="main-content">
                <h2>{item.brand}</h2>
                <h1>{item.title}</h1>
                <h3>{item.description}</h3>
                <div className="description">
                    {item.descriptionFull}
                </div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"></div>
                </div>
                <div className="divider"></div>
                <div className="purchase-info">
                    <div className="price">{item.price + item.currency}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }
}

export default ShopItemClass;
