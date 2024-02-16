import { data } from '../common/data';
import { BoxTV } from './BoxTV';

export const BoxesOfTV = () => {
  return (
    <div className="p-4 flex flex-col gap-4 cursor-pointer mb-[164px]">
      {data.slice(0, 4).map(item => (
        <BoxTV
          category={item.category}
          percentage={item.percentage}
          subcategory={item.subcategory}
          title={item.title}
          key={item.title}
          img={item.logo}
          bigImg={item.imgs[0]}
        />
      ))}
    </div>
  );
};
