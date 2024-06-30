import style from './Recipe.module.css'
import omellete from '../images/image-omelette.jpeg'

export default function Recipe() {
    return (
        <div className={style.container}>
            <div className={style.img}>
                <img src={omellete} alt="" />
            </div>

            <div className={style.recipe}>
                <div className={style.details}>
                    <h2>simple omeletter recipe</h2>
                    <p>An easy and quick dish, perfect for any meal.
                        This classic omelette combines beaten eggs cooked to perffection, optionally
                        filled with your choice of cheese, vegetables, or meats
                    </p>
                </div>
                <div className={style.preptime}>
                    <h2>Preparation time</h2>
                    <ul>
                        <li><span>total: </span> Approximately 10 minutes</li>
                        <li><span>preparation: </span> 5 minutes</li>
                        <li><span>cooking: </span> 5 minutes</li>
                    </ul>
                </div>

                <div className={style.ingre}>
                    <h2>Ingredients</h2>
                    <ul>
                        <li>2-3 large eggs</li>
                        <li>Salt to taste</li>
                        <li>Pepper to taste</li>
                        <li>1 tablespoon of butter or oil</li>
                        <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                    </ul>
                </div>

                <div className={style.instr}>
                    <h2>Instructions</h2>
                    <ol>
                        <li><span>Beat the eggs: </span> In a bowl, beat the eggs with a pinch of salt and Pepper until they are well mixed. you can add a tablespoon of water or milk for a fluffier texture.</li>
                        <li><span>Heat the pan: </span> Place a non-stick frying pan over medium heat and add butter or oil. </li>
                        <li><span>Cook the omelette: </span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</li>
                        <li><span>Add fillings(optional): </span> When the eggs begin to set at the edges but are still slightly runny in the middle, spinkle your chosen fillings over one half of the omelette.</li>
                        <li><span>Fold and serve: </span> As the omelette contiune to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</li>
                        <li><span>Enjoy: </span> Serve hot, with additional salt and pepper if needed.</li>
                    </ol>
                </div>

                <div className={style.nutri}>
                    <h2>Nutrition</h2>
                    <h3>The table below shows nutritional vlaues per serving without the additional fillings.</h3>
                    <div className={style.nutrip}>
                        <p>calories</p>
                        <span>277kcal</span>
                    </div>
                    <div className={style.nutrip}>
                        <p>carbs</p>
                        <span className={style.g}>0g</span>
                    </div>
                    <div className={style.nutrip}>
                        <p>protein</p>
                        <span className={style.g}>20g</span>
                    </div>
                    <div id={style.border} className={style.nutrip}>
                        <p>fat</p>
                        <span className={style.g}>22g</span>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}