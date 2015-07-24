<?php

function domEl() {
    return array(
	    //Auxiliar DIVs
	    'adm_div_recurrent' => 'div#content_temporal_interactive',
	    'adm_div_inputs_temporal' => 'div#hidden-inputs-temporal',
	    'adm_div_inputs_session' => 'div#hidden-inputs-session',

	    //AUXILIAR FORMAT CLASSES
	    'adm__percentage_d' => '.percentage-d',
	    'adm__currency_h' => '.currency-h',
	    'adm__real_v' => '.real-v',

	    //SEMINUEVOS

	    'adm_div_get_sen_table' => 'div#div-get-sen-table',
	    'adm__get_sen_list' => '#get-sen-list',
	    'adm__sen_results' => '#sen-results',
	    'adm__sen_sorter' => '.sen-sorter',

	    'adm__sen_action_delete' => '.sen-action-delete',
	    'adm__sen_action_set' => '.sen-action-set',
	    'adm__sen_action_picture' => '.sen-action-picture',
	    'adm_div_get_sen_filters' => 'div#div-get-sen-filters',
	    //
	    'adm_div_select_sen_filter_agency' => 'div#div-select-sen-filter-agency',
	    'adm_div_select_sen_filter_category' => 'div#div-select-sen-filter-category',
	    'adm_div_select_sen_filter_brand' => 'div#div-select-sen-filter-brand',
	    'adm_div_select_sen_filter_model' => 'div#div-select-sen-filter-model',
	    //Form
	    'adm_form_get_sen_filters' => 'form#get-sen-filters',
	    //Elements
	    'adm_input_sen_filter_search' => 'input#sen-filter-search',
	    'adm_select_sen_filter_agency' => 'select#sen-filter-agency',
	    'adm_select_sen_filter_category' => 'select#sen-filter-category',
	    'adm_select_sen_filter_brand' => 'select#sen-filter-brand',
	    'adm_select_sen_filter_model' => 'select#sen-filter-model',
	    //Buttons
	    'adm_btn_sen_filters_clean' => 'button#sen-filters-clean',

	    //NEW SEMINUEVOS
	    //Auxuliar DIVs
	    'adm_div_select_new_sen_agency' => 'div#div-select-new-sen-agency',
	    'adm_div_select_new_sen_category' => 'div#div-select-new-sen-category',
	    'adm_div_select_new_sen_brand' => 'div#div-select-new-sen-brand',
	    'adm_div_select_new_sen_model' => 'div#div-select-new-sen-model',
	    //Form
	    'adm_form_new_sen' => 'form#new-sen',
	    //Form elemnts
	    'adm_select_new_sen_select' => 'select.new-sen-select',
	    'adm_input_new_sen_input' => 'input.new-sen-input',
	    'adm_txta_new_sen_description' => 'textarea#new-sen-description',
	    'adm_input_new_sen_year' => 'input#new-sen-year',
	    'adm_input_new_sen_price' => 'input#new-sen-price',
	    'adm_input_new_sen_cylinders' => 'input#new-sen-cylinders',
	    'adm_select_new_sen_agency' => 'select#new-sen-agency',
	    'adm_select_new_sen_category' => 'select#new-sen-category',
	    'adm_select_new_sen_brand' => 'select#new-sen-brand',
	    'adm_select_new_sen_model' => 'select#new-sen-model',
	    'adm_select_new_sen_transmission' => 'select#new-sen-transmission',
	    'adm_select_new_sen_color' => 'select#new-sen-color',
	    'adm_select_new_sen_interior' => 'select#new-sen-interior',
	    'adm_btn_new_sen_save' => 'button#new-sen-save',
	    'adm_btn_new_sen_clean' => 'button#new-sen-clean',
	    'adm_btn_new_sen_seminuevos_list' => 'button#new-sen-seminuevos-list',

	    //SET SEMINUEVOS
	    //Auxuliar DIVs
	    'adm_div_select_set_sen_agency' => 'div#div-select-set-sen-agency',
	    'adm_div_select_set_sen_category' => 'div#div-select-set-sen-category',
	    'adm_div_select_set_sen_brand' => 'div#div-select-set-sen-brand',
	    'adm_div_select_set_sen_model' => 'div#div-select-set-sen-model',
	    //Form
	    'adm_form_set_sen' => 'form#set-sen',
	    //Form elemnts
	    'adm__set_sen_element' => '.set-sen-element',
	    'adm_select_set_sen_select' => 'select.set-sen-select',
	    'adm_input_set_sen_input' => 'input.set-sen-input',
	    'adm_txta_set_sen_description' => 'textarea#set-sen-description',
	    'adm_input_set_sen_year' => 'input#set-sen-year',
	    'adm_input_set_sen_price' => 'input#set-sen-price',
	    'adm_input_set_sen_cylinders' => 'input#set-sen-cylinders',
	    'adm_select_set_sen_agency' => 'select#set-sen-agency',
	    'adm_select_set_sen_category' => 'select#set-sen-category',
	    'adm_select_set_sen_brand' => 'select#set-sen-brand',
	    'adm_select_set_sen_model' => 'select#set-sen-model',
	    'adm_select_set_sen_transmission' => 'select#set-sen-transmission',
	    'adm_select_set_sen_color' => 'select#set-sen-color',
	    'adm_select_set_sen_interior' => 'select#set-sen-interior',
	    'adm_btn_set_sen_save' => 'button#set-sen-save',
	    'adm_btn_set_sen_clean' => 'button#set-sen-clean',
	    'adm_btn_set_sen_restore' => 'button#set-sen-restore',
	    'adm_btn_set_sen_seminuevos_list' => 'button#set-sen-seminuevos-list',

	    //PICTURES SEMINUEVOS

	    //DIV's Auxiliar

	    'div_picture_sen_loader' => 'div#div-picture-sen-loader',
	    'div_picture_sen_pictures' => 'div#div-picture-sen-pictures',

	    //
	    'input_picture_sen_uploader' => 'input#fileupload'
    );
}
