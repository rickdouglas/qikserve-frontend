
import useRestaurantDetails from "../hooks/useRestaurantDetails"

export function Header() {
    const {restaurantDetails , loading} = useRestaurantDetails();
    console.log(loading,'data');
    return (
        <>
            {loading ? (
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <>
                    <ul className="nav nav-underline justify-content-evenly">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Entrar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contato</a>
                        </li>
                    </ul>
                    <img src={restaurantDetails.webSettings.bannerImage} className="img-fluid" alt="Restaurant"></img>
                </>
            )}
        </>
    )
}