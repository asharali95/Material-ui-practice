import { Grid } from "@material-ui/core";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import CoffeeMakerList from "../../constants" 

const makeCoffeeCard = (coffeeCardObj) =>{
  return <Grid item xs={12} sm={4}>
    <CoffeeCard {...coffeeCardObj}/>
  </Grid>
}
const CartSection = () => {
  
  return <Grid container spacing={2}>
    {CoffeeMakerList.map(coffeeCardObj => makeCoffeeCard(coffeeCardObj))}
  </Grid> 
};
export default CartSection;
