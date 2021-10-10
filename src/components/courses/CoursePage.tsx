import React from 'react'
import Course from './course/Course';

const courses = [
    {
        name: "Python Jr",
        author: "Datorium",
        image: "https://files.cdn.thinkific.com/courses/course_card_image_001/012/9151604583714.original.png",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        price: 50
    },
    {
        name: "React Web Front-End",
        author: "Datorium",
        image: "https://tse1.mm.bing.net/th?id=OIP.BwJ84XJUWpPNpSKFGU8KDQHaEO&pid=Api",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        price: 50
    },
    {
        name: "Marketing course",
        author: "Martin Summers",
        image: "https://img.lagaceta.com.ar/fotos/notas/2019/11/02/pymes-como-animarse-al-marketing-digital-823814-213209.jpg",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        price: 30
    },
    {
        name: "Web design course",
        author: "Mitch Bigger",
        image: "https://tse1.mm.bing.net/th?id=OIP.jTwct7suDdPurgmKVIYCfAHaD6&pid=Api",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        price: 35
    },
    {
        name: "SEO course",
        author: "Mr SEO expert",
        image: "https://tse4.mm.bing.net/th?id=OIP.TJXw8mM6zLgOMkdKiQRCNAEGDu&pid=Api",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        price: 20
    },
    {
        name: "AWS course",
        author: "AWS master",
        image: "https://tse1.mm.bing.net/th?id=OIP.S-9EjIzAEYqbP1oktJVc5wHaEw&pid=Api",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        price: 60
    },
]

const CoursePage:React.FC = (): JSX.Element => {
    return (
        <div className="courses">
            {courses.map((data, i: number) => {
                return(
                    <Course 
                        key={i}
                        data={data}
                    />
                )
            })}
        </div>
    )
}

export default CoursePage
