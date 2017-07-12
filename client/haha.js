Template.haha.events({
    'click [name= submit]': function(e,tmpl){
        var title =$('[name=title]').val();

        var num =$('[name=num]').val();
        var count =$('[name=count]').val();
        var context =$('[name=context]').val();


        var obj = {
            '제목':title,
            '글번호':num,
            '조회수':count,
            '내용':context
        }

        //  1. 입력이라면
        if ($('[name=hidden_id]').val().length <=0) {
            console.log(obj);
            CollectionBoard.insert(obj);
            $('[name=num]').val('');
            $('[name=title]').val('');
            $('[name=count]').val('');
            $('[name=context]').val('');
            $('[name=hidden_id]').val('');


        }

        else {

            //2. 수정이라면
            CollectionBoard.update($('[name=hidden_id]'). val(),
                                {$set: obj});
            $('[name=num]').val('');
            $('[name=title]').val('');
            $('[name=count]').val('');
            $('[name=context]').val('');
            $('[name=hidden_id]').val('');


        }

    }, 

    'click [name=deleteBoard]':function(element,tmpl){
        //지우는 뭔가를 여기에
        //console.log(this._id);
        var id=this._id;
        //var id = $(element.target).attr('id');
        CollectionBoard.remove({_id:this_id})
        console.log(this._id);
        console.log('삭제버튼이 눌렸습니다.');
    },

    'click [name=updateBoard]':function(element,tmpl) {
        console.log('수정버튼이 눌렸습니다.');
        //1. 입력모달을 띄운다.
        $('#modal-div').modal('show');
        //2. 모달의 인풋창에 기준 데이터를 채워넣는다.
        // console.log(thos._id);
        //console.log(thos.글번호);
        //console.log(thos.조회수);
        //console.log(thos.제목);
        //console.log(thos.내용);
        $('[name=hidden_id]').val(this._id);
        $('[name=title]').val(this.제목);
        $('[name=num]').val(this.글번호);
        $('[name=count]').val(this.조회수);
        $('[name=context]').val(this.내용);


    }
});




Template.haha.helpers({
    list: function () {

        var result=CollectionBoard.find().fetch()
        console.log(result)
        /*var result = [

            {
                '글번호': 1,
                '제목': "서울여대 그룹 2 강의 개강확장",
                '조회수': 15

            },


            {
                '글번호': 2,
                '제목': "서울여대 그룹 2 강의 개강확장",
                '조회수': 15

            },



            {
                '글번호': 3,
                '제목': "서울여대 그룹 2 강의 개강확장",
                '조회수': 15

            },


            {
                '글번호': 4,
                '제목': "서울여대 그룹 2 강의 개강확장",
                '조회수': 15

            }






        ]
*/

        return result;
    }

});



