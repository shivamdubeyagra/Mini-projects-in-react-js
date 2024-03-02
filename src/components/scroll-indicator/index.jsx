import { useEffect, useState } from "react"
import './scroll.css';

export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}`);
            const data = await response.json();
            if (data && data.products && data.products.length > 0) {
                setData(data.products)
            }

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData(url);
    }, [url])

    function handleScrollPercentage() {
        const howMuchScrolled = document.documentElement.scrollTop;
        const height =document.documentElement.scrollHeight-document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled/height)*100);

    }
    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage)
        return () => {
            window.removeEventListener('scroll',handleScrollPercentage)
        }
    }, [])
    return (
        <div>
            <div className="top-container">
            <h1>Custom Scroll Indicator</h1>
            <div className="track-container">
                <div className="current-progress" style={{width:`${scrollPercentage}%`}}>

                </div>
            </div>
            </div>
            <div className="data-container">
                {
                    data && data.length > 0 ?
                        data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
                        : null
                }
            </div>
        </div>
    )
}