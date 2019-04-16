import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../components/Products";

class ProductsContainer extends Component {
  render() {
    let { products } = this.props;
    return <Products products={products} />;
  }
}

const mapStateProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(
  mapStateProps,
  mapDispatchToProps
)(ProductsContainer);
