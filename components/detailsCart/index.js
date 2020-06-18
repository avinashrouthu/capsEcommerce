import React, { useEffect, useContext } from 'react';
import { Items, Item, Detail, WrapperDetails } from './styled';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Trash } from 'react-feather';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';
import Button from '../../common/Button';
import { ContextProducts } from '../../context/';

const DetailsCart = ({ data }) => {

  const contextProducts = useContext(ContextProducts);
  const {removeAllCart, removeFromCart, quantityProduct, decrementQuantityProduct, incrementQuantityProduct, aplyDesc, subTotalPrice, totalPrice } = contextProducts;

  const router = useRouter();

  return (
    <WrapperDetails>
      <Items>
        {data.length !== 0 &&
          data.map((item) => (
            <Item key={item._id}>
              <img src={item.images ? item.images[0] : ''} alt={item.title} />
              <div className="content">
                <Link href={`/producto/[id]/`} as={`/producto/${item._id}`}>
                  <a>{item.title}</a>
                </Link>
                <p className="count">
                  <span className="btn" onClick={decrementQuantityProduct}>-</span>
                  <span id="quantity">{quantityProduct}</span>
                  <span className="btn" onClick={incrementQuantityProduct}>+</span>
                </p>
              </div>
              <p className="price">{item.price}</p>
              <Trash size={17} onClick={() => removeFromCart(item._id)} />
            </Item>
          ))}
          <Button text="Limpiar Carrito" color="secondary" size="block" onClick={removeAllCart} />
      </Items>

      {/* Pasar a pagar */}
      <Detail>
        <div className="descuento">
          <p>¿Tenes un código de descuento?</p>
          <input type="text" placeholder="Codigo" />
          <button onClick={aplyDesc}>Aplicar</button>
        </div>
        <div className="summary">
          <p className="subtotal">
            Subtotal <span>{subTotalPrice}</span>
          </p>
          <p className="total">
            Total <span>{totalPrice}</span>
          </p>
          <hr />
          <Button color="default" text="Finalizar Compra" />
          <br />
          <Button
            color="dark"
            text="Seguir comprando"
            onClick={() => router.push('/productos')}
          />
        </div>
      </Detail>
    </WrapperDetails>
  );
};

DetailsCart.propTypes = {
  data: PropTypes.array,
  totalPrice: PropTypes.number,
};

export default React.memo(DetailsCart);
