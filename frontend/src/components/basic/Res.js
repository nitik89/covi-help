import React from 'react'
import { Link, useHistory } from 'react-router-dom'
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#E07C24" };
  } else {
    return { color: "black" };
  }
};


function Res() {
  const history=useHistory();
    return (
        <div>
          <ul class="nav nav-tabs">
  <li class="nav-item">
    <Link class="nav-link" style={currentTab(history, "/resources/oxygen")}  to="/resources/oxygen">Oxygen Cylinders</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" style={currentTab(history, "/resources/food")} to="/resources/food" >Food</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" style={currentTab(history, "/resources/medicines")}  to="/resources/medicines">Medicines</Link>
  </li>

</ul>
        </div>
    )
}

export default Res
