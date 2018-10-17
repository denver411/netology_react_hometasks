class Map extends React.Component {
  getMap = office => {
    const center = {lat: office.lat, lng: office.lon};
    
    const map = new google.maps.Map(document.querySelector('.mapContainer'), { zoom: 4, center: center });

    // const marker = new google.maps.Marker({ position: center, map: map });
    // return map;
  };

  componentDidMount() {
    const office = this.props.points[0];
    const center = {lat: office.lat, lng: office.lon};  
    console.log(center);
    this.map = new google.maps.Map(this.node, {
      center: center,
      zoom: 4
    })
    this.props.points.map(office => {
      const marker = {lat: office.lat, lng: office.lon};
      new google.maps.Marker({ position: marker, map: this.map })
    })

  }
  render() {
    return (
      <div className="mapContainer" ref={el => (this.node = el)}>
        Карта
      </div>
    );
  }
}
