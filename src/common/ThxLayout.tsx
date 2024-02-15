import rocket from '../assets/rocket.png';

export const ThxLayout = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 text-center">
      <img src={rocket} width={100} className="my-8" />
      <h1 className="font-bold text-md text-black">Спасибо, мы записали ваш заказ</h1>
      <p className="mt-10 mb-8 text-base">Мы обязательно с вами свяжемся, когда запустится продукт</p>
      <p className="text-ab-grey-2">
        Это уведомление можно отключить в настройках главного экрана или немного подождать, и оно исчезнет
      </p>
    </div>
  );
};
