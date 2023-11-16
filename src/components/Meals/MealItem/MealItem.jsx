import styles from './MealItem.module.css';

function MealItem({name, price, description, image}) {
    return (
        <>
            <div className={styles['meal-item']}>
                <article>
                    <img src={`http://localhost:3000/${image}`} />
                    <div>
                        <h3>{name}</h3>
                        <p className={styles['meal-item-price']}>{price}</p>
                        <p className={styles['meal-item-description']}>{description}</p>
                    </div>
                    <p className={styles['meal-item-actions']}>
                        <button className={styles['button']}>
                            Add to Cart
                        </button>
                    </p>
                </article>
            </div>
        </>
    )
}

export default MealItem;