import Warning from "@/components/Warning/Warning";
import {Country} from "@/constants/Country";
import Card from "@/components/Card/Card";
import s from './Direction.module.scss'

const Direction = () => {
    const catalog = Country.map(item => <Card key={item.id} item={item}/>)

    return (
        <section className={s.direction}>
            <div className="container">
                <Warning/>

                <h2 className="text-3xl font-extrabold leading-10 mt-12 mb-6">Популярные направления</h2>

                <div className="flex justify-between gap-2">
                    {catalog}
                </div>
            </div>
        </section>
  );
};

export default Direction;
