const express = require('express');
const productSchema = require('./models/products');
const userSchema = require('./models/users');
const orderSchema = require('./models/orders');

const router = express();

//This is where all PRODUCTS will be managed

router.post('/api/addProduct', (req, res) => {
    const newProduct = new productSchema ({
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        productDescription: req.body.productDescription,
        price: req.body.price,
        vintage: req.body.vintage,
        variations: req.body.variations,
        size: req.body.size,
        inStock: req.body.inStock,
        storageLocation: req.body.storageLocation
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

router.delete ('/api/deleteProducts/:id', async (req, res) => {
    const delProducts = await productSchema.remove({_id:req.params.id});
    res.json(delProducts);
})

router.patch ('/api/updateProducts/:id', async (req, res) => {
    const updProducts = await productSchema.updateOne(
        {_id: req.params.id},
        {
            $set: {productName: req.body.productName, productBrand: req.body.productBrand}
        }
    );
    res.json(updProducts);
})


//This is where all USERS will be managed

router.post('/api/addUser', (req, res) => {
    const newUser = new userSchema ({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        contact: req.body.contact,
    });

    newUser.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json({msg: "There was an error ", err: err});
    })
});


router.get('/api/allUsers', async (req, res) => {
    const findUsers = await userSchema.find();
    res.json(findUsers);
})

router.get ('/api/oneUser/:id', async (req, res) => {
    const findUsers = await userSchema.findById(req.params.id);
    res.json(findUsers);
})

router.delete ('/api/deleteUser/:id', async (req, res) => {
    const delUsers = await userSchema.remove({_id:req.params.id});
    res.json(delUsers);
})

router.patch ('/api/updateUser/:id', async (req, res) => {
    const updUsers = await userSchema.updateOne(
        {_id: req.params.id},
        {
            $set: {name: req.body.name, userName: req.body.userName}
        }
    );
    res.json(updUsers);
})

//This is where all ORDERS will be managed

router.post('/api/addOrder', (req, res) => {
    const newOrder = new orderSchema ({
        name: req.body.name,
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


router.get('/api/allOrder', async (req, res) => {
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

router.patch ('/api/updateOrder/:id', async (req, res) => {
    const updOrders = await orderSchema.updateOne(
        {_id: req.params.id},
        {
            $set: {name: req.body.name, address: req.body.address}
        }
    );
    res.json(updOrders);
})

module.exports = router;