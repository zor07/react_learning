import s from "./Friends.module.css";
import React from "react";
import Friend from "./Friend/Friend";

const Friends = () => {
    return (
        <div className={s.friends}>
            <h4>Friends</h4>

            <div className={s.friendsList}>
                <Friend name='Anna' imgSrc='https://intim-mall.ru/images/thumbnails/1223/1000/detailed/250/154335.jpg' />
                <Friend name='Kristine' imgSrc='https://1.bp.blogspot.com/-IRT6j8h_fqk/XN9yeP_ojII/AAAAAAAATG0/9Av70aLOzJoDmaOMLjRFB8bhYQO0MvRhwCKgBGAs/s1600/45612837_361298791302732_5759895938742232043_n.jpg' />
                <Friend name='Ammy' imgSrc='https://steamuserimages-a.akamaihd.net/ugc/28479983632518879/DDECB815BB7CD6E0D56C1CF8B6DBE9CE5F94BC29/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true' />
                <Friend name='Sasha' imgSrc='https://s45.radikal.ru/i109/1107/5e/8db777456d5c.png' />
                <Friend name='Vika' imgSrc='https://sun9-60.userapi.com/c841228/v841228265/fed8/Dhjv4bMjHSc.jpg' />
            </div>
        </div>

    )
}

export default Friends;