import mongoose from 'mongoose'
const orderDetailsSchema=new mongoose.Schema({
  productId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"product",
  },
  quantity:{
    type:Number,
    require:true,
  }
})
const orderSchema =new mongoose.Schema({
user:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"user",
  require:true
},
orderPrice:{
 type:Number,
 require:true
},
orderItems:[orderDetailsSchema],
status:{
  type:String,
  enum:["Pending","Delivered","cancelled"],
  default:"Pending"
}

},{timestamps:true})

export const order=mongoose.model("order",orderSchema);