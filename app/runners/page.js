import { getGamesByCategory } from '../data/data-utils';
import { CardsList } from '../components/CardList/CardsList';

export default function Runners() {
  const Runners = getGamesByCategory("runner")
  return(
    <main className={"main_inner"}>
      <CardsList id = "runner" title = "Ранеры" data = {Runners}/>
    </main>
  )
}