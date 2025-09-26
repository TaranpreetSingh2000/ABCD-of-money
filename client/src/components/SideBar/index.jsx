import "../SideBar/sidebar.css";

const SideBar = () => {
  return (
    <>
      <div className="right_sticky_options_wrapper">
        <ul className="right_option_list">
          <li className="rightNavAbcd-logo">
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#our_companies_modal"
              data-position="secondary_navigation"
              className="downloadLink"
            >
              <img
                src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/sticky_ico1.webp?extension=webp"
                alt="Our Companies"
                className="mob_app_right downloadImage"
                loading="lazy"
              ></img>
              <span>Our Companies</span>
            </a>
          </li>
          <li className="rightNavAbcd-logo">
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#get_in_touch_modal2"
              data-position="secondary_navigation"
              className="downloadLink"
            >
              <img
                src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/sticky_ico3.webp?extension=webp"
                alt="GET IN TOUCH "
                className="mob_app_right downloadImage"
                loading="lazy"
              ></img>
              <span>GET IN TOUCH </span>
            </a>
          </li>
          <li className="rightNavAbcd-logo">
            <a
              href="https://www.adityabirlacapital.com/abcd/check-free-credit-score?utm_source=website&amp;utm_medium=rightnavigation&amp;utm_campaign=namechange"
              target=""
              data-position="secondary_navigation"
              className="downloadLink"
            >
              <img
                src="https://www.adityabirlacapital.com/-/media/ABCCorp/data/media/img/icons/Credit-score-black.webp?extension=webp"
                alt="FREE CREDIT SCORE"
                className="mob_app_right downloadImage"
                loading="lazy"
              ></img>
              <span>FREE CREDIT SCORE</span>
            </a>
          </li>
          <li className="rightNavAbcd-logo">
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#metaverse_modal_x1"
              data-position="secondary_navigation"
              className="downloadLink"
            >
              <img
                src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/Logo-2.webp?extension=webp"
                alt="DOWNLOAD MOBILE APP"
                className="mob_app_right downloadImage"
                loading="lazy"
              ></img>
              <img
                src="https://www.adityabirlacapital.com/-/media/ABCD/data/media/img/Logo-2.webp?extension=webp"
                alt=""
                className="mob_app_right hover-img"
                loading="lazy"
              ></img>
              <span>DOWNLOAD MOBILE APP</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
