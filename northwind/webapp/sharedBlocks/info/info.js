sap.ui.define(["sap/ui/core/library","sap/uxap/Blockbase"],function(coreLibrary,BlockBase){

    "use strict";

    var ViewType=coreLibrary.mvc.ViewType;

    var InfoBlock=BlockBase.extend("northwind.sharedBlocks.info.info",{

        metadata:{
            views:{
                Collapsed:{
                    viewName:"northwind.sharedBlocks.info.info",
                    type: ViewType.XML
                }
            },
            Expanded:{
                viewName:"northwind.sharedBlocks.info.info",
                type: ViewType.XML
            }

        }

    });

    return InfoBlock;
},true);