const mongoose=require ('mongoose')


getAllPlaces=async(req,res)=>{
    const user_id=req.user._id
    const getAlPlaces=await UploadProduct.find({})
    res.status(200).json(getAproducts)
}

module.exports={

}