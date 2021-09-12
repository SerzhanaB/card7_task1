import { Component } from 'react';
import React from 'react';
import './App.css';

class Products extends Component {
state ={
  products:[]}

componentDidMount() {
this.setState({

products: [
{id:1, name:'Товар 1', price:1200},
{id:2, name:'Товар 2', price:1500},
{id:3, name:'Товар 3', price:1700},
{id:4, name:'Товар 4', price:1100},
{id:5, name:'Товар 5', price:1300},
{id:6, name:'Товар 6', price:1300},]

})

}

delete = (targetId) => this.setState({ products: this.state.products.filter(({id})=> id!==targetId)})

create = (id,name,price) => this.setState({ products: [...this.state.products, {id:id,name:name, price:price}]})

update = (targetId,name,price) => this.setState({ products: this.state.products.map(product=>(
product.id!== targetId ? product:{id: targetId,name: name,price:price}


))})



  render(){
    const { products}=this.state
  

return (
<table className="products">

  <thead>
  <tr>
    <th className="products_th">№</th>
    <th className="products_th">Название</th>
    <th className="products_th">Цена</th>
    <th className="products_th">Действие</th>
    </tr>
     </thead>
<tbody>
{products.map( ({id,name,price})=> (

  <tr key={id}>

    <td className="products_td">{id}</td>
    <td className="products_td">{name}</td>
    <td className="products_td">{price}</td>
    <td className="products_td"> 
    <button className="products_btn" onClick={()=>{this.delete(id)}} > Удалить</button>
    </td>
    </tr>
)
)}
  </tbody>
  </table>
  );
}
}

export default Products;
