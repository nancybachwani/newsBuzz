import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: false
    };
  }

  toggleNavbar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  render() {
    return (
      <div className='main-cont'>
        <nav className={`navbar ${this.state.navbar ? 'active' : ''}`}>
          <div className='logo'>
            <i className="fa-regular fa-newspaper"></i>
            <span>News Buzz</span>
          </div>
          <ul className={`nav-links ${this.state.navbar ? 'active' : ''}`}>
            <li><Link className={`link`} to="/general">Home</Link></li>
            <li><Link className={`link`} to="/business">Business</Link></li>
            <li><Link className={`link`} to="/entertainment">Entertainment</Link></li>
            <li><Link className={`link`} to="/health">Health</Link></li>
            <li><Link className={`link`} to="/science">Science</Link></li>
            <li><Link className={`link`} to="/sports">Sports</Link></li>
            <li><Link className={`link`} to="/technology">Technology</Link></li>
          </ul>
          <button className='barIcon' onClick={this.toggleNavbar}>
            {this.state.navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </div>
    );
  }
}



export default Navbar;
