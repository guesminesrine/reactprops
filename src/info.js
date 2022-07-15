import GetsData from "./profile";

function Info({Data}) {
    return (
      <div className='info'>
        {Data.map((el)=>(<GetsData el={el}/>))}
      </div>
    );
  }
  
  export default Info;