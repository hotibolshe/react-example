import ProductList from "../ProductList";
// import Sidebar from "../Sidebar";
import './index.css'

const MainContent = ({links}) => {

  return (
    <div className="main-content">
      {/* <Sidebar links={links}/> */}
      <ProductList />
    </div>
  );
}

export default MainContent
