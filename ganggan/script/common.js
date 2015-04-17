	var openCommon = function(index){
        api.execScript({
            name: 'root',
            script: 'changeIndex(' + index + ')'
        });
    }