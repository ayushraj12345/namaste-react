import { CDN_URL } from "../utils/constant";
const ResturantCard = (props)=>{
    const {restData} =props;
    //const {restName, cuisine,rating,deliveryTime}=props;
    //const name= restData.info.name;
    //console.log(name);
    const { cloudinaryImageId,name, cuisines,avgRating,sla}=restData?.info;
    return (
        <div className='rest-card'>
            <img id='rest-img'alt='rest-img' src ={CDN_URL+ cloudinaryImageId} ></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(' , ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla?.deliveryTime} minutes</h4>
        </div>
    );
}
export default ResturantCard;