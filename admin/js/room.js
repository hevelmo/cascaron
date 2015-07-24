/* ----------------------------------- *\
 [Route] The Highway
\* ----------------------------------- */

Finch.route('/', {
    setup: function(bindings) {
    },
    load: function(bindings) {
    },
    unload: function(bindings) {
        //Always clean the editable divs used, before lave the current route
        CAMAD.setHTML(domEl.adm_div_recurrent, '');
    }
});

Finch.route('/seminuevos', {
    setup: function(bindings) {
        GLOBALSorter = 'des';
        GLOBALSort = 'ASC';
        GLOBALLastUrlPro = '';
    },
    load: function(bindings) {
        var senData;
        //senData = CAMAD.getInternalJSON(urlsApi.adm_get_sen);
        //console.log(senData);

        //Load principal Template
        CAMAD.loadTemplate(tempsNames.adm_get_sen, domEl.adm_div_recurrent);
        getSenMethod.refreshFilters();
        CAMAD.loadTemplate(tempsNames.adm_get_sen_table, domEl.adm_div_get_sen_table);
        getSenMethod.sortingFilters();
    },
    unload: function(bindings) {
        //Always clean the editable divs used, before lave the current route
        CAMAD.setHTML(domEl.adm_div_recurrent, '');

        //Clean global variables
        globalSorter = '';
        globalSort = '';
        GLOBALLastUrlPro = '';
    }
});

Finch.route('/seminuevos/:senId', {
    setup: function(bindings) {
    },
    load: function(bindings) {
        var senData;
        //senData = CAMAD.getInternalJSON(urlsApi.adm_get_sen);
        //console.log(senData);
    },
    unload: function(bindings) {
        //Always clean the editable divs used, before lave the current route
        CAMAD.setHTML(domEl.adm_div_recurrent, '');
    }
});

Finch.route('/set/seminuevos/:senId', {
    setup: function(bindings) {
    },
    load: function(bindings) {
        setSenMethod.refreshSen(bindings.senId);
    },
    unload: function(bindings) {
        //Always clean the editable divs used, before lave the current route
        CAMAD.setHTML(domEl.adm_div_recurrent, '');
    }
});

Finch.route('/picture/seminuevos/:senId', {
    setup: function(bindings) {
    },
    load: function(bindings) {
        CAMAD.loadTemplate(tempsNames.adm_picture_sen, domEl.adm_div_recurrent);
        
        pictureSenMethod.pictureLoader();
       
        CAMAD.loadTemplate(tempsNames.adm_picture_sen_pictures, domEl.div_picture_sen_pictures);
    },
    unload: function(bindings) {
        //Always clean the editable divs used, before lave the current route
        CAMAD.setHTML(domEl.adm_div_recurrent, '');
    }
});

Finch.route('/new/seminuevos', {
    setup: function(bindings) {
    },
    load: function(bindings) {
        var agnData, catData, marData, mdoData;
        CAMAD.loadTemplate(tempsNames.adm_new_sen_form, domEl.adm_div_recurrent);
        //Load agencies
        agnData = CAMAD.getInternalJSON(urlsApi.adm_get_agn);
        CAMAD.loadTemplate(tempsNames.adm_new_sen_form_select_agency, domEl.adm_div_select_new_sen_agency, agnData);
        //Load categories
        catData = CAMAD.getInternalJSON(urlsApi.adm_get_cat);
        CAMAD.loadTemplate(tempsNames.adm_new_sen_form_select_category, domEl.adm_div_select_new_sen_category, catData);
        //Load brands
        marData = CAMAD.getInternalJSON(urlsApi.adm_get_mar);
        CAMAD.loadTemplate(tempsNames.adm_new_sen_form_select_brand, domEl.adm_div_select_new_sen_brand, marData);
        //Load models
        mdoData = CAMAD.getInternalJSON(urlsApi.adm_get_mdo);
        CAMAD.loadTemplate(tempsNames.adm_new_sen_form_select_model, domEl.adm_div_select_new_sen_model, mdoData);
        //Disable buttons
        $(domEl.adm_btn_new_sen_save).attr('disabled', true);
        $(domEl.adm_btn_new_sen_clean).attr('disabled', true);
    },
    unload: function(bindings) {
        //Always clean the editable divs used, before lave the current route
        CAMAD.setHTML(domEl.adm_div_recurrent, '');
    }
});

Finch.listen();