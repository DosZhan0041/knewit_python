import React, { useState, useEffect } from 'react';
import s from './Main.module.css'


function Main() {



    const targetDate = '2024-08-15T23:59:59';





    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDateToWords = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long' };
        return date.toLocaleDateString('ru-RU', options);
    };

    return (
        <main>
            <div>
                <div className={s.banner} style={{ background: 'url(Assets/backgr.avif)' }}>
                    <img className={s.image_one} src="Assets/css-logo.png" alt="" />
                    <img className={s.image_two} src="Assets/html.png" alt="" />
                    <img className={s.image_three} src="Assets/Django-Logo.png" alt="" />
                    <img className={s.image_four} src="Assets/pg.png" alt="" />
                    <img className={s.image_five} src="Assets/tg.png" alt="" />
                    <img className={s.image_main} src="Assets/python.png" alt="" />
                    <span>Python</span>
                </div>
                <div className={s.content}>
                    <p className={s.timer_head}>#{formatDateToWords(targetDate)} старт</p>
                    <p className={s.timer}>
                        <span className={s.bracket}>[</span><span className={s.day}>{timeLeft.days > 9 ? '' : '0'}{timeLeft.days || '0'}</span>:<span className={s.hour}>{timeLeft.hours > 9 ? '' : '0'}{timeLeft.hours || '0'}</span>:<span
                            className={s.minute}>{timeLeft.minutes > 9 ? '' : '0'}{timeLeft.minutes || '0'}</span>:<span className={s.second}>{timeLeft.seconds > 9 ? '' : '0'}{timeLeft.seconds || '0'}</span><span className={s.bracket}>]</span>
                    </p>
                    <p className={s.timer_foot}>"""скидка 20% при полной оплате, успейте записаться!"""</p>

                    <p className={s.timer_inner}>
                        <b>Python</b> – язык программирования, обладающий массой достоинств. Он универсален, гибок,
                        мощен
                        и удобен. Это один из самых подходящих языков для новичков, потому что имеет предельно простой
                        синтаксис и хорошо читается.
                    </p>
                    {/* <p className={s.timer_inner}>
                        При этом спектр применения Питона необычайно широк. Язык прекрасно задокументирован, для него
                        разработано громадное количество библиотек. Он завоевал мировую популярность, вокруг него развернуто
                        очень мощное глобальное сообщество разработчиков.</p> */}
                    <div className={s.list}>
                        <div>
                            <span className={s.list_head}><span style={{color: '#808080'}}>—</span> Примеры использования:</span>
                            <div className={s.list_inner}>
                                <div>Веб-разработка</div>
                                <div>Научные исследования и анализ данных</div>
                                <div>Машинное обучение и искусственный интеллект</div>
                                <div>Автоматизация и скрипты</div>
                                <div>Обработка изображений и компьютерное зрение</div>
                                <div>Разработка игр</div>
                                <div>Кибербезопасность</div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={s.plan}>
                    <div className={s.plan_title}><span><img src="Assets/python.png" alt="" />plan.py</span><a target='_blank' href="https://drive.google.com/file/d/1yJZR41BnCGKd2DnZqj6I3InOXK6NHuDq/view"
                        className={s.plan_button}>Посмотреть план</a></div>
                    <div className={s.dict_obj}>
                        <p className={s.dict}>что вы изучите = <span className={s.bracket2}>{'{'}</span></p>
                        <div className={s.row}><span className={s.number}>1<span className={s.bl}>:</span></span><span
                            className={s.value}>"Создавать простые и сложные модульные программы: от консольных скриптов до
                            голосовых ассистентов."<span className={s.bl}>,</span></span>
                        </div>
                        <div className={s.row}><span className={s.number}>2<span className={s.bl}>:</span></span><span
                            className={s.value}>"Полностью освоите синтаксис языка с изучением ООП. Научитесь создавать
                            мини-фреймворки."<span className={s.bl}>,</span></span>
                        </div>
                        <div className={s.row}><span className={s.number}>3<span className={s.bl}>:</span></span><span
                            className={s.value}>"Изучите один из языков запросов к реляционным базам данных. (MYSQL,
                            PostgreSQL)"<span className={s.bl}>,</span></span>
                        </div>
                        <div className={s.row}><span className={s.number}>4<span className={s.bl}>:</span></span><span
                            className={s.value}>"Статичная верстка. (HTML, CSS)"<span className={s.bl}>,</span></span>
                        </div>
                        <div className={s.row}><span className={s.number}>5<span className={s.bl}>:</span></span><span
                            className={s.value}>"Создание ботов в Telegram. (Telegram API)"<span
                                className={s.bl}>,</span></span>
                        </div>
                        <div className={s.row}><span className={s.number}>6<span className={s.bl}>:</span></span><span
                            className={s.value}>"Фреймворк Django."<span className={s.bl}>,</span></span>
                        </div>
                        <span className={s.bracket2}>{'}'}</span>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Main