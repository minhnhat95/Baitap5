import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Lighttree from "./components/Lighttree";
function App() {
  const pokemonInformation = [
    {
      img: "./images/001.png",
      id: "#0001",
      name: "Bulbasaur",
      type: ["Grass", "Poison"],
    },
    {
      img: "./images/002.png",
      id: "#0002",
      name: "Ivysaur",
      type: ["Grass", "Poison"],
    },
    {
      img: "./images/003.png",
      id: "#0003",
      name: "Venusaur",
      type: ["Grass", "Poison"],
    },
    {
      img: "./images/004.png",
      id: "#0004",
      name: "Charmander",
      type: ["Fire"],
    },
    {
      img: "./images/005.png",
      id: "#0005",
      name: "Charmeleon",
      type: ["Fire"],
    },
    {
      img: "./images/006.png",
      id: "#0006",
      name: "Charizard",
      type: ["Fire", "Flying"],
    },
    {
      img: "./images/007.png",
      id: "#0007",
      name: "Squirtle",
      type: ["Water"],
    },
    {
      img: "./images/008.png",
      id: "#0008",
      name: "Wartortle",
      type: ["Water"],
    },
    {
      img: "./images/009.png",
      id: "#0009",
      name: "Blastoise",
      type: ["Water"],
    },
    {
      img: "./images/010.png",
      id: "#0010",
      name: "Caterpie",
      type: ["Bug"],
    },
    {
      img: "./images/011.png",
      id: "#0011",
      name: "Metapod",
      type: ["Bug"],
    },
    {
      img: "./images/012.png",
      id: "#0012",
      name: "Butterfree",
      type: ["Bug", "Flying"],
    },
    {
      id: "#0013",
      name: "Weedle",
      type: ["Bug", "Poison"],
      img: "./images/013.png",
    },
    {
      id: "#0014",
      name: "Kakuna",
      type: ["Bug", "Poison"],
      img: "./images/014.png",
    },
    {
      id: "#0015",
      name: "Beedrill",
      type: ["Bug", "Poison"],
      img: "./images/015.png",
    },
  ];

  const [pokData, setPokData] = useState(pokemonInformation);
  const [crrData, setCrrData] = useState(null);
  let showModal = null;
  if (crrData) {
    showModal = (
      <Modal
        pokemon={crrData}
        onClose={() => {
          setCrrData(null);
        }}
        onChangePokemon={(pokemon) => {
          setCrrData(pokemon);
        }}
        onSave={() => {
          const index = pokData.findIndex((item) => item.id === crrData.id);
          if (index > -1) {
            pokData[index] = { ...pokData[index], ...crrData };
            setPokData([...pokData]);
            setCrrData(null);
          }
        }}
      />
    );
  }
  // console.log(crrData);
  return (
    <div className="container">
      <div className="header">
        <h1>POKEDEX</h1>
      </div>
      <div className="cards">
        {pokData.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              img={pokemon.img}
              onClick={() => {
                setCrrData(pokemon);
              }}
            />
          );
        })}
        {/* <Card
          id={"#0001"}
          name={"Bulbasaur"}
          type={["Grass", "Poison"]}
          img={"./images/001.png"}
        />
        <Card
          id={"#0002"}
          name={"Ivysaur"}
          type={["Grass", "Poison"]}
          img={"./images/002.png"}
        />
        <Card
          id={"#0003"}
          name={"Venusaur"}
          type={["Grass", "Poison"]}
          img={"./images/003.png"}
        />
        <Card
          id={"#0004"}
          name={"Charmander"}
          type={["Fire"]}
          img={"./images/004.png"}
        />
        <Card
          id={"#0005"}
          name={"Charmeleon"}
          type={["Fire"]}
          img={"./images/005.png"}
        />
        <Card
          id={"#0006"}
          name={"Charizard"}
          type={["Fire", "Flying"]}
          img={"./images/006.png"}
        />
        <Card
          id={"#0007"}
          name={"Squirtle"}
          type={["Water"]}
          img={"./images/007.png"}
        />
        <Card
          id={"#0008"}
          name={"Wartortle"}
          type={["Water"]}
          img={"./images/008.png"}
        />
        <Card
          id={"#0009"}
          name={"Blastoise"}
          type={["Water"]}
          img={"./images/009.png"}
        />
        <Card
          id={"#0010"}
          name={"Caterpie"}
          type={["Bug"]}
          img={"./images/010.png"}
        />
        <Card
          id={"#0011"}
          name={"Metapod"}
          type={["Bug"]}
          img={"./images/011.png"}
        />
        <Card
          id={"#0012"}
          name={"Butterfree"}
          type={["Bug", "Flying"]}
          img={"./images/012.png"}
        /> */}
      </div>
      {showModal}
      <Lighttree />
    </div>
  );
}

export default App;
