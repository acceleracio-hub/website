import { memo } from 'react';
import './styles.scss';
import girl from '../../assets/main-girl.png';

export const CourseInfo = memo(
  function CourseInfo() {
    return (
      <section className="course">
        <div className="course-info">
          <button className="course-button">Старт потока <span className="course-label">6 октября</span></button>
          <button className="course-button">Длительность <span className="course-label">2 месяца</span></button>
          <button className="course-button"> <span className="course-label">Онлайн</span></button>
        </div>
        <h1 className="course-header">Подготовка к&nbsp;собеседованию на&nbsp;английском</h1>
        <div className="course-description">
          <div className="course-description-section">
            <p className="course-paragraph">
              Станьте самым желанным кандидатом на&nbsp;собеседованиях в компаниях Европы и&nbsp;Америки  — от&nbsp;самопрезентации до оффера.
            </p>
            <button className="course-cta-button">Записаться на курс</button>
          </div>
          <img className="course-img" alt="Девочка смотрит в лупу" src={girl} />
        </div>
      </section>
    );
  },
);
