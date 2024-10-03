import ListGroup from "./components/ListGroup";
let items = ["Bamenda", "Buea", "Baffousam", "Douala", "Yaounde"];

function App() {
  return <ListGroup items={items} heading="Cities" />;
}

export default App;
