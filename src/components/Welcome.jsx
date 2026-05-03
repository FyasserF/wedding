import React from 'react'

export default function Welcome() {
    return (
        <div className='welcome'>
            <div className="top">
                <div className="cadre">
                    <img src="/cadre.png" alt="" />
                </div>
                <div className="separater">
                    <hr />
                    <div className="heart">❤</div>
                    <hr />
                </div>
                <div className="img">
                    <img src="/bismillah-png-5.png" alt="" />
                </div>
                <h3>شكراً لحضوركم ومشاركتكم فرحتنا، دعواتكم لنا بالتوفيق</h3>
            </div>

            <div className="separater-bridge">
                <img src="/separate.png" alt="" />
            </div>

            <div className="body">
                <h2>Majda & Moncef</h2>
                <h3>Samedi</h3>
                <h3>20/06/2026 17h00</h3>
            </div>

            <div className="separater-bridge">
                <img src="/separate.png" alt="" />
            </div>

            <div className="buttom">
                <h3>Votre présence rendra ce jour encore plus spécial</h3>
            </div>

            <div className="separater">
                <hr />
                <div className="heart">❤</div>
                <hr />
            </div>
        </div>
    )
}
