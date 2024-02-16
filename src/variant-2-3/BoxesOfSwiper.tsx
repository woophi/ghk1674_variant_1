import { data } from '../common/data';
import { BoxSwiper } from './BoxSwiper';

export const BoxesOfSwiper = () => {
  return (
    <div className="py-4 flex flex-col gap-4 cursor-pointer mb-[164px]">
      {data.slice(0, 4).map(item => (
        <BoxSwiper
          category={item.category}
          percentage={item.percentage}
          subcategory={item.subcategory}
          title={item.title}
          key={item.title}
          img={item.logo}
          imgs={item.imgs ?? []}
        />
      ))}
    </div>
  );
};
