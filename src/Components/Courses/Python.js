import React, { useState } from 'react';
import { IoIosClose } from "react-icons/io";
import { useParams } from 'react-router-dom';
import emailjs from 'emailjs-com';
import './Python.css';

function Python() {
    const { title } = useParams();

    const [data, setData] = useState({
        name: '',
        phone: '',
        city: '',
        details: ''
    });

    const [showForm, setShowForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const templateParams = {
                name: data.name,
                phone: data.phone,
                city: data.city,
                details: data.details
            };

            await emailjs.send(
                'service_k557fm8', // замените на ваш service ID из EmailJS
                'template_iuxqz2h', // замените на ваш template ID из EmailJS
                templateParams,
                'g35ByI4m1j2tV61_U' // замените на ваш user ID из EmailJS
            );

            alert('Заявка успешно отправлена!');
            setShowForm(false);
        } catch (error) {
            console.error('Ошибка при отправке email:', error);
            alert('Произошла ошибка при отправке заявки.');
        }
    };

    return (
        <div>
            <button className='conf_button' onClick={() => { setShowForm(true) }}>
                Оставить заявку
            </button>

            <div className={`modal ${showForm ? `` : `disable`}`}>
                <div className='background' onClick={() => { setShowForm(false) }}></div>
                <form onSubmit={handleSubmit} className="form">
                    <IoIosClose onClick={() => { setShowForm(false) }} className="icon_remove" />
                    <h1>Оставить заявку</h1>
                    <p>Заполни эту форму, чтобы пройти бесплатный урок!</p>
                    <h3>Начните изучать кодинг уже сегодня!</h3>
                    <div className="form_input">
                        <input type="text" placeholder="Имя" value={data.name} name="name" onChange={handleChange}></input>
                        <input type="number" placeholder="Телефон" autoComplete="off" value={data.phone} name="phone" onChange={handleChange}></input>
                        <input type="text" placeholder="Город" autoComplete="off" value={data.city} name="city" onChange={handleChange}></input>
                        <input type="text" placeholder="Подробнее" autoComplete="off" value={data.details} name="details" onChange={handleChange}></input>
                    </div>
                    <button type="submit">Отправить заявку</button>
                </form>
            </div>
        </div>
    );
}

export default Python;
