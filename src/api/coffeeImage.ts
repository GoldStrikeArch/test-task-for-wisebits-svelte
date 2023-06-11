type GetCoffeeImageResponse = {
  file: string;
};

export async function getRandomCoffeeImage() {
  const res = await fetch(
    `https://random-coffee-image-proxy-cd2ox47nx-goldstrike.vercel.app/api/coffee` // a simple proxy to bypass CORS
  );
  const data = await res.json();

  if (res.ok) {
    return data as GetCoffeeImageResponse;
  } else {
    throw new Error("Could not fetch coffee image");
  }
}
