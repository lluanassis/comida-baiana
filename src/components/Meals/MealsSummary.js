import classes from './MealsSummary.module.css'

const MealsSummary = () =>{
    return(
        <section className={classes.summary}>
            <h2>A deliciosa culinária baiana, a um pedido!</h2>
            <p>
                Escolha seu delicioso prato de comidas típicas e se delicie com nossos sabores.
            </p>
            <p>
                Todos os pratos são preparados com ingredientes de alta qualidade, feitos da hora por chefes experientes!
            </p>
        </section>
    )
};

export default MealsSummary;