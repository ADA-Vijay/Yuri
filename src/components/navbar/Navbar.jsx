import React from "react";
import AppConfig from "../../../AppConfig";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
// import EnquiryModal from '@/components/enquiryModal';
const brand = [
  {
    "cat_id": 1,
    "name": "Our Brands",
    "url_name": "/OurBrands",
    "sub_categories": [
      {
        "sub_id": 1,
        "name": "Dayuri",
        "url_name": "#Dayuri"
      },
      {
        "sub_id": 2,
        "name": "Yuri",
        "url_name": "#Yuri"
      },
      {
        "sub_id": 3,
        "name": "Gaocheng",
        "url_name": "#GAOCHENG"
      },
      {
        "sub_id": 4,
        "name": "GC Power",
        "url_name": "#GCPower"
      },
      {
        "sub_id": 6,
        "name": "Yuri Speed",
        "url_name": "#YuriSpeed"
      },
      {
        "sub_id": 7,
        "name": "Workpro",
        "url_name": "#Workpro"
      }
    ]
  },
]
async function getDetails(){
  try {
    const response = await fetch(`${AppConfig.api}Category/GetAllTypeCategory`);
    if (response.ok) {
      const responseData = await response.json();
      const categoriesData = JSON.parse(responseData.respObj);
      const categories = categoriesData.categories;
      return categories;
    } else {
      throw new Error('Failed to fetch categories');
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}


const Navbar = async() => {
  const categories = await getDetails()
  if(categories){
    console.log("categories",categories)
  }
  return (
   <>
    
   </>
  )
}



export default Navbar