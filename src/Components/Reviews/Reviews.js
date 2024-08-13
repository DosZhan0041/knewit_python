import React from 'react'
import s from './Reviews.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const ratingImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2ZvW8bdRzGf1Q09r357MT3YikTZSgIwdAWCZA6MYBQ/oIKykCHDlUZujcUlQ2pVMAYJFQQUgckhKCxHb/cxU7sOunZvoiKdkCZUFGGVlS0gd/vQXcXv9upae4SG/mRnsny3ef5+vHd92xCJppoosAEW3sVdf0EGUfB0lTY2kPXlqaScRPq2jxsHag71ubJOAm/Ph+Crf+OuubAAzX1HoqzHBkXwU6cacHvuKp+QMZBAHkGNXWjCV5THXjAUm87r5FRF6r6221Tb8ADluL4LTLqQk1L9YW/pQDr8UUyyoKlvQRLZX3hvQDAuvIKGVXBUr/qqkwXfByozCyQkb1xWcpfPVNvh19zAkw/QiWeIKMmWMrH/SvTBr8243wCji+RURKKsxys+B994RvgLXjg5vQWLE04uOu8reioxY/B0uZgKWdhKdcGVqYd3IP3XJ6+hlLsLMrROazKx1BSdF/uE6grR7Chn4SdOIW6fgE1/Qpq6nVUtQKq6iaq6vbuV5kB8A1wDx4ox4CSZ7YadU1Xotu0KG/SFblAi5HrtBi5goJ0AcuRUyiIJ2HKz+0Ov5H4yF3AWktY9zrQfWMatjKd4H3g2UrDMlhxx4WI5+WGJcAQLw4OYOunUddZE757Heg39eEr0wHeCy+3wHvgJTBTAjUkBlN67wkV0t9FXdvumXoAlWH94Bvg3fCm9A8M8cxw34Oa+iaq2oNRqAxzJy8+RF56Zyj4Zoh1/QSqyr2DrAzz4LdgiG/8J/hWnZQjsOJ3DqIyzIHPi78hKx59KvhmCOf6vB6/5U9l5KEqwzx4G1ludk/wzRC2ImItntyPyjAXXsghFZN9ge94zq3MfBdkZZghOvDfo0i44NaIysynQVSGOfCG+DlADgUC3xGkHLvqZ2WYO3nxauDgzQCl2Cd+VYbtmOaFy/sXoBxb8qMyzHHeM83x6f2BBzmEUvT+XivTghfAcgJoln+Ai/vR/9XpF/dcmXwnPHOc5YGc+ELwAVbk9/2oTBM858G7ATL86cAD0FX5Sz8q44ELTXiW4UGXwl8EH6AYrfhVGbYD7pkDTYdvBgqPLAnTovx44NQ7dhlhC4ZwDlnhHM0JW/0qwxrwS5xrusQ9ds4RXICC9PoT19+8RGle/BoFofmnBkw5RrP8ZzQj/N0JzzXhWdpxGEiFXwsuQFH+cNf11xAzMISXB74/Kx6lGe6nXviw51QYSE6dDywAXZa+7QtuSpsw+d2fVduDpLk5mubudsM7pouhb4ILUJDudj6nin/SvDT/NL1FhRxGeuo8TYfve/AhsGQINDl1JxB4t8dmhDnw1JAoNcUF5Pk9/8aJn/kETU0t0GSIugFuhBh+JDF/qNtPtKgJ1BBvU1PKYTly3PfjJ589Tm9M5eji4V/wA+H9Pv5EE/1f9S9M4cKBWKiMUAAAAABJRU5ErkJggg==';


const reviews = [
    {
        id: 1,
        name: 'Malika Kinkhuzova',
        date: '14 марта 2024',
        image: 'Assets/user.png',
        rating: 4,
        content: 'Очень хорошая школа программирования, мне все очень понравилось. Дали отличные знания, так же спасибо преподавателям, объясняют все легко и понятно.',
    },
    // Добавьте другие отзывы по аналогии
    {
        id: 2,
        name: 'Таңнұр Бірлік',
        date: '10 июня 2023',
        image: 'Assets/user.png',
        rating: 5,
        content: 'Хочу поблагодарить преподавателя Абылая Спасибо вам большое! Благодарю за предоставленный материал - познавательно, полезно, доступно. Очень хочется начать уже работать с полученными знаниями.',
    },
    {
        id: 3,
        name: 'Станислав Коржов',
        date: '25 августа 2023',
        image: 'Assets/user.png',
        rating: 5,
        content: 'Классная школа для изучения программирования. Уже изучаю второй язык "python". Очень нравится обучение. Грамотные учителя и грамотное постановка курсов и заданий. Советую обращаться в эту школу. ',
    },
    {
        id: 4,
        name: '​Михаил Somov',
        date: '23 Сентября 2021',
        image: 'Assets/user.png',
        rating: 5,
        content: 'Отличная школа, очень интенсивно, продуктивно и интересно! Отличные преподаватели. Качественное обучение. Всё замечательно, закончил школу сейчас ищу работу!',
    },
];

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<img alt='' src={ratingImage} />);
        } 
    }
    return <div className={s.stars}>
        {stars}
    </div>
};

function Reviews() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={s.slider_rev}>
            <h3 className={s.title}>Отзывы наших клиентов</h3>
            <Slider {...settings}>
                {reviews.map(review => (
                    <div className={s.review} key={review.id}>
                        <div className={s.header}>
                            <img src={review.image} alt="" srcset="" />
                            <div className={s.user_info}>
                                <span className={s.name}>{review.name}</span>
                                <span className={s.date}>{review.date}</span>
                            </div>
                            <StarRating rating={review.rating}/>
                        </div>
                        <div className={s.content}>
                            {review.content}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Reviews