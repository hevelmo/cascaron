$(document).ready(function() {

    /* ------------------------------------------------------ *\
     [Funciones Control] Serialize Form
    \* ------------------------------------------------------ */

    $.fn.serializeFormJSON = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    /* ------------------------------------------------------ *\
     [Funciones Control] Currency Format
    \* ------------------------------------------------------ */

    Number.prototype.format = function(n, x) {
        var re = '(\\d)(?=(\\d{' + (x || 3) + '}) + ' + (n > 0 ? '\\.' : '$') + ')';
        return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$1,');
    };

    /* ------------------------------------------------------ *\
     [Funciones Control] Hidding and Showing divs
    \* ------------------------------------------------------ */

    $(domEl.adm_div_recurrent).on('click', '.panel .tools .fa', function () {
        var delay, element;
        delay = 100;
        element = $(this).parents(".panel").children(".panel-body");
        if ($(this).hasClass("fa-chevron-down")) {
            $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            element.slideUp(delay);
        } else {
            $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            element.slideDown(delay); 
        }
    });

    /* ------------------------------------------------------ *\
     [Methods] 'Get Seminuevos'
    \* ------------------------------------------------------ */

    $(domEl.adm_div_recurrent).on('change', domEl.adm_select_sen_filter_agency, getSenMethod.changeAgency);
    $(domEl.adm_div_recurrent).on('change', domEl.adm_select_sen_filter_category, getSenMethod.changeCategory);
    $(domEl.adm_div_recurrent).on('change', domEl.adm_select_sen_filter_brand, getSenMethod.changeBrand);
    $(domEl.adm_div_recurrent).on('change', domEl.adm_select_sen_filter_model, getSenMethod.changeModel);
    $(domEl.adm_div_recurrent).on('keyup', domEl.adm_input_sen_filter_search, getSenMethod.keyupSearch);
    $(domEl.adm_div_recurrent).on('blur', domEl.adm_input_sen_filter_search, getSenMethod.blurSearch);
    $(domEl.adm_div_recurrent).on('click', domEl.adm_btn_sen_filters_clean, getSenMethod.clickCleanFilters);
    $(domEl.adm_div_recurrent).on('click', domEl.adm__sen_sorter, getSenMethod.clickSenSorter);
    $(domEl.adm_div_recurrent).on('click', domEl.adm__sen_action_delete, getSenMethod.clickSenActionDelete);
    $(domEl.adm_div_recurrent).on('click', domEl.adm__sen_action_set, getSenMethod.clickSenActionSet);
    $(domEl.adm_div_recurrent).on('click', domEl.adm__sen_action_picture, getSenMethod.clickSenActionPicture);
    
    /* ------------------------------------------------------ *\
     [Methods] 'New Seminuevos'
    \* ------------------------------------------------------ */
    
    $(domEl.adm_div_recurrent).on('keypress', domEl.adm_input_new_sen_year, inputValMetdods.isIntegerKP);
    $(domEl.adm_div_recurrent).on('keypress', domEl.adm_input_new_sen_cylinders, inputValMetdods.isIntegerKP);
    $(domEl.adm_div_recurrent).on('keypress', domEl.adm_input_new_sen_price, inputValMetdods.isDecimalKP);
    
    $(domEl.adm_div_recurrent).on('change', domEl.adm_select_new_sen_select, newSenMethod.changeSelect);
    $(domEl.adm_div_recurrent).on('keyup', domEl.adm_input_new_sen_input, newSenMethod.keyupInput);
    $(domEl.adm_div_recurrent).on('keyup', domEl.adm_txta_new_sen_description, newSenMethod.keyupDescription);
    $(domEl.adm_div_recurrent).on('click', domEl.adm_btn_new_sen_clean, newSenMethod.clickClean);
    $(domEl.adm_div_recurrent).on('click', domEl.adm_btn_new_sen_save, newSenMethod.clickSave);
    $(domEl.adm_div_recurrent).on('click', domEl.adm_btn_new_sen_seminuevos_list, newSenMethod.clickSeminuevosList); 

    /* ------------------------------------------------------ *\
     [Methods] 'Set Seminuevos'
    \* ------------------------------------------------------ */

    $(domEl.adm_div_recurrent).on('keypress', domEl.adm_input_set_sen_year, inputValMetdods.isIntegerKP);
    $(domEl.adm_div_recurrent).on('keypress', domEl.adm_input_set_sen_cylinders, inputValMetdods.isIntegerKP);
    $(domEl.adm_div_recurrent).on('keypress', domEl.adm_input_set_sen_price, inputValMetdods.isDecimalKP);
    
    $(domEl.adm_div_recurrent).on('change', domEl.adm_select_set_sen_select, setSenMethod.changeSelect);
    $(domEl.adm_div_recurrent).on('keyup', domEl.adm_input_set_sen_input, setSenMethod.keyupInput);
    $(domEl.adm_div_recurrent).on('keyup', domEl.adm_txta_set_sen_description, setSenMethod.keyupDescription);
    $(domEl.adm_div_recurrent).on('click', domEl.adm_btn_set_sen_clean, setSenMethod.clickClean);
    $(domEl.adm_div_recurrent).on('click', domEl.adm_btn_set_sen_save, setSenMethod.clickSave);
    $(domEl.adm_div_recurrent).on('click', domEl.adm_btn_set_sen_restore, setSenMethod.clickRestore);
    $(domEl.adm_div_recurrent).on('click', domEl.adm_btn_set_sen_seminuevos_list, setSenMethod.clickSeminuevosList);
        
});