export const sample=(req,res,next)=>{
console.log("I am middleware named Smaple");
console.log(req.url);
console.log(req.method);
next();
};





