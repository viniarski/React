export default function Upgrades() {
    const upgrades = ["Grany", "Super Oven", "Factory"];
  
    return (
      <div>
        {upgrades.map((upgrade) => (
          <button key={upgrade}>{upgrade}</button>
        ))}
      </div>
    );
        }


// [
//   {
//     button: "granny",
//     cost: 10,
//     speed: 1,
//   },
//   {
//     button: "super_oven",
//     cost: 100,
//     speed: 10,
//   },
//   {
//     button: "factory",
//     cost: 1000,
//     speed: 100,
//   },
// ];