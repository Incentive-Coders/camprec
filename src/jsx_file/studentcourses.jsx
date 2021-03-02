import React from 'react';
import "../index.css";
import"../css/home.css";
import "../css/login.css";
import Navbar_student from './navbar_student';
import ReactPlayer from 'react-player'
function Cards(props) {
    return (
                <>
                   <div className="card card_h" >
                        <div className="card-body">
                            <strong><h4 className="card-title  centers">{props.title}</h4></strong>
                            <ReactPlayer url={props.url} className='vediosize'/>
                            <div className='pop' >
                            <a href="#" className="btn btn-primary margin-left text_s">Veiw Course</a>
                            </div>
                            
                        </div>
                    </div>
                    </>
    )
                    }
const Studentcourses =() => {
    return (
        <>
        <Navbar_student />
        <section className="image width">
                    <div className = "get_started">
                            <h2 className='text_center margintop'>
                             <strong className = "brand-name leftmargin">Courses</strong>
                            </h2>
                    </div>
                    <div className="gridwraper">
                        <Cards title="Courses" url="https://www.youtube.com/watch?v=ysz5S6PUM-U"/>
                        <Cards title="Courses" url="https://www.youtube.com/watch?v=ysz5S6PUM-U"/>
                        <Cards title="Courses" url="https://www.youtube.com/watch?v=ysz5S6PUM-U"/>
                        <Cards title="Courses" url="https://www.youtube.com/watch?v=ysz5S6PUM-U"/>
                        <Cards title="Courses" url="https://www.youtube.com/watch?v=ysz5S6PUM-U"/>
                    </div>
        </section>
        </>
    );
};

export default Studentcourses ;