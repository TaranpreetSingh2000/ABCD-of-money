import "../OurCompanyModal/ourCompanyModal.css";

const OurCompanyModal = () => {
  return (
    <div
      className="modal fade right_pos show"
      id="our_companies_modal"
      tabIndex={-1}
      aria-labelledby="our_companies_modalLabel"
      style={{ display: "block" }}
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-slideout-right">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>

          <div className="modal-header">
            <div
              className="modal-title modal-title-oc"
              id="our_companies_modalLabel"
            >
              Our Companies
            </div>
          </div>

          <div className="modal-body">
            {[
              {
                href: "https://homefinance.adityabirlacapital.com/",
                title: "Aditya Birla Housing Finance Limited",
                img: "/-/media/ABCCorp/data/media/img/ico_fin_sol4.ashx?iar=0&hash=7D5AA71514CA7B422A9FC0BA38B57D42",
              },
              {
                href: "https://lifeinsurance.adityabirlacapital.com/",
                title: "Aditya Birla Sun Life Insurance Company Limited",
                img: "/-/media/ABCCorp/data/media/img/companies-icon/right-ico1.ashx?h=40&iar=0&w=40&hash=215F84BD259ECCF834C04C1C7CA091EE",
              },
              {
                href: "https://www.adityabirlacapital.com/healthinsurance/homepage",
                title: "Aditya Birla Health Insurance Company Limited",
                img: "/-/media/ABCCorp/data/media/img/ico_fin_sol2.ashx?iar=0&hash=C692D309EE062478801EFC241EA98910",
              },
              {
                href: "https://stocksandsecurities.adityabirlacapital.com/",
                title: "Aditya Birla Money Limited",
                img: "/-/media/ABCCorp/data/media/img/ico_fin_sol1.ashx?iar=0&hash=9A81774D316C29EB50693A4A4446F689",
              },
              {
                href: "https://mutualfund.adityabirlacapital.com/",
                title: "Aditya Birla Sun Life Mutual Fund Limited",
                img: "/-/media/ABCCorp/data/media/img/ico_fin_sol7.ashx?iar=0&hash=A376AE3B266ED6D7A8EE469B9D66704D",
              },
              {
                href: "https://pensionfund.adityabirlacapital.com/",
                title: "Aditya Birla Sun Life Pension Management Limited",
                img: "/-/media/ABCCorp/data/media/img/ico_retirement_plan.ashx?iar=0&hash=A9A25B3297C0CA0C2AEB103C8E27A175",
              },
              {
                href: "https://www.adityabirlacapital.com/multiply-wellness/#!/home",
                title: "Aditya Birla Wellness Private Limited",
                img: "/-/media/ABCCorp/data/media/img/ico_fin_sol2.ashx?iar=0&hash=C692D309EE062478801EFC241EA98910",
              },
              {
                href: "https://assetreconstruction.adityabirlacapital.com/",
                title: "Aditya Birla Asset Reconstruction Company Limited",
                img: "/-/media/ABCCorp/data/media/img/icons/nav_mf_cat6.ashx?iar=0&hash=CD2BD12B4E051D65203EA6F218FB88EB",
              },
              {
                href: "https://www.adityabirlacapital.com/abcd",
                title: "Aditya Birla Capital Digital Limited",
                img: "/-/media/ABCCorp/data/media/img/icons/Personal-loan-Eligibility.ashx?iar=0&hash=A76961D2B886D7A9E318FC8CEFF77D95",
              },
            ].map((item, idx) => (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                key={idx}
              >
                <div className="modal_redirects_Wrapper">
                  <span>
                    <span className="sc-image-wrapper">
                      <img alt={item.title} loading="lazy" src={item.img} />
                    </span>
                  </span>
                  <div className="modal_redirects_heading">{item.title}</div>
                  <img
                    className="redirect_ico"
                    src="/assets/images/arrow_up_reidrect.svg"
                    alt="redirect icon"
                    loading="lazy"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompanyModal;
