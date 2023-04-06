
const scrape = require('aliexpress-product-scraper');
const fs = require('fs');

const product =scrape('1005001592437099',1);

aliReviews(product);

async function aliReviews(product) {
  await product.then(res => {
    let row=[];
    row[0]=res['productId'].toString();
    console.log(res['productId'].toString());
    res['feedback'].forEach(element => {
      if(element['content'] !== ''){ 
        row[1]=element['displayName'];
        row[2]=element['country'];
        row[3]=element['rating'];
        row[4]=element['content'].replace(/(\r\n|\n|\r)/gm, " ");
        row[5]=element['date'].toJSON().slice(0, 10).toString();
      } 
      
  }); 
  console.log(row);
});
}