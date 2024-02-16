import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {
  title: string;
  category: string;
  subcategory: string;
  img: string;
  percentage: string;
  imgs: string[];
};

export const BoxSwiper = ({ category, percentage, subcategory, title, img, imgs }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="flex pl-4 pr-8 py-4 gap-4">
        <img src={img} className="w-12 h-12 bg-ab-light-grey rounded-2xl" />

        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <h2 className="text-base text-black font-semibold truncate max-[412px]:max-w-[150px] max-[370px]:max-w-[110px]">
              {title}
            </h2>

            <div className="flex gap-3 shrink-0">
              <h3 className="text-base text-black font-semibold">{percentage}</h3>
            </div>
          </div>
          <p className="text-sm text-ab-grey font-normal">{category}</p>
          <p className="text-sm text-ab-grey font-normal">{subcategory}</p>
        </div>
      </div>
      <Swiper className="w-full flex pl-4" spaceBetween={8} slidesPerView="auto">
        {imgs.map((imgSrc, index) => (
          <SwiperSlide key={index} className="w-40 h-[100px] rounded-xl bg-ab-light-grey overflow-hidden">
            <img src={imgSrc} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
