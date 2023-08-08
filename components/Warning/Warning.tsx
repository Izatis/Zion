import Link from "next/link";

const Warning = () => {
    return (
        <div className="flex items-center gap-6 rounded-lg bg-yellow-200 p-4">
            <span>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 10.3252H12.01M11 13.3252H12V17.3252H13M10.24 4.28215L1.81802 18.3422C1.64449 18.6429 1.5527 18.9837 1.55177 19.3309C1.55083 19.6781 1.64078 20.0195 1.81268 20.3211C1.98458 20.6227 2.23244 20.8741 2.53162 21.0503C2.83079 21.2264 3.17086 21.3212 3.51802 21.3252H20.363C20.7102 21.3212 21.0502 21.2264 21.3494 21.0503C21.6486 20.8741 21.8965 20.6227 22.0684 20.3211C22.2403 20.0195 22.3302 19.6781 22.3293 19.3309C22.3283 18.9837 22.2365 18.6429 22.063 18.3422L13.64 4.28215C13.4627 3.99014 13.2131 3.74874 12.9153 3.58122C12.6176 3.41369 12.2817 3.32568 11.94 3.32568C11.5984 3.32568 11.2625 3.41369 10.9647 3.58122C10.667 3.74874 10.4174 3.99014 10.24 4.28215Z" stroke="#354052" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </span>
            <p className="text-gray-800 text-base font-normal leading-140 tracking-wide">
                Информация для путешественников. <Link href="/" className="text-blue-500">Подробнее</Link>
            </p>
        </div>
    );
};

export default Warning;