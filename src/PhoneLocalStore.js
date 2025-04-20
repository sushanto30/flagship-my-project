 export const getPhones = ()=>{
  const favorites = localStorage.getItem('card')
  if(favorites)return JSON.parse(favorites)
    return []
}

 
export const phoneSetLocalStore = phone =>{
    // console.log(phone)
    const favorites = getPhones();
    const isPhone = favorites.find(p => p.id === phone.id)
    if(isPhone)return console.log('already added')
    favorites.push(phone)
    localStorage.setItem('card',JSON.stringify(favorites))
}