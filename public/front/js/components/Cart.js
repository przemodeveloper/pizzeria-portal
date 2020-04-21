import {select, classNames, settings, templates} from '../settings.js';
import utils from '../utils.js';
import CartProduct from './CartProduct.js';

class Cart {
  constructor(element) {
    const thisCart = this;

    thisCart.deliveryFee = settings.cart.defaultDeliveryFee;

    thisCart.products = [];

    thisCart.getElements(element);
    thisCart.initActions();
      
    //console.log('new cart', thisCart);
  }

  update() {
    const thisCart = this;

    console.log('cart', thisCart);

    thisCart.totalNumber = 0;
    thisCart.subtotalPrice = 0;

    for (let product in thisCart.products) {

      console.log('produkt', product);
        
      thisCart.subtotalPrice = thisCart.subtotalPrice + thisCart.products[product].price;

      thisCart.totalNumber = thisCart.totalNumber + thisCart.products[product].amount;
        
    }

    if (thisCart.subtotalPrice == 0) {
      thisCart.deliveryFee = 0;
      thisCart.totalPrice = thisCart.subtotalPrice + thisCart.deliveryFee;
    } else {
      thisCart.deliveryFee = 20;
      thisCart.totalPrice = thisCart.subtotalPrice + thisCart.deliveryFee;
    }

    //console.log('numbers', thisCart.totalNumber, thisCart.subtotalPrice, thisCart.totalPrice);

    for (let key of thisCart.renderTotalsKeys) {
      for (let elem of thisCart.dom[key]) {
        elem.innerHTML = thisCart[key];
      }
    }
  }

  getElements(element) {
    const thisCart = this;

    thisCart.dom = {};

    thisCart.dom.wrapper = element;

    thisCart.dom.productList = thisCart.dom.wrapper.querySelector(select.cart.productList);
    thisCart.dom.toggleTrigger = thisCart.dom.wrapper.querySelector(select.cart.toggleTrigger);
    thisCart.dom.form = thisCart.dom.wrapper.querySelector(select.cart.form);
    thisCart.dom.phone = thisCart.dom.wrapper.querySelector(select.cart.phone);
    thisCart.dom.address = thisCart.dom.wrapper.querySelector(select.cart.address);

    thisCart.renderTotalsKeys = ['totalNumber', 'totalPrice', 'subtotalPrice', 'deliveryFee'];

    for (let key of thisCart.renderTotalsKeys) {

      thisCart.dom[key] = thisCart.dom.wrapper.querySelectorAll(select.cart[key]);

    }
  }

  initActions() {
    const thisCart = this;

    thisCart.dom.toggleTrigger.addEventListener('click', function() {
      if (thisCart.dom.wrapper.classList.contains(classNames.cart.wrapperActive)) {
        thisCart.dom.wrapper.classList.remove(classNames.cart.wrapperActive);
      } else {
        thisCart.dom.wrapper.classList.add(classNames.cart.wrapperActive);
      }
    });

    thisCart.dom.productList.addEventListener('updated', function(){
      thisCart.update();
    });

    thisCart.dom.productList.addEventListener('remove', function(){
      thisCart.remove(event.detail.cartProduct);
    });

    thisCart.dom.form.addEventListener('submit', function(event) {
      event.preventDefault();
      thisCart.sendOrder();
    });
  }

  sendOrder() {
    const thisCart = this;
    const url = settings.db.url + '/' + settings.db.order;
    const payload = {
      address: thisCart.dom.address,
      phone: thisCart.dom.phone,
      totalPrice: thisCart.totalPrice,
      subtotalPrice: thisCart.subtotalPrice,
      totalNumber: thisCart.totalNumber,
      deliveryFee: thisCart.deliveryFee,
      products: [],
    };

    for (let product of thisCart.products) {
      const productData = product.getData();
      payload.products.push(productData);
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, options)
      .then(function(response) {
        return response.json();
      }).then(function(parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  }

  add(menuProduct) {
    const thisCart = this;

    const generatedHTML = templates.cartProduct(menuProduct);
    const generatedDOM = utils.createDOMFromHTML(generatedHTML);
    thisCart.dom.productList.appendChild(generatedDOM);
    thisCart.products.push(new CartProduct(menuProduct, generatedDOM));
    thisCart.update();

    //console.log('thisCart.products: ', thisCart.products);

  }

  remove(cartProduct) {
    const thisCart = this;
    const index = thisCart.products.indexOf(cartProduct);
    thisCart.products.splice(index, 1);
    cartProduct.dom.wrapper.remove();
    thisCart.update();
    //console.log(thisCart.deliveryFee);
  }
}

export default Cart;