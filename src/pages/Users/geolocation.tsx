interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo:{
          lat: number,
          lng: number
      }
    },
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string
    }
  }

function toRad(value:number) {
    return (value * Math.PI) / 180;
  }
  
  function calculateDistance(lat1:number, lng1:number, lat2:number, lng2:number) {
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lng2 - lng1);
    const l1 = toRad(lat1);
    const l2 = toRad(lat2);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(l1) * Math.cos(l2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  }
  
  export function sortUserByDistance(users:User[], lat:number, lon:number) {
    const sortedUsers = [...users];
    sortedUsers.sort((a, b) => {
      const distanceA = calculateDistance(lat, lon, a.address.geo.lat , a.address.geo.lng);
      const distanceB = calculateDistance(lat, lon, b.address.geo.lat, b.address.geo.lng);
      return distanceA - distanceB;
    });
    return sortedUsers;
  }