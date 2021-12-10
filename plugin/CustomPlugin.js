class CustomPlugin{
//  constructor(){
//      console.log('-------plugin--------')
//  }
 apply(compiler){
     compiler.hooks.done.tap('CustomPlugin',()=>{
         console.log('---finish---')
     })
 }
}

module.exports = CustomPlugin