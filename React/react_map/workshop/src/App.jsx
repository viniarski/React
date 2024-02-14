export default function App() {
  const items = ["Button 1", "Button 2", "Button 3"];

  return (
    <div>
      {items.map((item) => (
        <button key={item}>{item}</button>
      ))}
    </div>
  );
      }