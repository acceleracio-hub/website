import { CourseInfo } from './components/course-info';
import { Header } from './components/header';
import './styles.scss';

function App() {
  return (
    <div className="container">
      <Header />
      <CourseInfo />
      <h2 className="course-header">Главное о&nbsp;курсе</h2>
      <div>
        <ul>
          <li>
            7  live-занятий: отработай все ответы в контакте с преподавателем и участниками группы
          </li>
          <li>
            Программа на английском: все материалы и занятия позволяют практиковаться на языке интервью
          </li>
          <li>
            Мок-интервью: персональное тестирование навыков коммуникации с подробным фидбеком
          </li>
          <li>
            Видео-домашки: работа с интонацией, самопрезентацией и уверенностью подачи
          </li>
          <li>
            CV + Cover Letter: база для качественных и быстрых откликов
          </li>
          <li>
            Подбор стратегии поиска работы: эффективная воронка найма, которая не подведет
          </li>

        </ul>
      </div>
    </div>
  );
}

export default App;
