import { BTech } from "./BTech";
import FormContainer from "./FormContainer";
import TittleContainer from "./TittleContainer";
import ContainerBody from "./ContainerBody";
import Tile from "./Tile";
import image1 from "./first-img.jpg"
import Tile2 from "./Tile2";
import AutoSlider from "./TileSlider";
import MainBodyFormContainer from "./MainBodyFormContainer";
import { tileContent } from './tileData'
import { tilesData } from './tilesData'

function Home() {
  return <>
    <TittleContainer tittle={"Best Educational Consultancy in Patna"} subTittle={"Find Colleges, Courses & Exams that are Best for You"} discription={"450 + University   |4040 + Colleges   |   221 + Courses   | 861+ Sub Courses   | 100 + Exams"} />
    <FormContainer />
    <ContainerBody background={1} tittleWithWhite={"Select Your "} tittleWithColor={"Study Goal"} subheading={"Reset your research strategy with top admission consultancy in patna by browsing through our lists of top colleges, exams,courses and careers based on your area of interest!"} >
      {tilesData.map((tile, index) => (
        <Tile
          key={index}
          image={tile.image}
          tittle={tile.tittle}
          college={tile.college}
          courses={tile.courses}
        />
      ))}
    </ContainerBody>
    <ContainerBody tittleWithWhite={"Well-versed in all aspects of admissions through the Best Admission Consultancy in Patna"} subheading={"Reset your research strategy with top admission consultancy in patna by browsing through our lists of top colleges, exams, courses and careers based on your area of interest!"} >
      {tileContent.map((tile, index) => (
        <Tile2
          key={index}
          imageSrc={tile.imageSrc}
          title={tile.title}
          description={tile.description}
          onReadMore={() => alert(`Read more: ${tile.title}`)}
          onEnquiry={() => alert(`Enquiry for: ${tile.title}`)}
        />
      ))}
    </ContainerBody>
    <AutoSlider />
    <MainBodyFormContainer />
  </>;
}

export default Home;
