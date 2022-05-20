import React from 'react';
import "./Footer.css";

function Footer() {
  return (
      <footer>
          <div className="flex">

            <div className="logo">
                <span className="title-logo">
                M.P ऑनलाइन
                </span>
            </div>
            <div className="social">
              <a href="https://github.com/Ganesh-Rathor">
                <i class="fa-brands fa-github fa-xl"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram fa-xl"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-facebook fa-xl"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-twitter fa-xl"></i>
              </a>
            <a href="https://www.linkedin.com/in/ganesh-rathor-92388422b/">
              <i class="fa-brands fa-linkedin fa-xl"></i>
            </a>

            </div>
            <div className="create">
                <p>Copyright@2022#byGanesh</p>
                <p>Created by Ganesh Rathor</p>
            </div>
        </div>

        <div className="hire">
          <a href="https://ganesh-rathor.github.io/P/">

            <i class="fa-brands fa-hire-a-helper fa-2xl"></i>
            HIRE ME
          </a>
        </div>
      </footer>
  )
}

export default Footer