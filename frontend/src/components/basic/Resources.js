import React from 'react'
import { Link, useHistory } from 'react-router-dom'
const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#E07C24" };
  } else {
    return { color: "black" };
  }
};


function Resources() {
  const history=useHistory();
    return (
        <div>
          
            <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link class="nav-link active" to="/add-medicines" style={currentTab(history, "/add-medicines")} > Add Medicines</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link active" to="/add-oxygen" style={currentTab(history, "/add-oxygen")}  >Add Oxygen</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link active" to="/add-food" style={currentTab(history, "/add-food")} >Add food</Link>
  </li>
  
</ul>
        </div>
    )
}

export default Resources
