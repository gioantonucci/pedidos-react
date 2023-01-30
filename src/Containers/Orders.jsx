import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
    return (
        <div>
            <button><Link to={'/orders/new'}>Nuevo pedido</Link></button>
        </div>
    );
}

export default Orders;
