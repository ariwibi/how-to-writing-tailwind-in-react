import Button from "./components/Button";

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <Button>Button</Button>
      <Button color="danger" size="small">
        Button
      </Button>
    </div>
  );
}

export default App;
