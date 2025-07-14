const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  cart: {
    products: [
      {
        id: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: 'Products'
        },
        quantity: Number
      }
    ]
  }
});

// Pre-save hook to hash password if modified
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const hashed = await bcrypt.hash(this.password, 12);
    this.password = hashed;
    next();
  } catch (err) {
    next(err);
  }
});

// Add to cart method
userSchema.method('addToCart', function (productId) {
  let cartProducts = this.cart.products;
  let indx = cartProducts.findIndex(p => p.id.toString() === productId.toString());

  if (indx === -1) {
    cartProducts.unshift({ id: productId, quantity: 1 });
  } else {
    cartProducts[indx].quantity += 1;
  }

  return this.save();
});

module.exports = mongoose.model('User', userSchema);
