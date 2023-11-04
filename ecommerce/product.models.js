import mongoose from 'mongoose';
const productSchema=new mongoose.Schema(
  {
    productName:{
      type:String,
      required:true
    },
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"category",
      require:true
    },
    productId:{
      type:Number,
      require:true,

    },
    price:{
      type:Number,
      require:true,
    },
    description:{
      type:String,
      require:true,
    }
  }
  ,{tiemstamps:true});

export const product =mongoose.models("product",productSchema);