import { getGamesByCategory } from '../data/data-utils';
import { CardsList } from '../components/CardList/CardsList';

export default function Shooters() {
  const Shooters = getGamesByCategory("shooter")
  return(
    <main className={"main_inner"}>
      <CardsList id = "shooter" title = "Шутеры" data = {Shooters}/>
    </main>
  )
}