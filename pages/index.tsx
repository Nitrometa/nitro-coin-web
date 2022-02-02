import Layouts from '../component/layout'
import Sectionone from '../component/sectionOne'
import Metaverse from '../component/metaverse';
import SevenLayers from '../component/sevenLayers';
import NFT from '../component/nft';
import { PieRadius } from '../component/piechart';
import  Tokenomics  from '../component/tokenomics';
import  Mission  from '../component/missionvission';

import RoadMap from '../component/roadmap';

const Home = () => {
  return (
    <>
     <Layouts>
       <section className="home-banner">
        <section id="home" className="container mx-auto mb-32 mb- min-h-screen flex flex-col justify-center">
          <Sectionone/>
        </section>
       </section>
       <section id="metaverse" className="container mx-auto mb-32">
          <Metaverse/>
       </section>
       <section id="7layersmetaverse" className="container mx-auto mb-32">
          <SevenLayers/>
       </section>
       <section id="nft" className="container mx-auto mb-40">
          <NFT/>
       </section>
       <section id="chart" className="container mx-auto mb-40">
          <PieRadius/>
       </section>
       <section id="tokenomics" className="container mx-auto mb-40">
         <Tokenomics/>
       </section>
       <section id="roadmap" className="container mx-auto mb-40">
          <RoadMap/>
       </section>
       <section id="missionvission" className="container mx-auto mb-40">
         <Mission/>
       </section>
 
     </Layouts>
    </>
  )
}

export default Home;
