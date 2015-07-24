/* ------------------------------------------------------ *\
 [Metodos] Variables
\* ------------------------------------------------------ */

var GLOBALSorter, 
    GLOBALSort, 
    GLOBALLastUrlPro;

/* ------------------------------------------------------ *\
 [Metodos] 'Zone'
 var Method = {
 function_name : function(event) {}
 }
\* ------------------------------------------------------ */

function validateEmail(email) {
    var re = /^(([^<>()[\]\\., ;:\s@\"] + (\.[^<>()[\]\\., ;:\s@\"] + )*)|(\". + \"))@((\[[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\.[0-9] {1, 3}\])|(([a-zA-Z\-0-9] + \.) + [a-zA-Z] {2, }))$/;
    //return re.test(email);
    return true;
}

/* ------------------------------------------------------ *\
    [Metodos] Alert Custom
\* ------------------------------------------------------ */

function resetAlert () {
    alertify.set({
        labels : {
            ok     : "OK",
            cancel : "Cancel"
        },
        delay : 5000,
        buttonReverse : false,
        buttonFocus   : "ok"
    });
}

/* ------------------------------------------------------ *\
 [Methods] New Seminuevos
\* ------------------------------------------------------ */
 
var newSenMethod = {
    addSen: function () {
        var dataNewSen;
        dataNewSen = $(domEl.adm_form_new_sen).serializeFormJSON();
        return CAMAD.postalService(urlsApi.adm_new_sen, dataNewSen);
    },
    fillingControl: function() {
        var validFieldName, dataNewSen, isFull, isNoEmpty;
        validFieldName = ['sen_description', 'sen_agency', 'sen_category', 'sen_brand', 
                          'sen_model', 'sen_year', 'sen_price', 'sen_cylinders', 
                          'sen_transmission', 'sen_color', 'sen_interior'];
        dataNewSen = $(domEl.adm_form_new_sen).serializeFormJSON();
        isFull = CAMAD.validFormFull(dataNewSen, validFieldName);
        $(domEl.adm_btn_new_sen_save).attr('disabled', !isFull);
        isEmpty = CAMAD.validFormEmpty(dataNewSen, validFieldName);
        $(domEl.adm_btn_new_sen_clean).attr('disabled', isEmpty);
    },
    resetSen: function () {
        CAMAD.resetForm(domEl.adm_form_new_sen);
    },
    keyupDescription: function (event) {
        newSenMethod.fillingControl();
    },
    changeSelect: function (event) {
        newSenMethod.fillingControl();
    },
    keyupInput: function (event) {
        newSenMethod.fillingControl();
    },
    clickSave: function (event) {
        resetAlert();
        alertify.set({
            labels: {
                ok: 'Aceptar',
                cancel: 'Cancelar'
            }
        });
        alertify.confirm('¿Seguro que desea guardar?', function (e) {
            if (e) {
                var senPromise;
                senPromise = newSenMethod.addSen();
                senPromise.success( function (data) {
                    newSenMethod.resetSen();
                    newSenMethod.fillingControl();
                    alertify.success('Seminuevo agregado.');
                });
                senPromise.error( function (data) {
                    alertify.error('No se ha podido agregar el seminuevo <br /> Inténtelo más tarde.');
                });
            }
        });
    },
    clickClean: function (event) {
        newSenMethod.resetSen();
        newSenMethod.fillingControl();
    },
    clickSeminuevosList: function (event) {
        Finch.navigate('/seminuevos');
    }
}

/* ------------------------------------------------------ *\
 [Methods] set Seminuevos
\* ------------------------------------------------------ */

var setSenMethod = {
    updateSen: function (senId) {
        var dataSetSen;
        dataSetSen = $(domEl.adm_form_set_sen).serializeFormJSON();
        return CAMAD.postalService(urlsApi.adm_set_sen + senId, dataSetSen);
    },
    fillingControl: function() {
        var validFieldName, dataSetSen, isFull, isNoEmpty;
        validFieldName = ['sen_description', 'sen_agency', 'sen_category', 'sen_brand', 
                          'sen_model', 'sen_year', 'sen_price', 'sen_cylinders', 
                          'sen_transmission', 'sen_color', 'sen_interior'];

        dataSetSen = $(domEl.adm_form_set_sen).serializeFormJSON();

        isFull = CAMAD.validFormFull(dataSetSen, validFieldName);
        $(domEl.adm_btn_set_sen_save).attr('disabled', !isFull);
        isEmpty = CAMAD.validFormEmpty(dataSetSen, validFieldName);
        $(domEl.adm_btn_set_sen_clean).attr('disabled', isEmpty);
    },
    resetSen: function () {
        CAMAD.resetForm(domEl.adm_form_set_sen);
    },
    cleanSen: function () {
        CAMAD.setValue(domEl.adm__set_sen_element, '');
    },
    keyupDescription: function (event) {
        setSenMethod.fillingControl();
    },
    refreshSen: function(senId) {
        var senData, agnData, catData, marData, mdoData;

        senData = CAMAD.getInternalJSON(urlsApi.adm_get_sen_id + senId);

        if(senData.camadpa.length) {
            CAMAD.loadTemplate(tempsNames.adm_set_sen_form, domEl.adm_div_recurrent, senData);
            
            //Load transmission
            CAMAD.setValue(domEl.adm_select_set_sen_transmission, senData.camadpa[0].transmision);

            //Load color
            CAMAD.setValue(domEl.adm_select_set_sen_color, senData.camadpa[0].color);

            //Load interior
            CAMAD.setValue(domEl.adm_select_set_sen_interior, senData.camadpa[0].interior);

            //Load agencies
            agnData = CAMAD.getInternalJSON(urlsApi.adm_get_agn);
            CAMAD.loadTemplate(tempsNames.adm_set_sen_form_select_agency, domEl.adm_div_select_set_sen_agency, agnData);
            //Select agency
            CAMAD.setValue(domEl.adm_select_set_sen_agency, senData.camadpa[0].agencia.id);

            //Load categories
            catData = CAMAD.getInternalJSON(urlsApi.adm_get_cat);
            CAMAD.loadTemplate(tempsNames.adm_set_sen_form_select_category, domEl.adm_div_select_set_sen_category, catData);
            //Select category
            CAMAD.setValue(domEl.adm_select_set_sen_category, senData.camadpa[0].categoria.id);

            //Load brands
            marData = CAMAD.getInternalJSON(urlsApi.adm_get_mar);
            CAMAD.loadTemplate(tempsNames.adm_set_sen_form_select_brand, domEl.adm_div_select_set_sen_brand, marData);
            //Select brand
            CAMAD.setValue(domEl.adm_select_set_sen_brand, senData.camadpa[0].marca.id);

            //Load models
            mdoData = CAMAD.getInternalJSON(urlsApi.adm_get_mdo);
            CAMAD.loadTemplate(tempsNames.adm_set_sen_form_select_model, domEl.adm_div_select_set_sen_model, mdoData);
            //Select model
            CAMAD.setValue(domEl.adm_select_set_sen_model, senData.camadpa[0].modelo.id);
            
        } else {
            Finch.navigate('/seminuevos');
        }   
    },
    changeSelect: function (event) {
        setSenMethod.fillingControl();
    },
    keyupInput: function (event) {
        setSenMethod.fillingControl();
    },
    clickSave: function (event) {
        var senId;
        senId = +$(this).data('sen-id');
        resetAlert();
        alertify.set({
            labels: {
                ok: 'Aceptar',
                cancel: 'Cancelar'
            }
        });
        alertify.confirm('¿Seguro que desea modificar?', function (e) {
        if (e) {
            console.log(senId);
            var senPromise;
                senPromise = setSenMethod.updateSen(senId);
                senPromise.success( function (data) {
                    setSenMethod.refreshSen(senId);
                    setSenMethod.fillingControl();
                    alertify.success('Seminuevo modificado.');
                });
                senPromise.error( function (data) {
                    alertify.error('No se ha podido modificar el seminuevo <br /> Inténtelo más tarde.');
                });
            }
        });  
    },
    clickClean: function (event) {
        var senId;
        senId = +$(this).data('sen-id');
        setSenMethod.cleanSen();
        setSenMethod.fillingControl();
    },
    clickRestore: function (event) {
        var senId;
        senId = +$(this).data('sen-id');
        setSenMethod.refreshSen(senId);
        setSenMethod.fillingControl();
    },
    clickSeminuevosList: function (event) {
        Finch.navigate('/seminuevos');
    }
}

/* ------------------------------------------------------ *\
 [Methods] Get Seminuevos
\* ------------------------------------------------------ */

getSenMethod = {
    refreshFilters: function() {
        var agnData, catData, marData, mdoData;
        CAMAD.loadTemplate(tempsNames.adm_get_sen_filters, domEl.adm_div_get_sen_filters);
        
        //Load Agencies
        agnData = CAMAD.getInternalJSON(urlsApi.adm_get_agn);
        CAMAD.loadTemplate(tempsNames.adm_get_sen_filters_select_agency, domEl.adm_div_select_sen_filter_agency, agnData);

        //Load Categories
        catData = CAMAD.getInternalJSON(urlsApi.adm_get_cat);
        CAMAD.loadTemplate(tempsNames.adm_get_sen_filters_select_category, domEl.adm_div_select_sen_filter_category, catData);

        //Load Brands
        marData = CAMAD.getInternalJSON(urlsApi.adm_get_mar);
        CAMAD.loadTemplate(tempsNames.adm_get_sen_filters_select_brand, domEl.adm_div_select_sen_filter_brand, marData);

        //Load Models
        mdoData = CAMAD.getInternalJSON(urlsApi.adm_get_mdo);
        CAMAD.loadTemplate(tempsNames.adm_get_sen_filters_select_model, domEl.adm_div_select_sen_filter_model, mdoData);

        $(domEl.adm_btn_sen_filters_clean).attr('disabled', true);
    },
    sortingFilters: function() {
        var senData, filtersData, url,
            sorter, sort, agnId, catId, marId, mdoId, mystery, mysteryElements, senLength;

        sorter = GLOBALSorter;
        sort = GLOBALSort;

        mystery = CAMAD.getValue(domEl.adm_input_sen_filter_search);
        mystery = $.trim(mystery);

        mysteryElements = mystery.split(' ');
        mysteryElements = _.without(mysteryElements, '')

        mystery = '';

        for(var idx = 0; idx < mysteryElements.length; idx++) {
            mystery += (idx) ? ' ' + mysteryElements[idx] : mysteryElements[idx];
        }
        
        mystery = CAMAD.replaceAll(mystery, '/', '**47**');

        agnId = CAMAD.getValue(domEl.adm_select_sen_filter_agency);
        agnId = (agnId !== '') ? +agnId : 0;

        catId = CAMAD.getValue(domEl.adm_select_sen_filter_category);
        catId = (catId !== '') ? +catId : 0;

        marId = CAMAD.getValue(domEl.adm_select_sen_filter_brand);
        marId = (marId !== '') ? +marId : 0;

        mdoId = CAMAD.getValue(domEl.adm_select_sen_filter_model);
        mdoId = (mdoId !== '') ? +mdoId : 0;

        
        url = urlsApi.adm_get_sen_filters + sorter + '/' + sort + '/' + agnId + '/' + catId + '/' + marId + '/' + mdoId;
        url += (mystery !== '') ? '/' + mystery : '';
    
        if(url !== GLOBALLastUrlPro) {

            senData = CAMAD.getInternalJSON(url);
            CAMAD.loadTemplate(tempsNames.adm_get_sen_list, domEl.adm__get_sen_list, senData);

            senLength = senData.camadpa.length;

            CAMAD.setHTML(domEl.adm__sen_results, senLength + ' Seminuevos');

            domElementsFormatMethods.htmlCurrency(domEl.adm__currency_h);
            domElementsFormatMethods.htmlPercentageDecimal(domEl.adm__percentage_d);

            GLOBALLastUrlSen = url;
        }
        
    },
    deleteSen: function(senId) {
        return CAMAD.postalService(urlsApi.adm_del_sen + senId, {});
    },
    fillingControl: function() {
        var validFieldName, dataGetSenFilters, isFull, isNoEmpty;
        validFieldName = ['sen_search', 'sen_agency', 'sen_category', 'sen_brand', 'sen_model'];
        dataGetSenFilters = $(domEl.adm_form_get_sen_filters).serializeFormJSON();
        isEmpty = CAMAD.validFormEmpty(dataGetSenFilters, validFieldName);
        $(domEl.adm_btn_sen_filters_clean).attr('disabled', isEmpty);
    },
    changeAgency: function(event) {
        getSenMethod.fillingControl();
        getSenMethod.sortingFilters();
    },
    changeCategory: function(event) {
        getSenMethod.fillingControl();
        getSenMethod.sortingFilters();
    },
    changeBrand: function(event) {
        getSenMethod.fillingControl();
        getSenMethod.sortingFilters();
    },
    changeModel: function(event) {
        getSenMethod.fillingControl();
        getSenMethod.sortingFilters();
    },
    keyupSearch: function(event) {
        getSenMethod.fillingControl();
        getSenMethod.sortingFilters();
    },
    blurSearch: function(event) {
        var mystery, mysteryElements
        mystery = CAMAD.getValue($(this));
        mystery = $.trim(mystery);

        mysteryElements = mystery.split(' ');
        mysteryElements = _.without(mysteryElements, '')

        mystery = '';

        for(var idx = 0; idx < mysteryElements.length; idx ++) {
            mystery += (idx) ? ' ' + mysteryElements[idx] : mysteryElements[idx];
        }

        CAMAD.setValue($(this), mystery);
    },
    clickSenSorter: function (event) {
        var sorter, sort, element, ordData, newSort;
        element = $(this);
        sorter = element.data('sen-sorter');
        sort = element.data('sen-sort');

        $(domEl.adm__sen_sorter).data('sen-sort', 'ASC');
        newSort = (sort.toUpperCase() === 'ASC') ? 'DESC' : 'ASC';
        element.data('sen-sort', newSort);
        
        GLOBALSorter = sorter;
        GLOBALSort = sort;

        getSenMethod.sortingFilters();
    },
    clickSenActionSet: function (event) {
        var senId;
        senId = $(this).data('sen-id');
        Finch.navigate('/set/seminuevos/' + senId);
    },
    clickSenActionPicture: function (event) {
        var senId;
        senId = $(this).data('sen-id');
        Finch.navigate('/picture/seminuevos/' + senId);
    },
    clickSenActionDelete: function (event) {
        var senId;
        senId = $(this).data('sen-id');
        resetAlert();
        alertify.set({
            labels: {
                ok: 'Aceptar',
                cancel: 'Cancelar'
            }
        });
        alertify.confirm('¿Seguro que desea eliminar este seminuevo?', function (e) {
            if (e) {
                var senPromise;
                senPromise = getSenMethod.deleteSen(senId);
                senPromise.success( function (data) {
                    GLOBALLastUrlSen = '';
                    getSenMethod.sortingFilters();
                    alertify.success('Se ha eliminado este seminuevo');
                });
                senPromise.error( function (data) {
                    alertify.error('No se ha podido eliminar el seminuevo <br /> Inténtelo más tarde.');
                });
            }
        });
    },
    clickCleanFilters: function (event) {
        //Refresh filters
        getSenMethod.refreshFilters();
        //Filling control
        getSenMethod.fillingControl();
        //Reset sorters
        //$(domEl.adm__sen_sorter).data('sen-sort', 'ASC');
        //Reset global sorter and sort
        GLOBALSorter = 'des';
        GLOBALSort = 'ASC';
        //Refres global url Seminuevos
        GLOBALLastUrlSen = '';
        //Regenerate table
        getSenMethod.sortingFilters();
    }
}

/* ------------------------------------------------------ *\
 [Methods] Get Seminuevos
\* ------------------------------------------------------ */

pictureSenMethod = {
    pictureLoader: function () {
        CAMAD.loadTemplate(tempsNames.adm_picture_sen_loader, domEl.div_picture_sen_loader);
        CAMAD.picturesLoader(
            domEl.input_picture_sen_uploader, 
            '#progress .bar',
            'cdn/'
        );
    }
}

/* ------------------------------------------------------ *\
 [Methods] DOM Elements Format
\* ------------------------------------------------------ */

var domElementsFormatMethods = {
    valueNumberReal: function(element) {
        $(element).each( function(idx) {
            var currency, elements;
            currency = +CAMAD.getValue($(this));
            currency = currency.toFixed(2);
            elements = currency.split('.');
            (elements.length === 1) ? elements[1] = '00' : elements = elements;
            currency = elements.join('.');
            currency = +currency;
            currency = currency.toFixed(2);
            CAMAD.setValue($(this), currency);
        });
    },
    htmlCurrency: function(element) {
        $(element).each( function(idx) {
            var currency;
            currency = CAMAD.getHTML($(this));
            currency = CAMAD.currencyFormat(currency);
            CAMAD.setHTML($(this), currency);
        });
    },
    htmlPercentageDecimal: function(element) {
        $(element).each( function(idx) {
            var percentage;
            percentage = +CAMAD.getHTML($(this));
            percentage *= 100;
            percentage = percentage.toFixed(2);
            percentage += '%';
            CAMAD.setHTML($(this), percentage);
        });
    }
}

/* ------------------------------------------------------ *\
 [Methods] inputVal
\* ------------------------------------------------------ */

var inputValMetdods = {
    isIntegerKP: function (event) {
        return /\d/.test(String.fromCharCode(event.keyCode));
    },
    //http://www.lawebdelprogramador.com/foros/JavaScript/1074741-introducir_solo_numero_dos_decimales.html
    isDecimalKP : function(event) {
        var key, value;
        value = $(this).val();
        key = event.keyCode ? event.keyCode : event.which;
        
        // backspace
        if (key == 8) {
            return true;
        }
        // 0-9
        if (key > 47 && key < 58) {
            if (value == "") {
                return true;
            }
            regexp = /.[0-9]{2}$/;
            return !(regexp.test(value));
        }
        // .
        if (key == 46) {
            if (value == "") {
                return false;
            }
            regexp = /^[0-9]+$/;
            return regexp.test(value);
        }
        // other key
        return false;
    },
}
