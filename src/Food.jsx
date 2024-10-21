import shakshuka from "./assets/shakshuka.jpeg";

export function FoodList() {
  return (
    <ul>
      <li>Shakshuka</li>
      <li>Kubba Hamuth</li>
      <li>Kimchi Jjigae</li>
    </ul>
  );
}

export function FavoriteFood() {
  return (
    <>
      <h2>
        My Favorite food is:
        <FoodList />
      </h2>
      <img src={shakshuka} alt="Shakshuka" />
    </>
  );
}
