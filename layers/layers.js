var wms_layers = [];

var format_Vungtrong_0 = new ol.format.GeoJSON();
var features_Vungtrong_0 = format_Vungtrong_0.readFeatures(json_Vungtrong_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vungtrong_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vungtrong_0.addFeatures(features_Vungtrong_0);
var lyr_Vungtrong_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vungtrong_0, 
                style: style_Vungtrong_0,
                popuplayertitle: 'Vungtrong',
                interactive: true,
    title: 'Vungtrong<br />\
    <img src="styles/legend/Vungtrong_0_0.png" /> <br />\
    <img src="styles/legend/Vungtrong_0_1.png" /> 2004<br />\
    <img src="styles/legend/Vungtrong_0_2.png" /> 2005<br />\
    <img src="styles/legend/Vungtrong_0_3.png" /> 2006<br />\
    <img src="styles/legend/Vungtrong_0_4.png" /> 2007<br />\
    <img src="styles/legend/Vungtrong_0_5.png" /> 2008<br />\
    <img src="styles/legend/Vungtrong_0_6.png" /> 2009<br />\
    <img src="styles/legend/Vungtrong_0_7.png" /> 2010<br />\
    <img src="styles/legend/Vungtrong_0_8.png" /> 2011<br />\
    <img src="styles/legend/Vungtrong_0_9.png" /> 2012<br />\
    <img src="styles/legend/Vungtrong_0_10.png" /> 2013<br />\
    <img src="styles/legend/Vungtrong_0_11.png" /> 2014<br />\
    <img src="styles/legend/Vungtrong_0_12.png" /> 2015<br />\
    <img src="styles/legend/Vungtrong_0_13.png" /> 2016<br />\
    <img src="styles/legend/Vungtrong_0_14.png" /> 2017<br />\
    <img src="styles/legend/Vungtrong_0_15.png" /> 2017_BT<br />\
    <img src="styles/legend/Vungtrong_0_16.png" /> 2018<br />\
    <img src="styles/legend/Vungtrong_0_17.png" /> 2018_BT<br />\
    <img src="styles/legend/Vungtrong_0_18.png" /> 2019_BT<br />\
    <img src="styles/legend/Vungtrong_0_19.png" /> 2020<br />\
    <img src="styles/legend/Vungtrong_0_20.png" /> 2021<br />\
    <img src="styles/legend/Vungtrong_0_21.png" /> 2022<br />\
    <img src="styles/legend/Vungtrong_0_22.png" /> 2023<br />\
    <img src="styles/legend/Vungtrong_0_23.png" /> 2024<br />\
    <img src="styles/legend/Vungtrong_0_24.png" /> DI_DOI<br />\
    <img src="styles/legend/Vungtrong_0_25.png" /> TN_2016<br />\
    <img src="styles/legend/Vungtrong_0_26.png" /> TN1<br />\
    <img src="styles/legend/Vungtrong_0_27.png" /> TN2<br />'
        });
var format_Luongtrong_1 = new ol.format.GeoJSON();
var features_Luongtrong_1 = format_Luongtrong_1.readFeatures(json_Luongtrong_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Luongtrong_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Luongtrong_1.addFeatures(features_Luongtrong_1);
cluster_Luongtrong_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Luongtrong_1
});
var lyr_Luongtrong_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Luongtrong_1, 
                style: style_Luongtrong_1,
                popuplayertitle: 'Luongtrong',
                interactive: true,
                title: '<img src="styles/legend/Luongtrong_1.png" /> Luongtrong'
            });
var format_RanhGioiTDL_2 = new ol.format.GeoJSON();
var features_RanhGioiTDL_2 = format_RanhGioiTDL_2.readFeatures(json_RanhGioiTDL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RanhGioiTDL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RanhGioiTDL_2.addFeatures(features_RanhGioiTDL_2);
var lyr_RanhGioiTDL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RanhGioiTDL_2, 
                style: style_RanhGioiTDL_2,
                popuplayertitle: 'RanhGioiTDL',
                interactive: true,
                title: '<img src="styles/legend/RanhGioiTDL_2.png" /> RanhGioiTDL'
            });
var format_DiemDocao_3 = new ol.format.GeoJSON();
var features_DiemDocao_3 = format_DiemDocao_3.readFeatures(json_DiemDocao_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DiemDocao_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DiemDocao_3.addFeatures(features_DiemDocao_3);
var lyr_DiemDocao_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DiemDocao_3, 
                style: style_DiemDocao_3,
                popuplayertitle: 'DiemDocao',
                interactive: true,
                title: '<img src="styles/legend/DiemDocao_3.png" /> DiemDocao'
            });
var format_Duongbinhdo_4 = new ol.format.GeoJSON();
var features_Duongbinhdo_4 = format_Duongbinhdo_4.readFeatures(json_Duongbinhdo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Duongbinhdo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Duongbinhdo_4.addFeatures(features_Duongbinhdo_4);
var lyr_Duongbinhdo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Duongbinhdo_4, 
                style: style_Duongbinhdo_4,
                popuplayertitle: 'Duongbinhdo',
                interactive: true,
                title: '<img src="styles/legend/Duongbinhdo_4.png" /> Duongbinhdo'
            });
var format_GThongNoibo_5 = new ol.format.GeoJSON();
var features_GThongNoibo_5 = format_GThongNoibo_5.readFeatures(json_GThongNoibo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GThongNoibo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GThongNoibo_5.addFeatures(features_GThongNoibo_5);
var lyr_GThongNoibo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GThongNoibo_5, 
                style: style_GThongNoibo_5,
                popuplayertitle: 'GThongNoibo',
                interactive: true,
                title: '<img src="styles/legend/GThongNoibo_5.png" /> GThongNoibo'
            });
var format_DuongGIaoTHong_6 = new ol.format.GeoJSON();
var features_DuongGIaoTHong_6 = format_DuongGIaoTHong_6.readFeatures(json_DuongGIaoTHong_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DuongGIaoTHong_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DuongGIaoTHong_6.addFeatures(features_DuongGIaoTHong_6);
var lyr_DuongGIaoTHong_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DuongGIaoTHong_6, 
                style: style_DuongGIaoTHong_6,
                popuplayertitle: 'DuongGIaoTHong',
                interactive: true,
                title: 'DuongGIaoTHong'
            });
var format_Thuyvan_7 = new ol.format.GeoJSON();
var features_Thuyvan_7 = format_Thuyvan_7.readFeatures(json_Thuyvan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thuyvan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thuyvan_7.addFeatures(features_Thuyvan_7);
var lyr_Thuyvan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thuyvan_7, 
                style: style_Thuyvan_7,
                popuplayertitle: 'Thuyvan',
                interactive: true,
                title: '<img src="styles/legend/Thuyvan_7.png" /> Thuyvan'
            });
var format_TraLinh_lol_8 = new ol.format.GeoJSON();
var features_TraLinh_lol_8 = format_TraLinh_lol_8.readFeatures(json_TraLinh_lol_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TraLinh_lol_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TraLinh_lol_8.addFeatures(features_TraLinh_lol_8);
var lyr_TraLinh_lol_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TraLinh_lol_8, 
                style: style_TraLinh_lol_8,
                popuplayertitle: 'TraLinh_lol',
                interactive: true,
                title: '<img src="styles/legend/TraLinh_lol_8.png" /> TraLinh_lol'
            });
var format_Tralinh_Tkkl_9 = new ol.format.GeoJSON();
var features_Tralinh_Tkkl_9 = format_Tralinh_Tkkl_9.readFeatures(json_Tralinh_Tkkl_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tralinh_Tkkl_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tralinh_Tkkl_9.addFeatures(features_Tralinh_Tkkl_9);
var lyr_Tralinh_Tkkl_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tralinh_Tkkl_9, 
                style: style_Tralinh_Tkkl_9,
                popuplayertitle: 'Tralinh_Tkkl',
                interactive: true,
                title: '<img src="styles/legend/Tralinh_Tkkl_9.png" /> Tralinh_Tkkl'
            });

lyr_Vungtrong_0.setVisible(true);lyr_Luongtrong_1.setVisible(true);lyr_RanhGioiTDL_2.setVisible(true);lyr_DiemDocao_3.setVisible(true);lyr_Duongbinhdo_4.setVisible(true);lyr_GThongNoibo_5.setVisible(true);lyr_DuongGIaoTHong_6.setVisible(true);lyr_Thuyvan_7.setVisible(true);lyr_TraLinh_lol_8.setVisible(true);lyr_Tralinh_Tkkl_9.setVisible(true);
var layersList = [lyr_Vungtrong_0,lyr_Luongtrong_1,lyr_RanhGioiTDL_2,lyr_DiemDocao_3,lyr_Duongbinhdo_4,lyr_GThongNoibo_5,lyr_DuongGIaoTHong_6,lyr_Thuyvan_7,lyr_TraLinh_lol_8,lyr_Tralinh_Tkkl_9];
lyr_Vungtrong_0.set('fieldAliases', {'fid': 'fid', 'NAMTRONG': 'NAMTRONG', 'D_TICH': 'D_TICH', 'kd_nvt': 'kd_nvt', 'vd_nvt': 'vd_nvt', 'CheckX': 'CheckX', });
lyr_Luongtrong_1.set('fieldAliases', {'Bang': 'Bang', 'Luong': 'Luong', 'SL_cay': 'SL_cay', 'Nam': 'Nam', 'Hinhanh': 'Hinhanh', });
lyr_RanhGioiTDL_2.set('fieldAliases', {'ID': 'ID', });
lyr_DiemDocao_3.set('fieldAliases', {'ID': 'ID', 'Value': 'Value', });
lyr_Duongbinhdo_4.set('fieldAliases', {'ID': 'ID', 'MA': 'MA', 'Ten': 'Ten', 'Value': 'Value', });
lyr_GThongNoibo_5.set('fieldAliases', {'ID': 'ID', });
lyr_DuongGIaoTHong_6.set('fieldAliases', {'ID': 'ID', });
lyr_Thuyvan_7.set('fieldAliases', {'igds_class': 'igds_class', 'igds_style': 'igds_style', 'igds_weigh': 'igds_weigh', 'igds_color': 'igds_color', 'igds_graph': 'igds_graph', 'igds_level': 'igds_level', 'entity_num': 'entity_num', 'mslink_0': 'mslink_0', 'entity_n_1': 'entity_n_1', 'mslink_1': 'mslink_1', 'entity_n_2': 'entity_n_2', 'mslink_2': 'mslink_2', });
lyr_TraLinh_lol_8.set('fieldAliases', {'ID': 'ID', 'MA': 'MA', 'Ten': 'Ten', 'PXTmap': 'PXTmap', });
lyr_Tralinh_Tkkl_9.set('fieldAliases', {'XA': 'XA', 'TK': 'TK', 'KHOANH': 'KHOANH', 'DT': 'DT', 'PXTmap': 'PXTmap', });
lyr_Vungtrong_0.set('fieldImages', {'fid': '', 'NAMTRONG': '', 'D_TICH': '', 'kd_nvt': '', 'vd_nvt': '', 'CheckX': '', });
lyr_Luongtrong_1.set('fieldImages', {'Bang': 'TextEdit', 'Luong': 'TextEdit', 'SL_cay': 'TextEdit', 'Nam': 'TextEdit', 'Hinhanh': 'TextEdit', });
lyr_RanhGioiTDL_2.set('fieldImages', {'ID': '', });
lyr_DiemDocao_3.set('fieldImages', {'ID': 'TextEdit', 'Value': 'TextEdit', });
lyr_Duongbinhdo_4.set('fieldImages', {'ID': '', 'MA': '', 'Ten': '', 'Value': '', });
lyr_GThongNoibo_5.set('fieldImages', {'ID': '', });
lyr_DuongGIaoTHong_6.set('fieldImages', {'ID': '', });
lyr_Thuyvan_7.set('fieldImages', {'igds_class': '', 'igds_style': '', 'igds_weigh': '', 'igds_color': '', 'igds_graph': '', 'igds_level': '', 'entity_num': '', 'mslink_0': '', 'entity_n_1': '', 'mslink_1': '', 'entity_n_2': '', 'mslink_2': '', });
lyr_TraLinh_lol_8.set('fieldImages', {'ID': '', 'MA': '', 'Ten': '', 'PXTmap': '', });
lyr_Tralinh_Tkkl_9.set('fieldImages', {'XA': '', 'TK': '', 'KHOANH': '', 'DT': '', 'PXTmap': '', });
lyr_Vungtrong_0.set('fieldLabels', {'fid': 'no label', 'NAMTRONG': 'inline label - always visible', 'D_TICH': 'no label', 'kd_nvt': 'no label', 'vd_nvt': 'no label', 'CheckX': 'no label', });
lyr_Luongtrong_1.set('fieldLabels', {'Bang': 'inline label - always visible', 'Luong': 'inline label - always visible', 'SL_cay': 'inline label - always visible', 'Nam': 'inline label - always visible', 'Hinhanh': 'no label', });
lyr_RanhGioiTDL_2.set('fieldLabels', {'ID': 'no label', });
lyr_DiemDocao_3.set('fieldLabels', {'ID': 'no label', 'Value': 'no label', });
lyr_Duongbinhdo_4.set('fieldLabels', {'ID': 'no label', 'MA': 'no label', 'Ten': 'no label', 'Value': 'no label', });
lyr_GThongNoibo_5.set('fieldLabels', {'ID': 'no label', });
lyr_DuongGIaoTHong_6.set('fieldLabels', {'ID': 'no label', });
lyr_Thuyvan_7.set('fieldLabels', {'igds_class': 'no label', 'igds_style': 'no label', 'igds_weigh': 'no label', 'igds_color': 'no label', 'igds_graph': 'no label', 'igds_level': 'no label', 'entity_num': 'no label', 'mslink_0': 'no label', 'entity_n_1': 'no label', 'mslink_1': 'no label', 'entity_n_2': 'no label', 'mslink_2': 'no label', });
lyr_TraLinh_lol_8.set('fieldLabels', {'ID': 'no label', 'MA': 'no label', 'Ten': 'no label', 'PXTmap': 'no label', });
lyr_Tralinh_Tkkl_9.set('fieldLabels', {'XA': 'no label', 'TK': 'no label', 'KHOANH': 'no label', 'DT': 'no label', 'PXTmap': 'no label', });
lyr_Tralinh_Tkkl_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});