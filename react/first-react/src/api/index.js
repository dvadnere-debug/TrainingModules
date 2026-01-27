// // fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// //   .then((response) => {
// //     if (!response.ok) {
// //       throw new Error("could not fetch resource");
// //     }
// //     return response.json();
// //   })
// //   .then((data) => console.log(data.id))
// //   .catch((error) => console.error(error));

// // fetchData();
// // async function fetchData() {
// //   try {
// //     const pokemonName = document
// //       .getElementById("pokemonName")
// //       .value.toLowerCase();
// //     const response = await fetch(
// //       `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
// //     );

// //     if (!response.ok) {
// //       throw new Error("could not fetch resource");
// //     }
// //     const data = await response.json();
// //     const pokemonSprite = data.sprites.front_default;
// //     const imgElement = document.getElementById("pokemonSprite");
// //     imgElement.src = pokemonSprite;
// //     imgElement.style.display = "block";
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// async function fetchFood() {
//   try {
//     const response = await fetch("https://foodish-api.com/images/");
//     if (!response.ok) {
//       throw new Error("Failed to fetch food");
//     }
//     const data = await response.json();
//     console.log(data);
//     const img = document.getElementById("foodImage");
//     img.src = data.image;
//     img.style.display = "block";
//   } catch (error) {
//     console.log(error);
//   }
// }

export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GEt",
  });
  return await response.json(); //json to object conversion(array)
};
