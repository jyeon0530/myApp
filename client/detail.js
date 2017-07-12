Template.detail.helpers({
    
    data:function(){
   //     console.log(Router.current().params._id);
    var board = CollectionBoard.findOne({_id:Router.current().params._id});
    
  console.log(board);
        return board
    }
                        
                        
                        });
