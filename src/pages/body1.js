import React from "react";
import picture1 from "./image/anh2.png";
import picture2 from "./image/anh1.png";
import picture3 from "./image/anh3.png";
function BodyOne() {
  return (
    <>
      <section>
        <div class="picture">
          <div class="row">
            <div class="col-3">
              <ul>
                <li class="bol">
                  <a href="../App.js" class="lu">
                    Thiết bị điện tử
                  </a>
                </li>
                <li class="bol">
                  <a href="../App.js" class="lu">
                    Phụ kiện điện tử
                  </a>
                </li>
                <li class="bol">
                  <a href="../App.js" class="lu">
                    TV & Thiết bị điện gia dụng
                  </a>
                </li>
                <li class="bol">
                  <a href="../App.js" class="lu">
                    Sức khỏe & làm đẹp
                  </a>
                </li>
                <li class="bol">
                  <a href="../App.js" class="lu">
                    Hàng mẹ, bé & đồ chơi
                  </a>
                </li>
                <li class="bol">
                  <a href="../App.js" class="lu">
                    Siêu thị tạp hóa
                  </a>
                </li>
                <li class="bol">
                  <a href="../App.js" class="lu">
                    Hàng gia dụng & phụ kiện nữ
                  </a>
                </li>
                <li class="bol">
                  <a href="../App.js" class="lu">
                    Thời trang & phụ kiện nam
                  </a>
                </li>
                <li class="bol">
                  <a href="../App.js" class="lu">
                    Thời trang & phụ kiện trẻ em
                  </a>
                </li>
                <li class="bol">
                  <a href="../App.js" class="lu">
                    Thể thao & du lịch
                  </a>
                </li>
                <li class="bol">
                  <a href="../App.js" class="lu">
                    Ô tô, xe máy
                  </a>
                </li>
                <li class="bol">
                  <a href="../App.js" class="lu">
                    Thiết bị định vị
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-9">
              <div class="picture1">
                <div
                  id="carouselExampleFade"
                  class="carousel slide carousel-fade"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={picture1} alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={picture2} alt="..." />
                    </div>
                    <div class="carousel-item">
                      <img src={picture3} alt="..." />
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleFade"
                    data-bs-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BodyOne;
