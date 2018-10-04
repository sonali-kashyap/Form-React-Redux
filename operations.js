import React from 'react';
import Buttons from './buttons';

export class Operations extends React.Component {


	constructor(props) {
		super(props);
		this.state = { 
			s: [], 
			data: ''
		};
		this.handleNum=this.handleNum.bind(this);
		this.handleSymbol=this.handleSymbol.bind(this);
		this.handleResult=this.handleResult.bind(this);
	}

	

	handleNum(e) {
		const sym= e.target.name;
		this.setState({ s: [...this.state.s, sym]});
	}

	handleSymbol(e) {
		const sym= e.target.name;
		this.setState({ s: [...this.state.s, sym]});
		
		if(sym.isEqual('='))
		{
			alert('ddddddddd');
			this.handleResult();
		}

	}

	handleResult () {

		const a=parseInt(this.state.s[0],10);
		const b=this.state.s[1];
		const c=parseInt(this.state.s[2],10);
		

		if(b=='+')
		{
			let result=a+c;
			

			this.setState({data: result});
		}

		else if(b=='-')
		{
			let result=a-c;
			this.setState({data: result});
		}

		else if(b=='*')
		{
			let result=a*c;
			this.setState({data: result});
		}

		else if(b=='/')
		{
			let result=a/c;
			this.setState({data: result});
		}

		

	}

	render() {
		return  (
			<div>
				<button onClick={this.handleResult}>ClickMe</button>
				<Buttons  handleNum={this.handleNum} handleSymbol={this.handleSymbol} res={this.state.data}/>
			</div>
			);
	}
}
