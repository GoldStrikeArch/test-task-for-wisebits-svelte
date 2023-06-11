import { getRandomCoffee, type GetRandomCoffeeResponse } from "../api/coffee";
import { writable } from "svelte/store";
import { timer } from "./timer";




const createCoffeeAsyncList = () => {
  let coffees: GetRandomCoffeeResponse[]= [];
  let isLoading = false;

  const { set, subscribe, update } = writable({ coffees, isLoading });

  const fetchNewCoffee = async () => {
    timer.reset();

    if (isLoading) return;

    isLoading = true;
    set({ isLoading, coffees });

    let newCoffee;

    try {
      newCoffee = await getRandomCoffee();
    } catch (error) {
      newCoffee = { error };
    }

    isLoading = false;
    coffees.push(newCoffee);

    set({ isLoading, coffees });
  };

  return {
    set,
    subscribe,
    update,
    fetchNewCoffee,
  };
};

export const coffeeAsyncList = createCoffeeAsyncList();
