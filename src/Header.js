import './Header.css';

const Header = () => {

    const username = "Julien";

    return (
      <div className = "header">
        <img src = "https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1711497600&semt=sph%22," alt = "logo" width = "200"/>
        <nav>
            <ul>
                <li>Accueil</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            {/* <p>Bonjour {username}</p> */}
        </nav>
      </div>
    );
  };

  export default Header;