import './catCards.scss';


function catCards() {
    return (
        <div className='catCards'>
            <div>
                <div className='catCards__wrap catCards__wrap_clip'>
                    <div className='catCards__card'>
                        <p className='catCards__text catCards__text_top'>Сказочное заморское яство</p>
                        <h2 className='catCards__title'>Нямушка</h2>
                        <span className='catCards__subtitle'>с фуа-гра</span>
                        <p className='catCards__text'><b>10</b> порций<br/>мышь в подарок</p>
                        <div className='catCards__circle'>0,5<span>кг</span></div>
                    </div>
                </div>
                <div className='catCards__subtext'>Чего сидишь? Порадуй котэ,&#160;<span>купи</span>.</div>
            </div>
            <div>
                <div className='catCards__wrap catCards__wrap_clip'>
                    <div className='catCards__card'>
                        <p className='catCards__text catCards__text_top'>Сказочное заморское яство</p>
                        <h2 className='catCards__title'>Нямушка</h2>
                        <span className='catCards__subtitle'>с рыбой</span>
                        <p className='catCards__text'><b>40</b> порций<br/><b>2</b> мыши в подарок</p>
                        <div className='catCards__circle'>2<span>кг</span></div>
                    </div>
                </div>
                <div className='catCards__subtext'>Чего сидишь? Порадуй котэ,&#160;<span>купи</span>.</div>
            </div>
            <div>
                <div className='catCards__wrap catCards__wrap_clip'>
                    <div className='catCards__card'>
                        <p className='catCards__text catCards__text_top'>Сказочное заморское яство</p>
                        <h2 className='catCards__title'>Нямушка</h2>
                        <span className='catCards__subtitle'>с курой</span>
                        <p className='catCards__text'><b>100</b> порций<br/>
                            <b>5</b> мышей в подарок<br/>
                            заказчик доволен</p>
                        <div className='catCards__circle'>5<span>кг</span></div>
                    </div>
                </div>
                <div className='catCards__subtext'>Чего сидишь? Порадуй котэ,&#160;<span>купи</span>.</div>
            </div>
        </div>
    )
}

export default catCards;