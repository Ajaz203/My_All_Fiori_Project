sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, UIComponent,JSONModel) {
        "use strict";

        return Controller.extend("myproject.controller.View1", {
            onInit: function () {
                

let data = { "results": [{ "__metadata": { "uri": "https://my424045.businessbydesign.cloud.sap/sap/byd/odata/ana_businessanalytics_analytics.svc/RPZ326D19FFEC4E9175CC185BQueryResults('%7CCGLACCT%3D199100%7CCGLACCT_TC%3DACLEAR%7CCACC_DOC_UUID%3D200000000162%7CCPOSTING_DATE%3D07%2F29%2F2022%7CCPROJECT_UUID_01%3DTECH395049%7CCOEOREF_OBJ_TC%3D127%7C')", "type": "sapbyd.RPZ326D19FFEC4E9175CC185BQueryResult" }, "CACC_DOC_UUID": "200000000162", "CGLACCT": "199100", "CGLACCT_TC": "ACLEAR", "COEOREF_OBJ_TC": "127", "CPOSTING_DATE": "\/Date(1659052800000)\/", "CPROJECT_UUID_01": "TECH395049", "KCAMTCOMP": "33942.510000", "KCZ099A5E5FF2637757812202": "50349.19", "KCZ15C66BA57F4C2105DCFB9D": "0.000000", "KCZ8291A7E7AB2E0C5469C18C": "33942.510000", "KCZD84DE6D29EAEBAD2A1D043": "-33942.51", "TGLACCT": "Deferred Cost of Goods Sold", "TGLACCT_TC": "Accruals or clearings", "TOEOREF_OBJ_TC": "Supplier Invoice" }, { "__metadata": { "uri": "https://my424045.businessbydesign.cloud.sap/sap/byd/odata/ana_businessanalytics_analytics.svc/RPZ326D19FFEC4E9175CC185BQueryResults('%7CCOEOREF_OBJ_TC%3D127%7CCPROJECT_UUID_01%3DTECH395049%7CCPOSTING_DATE%3D07%2F29%2F2022%7CCACC_DOC_UUID%3D200000000221%7CCGLACCT_TC%3DACLEAR%7CCGLACCT%3D199100%7C')", "type": "sapbyd.RPZ326D19FFEC4E9175CC185BQueryResult" }, "CACC_DOC_UUID": "200000000221", "CGLACCT": "199100", "CGLACCT_TC": "ACLEAR", "COEOREF_OBJ_TC": "127", "CPOSTING_DATE": "\/Date(1659052800000)\/", "CPROJECT_UUID_01": "TECH395049", "KCAMTCOMP": "-33942.510000", "KCZ099A5E5FF2637757812202": "50349.19", "KCZ15C66BA57F4C2105DCFB9D": "0.000000", "KCZ8291A7E7AB2E0C5469C18C": "-33942.510000", "KCZD84DE6D29EAEBAD2A1D043": "33942.51", "TGLACCT": "Deferred Cost of Goods Sold", "TGLACCT_TC": "Accruals or clearings", "TOEOREF_OBJ_TC": "Supplier Invoice" }, { "__metadata": { "uri": "https://my424045.businessbydesign.cloud.sap/sap/byd/odata/ana_businessanalytics_analytics.svc/RPZ326D19FFEC4E9175CC185BQueryResults('%7CCOEOREF_OBJ_TC%3D127%7CCPROJECT_UUID_01%3DTECH395612%7CCPOSTING_DATE%3D02%2F15%2F2023%7CCACC_DOC_UUID%3D200000000380%7CCGLACCT_TC%3DACLEAR%7CCGLACCT%3D199100%7C')", "type": "sapbyd.RPZ326D19FFEC4E9175CC185BQueryResult" }, "CACC_DOC_UUID": "200000000380", "CGLACCT": "199100", "CGLACCT_TC": "ACLEAR", "COEOREF_OBJ_TC": "127", "CPOSTING_DATE": "\/Date(1676419200000)\/", "CPROJECT_UUID_01": "TECH395612", "KCAMTCOMP": "85.790000", "KCZ099A5E5FF2637757812202": "7779", "KCZ15C66BA57F4C2105DCFB9D": "0.000000", "KCZ8291A7E7AB2E0C5469C18C": "85.790000", "KCZD84DE6D29EAEBAD2A1D043": "-85.79", "TGLACCT": "Deferred Cost of Goods Sold", "TGLACCT_TC": "Accruals or clearings", "TOEOREF_OBJ_TC": "Supplier Invoice" }, { "__metadata": { "uri": "https://my424045.businessbydesign.cloud.sap/sap/byd/odata/ana_businessanalytics_analytics.svc/RPZ326D19FFEC4E9175CC185BQueryResults('%7CCOEOREF_OBJ_TC%3D127%7CCPROJECT_UUID_01%3DTECH395312%7CCPOSTING_DATE%3D08%2F26%2F2022%7CCACC_DOC_UUID%3D200000000406%7CCGLACCT_TC%3DACLEAR%7CCGLACCT%3D199100%7C')", "type": "sapbyd.RPZ326D19FFEC4E9175CC185BQueryResult" }, "CACC_DOC_UUID": "200000000406", "CGLACCT": "199100", "CGLACCT_TC": "ACLEAR", "COEOREF_OBJ_TC": "127", "CPOSTING_DATE": "\/Date(1661472000000)\/", "CPROJECT_UUID_01": "TECH395312", "KCAMTCOMP": "1702.130000", "KCZ099A5E5FF2637757812202": "4709.21", "KCZ15C66BA57F4C2105DCFB9D": "0.000000", "KCZ8291A7E7AB2E0C5469C18C": "1702.130000", "KCZD84DE6D29EAEBAD2A1D043": "-1702.13", "TGLACCT": "Deferred Cost of Goods Sold", "TGLACCT_TC": "Accruals or clearings", "TOEOREF_OBJ_TC": "Supplier Invoice" }, { "__metadata": { "uri": "https://my424045.businessbydesign.cloud.sap/sap/byd/odata/ana_businessanalytics_analytics.svc/RPZ326D19FFEC4E9175CC185BQueryResults('%7CCOEOREF_OBJ_TC%3D127%7CCPROJECT_UUID_01%3DSC395145%7CCPOSTING_DATE%3D02%2F21%2F2023%7CCACC_DOC_UUID%3D200000000446%7CCGLACCT_TC%3DACLEAR%7CCGLACCT%3D199100%7C')", "type": "sapbyd.RPZ326D19FFEC4E9175CC185BQueryResult" }, "CACC_DOC_UUID": "200000000446", "CGLACCT": "199100", "CGLACCT_TC": "ACLEAR", "COEOREF_OBJ_TC": "127", "CPOSTING_DATE": "\/Date(1676937600000)\/", "CPROJECT_UUID_01": "SC395145", "KCAMTCOMP": "48.240000", "KCZ099A5E5FF2637757812202": "4124.49", "KCZ15C66BA57F4C2105DCFB9D": "0.000000", "KCZ8291A7E7AB2E0C5469C18C": "48.240000", "KCZD84DE6D29EAEBAD2A1D043": "-48.24", "TGLACCT": "Deferred Cost of Goods Sold", "TGLACCT_TC": "Accruals or clearings", "TOEOREF_OBJ_TC": "Supplier Invoice" }]}

var smartData = new JSONModel();
smartData.setData(data.results);
this.getView().setModel(smartData, "ModelData");
console.log("excel new data", smartData)
            },
            

            onExportToExcel: function () {
                // Get the JSON data
                var rows = [];
            var selection = this.getView().byId('idProducts').getSelectedItems();
            selection.forEach(val => {
            var data = val.getBindingContext().getObject();
            rows.push(data);
            });
                // Convert JSON to Excel workbook
                var workbook = XLSX.utils.book_new();
                var worksheet = XLSX.utils.json_to_sheet(rows);
                XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
                // Save the workbook as an Excel file
                XLSX.writeFile(workbook, "data.xlsx");
            }
        });
    });


