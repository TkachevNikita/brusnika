import React, { useMemo } from 'react'
import './styles/NewAssetPage.css'
import { Input } from '../components/UI/input/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IAsset } from '../interfaces/IAsset';
import { NewAssetPageViewModel } from '../viewmodels/NewAssetPageViewModel';
import AssetService from '../services/AssetService';
import Snackbar from '../components/UI/snackbar/Snackbar';

export const NewAssetPage = () => {
    const assetService = useMemo(() => new AssetService(), []);
    const newAssetPageViewModel = useMemo(() => new NewAssetPageViewModel(assetService), [assetService]);
    const { register, handleSubmit } = useForm<IAsset>();

    const onSubmit: SubmitHandler<IAsset> = (data) => {
        newAssetPageViewModel.createAsset(
            {
                owner: data.owner,
                fullname: data.fullname,
                objectName: data.objectName,
                type: Number(data.type),
                dealStage: Number(data.dealStage),
            }
        )
    }

    return (
        <div className="new">
            <Snackbar/>
            <h2 className="new__title">
                Добавление актива
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form__group">
                    <label>Собственник</label>
                    <Input
                        controlName="owner" 
                        register={register}
                    />
                </div>
                <div className="form__group">
                    <label>Фамилия Имя Отчество</label>
                    <Input
                        controlName="fullname" 
                        register={register}
                    />
                </div>
                <div className="form__group">
                    <label>Тип</label>
                    <Input
                        controlName="type" 
                        register={register}
                    />
                </div>
                <div className="form__group">
                    <label>Этап сделки</label>
                    <Input
                        controlName="dealStage" 
                        register={register}
                    />
                </div>
                <div className="form__group">
                    <label>Этап сделки</label>
                    <Input
                        controlName="objectName" 
                        register={register}
                    />
                </div>
                <button className="form__button">Добавить</button>
            </form>
        </div>
    )
}
