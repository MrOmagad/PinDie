"use client";
import { getGamesByCategory } from '../app/data/data-utils.js';
import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { CardsList } from "./components/CardList/CardsList";
import { useEffect } from 'react';


export default function Home() {
  useEffect(() => {
    const getData = async (url) => {
      try {
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error("Ошибка получения данных");
        }
        const data = await response.json();
        console.log(data);
        return data;
      } catch (error) {
        return error;
      }
    };
    getData("https://api-code-2.practicum-team.ru/games");
  }, []);
  const popularGames = getGamesByCategory("popular");
  const newGames = getGamesByCategory("new");

  return (
    <main>
      <Banner/>

      <CardsList id="popular" title="Популярные" data={popularGames}/>
      <CardsList id="new" title="Новинки" data={newGames}/>

      <Promo/>
    </main>
  );
}
