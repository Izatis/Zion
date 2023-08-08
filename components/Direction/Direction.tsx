import Warning from "@/components/Warning/Warning";
import {Country} from "@/constants/Country";
import Card from "@/components/Card/Card";

const Direction = () => {
    const catalog = Country.map(item => <Card key={item.id} item={item}/>)

    return (
        <section className="pt-8 pb-12">
            <div className="container">
                <Warning/>

                <h2 className="text-3xl font-extrabold leading-10 mt-12 mb-5">Популярные направления</h2>

                <div className="flex justify-between">
                    {catalog}
                </div>
            </div>
        </section>
    );
};

export default Direction;