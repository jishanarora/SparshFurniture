const INITIAL_STATE={
    sections: [
        {
            title: 'Sofas',
            imageUrl: '../images/sofa.jpg',
            id: 1,
            linkUrl: 'shop/sofas'
          },
          {
            title: 'Dinning Tables',
            imageUrl: '../images/dinningTable.jpg',
            id: 2,
            linkUrl: 'shop/dinning-tables'
          },
          {
            title: 'Office Furniture',
            imageUrl: '../images/officeFurniture.jpg',
            id: 3,
            linkUrl: 'shop/office-furniture'
          },
          {
            title: 'Home Decor',
            imageUrl: '../images/homeDecor.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/home-decor'
          },
          {
            title: 'Beds',
            imageUrl: '../images/beds.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/beds'
          }
    ]
};

const directoryReducer=(state=INITIAL_STATE,action)=>{
switch(action.type){
  default:
    return state;
}
}

export default directoryReducer;
