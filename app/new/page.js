import { getGamesByCategory } from '../data/data-utils';
import { CardsList } from '../components/CardList/CardsList';

export default function New() {
  const newGames = getGamesByCategory("new")
  return(
    <main className={"main_inner"}>
      <CardsList id = "new" title = "Новинки" data = {newGames}/>
    </main>
  )
}