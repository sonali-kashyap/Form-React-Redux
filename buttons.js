import React from 'react';
import '../App.css';

class Buttons extends React.Component {

	

	renderSquare(i) {
		return(
				<div >
					<button className="square" onClick={this.props.handleNum} name={i}>{i}</button>
				</div>
			);
	}

	renderSymbol(i) {
		return(
				<div >
					<button className="symbol" onClick={this.props.handleSymbol} name={i}>{i}</button>
				</div>
			);
	}

	
	render() {
		return (
				<div className="outer">
					<pre>
						<input className="box" type="text" value={this.props.res}/><br/></pre>

					<div className="board-row">
							{this.renderSquare('=')}
				            {this.renderSymbol('%')}
				            {this.renderSquare('0')}
				            {this.renderSymbol('+')}
					</div>

					<div className="board-row">		         
				          {this.renderSquare(1)}
				          {this.renderSquare(2)}
				          {this.renderSquare(3)}
				          {this.renderSymbol('-')}
			        </div>

			        <div className="board-row"  >
				          {this.renderSquare(4)}
				          {this.renderSquare(5)}
				          {this.renderSquare(6)}
				          {this.renderSymbol('*')}
			        </div>
			        <div className="board-row">
				          {this.renderSquare(7)}
				          {this.renderSquare(8)}
				          {this.renderSquare(9)}
				          {this.renderSymbol('/')}
			        </div>
				</div>
			);
	}
}

export default Buttons;