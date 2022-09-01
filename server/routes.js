const express = require('express');
const router = express();
const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const productSchema = require('./models/newProduct');
const newUserModel = require('./models/addUsers');
const orderSchema = require('./models/orders');
const cartSchema = require('./models/newCart');


// Multer Middleware 
const productImageStore = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, './productImages');
    }, 

    filename: (req, file, callBack) => {
        console.log(file);
        callBack(null, Date.now() + path.extname(file.originalname))
    }
});

const uploadProductImage = multer({storage: productImageStore});

//This is where all PRODUCTS will be managed
router.post('/api/newProduct', uploadProductImage.single('image'), (req, res) =>{
    
    let data = JSON.parse(req.body.information);
    console.log(req.file.filename);

    const newProduct = new productSchema ({
        productName: data.productName,
        productBrand: data.productBrand,
        productDescription: data.productDescription,
        price: data.price,
        storageLocation: data.storageLocation,
        age: data.age,
        flavours: data.flavours,
        sizes: data.sizes,
        stock: data.stock, 
        date: data.date,
        vintage: {
            vintage1: data.vintage.vintage1,
            vintage2: data.vintage.vintage2,
            vintage3: data.vintage.vintage3,
        },
        variations: {
            flavour1: data.variations.flavour1,
            flavour2: data.variations.flavour2,
            flavour3: data.variations.flavour3,
        },
        size: {
            size1: data.size.size1,
            size2: data.size.size2,
            size3: data.size.size3,
        },
        image: req.file.filename
    });

    newProduct.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There was an error ", err: err});
    })
});


router.get('/api/allProducts', async (req, res) => {
    const findProducts = await productSchema.find();
    res.json(findProducts);
})

router.get ('/api/oneProducts/:id', async (req, res) => {
    const findProducts = await productSchema.findById(req.params.id);
    res.json(findProducts);
})

router.patch ('/api/updateProducts/:id', async (req, res) => {
    console.log(req.body);
    let age = +req.body.vintage1 + +req.body.vintage2 + +req.body.vintage3;
    let flavours = +req.body.flavour1 + +req.body.flavour2 + +req.body.flavour3;
    let sizes = +req.body.size1 + +req.body.size2 + +req.body.size3;
    let stock = +age + +flavours + +sizes;
    
    const findProduct = await productSchema.updateOne(
        {_id:req.params.id},
        {$set: {
                
                productName: req.body.productName,
                productBrand: req.body.productBrand,
                productDescription: req.body.productDescription,
                price: req.body.price,
                storageLocation: req.body.storageLocation,
                age: age,
                flavours: flavours,
                sizes: sizes,
                stock: stock,
                image: req.body.image,
                vintage: {
                    vintage1: req.body.vintage1,
                    vintage2: req.body.vintage2,
                    vintage3: req.body.vintage3,
                },
                variations: {
                    flavour1: req.body.flavour1,
                    flavour2: req.body.flavour2,
                    flavour3: req.body.flavour3,
                },
                size: {
                    size1: req.body.size1,
                    size2: req.body.size2,
                    size3: req.body.size3,
                }
            }
        }
    );
    res.json(findProduct);
})

router.delete ('/api/deleteProducts/:id', async (req, res) => {
    const findProduct = await productSchema.remove({_id:req.params.id});
    res.json(findProduct);
})


//This is where all CART items will be managed
router.post('/api/newCart', (req, res) =>{
    console.log(req.body);
    
    // let data = JSON.parse(req.body.information);
    data = req.body

    const newCart = new cartSchema ({
        productName: data.productName,
        productBrand: data.productBrand,
        productDescription: data.productDescription,
        price: data.price,
        image: data.image,
        vintage: data.vintage,
        variations: data. variations,
        size: req.body.size,
        qty: req.body.qty,
    });

    newCart.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There was an error ", err: err});
    })
});


router.patch ('/api/updateCart/:id', async (req, res) => {
    console.log(req.body);
    const findCart = await cartSchema.updateOne(
        {_id:req.params.id},
        {$set: {
                productName: req.body.productName,
                productBrand: req.body.productBrand,
                productDescription: req.body.productDescription,
                price: +req.body.price,
                vintage: req.body.vintage,
                variations: req.body.variations,
                size: req.body.size,
                qty: +req.body.qty,
                image: req.body.image,
            }
        }
    );
    res.json(findCart);
})

router.get('/api/allCart', async (req, res) => {
    const findCart = await cartSchema.find();
    res.json(findCart);
})

router.delete ('/api/deleteCart/:id', async (req, res) => {
    const findCart = await cartSchema.remove({_id:req.params.id});
    res.json(findCart);
})


//This is where all ORDERS will be managed

router.post('/api/addOrder', (req, res) => {
    const newOrder = new orderSchema ({
        productName: req.body.productName,
        userName: req.body.userName,
        address: req.body.address,
        contact: req.body.contact,
        productBrand: req.body.productBrand,
        price: req.body.price,
        vintage: req.body.vintage,
        variations: req.body.variations,
        size: req.body.size,
    });

    newOrder.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There was an error ", err: err});
    })
}); 


router.get('/api/allOrders', async (req, res) => {
    const findOrders = await orderSchema.find();
    res.json(findOrders);
})

router.get ('/api/oneOrder/:id', async (req, res) => {
    const findOrders = await orderSchema.findById(req.params.id);
    res.json(findOrders);
})

router.delete ('/api/deleteOrder/:id', async (req, res) => {
    const delOrders = await orderSchema.remove({_id:req.params.id});
    res.json(delOrders);
})


// Adds users
router.post('/api/adduser', (req, res) =>{

    const newUser = new newUserModel({
        username: req.body.username, 
        password: req.body.password 
    }); 

    newUser.save()
    .then(item => {
        res.json(item)
    })
    .catch(err => {
       res.status(400).json({msg:"There is an error", err}); 
    });
});

router.post('/api/loginuser', async (req, res) => {

    const findUser = await newUserModel.findOne({
        username: req.body.username
    });

    if(findUser){
        if(await bcrypt.compare(req.body.password, findUser.password)){
            const userToken = jwt.sign({
                username: req.body.username
            }, 'dsaweadw45dasdad4') //secret key
            return res.json({status: "ok", user:userToken})
        } else {
            res.json({user: false})
        }
    } else {
        res.json({msg: "User not found"})
    }
});

router.post('api/verifyToken', async(req, res) => {
    const token = req.body.token;
    const decode = jwt.verify(token,'dsaweadw45dasdad4');

    // console.log(decode);
    const findUser = await newUserModel.findOne({
        username: decode.username
    });

    if(findUser){
        res.json({status: "ok", verified: true})
    } else {
        res.json({status: "error", verified: false})
    }
});


module.exports = router;