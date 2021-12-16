import React from 'react';
import '../index.css';
import '../css/home.css';
import '../css/login.css';
import Navbar_student from './navbar_student';
const arr = JSON.parse(localStorage.getItem('student'));
function Cards(props) {
  console.log(arr.premium);
  return (
    <>
      <div className="card card_h">
        <div className="card-body">
          <strong>
            <h4 className="card-title  centers">{props.title}</h4>
          </strong>
          <img src={props.url} className="vediosize" />
          <div className="pop">
            {arr.premium ? (
              <a
                href="https://www.youtube.com/watch?v=giWIr7U1deA"
                className="btn btn-primary margin-left text_s"
              >
                View Course
              </a>
            ) : (
              <a href="/premium" className="btn btn-primary margin-left text_s">
                View Course
              </a>
            )}{' '}
          </div>
        </div>
      </div>
    </>
  );
}
function Studentcourses() {
  return (
    <>
      <Navbar_student />
      <section className="image width">
        <div className="get_started">
          <h2 className="text_center margintop">
            <strong className="brand-name leftmargin">Courses</strong>
          </h2>
        </div>
        <div className="gridwraper">
          <Cards
            title="Courses"
            url="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/article/2019/11/06/cosmetics-consultants-europe-to-launch-safety-assessment-training-course-2020/10338859-1-eng-GB/Cosmetics-Consultants-Europe-to-launch-safety-assessment-training-course-2020_wrbm_large.jpg"
          />
          <Cards
            title="Courses"
            url="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/article/2019/11/06/cosmetics-consultants-europe-to-launch-safety-assessment-training-course-2020/10338859-1-eng-GB/Cosmetics-Consultants-Europe-to-launch-safety-assessment-training-course-2020_wrbm_large.jpg"
          />
          <Cards
            title="Courses"
            url="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/article/2019/11/06/cosmetics-consultants-europe-to-launch-safety-assessment-training-course-2020/10338859-1-eng-GB/Cosmetics-Consultants-Europe-to-launch-safety-assessment-training-course-2020_wrbm_large.jpg"
          />
          <Cards
            title="Courses"
            url="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/article/2019/11/06/cosmetics-consultants-europe-to-launch-safety-assessment-training-course-2020/10338859-1-eng-GB/Cosmetics-Consultants-Europe-to-launch-safety-assessment-training-course-2020_wrbm_large.jpg"
          />
          <Cards
            title="Courses"
            url="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/cosmetics/cosmeticsdesign-europe.com/article/2019/11/06/cosmetics-consultants-europe-to-launch-safety-assessment-training-course-2020/10338859-1-eng-GB/Cosmetics-Consultants-Europe-to-launch-safety-assessment-training-course-2020_wrbm_large.jpg"
          />
        </div>
      </section>
    </>
  );
}

export default Studentcourses;
