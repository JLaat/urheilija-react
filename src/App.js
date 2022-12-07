import "./App.css";
import SearchForm from "./components/SearchForm";
import UrheilijaCard from "./components/UrheilijaCard";
import AddForm from "./components/AddForm";

function App() {
  return (
    <div className="App h-[100vh] bg-gray-200">
      <main className="grid grid-cols-3 h-[100%]">
        <div className="flex flex-col self-center">
          <AddForm />
          <SearchForm />
        </div>
        <UrheilijaCard />
      </main>
    </div>
  );
}

export default App;
