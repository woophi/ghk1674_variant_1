import { useState } from 'react';
import { data } from '../common/data';
import { trackClick } from '../utils/events';
import { LongBox } from './LongBox';
import { SmallBox } from './SmallBox';

export const BoxesGrid = () => {
  const [selectedNames, setSelected] = useState<string[]>([]);
  const [items, setItems] = useState(data.slice(0, 4));

  const handleClick = () => {
    const newItems = items.concat(data.slice(items.length, items.length + 4));
    trackClick(newItems.length === 8 ? '1' : '2');
    setItems(newItems);
  };

  return (
    <>
      <div className="p-4 grid grid-cols-2 gap-4 cursor-pointer mb-[88px]">
        {items.map(item =>
          item.size === 's' ? (
            <SmallBox
              onClick={() =>
                setSelected(
                  selectedNames.includes(item.title)
                    ? selectedNames.filter(i => i !== item.title)
                    : selectedNames.concat(item.title),
                )
              }
              checked={selectedNames.includes(item.title)}
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
              onClick={() =>
                setSelected(
                  selectedNames.includes(item.title)
                    ? selectedNames.filter(i => i !== item.title)
                    : selectedNames.concat(item.title),
                )
              }
              checked={selectedNames.includes(item.title)}
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

        {items.length !== data.length ? (
          <button
            onClick={handleClick}
            className="col-span-2 hover:bg-slate-200 outline-none border-none rounded-2xl bg-white text-black py-4 text-center text-base font-bold"
          >
            Показать еще
          </button>
        ) : null}
      </div>
    </>
  );
};
