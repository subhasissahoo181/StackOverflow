import mongoose from "mongoose";
// const MONGO_URI =""
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://stackoverflow:stackoverflow@cluster2.6jbiqdv.mongodb.net/', { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    })
    console.log(`Connected to MongoDB successfully`.bgGreen.white)
  } catch (error) {
    console.log(`MongoDB Error: ${error}`.bgRed.white)
  }
}

export default connectDB