const Offer = () => {
    return (
        <div className="rounded-2xl bg-blue-400 p-6 flex justify-between">
            <div className="flex flex-col">
                <p className="text-2xl font-semibold leading-8 text-white">Рассылка с выгодными предложениями</p>
                <p className="text-base font-lg leading-7 text-white">Эксклюзивные акции и рекомендации от ZION Assist</p>
            </div>

            <div className="flex items-center justify-between  bg-white rounded-2xl p-3 w-1/3">
                <div className="w-2/3">
                    <input className="w-full text-base font-normal leading-7" type="text" placeholder="Электронная почта"/>
                </div>

                <button className="text-white bg-blue-500 rounded-xl px-7 py-3 text-18 font-bold leading-24">
                    Подписаться
                </button>
            </div>
        </div>
    );
};

export default Offer;