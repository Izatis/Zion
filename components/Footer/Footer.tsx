import Offer from "@/components/Footer/Offer/Offer";
import FooterNav from "@/components/Footer/FooterNav/FooterNav";
import s from './Footer.module.scss'

const Footer = () => {
  return (
      <footer className={s.footer}>
          <div className="container">
              <Offer/>
              <FooterNav/>
          </div>

          <div className="py-5 border-t border-solid border-white border-opacity-30 text-center">
              <p className="text-white font-sans font-normal text-lg leading-7">©2023 Zion Assist. All rights reserved</p>
          </div>
      </footer>
  )};
export default Footer;
