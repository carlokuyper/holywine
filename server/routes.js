const express = require('express');
const router = express();
const multer = require('multer');
const path = require('path');
const productSchema = require('./models/newProduct');
const userSchema = require('./models/users');
const orderSchema = require('./models/orders');


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


// //This is where all USERS will be managed

// router.post('/api/addUser', (req, res) => {
//     const newUser = new userSchema ({
//         name: req.body.name,
//         userName: req.body.userName,
//         email: req.body.email,
//         password: req.body.password,
//         address: req.body.address,
//         contact: req.body.contact,
//     });

//     newUser.save()
//     .then(item => {
//         res.json(item);
//     })
//     .catch(err => {
//         res.status(400).json({msg: "There was an error ", err: err});
//     })
// });


// router.get('/api/allUsers', async (req, res) => {
//     const findUsers = await userSchema.find();
//     res.json(findUsers);
// })

// router.get ('/api/oneUser/:id', async (req, res) => {
//     const findUsers = await userSchema.findById(req.params.id);
//     res.json(findUsers);
// })

// router.delete ('/api/deleteUser/:id', async (req, res) => {
//     const delUsers = await userSchema.remove({_id:req.params.id});
//     res.json(delUsers);
// })

// router.patch ('/api/updateUser/:id', async (req, res) => {
//     const updUsers = await userSchema.updateOne(
//         {_id: req.params.id},
//         {
//             $set: {name: req.body.name, userName: req.body.userName}
//         }
//     );
//     res.json(updUsers);
// })

// //This is where all ORDERS will be managed

// router.post('/api/addOrder', (req, res) => {
//     const newOrder = new orderSchema ({
//         name: req.body.name,
//         userName: req.body.userName,
//         address: req.body.address,
//         contact: req.body.contact,
//         productBrand: req.body.productBrand,
//         price: req.body.price,
//         vintage: req.body.vintage,
//         variations: req.body.variations,
//         size: req.body.size,
//     });

//     newOrder.save()
//     .then(item => {
//         res.json(item);
//     })
//     .catch(err => {
//         res.status(400).json({msg: "There was an error ", err: err});
//     })
// }); 


// router.get('/api/allOrder', async (req, res) => {
//     const findOrders = await orderSchema.find();
//     res.json(findOrders);
// })

// router.get ('/api/oneOrder/:id', async (req, res) => {
//     const findOrders = await orderSchema.findById(req.params.id);
//     res.json(findOrders);
// })

// router.delete ('/api/deleteOrder/:id', async (req, res) => {
//     const delOrders = await orderSchema.remove({_id:req.params.id});
//     res.json(delOrders);
// })

// router.patch ('/api/updateOrder/:id', async (req, res) => {
//     const updOrders = await orderSchema.updateOne(
//         {_id: req.params.id},
//         {
//             $set: {name: req.body.name, address: req.body.address}
//         }
//     );
//     res.json(updOrders);
// })

module.exports = router;