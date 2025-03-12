import React, { Component } from "react";
import  "./Navbar.css"


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`Nav max1 m`}>
          <div className={`nav-left`}>
            <span>WeatherApp</span>
            <span>
            <ul className={`ul`}>
              <li><a href="/">Home</a></li>
            </ul>
            </span>
          </div>

        <div className={`nav-right`}>
        <form action="/search.html" method="get">
          <input placeholder="search here" className={`form-input`} name="query" type="text" />
          <button className={`search-button`}>search</button>
        </form>
          
          </div>
        </nav>
      </div>
    );
  }
}
