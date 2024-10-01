import ServiceForm from "./components/ServiceForm";
import ServiceList from "./components/ServiceList";
import ServiceSearch from "./components/ServiceSearch";
import "./App.css";

export default function App() {
  return (
    <>
      <ServiceForm />
      <ServiceSearch />
      <ServiceList />
    </>
  );
}
