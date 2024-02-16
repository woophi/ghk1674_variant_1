import { data } from '../common/data';
import { BoxItem } from './BoxItem';

export const Boxes = () => {
  return (
    <div className="p-4 flex flex-col gap-8 cursor-pointer mb-[164px]">
      {data.slice(0, 4).map(item => (
        <BoxItem
          category={item.category}
          percentage={item.percentage}
          subcategory={item.subcategory}
          title={item.title}
          key={item.title}
          img={item.logo}
        />
      ))}
    </div>
  );
};
