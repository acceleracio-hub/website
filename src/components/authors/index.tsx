import { memo } from "react";
import { Text, Tile } from "@ui-kit/index";
import classnames from "classnames/bind";
import anna from "./assets/anna.png";
import liubov from "./assets/liubov.png";
import styles from "./index.module.scss";
import { Box } from "./components/box";

const cn = classnames.bind(styles);

const BLOCK_NAME = "Authors";

export const Authors = memo(function Authors() {
  return (
    <>
      <Text size="h2" color="white" text="Авторы и ведущие курса" marginBottom="large" />
      <Tile>
        <div className={cn(`${BLOCK_NAME}__description`)}>
          <img className={cn(`${BLOCK_NAME}__image`)} alt="Анна Решетова" src={anna} />
          <div className={cn(`${BLOCK_NAME}__container`)}>
            <Text size="h3" tagType="h4" color="black" text="Анна Решетова" marginBottom="medium" />
            <ul className={cn(`${BLOCK_NAME}__list`)}>
              <li className={cn(`${BLOCK_NAME}__list-item`)}>
                <Text
                  size="p"
                  tagType="p"
                  color="black"
                  text="Я преподаю английский, и вот уже около 3 лет работаю с айти-специалистами в рамках авторского курса для работы в международных командах. Вместе мы практикуемся в ситуациях, возникающих каждый день на работе: дейлики, брейнштормы, парное программирование, ретро - и, конечно же, подготовка к интервью."
                  marginBottom="small"
                />
              </li>
              <li className={cn(`${BLOCK_NAME}__list-item`)}>
                <Text
                  size="p"
                  tagType="p"
                  color="black"
                  text="Я внимательно слушала вопросы, возникающие у студентов на этом этапе: «Какие ситуации описывать, когда интервьюер спрашивает о конфликтах в команде? Что они хотят услышать от меня, когда задают вопрос о фейлах?» - и бережно собирала наши инсайты."
                  marginBottom="small"
                />
              </li>
              <li className={cn(`${BLOCK_NAME}__list-item`)}>
                <Text
                  size="p"
                  tagType="p"
                  color="black"
                  text="Эти находки мы с Любой стараемся объединить в программе курса Acceleracio и транслируем главные принципы. Надеюсь, вам будет интересно присоединиться к нашему коммьюнити!"
                  marginBottom="small"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className={cn(`${BLOCK_NAME}__description`)}>
          <img className={cn(`${BLOCK_NAME}__image`)} alt="Любовь Татарова" src={liubov} />
          <div className={cn(`${BLOCK_NAME}__container`)}>
            <Text size="h3" tagType="h4" color="black" text="Любовь Татарова" marginBottom="medium" />
            <ul className={cn(`${BLOCK_NAME}__list`)}>
              <li className={cn(`${BLOCK_NAME}__list-item`)}>
                <Text
                  size="p"
                  tagType="p"
                  color="black"
                  text="Я занимаюсь фронтенд-разработкой уже около 5 лет и успешно проходила собеседований в международные команды. За время своей практики я обнаружила, что моим талантливым коллегам не хватает структурного подхода в прохождении интервью."
                  marginBottom="small"
                />
              </li>
              <li className={cn(`${BLOCK_NAME}__list-item`)}>
                <Text
                  size="p"
                  tagType="p"
                  color="black"
                  text="Умение оставлять качественные отклики с грамотно составленным резюме и адаптировать Cover Letter для каждого потенциального работодателя - навык, который сложно развивать самостоятельно. Я объединила все этапы, которые нужно пройти для получения оффера, в логичный алгоритм действий."
                  marginBottom="small"
                />
              </li>
              <li className={cn(`${BLOCK_NAME}__list-item`)}>
                <Text
                  size="p"
                  tagType="p"
                  color="black"
                  text="Следуя ему, друзья и коллеги проходили вместе со мной на новые этапы карьеры. Теперь, накопив опыт в подготовке к техническим собеседованиям в зарубежных компаниях, я готова делиться им с вами."
                  marginBottom="small"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className={cn(`${BLOCK_NAME}__info`)}>
          <Box>
            <Text
              size="h4"
              tagType="h4"
              color="black"
              text="Курс разработали и будем поддерживать мы — основатели Acceleracio."
              marginBottom="none"
            />
          </Box>
        </div>
        <div className={cn(`${BLOCK_NAME}__info`)}>
          <Box>
            <Text
              size="h4"
              tagType="h4"
              color="black"
              text="Совокупно у нас почти 10 лет опыта в коммуникации с рекрутерами на английском, подготовке к ней, а также в прохождении интервью в европейские и американские компании."
              marginBottom="none"
            />
          </Box>
        </div>
      </Tile>
    </>
  );
});
