import React, { FC, useState, useEffect } from 'react'
import { Icon } from 'ui/atoms'

export const PreloadingScreen: FC = () => {
    const [loaded, setLoaded] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => setProgress(val => val < 100 ? val + 1 : val), 30)

        setTimeout(() => setLoaded(true), 3500)
        setTimeout(() => clearInterval(interval), 4500)
    }, [])

    return (
        <div
            className="preloader"
            id="preloader"
            data-loaded={loaded}
        >
            <div className="preloader__wrapper">
                <div className="preloader__logo">
                    <Icon
                        name="logo"
                        width="127px"
                        height="129px"
                        fill="text"
                    />
                </div>
                <div className="preloader__progress"></div>
                <div className="preloader__counter">
                    {`${progress}`.split('').map((number, index) => (
                        <Icon
                            key={index}
                            name={`road-rage-${number}`}
                            height="20px"
                            fill="text"
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
