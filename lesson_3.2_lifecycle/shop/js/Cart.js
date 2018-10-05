class Cart extends React.Component {
  render() {
    return <CartView {...this.props} />;
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.props.isOpen !== nextProps.isOpen ||
      (this.props.isOpen && this.props.items.length !== nextProps.items.length)
    ) {
      return true;
    }
    return false;
  }
}
