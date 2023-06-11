export type GetRandomCoffeeResponse = {
  id?: number;
  uid?: string;
  blend_name?: string;
  origin?: string;
  variety?: string;
  notes?: string;
  intensifier?: string;
  error?: Error;
};
export async function getRandomCoffee() {
  const res = await fetch(
    `https://random-data-api.com/api/coffee/random_coffee`
  );
  const data = await res.json();

  if (res.ok) {
    return data as GetRandomCoffeeResponse;
  } else {
    throw new Error("Could not fetch coffee");
  }
}
