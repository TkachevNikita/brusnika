import React, { FormEvent, useState } from 'react'
import { MyInput } from '../components/UI/input/MyInput'
import './styles/NewAssetPage.css'
import { MyButton } from '../components/UI/button/MyButton'

export const NewAssetPage = () => {

    const [owner, setOwner] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [stage, setStage] = useState('')

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(123);
    }


    return (
        <div className="new">
            <h2 className="new__title">
                Добавление актива
            </h2>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form__group">
                    <label>Собственник</label>
                    <input onChange={(e) => setOwner(e.target.value)} type="text"/>
                </div>
                <div className="form__group">
                    <label>Фамилия Имя Отчество</label>
                    <input onChange={(e) => setName(e.target.value)} type="text"/>
                </div>
                <div className="form__group">
                    <label>Тип</label>
                    <input onChange={(e) => setType(e.target.value)} type="text"/>
                </div>
                <div className="form__group">
                    <label>Этап сделки</label>
                    <input onChange={(e) => setStage(e.target.value)} type="text"/>
                </div>
                <button className="form__button">Добавить</button>
            </form>
        </div>
    )
}
