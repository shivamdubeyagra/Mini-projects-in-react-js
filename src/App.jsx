
import './App.css'
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import LightDarkMode from './components/light-dark-mode/index.jsx'
import LoadMoreData from './components/load-more-data'
import QRCodeGenerator from './components/qr-code/index.jsx'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import TreeView from './components/tree-view'
import menus from "./components/tree-view/data.js"

function App() {


  return (
    <>
    {/* <Accordian/> */}
    {/* <RandomColor/> */}
    {/* <StarRating noOfStars={10}/> */}
    {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/> */}
    {/* <LoadMoreData/> */}
    {/* <TreeView menus={menus}/> */}
    {/* <QRCodeGenerator/> */}
    <LightDarkMode/>
    </>
  )
}

export default App
