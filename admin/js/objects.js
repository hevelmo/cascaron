var domEl, tempsNames, urlsApi;
domEl = {
	"adm__currency_h":".currency-h",
	"adm__get_sen_list":"#get-sen-list",
	"adm__percentage_d":".percentage-d",
	"adm__real_v":".real-v",
	"adm__sen_action_delete":".sen-action-delete",
	"adm__sen_action_picture":".sen-action-picture",
	"adm__sen_action_set":".sen-action-set",
	"adm__sen_results":"#sen-results",
	"adm__sen_sorter":".sen-sorter",
	"adm__set_sen_element":".set-sen-element",
	"adm_btn_new_sen_clean":"button#new-sen-clean",
	"adm_btn_new_sen_save":"button#new-sen-save",
	"adm_btn_new_sen_seminuevos_list":"button#new-sen-seminuevos-list",
	"adm_btn_sen_filters_clean":"button#sen-filters-clean",
	"adm_btn_set_sen_clean":"button#set-sen-clean",
	"adm_btn_set_sen_restore":"button#set-sen-restore",
	"adm_btn_set_sen_save":"button#set-sen-save",
	"adm_btn_set_sen_seminuevos_list":"button#set-sen-seminuevos-list",
	"adm_div_get_sen_filters":"div#div-get-sen-filters",
	"adm_div_get_sen_table":"div#div-get-sen-table",
	"adm_div_inputs_session":"div#hidden-inputs-session",
	"adm_div_inputs_temporal":"div#hidden-inputs-temporal",
	"adm_div_recurrent":"div#content_temporal_interactive",
	"adm_div_select_new_sen_agency":"div#div-select-new-sen-agency",
	"adm_div_select_new_sen_brand":"div#div-select-new-sen-brand",
	"adm_div_select_new_sen_category":"div#div-select-new-sen-category",
	"adm_div_select_new_sen_model":"div#div-select-new-sen-model",
	"adm_div_select_sen_filter_agency":"div#div-select-sen-filter-agency",
	"adm_div_select_sen_filter_brand":"div#div-select-sen-filter-brand",
	"adm_div_select_sen_filter_category":"div#div-select-sen-filter-category",
	"adm_div_select_sen_filter_model":"div#div-select-sen-filter-model",
	"adm_div_select_set_sen_agency":"div#div-select-set-sen-agency",
	"adm_div_select_set_sen_brand":"div#div-select-set-sen-brand",
	"adm_div_select_set_sen_category":"div#div-select-set-sen-category",
	"adm_div_select_set_sen_model":"div#div-select-set-sen-model",
	"adm_form_get_sen_filters":"form#get-sen-filters",
	"adm_form_new_sen":"form#new-sen",
	"adm_form_set_sen":"form#set-sen",
	"adm_input_new_sen_cylinders":"input#new-sen-cylinders",
	"adm_input_new_sen_input":"input.new-sen-input",
	"adm_input_new_sen_price":"input#new-sen-price",
	"adm_input_new_sen_year":"input#new-sen-year",
	"adm_input_sen_filter_search":"input#sen-filter-search",
	"adm_input_set_sen_cylinders":"input#set-sen-cylinders",
	"adm_input_set_sen_input":"input.set-sen-input",
	"adm_input_set_sen_price":"input#set-sen-price",
	"adm_input_set_sen_year":"input#set-sen-year",
	"adm_select_new_sen_agency":"select#new-sen-agency",
	"adm_select_new_sen_brand":"select#new-sen-brand",
	"adm_select_new_sen_category":"select#new-sen-category",
	"adm_select_new_sen_color":"select#new-sen-color",
	"adm_select_new_sen_interior":"select#new-sen-interior",
	"adm_select_new_sen_model":"select#new-sen-model",
	"adm_select_new_sen_select":"select.new-sen-select",
	"adm_select_new_sen_transmission":"select#new-sen-transmission",
	"adm_select_sen_filter_agency":"select#sen-filter-agency",
	"adm_select_sen_filter_brand":"select#sen-filter-brand",
	"adm_select_sen_filter_category":"select#sen-filter-category",
	"adm_select_sen_filter_model":"select#sen-filter-model",
	"adm_select_set_sen_agency":"select#set-sen-agency",
	"adm_select_set_sen_brand":"select#set-sen-brand",
	"adm_select_set_sen_category":"select#set-sen-category",
	"adm_select_set_sen_color":"select#set-sen-color",
	"adm_select_set_sen_interior":"select#set-sen-interior",
	"adm_select_set_sen_model":"select#set-sen-model",
	"adm_select_set_sen_select":"select.set-sen-select",
	"adm_select_set_sen_transmission":"select#set-sen-transmission",
	"adm_txta_new_sen_description":"textarea#new-sen-description",
	"adm_txta_set_sen_description":"textarea#set-sen-description",
	"div_picture_sen_loader":"div#div-picture-sen-loader",
	"div_picture_sen_pictures":"div#div-picture-sen-pictures",
	"input_picture_sen_uploader":"input#fileupload"
};
tempsNames = {
	"adm_get_sen":"tmp_adm_get_sen",
	"adm_get_sen_filters":"tmp_adm_get_sen_filters",
	"adm_get_sen_filters_select_agency":"tmp_adm_get_sen_filters_select_agency",
	"adm_get_sen_filters_select_brand":"tmp_adm_get_sen_filters_select_brand",
	"adm_get_sen_filters_select_category":"tmp_adm_get_sen_filters_select_category",
	"adm_get_sen_filters_select_model":"tmp_adm_get_sen_filters_select_model",
	"adm_get_sen_list":"tmp_adm_get_sen_list",
	"adm_get_sen_table":"tmp_adm_get_sen_table",
	"adm_new_sen_form":"tmp_adm_new_sen_form",
	"adm_new_sen_form_select_agency":"tmp_adm_new_sen_form_select_agency",
	"adm_new_sen_form_select_brand":"tmp_adm_new_sen_form_select_brand",
	"adm_new_sen_form_select_category":"tmp_adm_new_sen_form_select_category",
	"adm_new_sen_form_select_model":"tmp_adm_new_sen_form_select_model",
	"adm_picture_sen":"tmp_adm_picture_sen",
	"adm_picture_sen_loader":"tmp_adm_picture_sen_loader",
	"adm_picture_sen_pictures":"tmp_adm_picture_sen_pictures",
	"adm_set_sen_form":"tmp_adm_set_sen_form",
	"adm_set_sen_form_select_agency":"tmp_adm_set_sen_form_select_agency",
	"adm_set_sen_form_select_brand":"tmp_adm_set_sen_form_select_brand",
	"adm_set_sen_form_select_category":"tmp_adm_set_sen_form_select_category",
	"adm_set_sen_form_select_model":"tmp_adm_set_sen_form_select_model"
};
urlsApi = {
	"adm_del_sen":"../api/v1_adm/del/seminuevos/",
	"adm_get_agn":"../api/v1_adm/get/agencias",
	"adm_get_agn_id":"../api/v1_adm/get/agencias/",
	"adm_get_cat":"../api/v1_adm/get/categorias",
	"adm_get_cat_id":"../api/v1_adm/get/categorias/",
	"adm_get_mar":"../api/v1_adm/get/marcas",
	"adm_get_mar_id":"../api/v1_adm/get/marcas/",
	"adm_get_mdo":"../api/v1_adm/get/modelos",
	"adm_get_mdo_id":"../api/v1_adm/get/modelos/",
	"adm_get_sen":"../api/v1_adm/get/seminuevos",
	"adm_get_sen_filters":"../api/v1_adm/get/seminuevos/filters/",
	"adm_get_sen_id":"../api/v1_adm/get/seminuevos/",
	"adm_new_sen":"../api/v1_adm/new/seminuevos",
	"adm_set_sen":"../api/v1_adm/set/seminuevos/"
};