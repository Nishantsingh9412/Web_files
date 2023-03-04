
// .put(function(req,res){
//   Article.replaceOne(
//     {title:req.body.params},                                    /// FROM URL 
//     {title:req.body.title , content:req.body.content},          /// FROM BODY
//     // {overwrite:true},
//     function(err){
//       if(!err)
//         res.send(" Successfully Updated Articles ");
//       else  
//         res.send(err);
//     }
//   )

// });

// .get(async (req,res) => {
//   try{
//     const art = await  Article.findOne({title:req.params.articleTitle});    // FROM URL (REST%20API)
//                                                                             // %20 for space 
//     console.log(art);
//     res.send(art);   
//   }catch(err){
//     console.log(err);
//   }
// })