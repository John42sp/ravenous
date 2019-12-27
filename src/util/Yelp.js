import { createCoverageSummary } from "istanbul-lib-coverage";

const apiKey = "KPvIgGOLWjwnKlJVNidZAe8OJ2jDLMLfdBVWLaqKW75Ekxq_8AcUiN3g5o8RO4NJKNC-YvBcW6_5dIv0kKZzyrDvb1n2r2Tj5y5amP2gA82pBvkxCKxEJhp2zZhIXHYx";

const Yelp = {

    search(term, location, sortBy) {

        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then((jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(((business) => {
                    console.log(business);
                    let addressText = (business.location.display_address[0])
                   return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: addressText,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                   }
                })) 
            }

        }));
    }
}
export default Yelp;

