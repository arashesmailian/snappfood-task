import React from "react";

//*********components
import { price_seperator } from "../functions/price_seperator";

//*********styles
import styles from "./vendor-card.module.scss";

/**
 * This is a vendor-card that takes only one prop named {vendor}
 */
const VendorCard = ({ vendor }) => {
  return (
    <section className={styles.vendor_container}>
      <header>
        <img
          className={styles.vendor_image}
          src={vendor.backgroundImage}
          alt={vendor.title}
        />
        <div className={styles.vendor_logo_container}>
          <img src={vendor.logo} alt={`${vendor.title} logo`} />
        </div>
      </header>
      <div className={styles.content_container}>
        <div className={styles.vendor_title_rating_container}>
          <div className={styles.vendor_title}>
            <h3>{vendor.title}</h3>
          </div>
          <div className={styles.vendor_rating}>
            <span className={styles.vendor_rate_count}>
              ({vendor.voteCount})
            </span>
            &nbsp;
            <div className={styles.vendor_rating_number}>
              <span>{vendor.rate}</span>
              &nbsp;
              <svg
                height="12"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M5.55159 0.9086C5.735 0.536977 6.26492 0.536977 6.44833 0.9086L7.76331 3.57306L10.7037 4.00032C11.1138 4.05991 11.2776 4.5639 10.9808 4.85317L8.85313 6.92716L9.35541 9.85568C9.42546 10.2641 8.99675 10.5756 8.62993 10.3828L5.99996 9.00011L3.36998 10.3828C3.00317 10.5756 2.57445 10.2641 2.64451 9.85568L3.14679 6.92716L1.01909 4.85317C0.722336 4.5639 0.88609 4.05991 1.2962 4.00032L4.2366 3.57306L5.55159 0.9086Z"
                  fill="#5ba839"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={styles.vendor_description}>
          <div>{vendor.description.split(" ,").join(" ")}</div>
        </div>
        <div className={styles.vendor_delivery_content}>
          <div className={styles.vendor_delivery_type}>
            <div>
              <span>{vendor.isZFExpress ? `ارسال اکسپرس` : "پیک فروشنده"}</span>
              <span>{price_seperator(vendor.deliveryFee)}</span>
              <span>تومان</span>
            </div>
          </div>
          {vendor.isZFExpress ? (
            <div className={styles.vendor_delivery__time}>
              <div>
                <span>تا 40 دقیقه</span>
                &nbsp;
                <svg
                  height="10"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 10"
                  fill="none"
                >
                  <path
                    d="M5.09072 5.08619L4.78147 3.07604C4.73948 2.80311 4.9267 2.54781 5.19963 2.50582C5.47256 2.46383 5.72785 2.65105 5.76984 2.92398L6.12724 5.24709C6.13142 5.27099 6.13382 5.29505 6.13448 5.31907C6.13899 5.47029 6.07457 5.61126 5.96667 5.70725C5.94378 5.72763 5.91892 5.74597 5.89235 5.76196L4.8511 6.42227C4.61789 6.57015 4.30896 6.50099 4.16107 6.26778C4.01319 6.03458 4.08235 5.72564 4.31556 5.57776L5.09072 5.08619Z"
                    fill="#a3a3a3"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.73665 0.500176L7.70994 0.5H2.73455C1.54253 0.5 0.615147 1.53613 0.746784 2.72086L1.30234 7.72086C1.41488 8.73373 2.27101 9.5 3.29011 9.5H8.26549C9.38278 9.5 10.2676 8.58972 10.2657 7.5H14.75C15.0262 7.5 15.25 7.27614 15.25 7C15.25 6.72386 15.0262 6.5 14.75 6.5H10.1667L9.94447 4.5H17.25C17.5262 4.5 17.75 4.27614 17.75 4C17.75 3.72386 17.5262 3.5 17.25 3.5H9.83335L9.6977 2.27914C9.66629 1.99645 9.57696 1.73297 9.44233 1.5H14.75C15.0262 1.5 15.25 1.27614 15.25 1C15.25 0.723858 15.0262 0.5 14.75 0.5H7.75003L7.73665 0.500176ZM7.70994 1.5H2.73455C2.13854 1.5 1.67485 2.01807 1.74067 2.61043L2.29622 7.61043C2.35249 8.11686 2.78056 8.5 3.29011 8.5H8.26549C8.8615 8.5 9.32519 7.98193 9.25937 7.38957L8.70382 2.38957C8.64755 1.88314 8.21949 1.5 7.70994 1.5Z"
                    fill="#A3A3A3"
                  ></path>
                </svg>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default VendorCard;
