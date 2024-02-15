import CheckIcon from '../assets/CheckIcon.svg';

type Props = {
  checked: boolean;
  title: string;
  img: string;
  percentage: string;
  category: string;
  subcategory: string;
  onClick: () => void;
};

export const BoxItem = ({ category, checked, subcategory, title, percentage, onClick, img }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl p-4 flex gap-4 border ${checked ? 'border-ab-red' : 'border-transparent'}`}
    >
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
  );
};
