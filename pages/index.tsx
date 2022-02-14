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
      <div className="text-6xl min-h-screen flex items-center justify-center">
        <h1>Page Unavailable</h1>
      </div>
     {/*<Layouts>
        <section className="home-banner">
        <section id="home" className="container mx-auto mb-32 mb- min-h-screen flex flex-col justify-center">
          <Sectionone/>
        </section>
       </section>
       <section id="token-allocation" className="container mx-auto mb-32">
          <PieRadius/>
       </section>
       <section id="tokenomics" className="container mx-auto mb-32">
         <Tokenomics/>
       </section>
       <div className="w-full relative background-custom py-24 mb-32 z-10">
        <section id="metaverse" className="container mx-auto mb-32">
            <Metaverse/>
        </section>
       </div>
       <section id="7layersmetaverse" className="container mx-auto ">
          <SevenLayers/>
       </section>
       <section id="nft" className="container mx-auto mb-32">
          <NFT/>
       </section>
       <section id="roadmap" className="container mx-auto mb-32">
          <RoadMap/>
       </section>
       <section id="missionvission" className="container mx-auto mb-32">
         <Mission/>
       </section> 
     </Layouts>*/}
    </>
  )
}

export default Home;
