class ProgressBar extends React.Component {
  render() {
    return <canvas id="progressCanvas" className="progress" />;
  }
  componentWillReceiveProps() {
    this.drawCanvas();
  }

  componentDidMount() {
    this.drawCanvas();
  }

  drawCanvas = () => {
    console.log(this.props)
    const { total, completed } = this.props;
    const progress = completed / total;
    const canvas = document.getElementById('progressCanvas');
    canvas.height = canvas.offsetHeight;
    canvas.width = canvas.offsetWidth;
    const ctx = canvas.getContext('2d');
    const centerY = canvas.height / 2;
    const centerX = canvas.width / 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 52, 0, 2 * Math.PI);
    ctx.lineWidth = 7;
    ctx.strokeStyle = '#4ca89a';
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX, centerY, 45, 0, 2 * Math.PI * progress);
    ctx.lineWidth = 7;
    ctx.strokeStyle = '#96d6f4';
    ctx.stroke();
    ctx.fillStyle = '#000000';
    ctx.font = '22px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText((progress * 100).toFixed(0) + '%', centerX, centerY);
  };
}
