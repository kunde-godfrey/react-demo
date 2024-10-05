import ListGroup from "./components/ListGroup";
import "./App.css";
const App = () => {
  const items = ["Bamenda", "Buea", "Yauonde", "Douala"];
  return (
    <ListGroup
      items={items}
      heading="Cities"
      onSelectItem={(item) => console.log(item)}
    />
  );
};

export default App;
