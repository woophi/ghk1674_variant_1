type Props = {
  title: string;
  category: string;
  subcategory: string;
  img: string;
  bigImg: string;
  percentage: string;
};

export const BoxTV = ({ category, subcategory, title, percentage, img, bigImg }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <img className="rounded-2xl overflow-hidden w-full h-40 bg-ab-light-grey object-cover object-top" src={bigImg} />
      <div className="pb-4 flex gap-4 w-full">
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
    </div>
  );
};
