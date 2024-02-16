import premier1 from '../assets/premier_1.jpg';
import premier2 from '../assets/premier_2.jpg';
import premier3 from '../assets/premier_3.jpg';
import premierLogo from '../assets/premier_logo.png';
import premierS from '../assets/premier_s.jpg';
import steak1 from '../assets/steak_1.jpg';
import steak2 from '../assets/steak_2.jpg';
import steak3 from '../assets/steak_3.jpg';
import steakLogo from '../assets/steak_logo.png';
import steakS from '../assets/steak_s.jpg';
import talon1 from '../assets/talon_1.jpg';
import talon2 from '../assets/talon_2.jpg';
import talon3 from '../assets/talon_3.jpg';
import talonLogo from '../assets/talon_logo.png';
import talonS from '../assets/talon_s.jpg';
import ya1 from '../assets/ya_1.jpg';
import ya2 from '../assets/ya_2.jpg';
import ya3 from '../assets/ya_3.jpg';
import yaLogo from '../assets/ya_logo.png';
import yaS from '../assets/ya_s.jpg';

export const data = [
  {
    logo: yaLogo,
    title: 'Яндекс.Маркет',
    category: 'Маркетплейс',
    subcategory: 'До 29.12.2024',
    percentage: 'до 30%',
    imgs: [ya1, ya2, ya3],
    promo: '+ Книга в подарок.',
    imgS: yaS,
    size: 'b',
    variant: 'light',
  },
  {
    logo: talonLogo,
    title: 'Эталон',
    category: 'Строительная компания',
    subcategory: 'До 31.03.2024',
    percentage: 'до 50%',
    imgs: [talon1, talon2, talon3],
    promo: '+ Пониженная ставка при покупке квартиры',
    imgS: talonS,
    size: 's',
  },
  {
    logo: premierLogo,
    title: 'PREMIER',
    category: 'Онлайн-кинотеатр',
    subcategory: 'До 31.03.2024',
    percentage: 'до 40%',
    imgs: [premier1, premier2, premier3],
    promo: '+ 3 месяца бесплатного пользования',
    imgS: premierS,
    size: 's',
  },
  {
    logo: steakLogo,
    title: 'Стейк & Бургер Мираторг',
    category: 'Сеть бургерных',
    subcategory: 'До 28.02.2024',
    percentage: '15%',
    imgs: [steak1, steak2, steak3],
    promo: '+ Бесплатный бургер в каждый третий заказ',
    imgS: steakS,
    size: 'b',
    variant: 'dark',
  },
];

export const gridData = [data[0], data[1], data[3], data[2]];
