const Product = require('../models/product')


const getAllProductsStatic = async (req, res) => {
    // const products = await Product.find({}).sort('name')
    const products = await Product.find({price:{$gt:30}}).sort('price').select('name price')
    // const products = await Product.find({}).sort('name').select('name price').limit(4).skip(5)

    // const search = 'ab'
    // const products = await Product.find({
    //     name : {$regex:search, $options:'i'}
    // })
    // const products = await Product.find({})
    // const products = await Product.find({name:'vase table'})
    res.status(200).json({ products, nbHits: products.length })
}

const getAllProducts = async (req, res) => {
    // console.log(req.query);
    // const products = await Product.find(req.query)
    const { featured, company, name, sort, fields, numericFilters } = req.query
    const queryObject = {}


    if (featured) {
        queryObject.featured = featured === 'true' ? true : false
    }
    if (company) {
        queryObject.company = company
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i' }
    }
    if(numericFilters){
        const operatorMap = {
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte'
        }
        const regEx = /\b(>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(regEx,(match) => `-${operatorMap[match]}-`)
        console.log(filters);
        const options = ['price','rating']
        filters = filters.split(',').forEach((item) => {
            const [field,operator,value] = item.split('-')
            if(options.includes(field)){
                queryObject[field] = {[operator]:Number(value)}
            }
        });

    }


    console.log(queryObject);
    // const products = await Product.find(queryObject)
    let result = Product.find(queryObject)
    if (sort) {
        // console.log(sort);
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
    else {
        result = result.sort('createdAt')
    }

    if (fields) {
        // console.log(fields)
        const fieldsList = fields.split(',').join(' ')
        result = result.select(fieldsList)
    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page-1)*limit

    result = result.skip(skip).limit(limit)
    // total - 23

    const products = await result
    res.status(200).json({ products, nbHits: products.length })
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}