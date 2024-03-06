import{ getGamesByCategory } from '../data/data-utils';
import { CardsList } from '../components/CardList/CardsList';

export default function Popular() {
  const popularGames = getGamesByCategory("popular");

  return(
    <main>
      <CardsList id = "popular" title = "Популярные" data = {popularGames}/>
    </main>
  );
}