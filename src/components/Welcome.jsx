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

            {/* <div className="body">
                <h2>Majda & Moncef</h2>
            </div> */}

        </div>
    )
}
