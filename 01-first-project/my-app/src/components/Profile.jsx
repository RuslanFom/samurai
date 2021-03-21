import React from 'react';
import s from'./Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt=""/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    Post 1
                </div>
                <div className='item'>
                    Post 2
                </div>
            </div>
        </div>
    </div>
}
export default Profile;