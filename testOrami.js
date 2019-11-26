const productData = [
  {
    productId: 1000,
    productName: 'Product 1000'
  },
  {
    productId: 1001,
    productName: 'Product 1001'
  }
];
const stockData = [
  {
    productId: 1000,
    locationId: 1,
    stock: 21
  },
  {
    productId: 1000,
    locationId: 2,
    stock: 8
  },
  {
    productId: 1001,
    locationId: 1,
    stock: 4
  },
  {
    productId: 1001,
    locationId: 2,
    stock: 10
  }
];
const locationData = [
  {
    locationId: 1,
    locationName: 'Location 1'
  },
  {
    locationId: 2,
    locationName: 'Location 2'
  }
];
let result=[];
let stockTotal=0;
let detail = [];
let countResult = ()=>{
	productData.forEach((product)=>{
		detail=[];
		stockData.forEach((stock)=>{
			if(product.productId==stock.productId){
				locationData.forEach((location)=>{
					if(stock.locationId==location.locationId){
						detail.push({
							locationName : location.locationName,
							stock:stock.stock
						})
					}
				})
				
				stockTotal+=stock.stock
			}

		})
		result.push({
			productName : product.productName,
			stock:{
				total:stockTotal,
				detail
			}
		});
	})
	return {result};
}
console.log(countResult())