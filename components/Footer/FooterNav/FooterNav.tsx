import zion from '../../../assets/ZionLogo.png'
import Image from "next/image";
import {FaFacebookF, FaYoutube} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {TbBrandTwitterFilled, TbMailFilled} from "react-icons/tb";

const FooterNav = () => {
    return (
        <nav className="flex justify-between my-14 items-center">
            <div className="flex flex-col gap-8 w-1/4">
                <div>
                    <Image src={zion} alt="zionLogo"/>
                </div>

                <p className="text-white font-sans font-normal font-400 text-lg leading-7">
                    Zion Assist организации, в особенности же постоянный количественный рост и сфера нашей активности требуют определения.
                </p>

                <div className="flex gap-5">
                    <FaYoutube color="white" size="20"/>
                    <AiFillInstagram color="white" size="20"/>
                    <FaFacebookF color="white" size="20"/>
                    <TbBrandTwitterFilled color="white" size="20"/>
                    <TbMailFilled color="white" size="20"/>
                </div>
            </div>

            <div className="w-1/4 flex justify-between">
                <div>
                    <h2 className="text-white text-2xl font-normal font-semibold leading-8 mb-6">Компания</h2>

                    <ul className="flex flex-col">
                        <li className="text-white text-base font-normal leading-8">О компании</li>
                        <li className="text-white text-base font-normal leading-8">Контакты</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-white text-2xl font-normal font-semibold leading-8 mb-6">Помощь</h2>

                    <ul className="flex flex-col">
                        <li className="text-white text-base font-normal leading-8">Поддержка</li>
                        <li className="text-white text-base font-normal leading-8">Ответы на вопросы</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default FooterNav;