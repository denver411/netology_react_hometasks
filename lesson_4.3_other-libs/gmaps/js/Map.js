class Map extends React.Component {
  componentDidMount() {
    const office = this.props.points[0];
    const center = { lat: office.lat, lng: office.lon };
    this.map = new google.maps.Map(this.node, {
      center: { lat: 30, lng: 0 },
      zoom: 2
    });
    this.getMapPoints(this.props.points);
  }

  getMapPoints = points => {
    points.map(office => {
      const marker = { lat: office.lat, lng: office.lon };
      new google.maps.Marker({ position: marker, map: this.map });
    });
  };

  componentWillReceiveProps(newProps) {
    //проверка координат на идентичность
    if (JSON.stringify(newProps.points) === JSON.stringify(this.props.points))
      return;
    this.getMapPoints(newProps.points);
  }
  render() {
    return (
      <div className="mapContainer" ref={el => (this.node = el)}>
        Карта
      </div>
    );
  }
}
