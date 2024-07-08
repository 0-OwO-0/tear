import Timer from "./Timer";

const App = () => {
  const startDate = "2023-12-19T23:05:00Z"; // December 19, 2023, 11:05 PM UTC // Replace with your start date and time

  return (
    <div className="App">
      <Timer startDate={startDate} />
    </div>
  );
};

export default App;
