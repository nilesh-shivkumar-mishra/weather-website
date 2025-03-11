import React, { Component } from "react";
import  "./Navbar.css"


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`Nav max1 m`}>
          <div className={`nav-left`}>
            <span>UNTIL GO</span>
            <span>
            <ul className={`ul`}>
              <li><a href="/">Home</a></li>
              <li><a href="/business">Business</a> </li>
              <li><a href="/entertainment">Entertainment</a></li>
              <li><a href="/general">General</a></li>
              <li><a href="/health">Health</a></li>
              <li><a href="/science">Science</a></li>
              <li><a href="/sports">Sports</a></li>
              <li><a href="/technology">Technology</a></li>
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
