import '../index.css';
import '../css/orders.css';

const OrderItemsHead = (props) => {

    console.log(props.name);

    let orderNr = props._id

    console.log(orderNr);

    return (
        <>
            <div className='order-holder'>
                <div className='info-con'>
                    <p className='order-info'>{props.name} {props.surname}</p>
                </div>
                <div className='info-con'>
                    <p className='order-info'>Address: {props.address}</p>
                </div>
                <div className='info-con'>
                    <p className='order-info'>Contact: {props.contact}</p>
                </div>
            </div>
        </>
    );
}

export default OrderItemsHead;
