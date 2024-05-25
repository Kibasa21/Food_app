import Header from "./components/Header/Header";
import Shop from "./components/Products/Shop";
import TableContextProvider from "./components/context/tableContextProvider";

function App() {
  return (
    <TableContextProvider>
      <Header />
      <Shop />
    </TableContextProvider>
  );
}

export default App;
