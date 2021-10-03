import Exercise from "components/Exercise/Exercise.component";

function App() {
  return (
    <div className="App">
      <Exercise title="First Exercise" website={{name: 'Web', url: 'www'}} />
    </div>
  );
}

export default App;
