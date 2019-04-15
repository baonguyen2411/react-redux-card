

// var data = JSON.parse(localStorage.getItem('tasks'));
var data = [
    {
        id: 1,
        name: 'Iphone 8plus',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Sản phẩm do apply sản xuất Apple',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: 'Iphone X',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Sản phẩm do apply sản xuất Apple',
        price: 500,
        inventory: 10
    },
    {
        id: 3,
        name: 'Iphone XR',
        image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
        description: 'Sản phẩm do apply sản xuất Apple',
        price: 500,
        inventory: 10
    }
];
var initialState = data ? data : [];

var generateID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r && 0x3 | 0x8);
        return v.toString(16);
    });
}

var product = (state = initialState, action) => {
    switch(action.type) {
        default: 
            return state
    }
}

export default product;