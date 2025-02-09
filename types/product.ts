 

 export interface Products {
    _id : string,
    productName : string,
    _type: 'product',
    image? :{

        assets: {
            _ref : string,
            type : 'image'
        }
    }
      
    price: number
    decribtion : string
 }