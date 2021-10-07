import React from 'react'
import '../courses.scss'

interface Props {
    data: any;
}

const Course: React.FC<Props> = ({data}): JSX.Element => {
    return (
        <div className="courses">
            <div className="courses__course">
                <h3>{data.name}</h3>
                <img src={data.image} alt={`course with name ${data.name}`} />
                <p>Author: {data.author}</p>
                <h4>Price: <u>{data.price} stars</u></h4>
                <button>Apply</button>
            </div>
        </div>
    )
}

export default Course
