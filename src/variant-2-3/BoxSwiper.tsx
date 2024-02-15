import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import CheckIcon from '../assets/CheckIcon.svg';

type Props = {
  checked: boolean;
  title: string;
  category: string;
  subcategory: string;
  img: string;
  percentage: string;
  onClick: () => void;
  promo?: string;
  imgs: string[];
};

export const BoxSwiper = ({ category, checked, onClick, percentage, subcategory, title, img, imgs, promo }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl flex flex-col border ${checked ? 'border-ab-red' : 'border-transparent'}`}
    >
      <div className="flex p-4 gap-4">
        <img src={img} className="w-12 h-12 bg-ab-light-grey rounded-2xl" />

        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <h2 className="text-base text-black font-semibold truncate max-[412px]:max-w-[150px] max-[370px]:max-w-[110px]">
              {title}
            </h2>

            <div className="flex gap-3 shrink-0">
              <h3 className="text-base text-black font-semibold">{percentage}</h3>
              {checked ? (
                <img className="w-6 h-6" src={CheckIcon} />
              ) : (
                <div className="w-6 h-6 border-2 border-ab-light-grey rounded-full" />
              )}
            </div>
          </div>
          <p className="text-sm text-ab-grey font-normal">{category}</p>
          <p className="text-sm text-ab-grey font-normal">{subcategory}</p>
        </div>
      </div>
      <Swiper className={`w-full flex pl-2 ${!promo ? 'pb-2' : ''}`} spaceBetween={8} slidesPerView="auto">
        {imgs.map((imgSrc, index) => (
          <SwiperSlide key={index} className="w-40 h-[100px] rounded-xl bg-ab-light-grey overflow-hidden">
            <img src={imgSrc} />
          </SwiperSlide>
        ))}
      </Swiper>

      {promo ? (
        <div className="p-2">
          <div className="rounded-xl bg-ab-yellow py-2 px-4">
            <p className="m-0 p-0 text-ab-t-yellow text-sm font-normal">{promo}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
