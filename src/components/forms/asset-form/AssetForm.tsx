import React from 'react';
import {Input} from "../../UI/input/Input";
import {AssetDealStage} from "../../../enums/assetDealStage.enum";
import AssetItemModel from "../../../models/AssetItemModel";
import AssetService from "../../../services/AssetService";

interface AssetFormProps {
    currentAsset: AssetItemModel
    assetService: AssetService
}

const AssetForm = ({currentAsset, assetService}: AssetFormProps) => {
    return (
        <form style={{width: '100%'}}>
            <div className="form__group">
                <label>Собственник</label>
                <Input
                    placeholder={currentAsset!.owner}
                    controlName="owner"
                />
            </div>
            <div className="form__group">
                <label>Фамилия Имя Отчество</label>
                <Input
                    placeholder={currentAsset!.fullname}
                    controlName="fullname"
                />
            </div>
            <div className="form__group">
                <label>Тип</label>
                <Input
                    placeholder={String(currentAsset!.type)}
                    controlName="type"
                />
            </div>
            <div className="form__group">
                <label>Этап сделки</label>
                <Input
                    placeholder={String(currentAsset!.dealStage)}
                    controlName="dealStage"
                />
            </div>
            <div className="form__group">
                <label>Строение</label>
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