import resturantList from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import { useState } from "react";
const Body = () =>{
 // Normal Javascript Variable
    // let listOfResturant =[];

    // Super Powerful UseState variable
    const [listOfResturant, setlistOfResturant]=useState(resturantList);
    return (
        <div className='body-container'>
            <div className='search btn'>
                <button className="filter-btn" onClick={()=>{
                    let filterResturant= listOfResturant.filter(res => res.info.avgRating>=4);
                    console.log(filterResturant);
                    setlistOfResturant(filterResturant);
                }
                }>Top Rated Resturant</button>
            </div>
            <div className='card-container'>
                {/* <ResturantCard restName = "Adarsh Jalpan" cuisine = "Sweets, North Indian, Italian"
                rating="4.1" deliveryTime="35-40"/> */}
                {/* <ResturantCard restData = {resturantList[0]}/>
                <ResturantCard restData = {resturantList[1]}/>
                <ResturantCard restData = {resturantList[2]}/>
                <ResturantCard restData = {resturantList[3]}/>
                <ResturantCard restData = {resturantList[4]}/>
                <ResturantCard restData = {resturantList[5]}/>
                <ResturantCard restData = {resturantList[6]}/>
                <ResturantCard restData = {resturantList[7]}/>
                <ResturantCard restData = {resturantList[8]}/> */}
               {/* using map concept we acn iterate over resturantList object */}
                {
                listOfResturant.map((resturantObject) => (<ResturantCard key = {resturantObject.info.id} restData = {resturantObject} /> ))
                }
               </div>
        </div>
  );
}
export default Body;