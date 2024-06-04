import Item from "./Exer";
import IItem from "./q2";
import Challenge3 from "./q3";
export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
   
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <IItem 
          importance={9} 
          name="Space suit" 
        />
        <IItem 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <IItem 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
      <div>
      <h1>Question No 03</h1>
      <Challenge3 name1="tea" />
      <Challenge3 name1="coffee" />
    </div>
    </section>
    
  );
}
