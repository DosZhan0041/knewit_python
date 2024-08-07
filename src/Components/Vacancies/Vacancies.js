import React, { useState, useEffect } from 'react';
import s from './Vacancies.module.css';

function Vacancies() {
    const [vacancies, setVacancies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [word, setWord] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const params = new URLSearchParams({
                text: 'python',
                area: 40,
                per_page: 5,
            });

            try {
                const response = await fetch(`https://api.hh.ru/vacancies?${params.toString()}`);
                const data = await response.json();
                setVacancies(data);
                setLoading(false);
                if (data.found % 10 === 1) setWord('вакансия');
                else if (data.found % 10 >= 2 && data.found % 10 <= 4) setWord('вакансии');
                else setWord('вакансий');
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className={s.content}>
            <div className={s.head}>
                <img src="Assets/hh.ru__min_.svg" alt="" />
                <p>"Python" вакансии на HeadHunter в Казахстане:</p>
            </div>
            <h1>{vacancies.found} {word}</h1>
            <div className={s.vacancies}>
                {vacancies.items.map(vacancy => (
                    <div key={vacancy.id}>
                        <a href={vacancy.alternate_url} target="_blank" rel="noopener noreferrer">
                            {vacancy.name}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Vacancies;
