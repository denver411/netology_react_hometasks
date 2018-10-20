class Cart extends React.Component {
  render() {
    console.log('+1')
    return <CartView {...this.props} />;
  }

  shouldComponentUpdate(nextProps, nextState) {
    const cartStateIsChanged = this.props.isOpen !== nextProps.isOpen;
    const cartIsOpen =
      this.props.isOpen && this.props.items.length !== nextProps.items.length;

    return cartStateIsChanged || cartIsOpen;
  }
}
