import '../index.css';
import '../css/orders.css';

const ProductPage = () => {


    return (
        <>
            <div className='order-holder'>
                <div className='info-con'>
                    <p className='order-info'>Order nr:
                    </p>
                    <p className='order-info'>#84</p>
                </div>
                <div className='info-con'>
                    <p className='order-info'>Steve Waltet</p>
                </div>
                <div className='info-con'>
                    <p className='order-info'>4100 Armory Road</p>
                </div>
                <div className='info-con'>
                    <p className='order-info'>07 July 2022</p>
                </div>

                <table>
                    <tr>
                        <th>Product</th>
                        <th>Vintage</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Storage</th>
                    </tr>
                    <tr>
                        <td>Cabernet Sauvignon Shiraz</td>
                        <td>2002</td>
                        <td>Box</td>
                        <td>2</td>
                        <td>B4</td>
                    </tr>
                    <tr>
                        <td>Sauvignon Blanc</td>
                        <td>2012</td>
                        <td>Barrel</td>
                        <td>1</td>
                        <td>A2</td>
                    </tr>
                </table>
                <a><p className="dispatch-btn">Dispatch</p></a>
            </div>
        </>
    );
}

export default ProductPage;
