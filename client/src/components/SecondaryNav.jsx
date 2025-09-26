'use client'
import React from 'react';
import Link from 'next/link'

export default function SecondaryNav() {
  return (
    <div className="sec_navigation_wrapper">
      <ul className="sec_left_nav">
        <li className="active">
          <Link href="#" className="nav-link">PERSONAL</Link>
        </li>
        <li>
          <Link href="#" className="nav-link">BUSINESS</Link>
        </li>

        {/* CORPORATES DROPDOWN */}
        <li className="advisor top_head_has_Drop">
          <div className="overlay-div" id="corporate-overlay"></div>
          <Link href="#" className="nav-link" id="corporatesAnchor">
            CORPORATES <span className="chevron_right_dark"></span>
          </Link>
          <div className="top_head_dropdown_grid">
            <ul>
              <span className="dropdow_head">Loans</span>
              <li><Link href="#">Corporate Finance</Link></li>
              <li><Link href="#">Mortgage Finance</Link></li>
              <li><Link href="#">Loans Against Securities</Link></li>
              <li><Link href="#">DCM & Loan Syndication</Link></li>
            </ul>
            <ul>
              <span className="dropdow_head">Investments</span>
              <li><Link href="#">Mutual Funds</Link></li>
              <li><Link href="#">Stock and Securities</Link></li>
              <li><Link href="#">Portfolio Management Services</Link></li>
              <li><Link href="#">Pension Funds</Link></li>
            </ul>
            <ul>
              <span className="dropdow_head">Insurance</span>
              <li><Link href="#">Corporate General Insurance</Link></li>
              <li><Link href="#">Group Health Insurance</Link></li>
              <li><Link href="#">Group Life Insurance</Link></li>
            </ul>
          </div>
        </li>

        {/* ADVISORS DROPDOWN */}
        <li className="advisor top_head_has_Drop">
          <div className="overlay-div" id="advisor-overlay"></div>
          <Link href="#" className="nav-link" id="corporatesAnchor2">
            ADVISORS <span className="chevron_right_dark"></span>
          </Link>
          <div className="top_head_dropdown_grid grid4-template">
            <ul>
              <span className="dropdow_head">Loans</span>
              <li><Link href="#">Home Finance Advisors</Link></li>
              <li><Link href="#">Personal Finance Advisors</Link></li>
            </ul>
            <ul>
              <span className="dropdow_head">Investments</span>
              <li><Link href="#">Mutual Funds Advisors</Link></li>
              <li><Link href="#">Stocks & Securities Advisors</Link></li>
            </ul>
            <ul>
              <span className="dropdow_head">Insurance</span>
              <li><Link href="#">Life Insurance Advisors</Link></li>
              <li><Link href="#">Health Insurance Advisors</Link></li>
            </ul>
            <ul>
              <span className="dropdow_head">Complete Money Solutions</span>
              <li><Link href="#">Select Advisor</Link></li>
            </ul>
          </div>
        </li>

        <li><Link href="#" className="nav-link">CAREERS</Link></li>
      </ul>

      <ul className="sec_right_nav">
        <li className="nav_contact">
          <Link href="tel:18002707000">
            <picture>
              <source srcSet="assets/images/nav_phone.webp" type="image/webp" />
              <img
                src="assets/images/nav_phone.svg"
                alt="Telephone Icon"
                width="100%"
                height="100%"
              />
            </picture>
            1800 270 7000
          </Link>
        </li>
      </ul>
    </div>
  );
}