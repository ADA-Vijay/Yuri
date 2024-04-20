import Link from "next/link";
import React from "react";
import Container from "react-bootstrap/Container";
// import DisclaimerModal from "@/components/disclaimerModal";
import AppConfig from "../../../AppConfig";

export default async function Footer() {
  const categories = await getCategories();
  return (
    <>
      <footer className="bwp-footer">
        <Container>
          <div className="footer-wrap">
            <div className="footer-body1">
              <div className="footer-sec1 footer-contact">
                <img
                  src="https://fama.b-cdn.net/Yuri/logos/yuri%20logo%202.png"
                  alt="footer-image"
                />
                <ul>
                  <li>
                    <i className="fa fa-address-book"></i>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps?ll=18.970377,72.832303&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=6197754000903822558"
                    >
                      Head Office: Yuri Tools Impex LLP,
                      <br />
                      Office No 1, 314-314F, Yusuf Manzil, Christ Church Lane,
                      Sir J.J Road, Byculla, Mumbai, Maharashtra, 400008
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-volume-control-phone"></i>
                    <a href="tel:02241588888">022 4158 8888</a>
                    <br />
                    Mon-Sat 11 AM to 7 PM
                  </li>
                  <li>
                    <i className="fa fa-envelope-open"></i>
                    <a href="mailto:inquiry@yurigroup.com">
                      inquiry@yurigroup.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-sec2 footer-links">
                <h4>Categories</h4>
                <ul>
                  {categories && categories.length> 0 && categories.map((category) => (
                    <li>
                      <Link href={`/products/${category.url_name}`}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-sec2 footer-links">
                <h4>INFORMATION</h4>
                <ul>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/OurBrands">Our Brands</Link>
                  </li>
                  <li>
                    <Link href="/SafetyPriority">Safety Priority</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-sec3 footer-links">
                <h4>WHY BUY FROM US</h4>
                <ul>
                  <li>
                    <Link href="/TermsOfService">Terms Of Service</Link>
                  </li>
                  <li>
                    <Link href="/PrivacyPolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/Cookies">Cookies</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-sec4">
                <h4>LOCATE US</h4>
                <div className="mapSection">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3773.073304644064!2d72.8268957354126!3d18.972369737809192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf2d510bab3f%3A0x5602d86d3d20dcde!2sYuri%20Smart%20Engineering!5e0!3m2!1sen!2sin!4v1692005841823!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="map"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="footer-body2">
              <div className="other-link">
                <p>FOLLOW US ON :</p>
                <ul className="social-link">
             
                  <li>
                    <a
                      href="https://www.instagram.com/yurismartengineering/"
                      target="_blank"
                      aria-label="instagram"
                    >
                      <span className="text-instagram">Instagram</span>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/yurismartengineering"
                      target="_blank"
                      aria-label="Facebook"
                    >
                      <span className="text-facebook">Facebook</span>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UClrtmIfJ8G2Ddsp08BWytcg"
                      target="_blank"
                      aria-label="Youtube"
                    >
                      <span className="text-youtube">Youtube</span>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/yuri-smart-engineering/?viewAsMember=true"
                      target="_blank"
                      aria-label="Linkedin"
                    >
                      <span className="text-linkedin">Linkedin</span>
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-body3">
              <div>
                Copyright© {new Date().getFullYear()} Yuri Group. All Rights
                Reserved.
              </div>
              <div>
                <ul>
                  <li>
                    <a href="/TermsOfService">Terms of Service</a>
                  </li>
                  <li>
                    <a href="/PrivacyPolicy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
        {/* <DisclaimerModal showModal={showModal} handleClose={handleCloseModal} /> */}
        {/* © Copyright {new Date().getFullYear()} {AppConfig.title}. Made with{' '} */}
      </footer>
    </>
  );
}

async function getCategories() {
  try {
    const response = await fetch(`${AppConfig.api}Category/GetAllTypeCategory`);
    if (response.ok) {
      const responseData = await response.json(); 
      const categoriesData = JSON.parse(responseData.respObj);
      const categories = categoriesData.categories;
      return categories;
    } else {
      throw new Error('Failed to fetch categories');
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}



