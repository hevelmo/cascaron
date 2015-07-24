<?php

function urlsApi() {
    //Especial Actions
    $new = 'new';
    $del = 'del';
    $set = 'set';
    $get = 'get';
    $search = 'search';
    $wri = 'wri';

    //
    $det = 'detail';

    //Tables
    $sen = 'seminuevos';
    $agn = 'agencias';
    $cat = 'categorias';
    $mar = 'marcas';
    $mdo = 'modelos';

    //Root Api url
    $root = '../api/v1_adm';

    return array(
        // INSERT
        'adm_new_sen' => $root . '/' . $new . '/' . $sen,
        
        // UPDATE
        'adm_set_sen' => $root . '/' . $set . '/' . $sen . '/',

        // SELECT
        'adm_get_sen' => $root . '/' . $get . '/' . $sen,
        'adm_get_sen_id' => $root . '/' . $get . '/' . $sen . '/',
        'adm_get_sen_filters' => $root . '/' . $get . '/' . $sen . '/filters/',
        'adm_get_agn' => $root . '/' . $get . '/' . $agn,
        'adm_get_agn_id' => $root . '/' . $get . '/' . $agn . '/',
        'adm_get_cat' => $root . '/' . $get . '/' . $cat,
        'adm_get_cat_id' => $root . '/' . $get . '/' . $cat . '/',
        'adm_get_mar' => $root . '/' . $get . '/' . $mar,
        'adm_get_mar_id' => $root . '/' . $get . '/' . $mar . '/',
        'adm_get_mdo' => $root . '/' . $get . '/' . $mdo,
        'adm_get_mdo_id' => $root . '/' . $get . '/' . $mdo . '/',
        
        // DELETE
        'adm_del_sen' => $root . '/' . $del . '/' . $sen . '/',
    );
}
