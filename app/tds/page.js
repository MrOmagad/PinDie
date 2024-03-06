import { getGamesByCategory } from '../data/data-utils';
import { CardsList } from '../components/CardList/CardsList';

export default function TDS() {
  const TDS = getGamesByCategory("TDS")
  return(
    <main className={"main_inner"}>
      <CardsList id = "TDS" title = "TDS" data = {TDS}/>
    </main>
  )
}