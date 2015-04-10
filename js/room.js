/* ----------------------------------- *\
 [Route] The Highway
\* ----------------------------------- */

Finch.route('/', {
    setup: function(bindings) {
    },
    load: function(bindings) {
        //This code will be not used it's only example, remove it later
        var data, post;
        data = PRO.getInternalJSON(urlsApi.get_test);
        post = PRO.postalService(urlsApi.post_test);
        post.success(function(data){
            console.log(data);
        });
        post.error(function(data){
            alert("suerte para la proxima, sigue participando...")
        });
        PRO.loadTemplate(tempsNames.tmp_demo, domEl.div_recurrent, data)
    },
    unload: function(bindings) {
    	//It's always necessary, when an url is left, to clean the html content
    	//of the recurrent div, where all the templates are inserted
    	PRO.setHTML(domEl.div_recurren, '');
    }
});


Finch.listen();
