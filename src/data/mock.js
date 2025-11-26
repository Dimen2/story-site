export const products = [
  {
    id: 1,
    name: 'Цвет "Белый"',
    color: 'white',
    discount: 40,
    sizes: [
      { size: '20x30 см', oldPrice: 999, newPrice: 699 },
      { size: '24x36 см', oldPrice: 1666, newPrice: 999 }
    ],
    setPrice: { old: 2855, new: 1499 },
    image: 'https://images.unsplash.com/photo-1557109434-f47ea8d515df'
  },
  {
    id: 2,
    name: 'Цвет "Чёрный"',
    color: 'black',
    discount: 40,
    sizes: [
      { size: '20x30 см', oldPrice: 999, newPrice: 699 },
      { size: '24x36 см', oldPrice: 1666, newPrice: 999 }
    ],
    setPrice: { old: 2855, new: 1699 },
    image: 'https://images.unsplash.com/photo-1629539890438-cb562ec70f70'
  },
  {
    id: 3,
    name: 'Цвет "Помнт"',
    color: 'pomnt',
    discount: 40,
    sizes: [
      { size: '20x30 см', oldPrice: 999, newPrice: 699 },
      { size: '24x36 см', oldPrice: 1666, newPrice: 999 }
    ],
    setPrice: { old: 2855, new: 1699 },
    image: 'https://images.pexels.com/photos/8942900/pexels-photo-8942900.jpeg'
  }
];

export const advantages = [
  {
    id: 1,
    number: '1',
    title: 'Гарантия качества - 15 лет',
    description: 'Мы используем материал из США и производим по итальянской технологии'
  },
  {
    id: 2,
    number: '2',
    title: 'Собственное производство',
    description: 'Наши доски мы создаём полностью на собственном оборудовании'
  },
  {
    id: 3,
    number: '3',
    title: 'Эксклюзивность',
    description: 'Из-за сложного производства мы являемся единственными производителями'
  },
  {
    id: 4,
    number: '4',
    title: 'Оплата при получении',
    description: 'Вы ничем не рискуете, доску вы оплачиваете только после осмотра на новой почте'
  },
  {
    id: 5,
    number: '5',
    title: 'Более 800 отзывов',
    description: 'Главная оценка наших досточек - это ваши отзывы!'
  },
  {
    id: 6,
    number: '6',
    title: 'Сертификат качества',
    description: 'К каждой досточке мы выдаем специальный сертификат качества на камень и гарантийный талон'
  }
];

export const reviews = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1710444448935-48ece3b2bd8a',
    author: 'Анна М.',
    text: 'Потрясающее качество! Доска действительно не впитывает запахи'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1690983323540-d6e889c4b107',
    author: 'Дмитрий К.',
    text: 'Лучший подарок для кухни! Жена в восторге'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/33009974/pexels-photo-33009974.jpeg',
    author: 'Елена П.',
    text: 'Пользуюсь уже полгода, как новая!'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/6107724/pexels-photo-6107724.jpeg',
    author: 'Сергей В.',
    text: 'Стильно смотрится, качество на высоте'
  }
];

export const composition = [
  {
    id: 1,
    title: 'Досточка 20x30 см',
    image: 'https://images.unsplash.com/photo-1690983322868-4778f289ec03',
    description: 'Идеальна для нарезки овощей и фруктов'
  },
  {
    id: 2,
    title: 'Досточка 24x36 см',
    image: 'https://images.unsplash.com/photo-1690983321709-0eccbcb20d00',
    description: 'Большая доска для мяса и рыбы'
  },
  {
    id: 3,
    title: 'Подставка',
    image: 'https://images.pexels.com/photos/10749578/pexels-photo-10749578.jpeg',
    description: 'Удобное хранение досок'
  },
  {
    id: 4,
    title: 'Комплект:',
    subtitle: '2 доски + подставка',
    image: 'https://images.unsplash.com/photo-1557109434-f47ea8d515df',
    description: 'Выгодное предложение'
  }
];

export const heroFeatures = [
  'Американский материал и итальянская технология.',
  'Более 800+ восторженных отзывов.',
  'Защита от плесени и грибка.',
  'Крутой подарок на Новый Год!'
];