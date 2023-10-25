import React, { useState, useEffect } from 'react';
import MerchantCard from './MerchantCard';

const MarchantList = () => {
    const [merchants, setMerchants] = useState([]);
  
    useEffect(() => {
        console.log('object')
      fetch('http://localhost:3030/api/merchants')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const unique =  removeDuplicates(data)
          setMerchants(unique);
        })
        .catch((error) => console.error('Error fetching data', error));
    }, []);
    const removeDuplicates =(data) => {
        const unique = [data[0]]
        data.forEach((item) => {
            if(unique.some(obj => obj.id == item.id )) {
            }
            else {
                unique.push(item)

            }
    })
    console.log(unique)
    return unique
    }
  return (

    <div>
             <h3>Discover Stores</h3>
        <div className="container">
        {merchants.map(merchant => (
            <MerchantCard merchant = {merchant}  key={merchant.id}/>
        ))}
        </div>
    </div>
  )
}

export default MarchantList
