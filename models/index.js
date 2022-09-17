// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
/* The Source_Model.belongsTo(Target_Model) association means that a One-To-One relationship exists
 between Source_Model (Product) and Target_Model (Category),
 with the foreign key being defined in the Source_Model (Product). */
Product.belongsTo(Category, {
    foreignKey: 'product.id',
});

// Categories have many Products
/* The Source_Model.hasMany(Target_Model) association means that a One-To-Many relationship exists
 between Source_Model (Category) and Target_Model (Product),
 with the foreign key being defined in the Target_Model (Product). */
Category.hasMany(Product, {
    foreignKey: 'category.id',
});
// Products belongToMany Tags (through ProductTag)
/* The Source_Model.belongsToMany(Target_Model, { through: 'C (Junction_Model)' }) association means that a Many-To-Many relationship exists between Source_Model and Target_Model, using table C as junction table, which will have the foreign keys (Source_Model_Id and Target_Model_Id, for example). Sequelize will automatically create this model C (unless it already exists) and define the appropriate foreign keys on it. */
Product.belongsToMany(Tag, {
        through: 'product_tag',
    })
    // Tags belongToMany Products (through ProductTag)
    /* The Source_Model.belongsToMany(Target_Model, { through: 'C (Junction_Model)' }) association means that a Many-To-Many relationship exists between Source_Model and Target_Model, using table C as junction table, which will have the foreign keys (Source_Model_Id and Target_Model_Id, for example). Sequelize will automatically create this model C (unless it already exists) and define the appropriate foreign keys on it. */
Tag.belongsToMany(Product, {})
module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
};