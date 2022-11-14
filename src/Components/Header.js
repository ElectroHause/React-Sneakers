function Header(){
    return(
        <header className="d-flex justify-between align-center p-40	">
    <div className="d-flex align-center	">
    <img width={40} heaight={40} src="/img/logo.png"/>
      <div>
        <h2 className="text-uppercase">Best Sneakers</h2>
        <p className="opacity-6">Магазни лучших кроссовок</p>
      </div>
    </div>
    <ul className="d-flex">
      <li className="mr-30">
      <img width={20} heaight={20} src="/img/card.svg"/>
      <span>1408 руб.</span>
      </li>
      <li>
      <img width={20} heaight={20} src="/img/user.svg"/>
        </li>   
    </ul>
    </header>
    )
}
export default Header;