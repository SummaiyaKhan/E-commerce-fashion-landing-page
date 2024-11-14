import First from "./component-no.1/First";
import Secand from "./component-no.2/Secand";
import Third from "./component-no.3/Third";
import Fifth from "./component-no.4/Fourth";
import Fourth from "./component-no.5/Fifth";
import Sixth from "./component-no.6/Sixth";
import Seventh from "./component-no.7/seventh";


export default function Home() {
  return (
    <main className="w-full h-full bg-white">
      <div className="w-[1300px] h-[1861px]  mx-auto my-7">
        <First/>
        <div className=" bg-gray-50">
        <Secand/>
        <Third />
        <Fourth />
         <Fifth/>
         <Sixth/>
         <Seventh/>
         
         
        
        </div>
        
      </div>
      
    </main>
  );
}
