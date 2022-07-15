
const GetsData  = ({el}) => {  
     
    const showAlert=()=> alert (`Profil user : ${el.fullName}`); 
    
    

    return (
        <div className="Name">
            <p className='title'>Profil</p>
            <img className="imgProfil" src={el.img} alt="img"/>
            <p className="profil name">FullName :{el.fullName}</p> 
            <p className="profil bio">Bio :{el.Bio}</p>
            <p className="profil prof">Profession :{el.Profession}</p>
            {showAlert()}
            
            
        </div>
        
    
    );
     
};
export default GetsData ;
