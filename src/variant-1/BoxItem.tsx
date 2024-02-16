type Props = {
  title: string;
  img: string;
  percentage: string;
  category: string;
  subcategory: string;
};

export const BoxItem = ({ category, subcategory, title, percentage, img }: Props) => {
  return (
    <div className="flex gap-4">
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
  );
};
