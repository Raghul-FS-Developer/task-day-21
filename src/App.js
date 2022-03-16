import './App.css';
import FreeTierCard from './components/FreeTier'
import PlusTierCard from './components/PlusTier'
import ProTierCard from './components/ProTier'


function App() {
  return (
    <>
      <h1 class="display-6 text-light text-uppercase"align="center" >Pricing Table</h1>
    <section className="pricing py-5">
  <div className="container">
        <div className="row">
          <FreeTierCard/>
          <PlusTierCard/>
          <ProTierCard/>
          
        </div>
      </div>
      </section>
      </>
  );
}

export default App;
