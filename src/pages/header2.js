import React, { useEffect } from "react";
import "../App.css";
import Picture6 from "./image/anh6.png";
import Picture7 from "./image/anh7.png";
function HeaderTwo() {
  useEffect(() => {
    window.onscroll = function () {
      myFunction();
    };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }
  }, []);

  return (
    <>
      <div class="head2">
        <div>
          <div class="nav1">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="../App.js">
                  Tiết kiệm hơn về ứng dụng
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../App.js">
                  Bán hàng cùng laza
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../App.js">
                  Chăm sóc khách hàng
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../App.js">
                  Kiểm tra đơn hàng
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../App.js">
                  Đăng nhập
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../App.js">
                  Đằng ký
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../App.js">
                  Change language
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="navbar">
          <div class="nav2">
            <div class="img1">
              <div class="row">
                <div class="col-2">
                  <div class="picture10">
                    <img
                      src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png"
                      alt=""
                      class="img2"
                    />
                  </div>
                </div>
                <div class="col-7">
                  <input type="text" placeholder="Tìm kiếm trên lazada" />
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </div>
                <div class="col-1">
                  <div class="img6">
                    <img src={Picture6} alt="" />
                  </div>
                </div>
                <div class="col-2">
                  <div class="img7">
                    <img src={Picture7} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderTwo;
