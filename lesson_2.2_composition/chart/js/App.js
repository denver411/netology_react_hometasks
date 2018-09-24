function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function compareNumbers(a, b) {
  return a - b;
}

function populateArray() {
	const	series = 5;
	const serieLength = 5;

	let data = new Array(series).fill(new Array(serieLength).fill(0));
	data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

	return data;
}

function getMax(data) {
	return data.reduce((max, serie) => 
	Math.max(max, serie.reduce((serieMax, item) => 
	Math.max(serieMax, item), 0)), 0);
}


class App extends React.Component {

	constructor(props) {
		super(props);
	  this.state = {
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		}
	}

	componentDidMount() {
		this.setState({ 'data': populateArray() });	
		setTimeout(this.componentDidMount.bind(this), 2000);
	}
	
	render() {
  	return (
			<section>
				<ChartDefault {...this.state} />
        <ChartStacked {...this.state}  />
				<ChartLayered {...this.state}  />
				<ChartHorizontal {...this.state}  />
        <ChartLegend {... this.state}/>
			</section>
		);
	}
}

class ChartLegend extends React.Component {

	constructor(props){
		super(props)
	}

	render() {
		const { labels, colors } = this.props;
		return (<div className="Legend">
		{ labels.map((label, labelIndex) => {
			return (
			<div>
				<span className="Legend--color" style={{ backgroundColor: colors[labelIndex % colors.length]  }} />
				<span className="Legend--label">{ label }</span>
			</div>
			);
		}) }
	</div>)
	}
}

class ChartDefault extends React.Component {
	constructor(props){
		super(props);
		this.className = {chart: null, item: null};
	}
	render () {
		return <ChartItem {...this.props} className={this.className}/>
  }
}

class ChartStacked extends React.Component {

	constructor(props){
		super(props);
		this.className = {chart: null, item: 'stacked'};
	}

	render() {
		return <ChartItem {...this.props} className={this.className}/>
	}
}

class ChartLayered extends React.Component {

	constructor(props){
		super(props);
		this.className = {chart: null, item: 'layered'};
	}

	render() {
		return <ChartItem {...this.props} className={this.className}/>
	}
}

class ChartHorizontal extends React.Component {

	constructor(props){
		super(props);
		this.className = {chart: 'horizontal', item: null};
	}

	render() {
		return <ChartItem {...this.props} className={this.className}/>
	}
}

class ChartItem extends React.Component {

	constructor(props){
		super(props);
	}

  render() {
		const className = this.props.className ? this.props.className : null;
		const { data, labels, colors } = this.props;
		const max = getMax(data);
		return (
			<div props={this.state} className={"Charts " + className.chart}>
		{ data.map((serie, serieIndex) => {
			let sortedSerie = serie.slice(0), sum;
	
			sum = serie.reduce((carry, current) => carry + current, 0);
			sortedSerie.sort(compareNumbers);
	
			return (
				<div className={"Charts--serie " + className.item}
					key={ serieIndex }
					style={{height: className.chart ? 'auto' : 250}}
				>
				<label>{ labels[serieIndex] }</label>
				{ serie.map((item, itemIndex) => {
					let color = colors[itemIndex], style
	
					style = {
						backgroundColor: color,
						zIndex: item
					};
					switch(className.item){
						case "stacked" :
							style.opacity = 1;
							style.height = (item / sum * 100) + '%';
							break;
						case "layered" :
						  style.opacity = item/max + .05;
							style.height = (item / max * 100) + '%';
              style.right = ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%'
						  break;
						default :
							style.opacity = item/max + .05;
							style.height = (item / max * 100) + '%';
					}

					if (className.chart) {
						style.width = (item / max * 100) + '%';
						style.height = null;
					}
	
				return (
					
					<div
						className={"Charts--item " + className.item}
						style={ style }
						key={ itemIndex }>
						<b style={{ color: color }}>{ item }</b>
					</div>
				);
			
			}) 
			}
				</div>
			);
		}) }
	  </div>)}
}