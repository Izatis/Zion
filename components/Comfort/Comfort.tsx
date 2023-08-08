import Image from "next/image";
import Phone from '../../assets/Phone.png'
import AppStore from '../../assets/AppStore.png'
import GooglePlay from '../../assets/GooglePlay.png'
import s from './Comfort.module.scss'

const Comfort = () => {
    return (
        <section className={s.comfort}>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="w-1/3">
                        <h2 className="text-gray-900 text-6xl font-bold leading-10 mb-11"><span className="text-blue-400">Со</span> смартфона удобнее</h2>

                        <p className="text-gray-900 text-xl font-normal leading-8 mb-7">Ваши заказы и поддержка всегда под рукой</p>

                        <ul className="flex flex-col gap-2 mb-7">
                            <li className="flex items-center gap-3 text-gray-700 text-base font-normal leading-8">
                                <span className={s.circle}></span>
                                Ваши заказы и поддержка всегда под рукой
                            </li>

                            <li className="flex items-center gap-3 text-gray-700 text-base font-normal leading-8">
                                <span className={s.circle}></span>
                                Ваши заказы и поддержка всегда под рукой
                            </li>

                            <li className="flex items-center gap-3 text-gray-700 text-base font-normal leading-8">
                                <span className={s.circle}></span>
                                Ваши заказы и поддержка всегда под рукой
                            </li>
                        </ul>

                        <div className="flex gap-5">
                            <div className="w-52">
                                <Image src={GooglePlay}/>
                            </div>

                            <div className="w-48">
                                <Image src={AppStore}/>
                            </div>
                        </div>
                    </div>

                    <div className={`${s.phone}`}>
                        <Image className="w-full" src={Phone}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comfort;