import CheckIcon from '../assets/CheckIcon.svg';

type Props = {
  checked: boolean;
  title: string;
  category: string;
  subcategory: string;
  percentage: string;
  img: string;
  logo: string;
  onClick: () => void;
  variant: 'dark' | 'light';
};

export const LongBox = ({ checked, onClick, percentage, category, subcategory, title, img, logo, variant }: Props) => {
  return (
    <div
      onClick={onClick}
      style={{
        background: `url(${img}) center center / cover no-repeat`,
      }}
      className={`rounded-2xl flex flex-col gap-[149px] justify-between border p-2 row-span-2 ${checked ? 'border-ab-red' : 'border-transparent'} overflow-hidden`}
    >
      <div className="flex justify-between ">
        <img src={logo} className="w-12 h-12 rounded-2xl" />
        {checked ? (
          <img className="w-6 h-6" src={CheckIcon} />
        ) : (
          <div className="w-6 h-6 border-2 border-ab-light-grey rounded-full bg-white" />
        )}
      </div>
      <div className="flex flex-col">
        <div
          className={`mb-2 py-1 px-3 w-fit rounded-xl text-center ${variant === 'light' ? 'text-white bg-black' : 'text-black bg-white'} text-base font-semibold`}
        >
          {percentage}
        </div>
        <h3 className={`text-base ${variant === 'light' ? 'text-black' : 'text-white'} font-semibold`}>{title}</h3>
        <p className={`text-sm ${title === 'Dostavista' ? 'text-white opacity-80' : 'text-ab-grey'} font-normal m-0 p-0`}>
          {category}
        </p>
        <p className={`text-sm ${title === 'Dostavista' ? 'text-white opacity-80' : 'text-ab-grey'} font-normal m-0 p-0`}>
          {subcategory}
        </p>
      </div>
    </div>
  );
};
