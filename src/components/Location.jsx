import React from 'react'

export default function Location() {
    return (
        <div className='location'>
            <h2>Où célébrons-nous ?</h2>
            <div className="card">
                <h3>Casablanca el hay hasssani rue 2</h3>
                <h3>17h00</h3>

                <div className="map">
                    <iframe
                        src="https://www.google.com/maps?q=Casablanca+El+Hay+Hassani+Rue+2&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            <h4>On compte sur vous !</h4>
        </div>
    )
}
