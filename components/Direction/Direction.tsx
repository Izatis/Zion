import Warning from "@/components/Warning/Warning";
import Image from "next/image";
import Sydney from '../../assets/Sydney.png'

const Direction = () => {
    return (
        <section className="pt-5">
            <div className="container">
                <Warning/>


                <h2>Популярные направления</h2>

                <div>
                    <div>
                        <Image src={Sydney}/>

                        <div>
                            <p>Сидней</p>
                            <p>от 23509₽</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Direction;