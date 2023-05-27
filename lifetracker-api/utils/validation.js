const { UnprocessableEntityError } = require("./errors")

const isEmpty = (value) => value === null || typeof value === "undefined"

const validationFields = ({required, obj, location})=>{
    if(!obj) throw new UnprocessableEntityError('Missing object for vlaidation')
    required.forEach((item)=>{
        if(isEmpty(obj[item])){
            throw new  UnprocessableEntityError(`Required field - ${item} missing${location ? ` at ${location}` : ""}`)
        }
    })
}

module.exports = {validationFields, isEmpty}