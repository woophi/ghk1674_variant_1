import { gridData } from '../common/data';
import { LongBox } from './LongBox';
import { SmallBox } from './SmallBox';

export const BoxesGrid = () => {
  return (
    <div className="p-4 grid grid-cols-2 gap-4 cursor-pointer mb-[164px]">
      {gridData
        .slice(0, 4)
        .map(item =>
          item.size === 's' ? (
            <SmallBox
              percentage={item.percentage}
              key={item.title}
              img={item.imgS}
              logo={item.logo}
              category={item.category}
              subcategory={item.subcategory}
              title={item.title}
            />
          ) : (
            <LongBox
              percentage={item.percentage}
              category={item.category}
              subcategory={item.subcategory}
              title={item.title}
              key={item.title}
              img={item.imgS}
              logo={item.logo}
              variant={item.variant as 'light' | 'dark'}
            />
          ),
        )}
    </div>
  );
};
