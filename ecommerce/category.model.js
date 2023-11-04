import mongoose from 'mongoose';
const categorySchema=new mongoose.Schema(
  {
    name:{
      type:String,
      enum:["Grocery","Footwear","Top","WomenWear","Men wear","Kids Wear"]

    }
  },{timestamps:true})

  export const category=mongoose.model("category",categorySchema);