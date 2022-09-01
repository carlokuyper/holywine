import '../index.css';
import '../css/orders.css';

const OrderItemsBody = (props) => {

    return (
        <>
            <tr>
                <td>{props.productName}</td>
                <td>{props.productBrand}</td>
                <td>{props.price}</td>
                <td>{props.vintage}</td>
                <td>{props.variations}</td>
                <td>{props.size}</td>
                <td>{props.qty}</td>
            </tr>
        </>
    );
}

export default OrderItemsBody;
