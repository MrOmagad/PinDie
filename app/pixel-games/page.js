import { getGamesByCategory } from '../data/data-utils';
import { CardsList } from '../components/CardList/CardsList';

export default function Pixel() {
  const Pixel = getGamesByCategory("new")
  return(
    <main className={"main_inner"}>
      <CardsList id = "pixel" title = "Пиксельные" data = {Pixel}/>
    </main>
  )
}