import { CreditCard } from "./components/CreditCard";
import Ejercicio2 from "./components/Ejercicio2";
import { EjercicioPokemons } from "./components/EjercicioPokemons";

 export const data = [
  {
    type: <i class="fa-brands fa-cc-visa"></i>,
    number: "25984657153285699",
    expirationMonth: "2",
    expirationYear: "02",
    bank: "BBVA",
    owner: "SEBASTIAN ALVAREZ",
    cssClass: "red"
  },
  {
    type:<i class="fa-brands fa-cc-mastercard"></i>,
    number: "25486578895321452",
    expirationMonth: "8",
    expirationYear: "30",
    bank: "LOLO",
    owner: "VALENTINA RODRIGUEZ",
    cssClass: "green"
  },
  {
    type: <i class="fa-brands fa-cc-visa"></i>,
    number: "6945236547851236",
    expirationMonth: "4",
    expirationYear: "23",
    bank: "GiGI",
    owner: "SARA RODRIGUEZ",
    cssClass: "black"
  }
]

function App() {
  return <>
  <CreditCard/>
    <Ejercicio2 />
    <EjercicioPokemons/>
    
  </>

}

export default App;
