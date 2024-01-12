import React from 'react';
import {Input} from "../../UI/input/Input";
import AssetItemModel from "../../../models/AssetItemModel";
import AssetService from "../../../services/AssetService";
import classes from './styles/AssetForm.module.css'

interface AssetFormProps {
    currentAsset: AssetItemModel
    assetService: AssetService
}

const AssetForm = ({currentAsset, assetService}: AssetFormProps) => {
    return (
        <form className={classes.form} style={{width: '100%'}}>
            <h2 className={classes.form__title}>
                {currentAsset.objectName}
            </h2>
            <div className={classes.form__group}>
                <label className={classes.form__label}>Собственник</label>
                <Input
                    placeholder={currentAsset!.owner}
                    controlName="owner"
                />
            </div>
            <div className={classes.form__group}>
                <label className={classes.form__label}>Фамилия Имя Отчество</label>
                <Input
                    placeholder={currentAsset!.fullname}
                    controlName="fullname"
                />
            </div>
            <div className={classes.form__group}>
                <label className={classes.form__label}>Тип</label>
                <Input
                    placeholder={String(currentAsset!.type)}
                    controlName="type"
                />
            </div>
            <div className={classes.form__group}>
                <label className={classes.form__label}>Этап сделки</label>
                <Input
                    placeholder={String(currentAsset!.dealStage)}
                    controlName="dealStage"
                />
            </div>
            <div className={classes.form__group}>
                <label className={classes.form__label}>Строение</label>
                <Input
                    placeholder={currentAsset!.objectName}
                    controlName="objectName"
                />
            </div>
            <div className="form__buttons">
                <div className="buttons" style={{display: 'flex', gap: '20px'}}>
                    <input type='button' value={"Начать"} onClick={() => {
                        assetService.putAsset(currentAsset, currentAsset.id!);
                    }} className='form__button start'/>
                    <input type='button' value={'Завершить'} className="form__button" onClick={() => {
                        assetService.endAsset(currentAsset, currentAsset.id!);
                    }}/>
                </div>
            </div>
        </form>
    );
};

export default AssetForm;