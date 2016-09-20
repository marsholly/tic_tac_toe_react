let App = React.createClass({
  getInitialState(){
    return {
      player: ''
    }
  },

  curPlayer(status) {
    this.setState({
      player: status
    })
  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <Player curPlayer={this.curPlayer}/>
          </div>
        </div>
        <div className="row">
          <div className="text-center">
            <Board player={this.state.player}/>
          </div>
        </div>
      </div>
    )
  }
});

const Player = React.createClass({
  player(e){
    let status = e.target.value;
    this.props.curPlayer(status);
  },

  render() {
    return (
      <div className="row">
        <h3>Player 1 : <button className="btn btn-default btn-lg" value='O' onClick={this.player}>O</button></h3>
        <h3>Player 2 : <button className="btn btn-default btn-lg" value='X' onClick={this.player}>X</button></h3>
      </div>
    )
  }
});

const Board = React.createClass({
  getInitialState() {
    return {
      board: ['', '', '', '', '', '', '', '', ''],
      status:['', '', '', '', '', '', '', '', ''],
    };
  },

  squareClick(e){
    let index = e.target.value;
    let { player } = this.props;
    let { status } = this.state;
    status[index] = player;
    this.setState({ status });
  },

  checkGame(){
    let { status } = this.state;
    let check = (a,b,c) =>{
      return !!(a+b+c).match(/^(xxx|ooo)$/gi);
    }

    if (check(status[0], status[1], status[2])){
      if(status[0] === 'O'){
        alert('Player 1 win!');
      }else{
        alert('Player 2 win!');
      }
    };

    if (check(status[3], status[4], status[5])){
      if(status[3] === 'O'){
        alert('Player 1 win!');
      }else{
        alert('Player 2 win!');
      }
    };

    if (check(status[6], status[7], status[8])){
      if(status[6] === 'O'){
        alert('Player 1 win!');
      }else{
        alert('Player 2 win!');
      }
    };

    if (check(status[0], status[3], status[6])){
      if(status[0] === 'O'){
        alert('Player 1 win!');
      }else{
        alert('Player 2 win!');
      }
    };

    if (check(status[1], status[4], status[7])){
      if(status[1] === 'O'){
        alert('Player 1 win!');
      }else{
        alert('Player 2 win!');
      }
    };

    if (check(status[2], status[5], status[8])){
      if(status[2] === 'O'){
        alert('Player 1 win!');
      }else{
        alert('Player 2 win!');
      }
    };

    if (check(status[0], status[4], status[8])){
      if(status[0] === 'O'){
        alert('Player 1 win!');
      }else{
        alert('Player 2 win!');
      }
    };

    if (check(status[2], status[4], status[6])) {
      if(status[2] === 'O'){
        alert('Player 1 win!');
      }else{
        alert('Player 2 win!');
      }
    };

    if (status.join('').length === 9) alert('draw');
  },

  render() {
    let result = this.checkGame();
    let {status, board} = this.state;
    let square = this.state.board.map((square, index) => {
      return (
        <button
          type="button"
          className="btn btn-default btn-square"
          key={index}
          id = {index}
          value={index}
          onClick={this.squareClick}
        >
          <h1>{status[index]}</h1>
        </button>
      )
    });

    return (
      <div className="board">
        {square}
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
