export default function App() {
    const items = ["Grany", "Super Oven", "Factory"];
  
    return (
      <div>
        {items.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </div>
    );
        }