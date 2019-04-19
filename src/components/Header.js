import React, { Component } from 'react';

class Header extends Component {
	state = { isHide: false };

	hideBar = () => {
		let { isHide } = this.state;
		window.scrollY > this.prev
			? !isHide && this.setState({ isHide: true })
			: isHide && this.setState({ isHide: false });

		this.prev = window.scrollY;
	};
	componentDidMount() {
		window.addEventListener('scroll', this.hideBar);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.hideBar);
	}
	render() {
		let barClassHide = this.state.isHide ? 'hide' : '';
		return (
			<div className={'header ' + barClassHide}>
				<span>Header Bar</span>
			</div>
		);
	}
}

export default Header;
