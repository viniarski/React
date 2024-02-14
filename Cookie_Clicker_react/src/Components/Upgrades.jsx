import './Upgrades.css'

export default function Upgrades() {
    const upgrades = ["Grany", "Super Oven", "Factory"];
  
    return (
      <div className="upgrades">
        {upgrades.map((upgrade) => (
          <button className='upg-btn' key={upgrade}>{upgrade}</button>
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