import Joi from "joi";

const courseSchema = Joi.object({
    name: Joi.string().min(10).max(20).required(),
    description: Joi.string().min(20).max(256).required(),
    price: Joi.string().required()
})

function validate(schema){
    return (req,res,next)=>{
        const result = schema.validate(req.body);
        if(result.error){
            res.json(result.error)
        }else{
            next();
        }
    }
}


// console.log(courseSchema.validate({name:"Roland Sankara", description: "hguygrjhvijbsvjbfivjbfvkjfbvkjfbvfjvbfvkdfjvbfkjv", price:"USD 100"}))

export {
    validate,
    courseSchema
};