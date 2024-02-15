export const BoxesEmpty = () => {
  return (
    <div className="relative p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-ab-b-disabled min-h-[100px] h-full rounded-2xl" />
        <div className="bg-ab-b-disabled min-h-[200px] h-full rounded-2xl row-span-2" />
        <div className="bg-ab-b-disabled min-h-[200px] h-full rounded-2xl row-span-2" />
        <div className="bg-ab-b-disabled min-h-[100px] h-full rounded-2xl" />
      </div>
      <div
        style={{
          background: 'linear-gradient(180deg, rgba(242, 243, 245, 0) 0%, #F2F3F5 100%)',
        }}
        className="absolute z-1 w-full h-[243px] top-[90px] left-0"
      />
    </div>
  );
};
