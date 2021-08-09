import React, { useState } from 'react'
import avatarImg from './../../../../assets/img/avatarImg.png'
import s from './Avatar.module.sass'

export const Avatar = () => {

    const [avatar, setAvatar] = useState<string>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) setAvatar(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.avatar}>
                {
                    !avatar ? <img alt="avatar" src={avatarImg}/> 
                    : <img src={avatar} alt="avatar" className={s.uploadedImg}/>
                }
            </div>
            <div className={s.uploadButtonContainer}>
                <label className={s.uploadButton}>
                    <input type="file" onChange={onChange}/>
                </label>
            </div>
            
        </div>
    )
}