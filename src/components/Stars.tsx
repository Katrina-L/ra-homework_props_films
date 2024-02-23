import Star from "./Srar";

interface Count {
    count: number
}

export default function Stars ({count = 0}: Count) {
    const stars = [];

    if ( +count >= 1 && +count <= 5 ) {
        for (let i = 1; i <= +count; i++) {
            stars.push(<Star />);
        }
    }

    return (
        <ul className="card-body-stars" 
            style={{display: "flex"}}>
            {stars.map( (elem, index) => {
                return (
                    <li className="star" key={index}>{elem}</li>
                )
            })}
        </ul>
    )
}