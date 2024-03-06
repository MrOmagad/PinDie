import Styles from './Cards.module.css'
import { Card } from '../Card/Card';
import Link from 'next/link';

export const CardsList = (props) => {
  return (
    <section className={Styles.list__section}>
      <h2 className={Styles.list__section__title} id={props.id}>
        {props.title}
      </h2>
      <ul className={Styles.cards__list}>
        {props.data.map((item) => {
          return (
            <li className={Styles.cards__list__item}>
              <Link href={`./games/${item.id}`} className={Styles.card__list__link}>
                <Card {...item}/>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}