"use strict";

//Import Node Modules.
//----------------------
//const gSystemConfig = require("../config-application.js"); //System configuration.
//const FunctionsGeneric = require("../" + gSystemConfig.configDirectoryComponents + "/functions-generic.js");
//const FunctionsCrypto = require("../" + gSystemConfig.configDirectoryComponents + "/functions-crypto.js");

//Context.
import { SyncSystemNSContext } from "./syncsystem-ns-cb-context.js";

//import React from "react";
import React, {Component} from "react";
import ReactDOM from "react-dom";
//import { Link } from 'react-router-dom';
//----------------------


class FrontendProductsListingRecord extends Component
{
    //Context.
    static contextType = SyncSystemNSContext;


    //Constructor.
    //**************************************************************************************
    constructor(props, context)
    {
        //Component options.
        //configLayoutType: 1 - table listing (custom) | 2 - div layout (custom) | 3 - div row (custom) | 4 - div (responsive) | 11 - table listing (bootstrap) | 22 - div layout (bootstrap) | 33 - div row (bootstrap) | 111 - table listing (dashboard - custom) 


        super(props, context);
        /*
        {
            this.arrCategoriesListing = props.arrCategoriesListing;
        }
        this.arrCategoriesListing = props.arrCategoriesListing;
        */


        //State creation.
        /*
        this.state = {
            //arrCategoriesListing: this.props.arrCategoriesListing
            //arrCategoriesListing: props.arrCategoriesListing
            arrCategoriesListing: []
        };
        */


        //Debug.
        //console.log("props=", props);
    }
    //**************************************************************************************


    //Lifecycle method.
    //**************************************************************************************
    componentDidMount()
    {
        //Debug.
        //this.setState({ arrCategoriesListing: this.props.arrCategoriesListing });
        //console.log("this.props=", this.props);
    }
    //**************************************************************************************

    
    //Render.
    //**************************************************************************************
    render()
    //async render()
    {
        //Variables.
        //----------------------
        //const { gSystemConfig, FunctionsGeneric, FunctionsCrypto } = this.context;
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem, HTMLReactParser } = this.context;
        
        var configLayoutType = null;
        var arrProductsListing;
        //----------------------


        //Define values.
        //----------------------
        configLayoutType = this.props.configLayoutType;
        arrProductsListing = this.props.arrProductsListing;
        //arrProductsListing = await this.props.arrProductsListing;


        //Debug.
        //console.log("configLayoutType(products listing record)=", configLayoutType);
        //console.log("arrProductsListing(products listing record)=", arrProductsListing);
        //----------------------


        //div layout (custom).
        //----------------------
        if(configLayoutType == 2)
        {
            if(arrProductsListing.length > 0)
            {
                //Output.
                return(
                    <div className="ss-frontend-products-listing-container">
                        { arrProductsListing.map((productsRow, productsRowKey) =>
                            {
                                return (
                                    <article key={productsRowKey} 
                                        className="ss-frontend-products-container ss-frontend-products-listing-text01">
                                        <h2 className="ss-frontend-products-listing-title01">
                                            <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id} 
                                                className="ss-frontend-products-listing-title-link01"
                                                title={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }>
                                                { /*productsRow.title*/ }
                                                { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }
                                            </a>
                                        </h2>

                                        { gSystemConfig.enableProductsImageMain == 1 ? 
                                            <React.Fragment>
                                                { productsRow.image_main != "" ?
                                                    <figure className="ss-frontend-products-listing-image01-container">
                                                        <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id} 
                                                            title={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }
                                                            className="ss-frontend-products-listing-image01" 
                                                            style={{ backgroundImage: "url(" + gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/t" + productsRow.image_main + ")" }}>
                                                            
                                                        </a>
                                                    </figure>                                        
                                                    : 
                                                    <React.Fragment>
                                                        {/* Placeholder.*/}
                                                        { gSystemConfig.configProductsImagePlaceholder == 1 ?
                                                            <figure className="ss-frontend-products-listing-image01-container">
                                                                <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id} 
                                                                title={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }
                                                                className="ss-frontend-products-listing-image01" 
                                                                style={{ backgroundImage: "url(" + gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesLayoutSD + "/frontend-layout-image-placeholder-t0.png)" }}>
                                                                    
                                                                </a>
                                                            </figure>                                        
                                                            : ``
                                                        }
                                                    </React.Fragment>
                                                }
                                            </React.Fragment>
                                            : ``
                                        }

                                        
                                        { gSystemConfig.enableProductsDescription == 1 && productsRow.description != "" ? 
                                            <p className="ss-frontend-products-listing-content-row01">
                                                { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.description, "db")) }
                                            </p>
                                            : ``
                                        }

                                        { /*Details.*/ }
                                        <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id} 
                                            className="ss-frontend-btn-base ss-frontend-btn-action"
                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") + " - " + SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }>
                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") }
                                        </a>


                                        { /*Row content.*/ }
                                        <div style={{position: "relative", display: "block", overflow: "hidden"}}>
                                            { /*Information 1.*/ }
                                            { gSystemConfig.enableProductsInfo1 == 1 && gSystemConfig.configProductsInfo1FieldType == 2 && productsRow.info1 != "" ? 
                                                <div className="ss-frontend-products-listing-content-row01">
                                                    <div className="ss-frontend-products-listing-content-row-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo1") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-row-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info1, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 2.*/ }
                                            { gSystemConfig.enableProductsInfo2 == 1 && gSystemConfig.configProductsInfo2FieldType == 2 && productsRow.info2 != "" ? 
                                                <div className="ss-frontend-products-listing-content-row01">
                                                    <div className="ss-frontend-products-listing-content-row-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo2") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-row-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info2, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 3.*/ }
                                            { gSystemConfig.enableProductsInfo3 == 1 && gSystemConfig.configProductsInfo3FieldType == 2 && productsRow.info3 != "" ? 
                                                <div className="ss-frontend-products-listing-content-row01">
                                                    <div className="ss-frontend-products-listing-content-row-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo3") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-row-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info3, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 4.*/ }
                                            { gSystemConfig.enableProductsInfo4 == 1 && gSystemConfig.configProductsInfo4FieldType == 2 && productsRow.info4 != "" ? 
                                                <div className="ss-frontend-products-listing-content-row01">
                                                    <div className="ss-frontend-products-listing-content-row-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo4") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-row-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info4, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 5.*/ }
                                            { gSystemConfig.enableProductsInfo5 == 1 && gSystemConfig.configProductsInfo5FieldType == 2 && productsRow.info5 != "" ? 
                                                <div className="ss-frontend-products-listing-content-row01">
                                                    <div className="ss-frontend-products-listing-content-row-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo5") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-row-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info5, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 6.*/ }
                                            { gSystemConfig.enableProductsInfo6 == 1 && gSystemConfig.configProductsInfo6FieldType == 2 && productsRow.info6 != "" ? 
                                                <div className="ss-frontend-products-listing-content-row01">
                                                    <div className="ss-frontend-products-listing-content-row-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo6") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-row-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info6, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }
                                            
                                            { /*Information 7.*/ }
                                            { gSystemConfig.enableProductsInfo7 == 1 && gSystemConfig.configProductsInfo7FieldType == 2 && productsRow.info7 != "" ? 
                                                <div className="ss-frontend-products-listing-content-row01">
                                                    <div className="ss-frontend-products-listing-content-row-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo7") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-row-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info7, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 8.*/ }
                                            { gSystemConfig.enableProductsInfo8 == 1 && gSystemConfig.configProductsInfo8FieldType == 2 && productsRow.info8 != "" ? 
                                                <div className="ss-frontend-products-listing-content-row01">
                                                    <div className="ss-frontend-products-listing-content-row-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo8") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-row-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info8, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 9.*/ }
                                            { gSystemConfig.enableProductsInfo9 == 1 && gSystemConfig.configProductsInfo9FieldType == 2 && productsRow.info9 != "" ? 
                                                <div className="ss-frontend-products-listing-content-row01">
                                                    <div className="ss-frontend-products-listing-content-row-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo9") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-row-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info9, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 10.*/ }
                                            { gSystemConfig.enableProductsInfo10 == 1 && gSystemConfig.configProductsInfo10FieldType == 2 && productsRow.info10 != "" ? 
                                                <div className="ss-frontend-products-listing-content-row01">
                                                    <div className="ss-frontend-products-listing-content-row-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo10") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-row-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info10, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }
                                        </div>


                                        { /*Block content.*/ }
                                        <div style={{position: "relative", display: "block", overflow: "hidden"}}>
                                            { /*Information 1.*/ }
                                            { gSystemConfig.enableProductsInfo1 == 1 && gSystemConfig.configProductsInfo1FieldType == 1 && productsRow.info1 != "" ? 
                                                <div className="ss-frontend-products-listing-content-block01">
                                                    <div className="ss-frontend-products-listing-content-block-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo1") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-block-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info1, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 2.*/ }
                                            { gSystemConfig.enableProductsInfo2 == 1 && gSystemConfig.configProductsInfo2FieldType == 1 && productsRow.info2 != "" ? 
                                                <div className="ss-frontend-products-listing-content-block01">
                                                    <div className="ss-frontend-products-listing-content-block-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo2") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-block-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info2, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 3.*/ }
                                            { gSystemConfig.enableProductsInfo3 == 1 && gSystemConfig.configProductsInfo3FieldType == 1 && productsRow.info3 != "" ? 
                                                <div className="ss-frontend-products-listing-content-block01">
                                                    <div className="ss-frontend-products-listing-content-block-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo3") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-block-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info3, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 4.*/ }
                                            { gSystemConfig.enableProductsInfo4 == 1 && gSystemConfig.configProductsInfo4FieldType == 1 && productsRow.info4 != "" ? 
                                                <div className="ss-frontend-products-listing-content-block01">
                                                    <div className="ss-frontend-products-listing-content-block-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo4") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-block-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info4, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 5.*/ }
                                            { gSystemConfig.enableProductsInfo5 == 1 && gSystemConfig.configProductsInfo5FieldType == 1 && productsRow.info5 != "" ? 
                                                <div className="ss-frontend-products-listing-content-block01">
                                                    <div className="ss-frontend-products-listing-content-block-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo5") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-block-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info5, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 6.*/ }
                                            { gSystemConfig.enableProductsInfo6 == 1 && gSystemConfig.configProductsInfo6FieldType == 1 && productsRow.info6 != "" ? 
                                                <div className="ss-frontend-products-listing-content-block01">
                                                    <div className="ss-frontend-products-listing-content-block-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo6") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-block-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info6, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 7.*/ }
                                            { gSystemConfig.enableProductsInfo7 == 1 && gSystemConfig.configProductsInfo7FieldType == 1 && productsRow.info7 != "" ? 
                                                <div className="ss-frontend-products-listing-content-block01">
                                                    <div className="ss-frontend-products-listing-content-block-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo7") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-block-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info7, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 8.*/ }
                                            { gSystemConfig.enableProductsInfo8 == 1 && gSystemConfig.configProductsInfo8FieldType == 1 && productsRow.info8 != "" ? 
                                                <div className="ss-frontend-products-listing-content-block01">
                                                    <div className="ss-frontend-products-listing-content-block-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo8") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-block-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info8, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 9.*/ }
                                            { gSystemConfig.enableProductsInfo9 == 1 && gSystemConfig.configProductsInfo9FieldType == 1 && productsRow.info9 != "" ? 
                                                <div className="ss-frontend-products-listing-content-block01">
                                                    <div className="ss-frontend-products-listing-content-block-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo9") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-block-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info9, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }

                                            { /*Information 10.*/ }
                                            { gSystemConfig.enableProductsInfo10 == 1 && gSystemConfig.configProductsInfo10FieldType == 1 && productsRow.info10 != "" ? 
                                                <div className="ss-frontend-products-listing-content-block01">
                                                    <div className="ss-frontend-products-listing-content-block-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo10") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-block-data01">
                                                        { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info10, "db")) }
                                                    </div>
                                                </div>
                                                : ``
                                            }
                                        </div>

                                        { /*Number - block content.*/ }
                                        <div style={{position: "relative", display: "block", overflow: "hidden"}}>
                                            { /*Number 1.*/ }
                                            { gSystemConfig.enableProductsNumber1 == 1 ? 
                                                <div className="ss-frontend-products-listing-content-block01">
                                                    <div className="ss-frontend-products-listing-content-block-label01 ss-frontend-products-listing-subheading01">
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumber1") }:
                                                    </div>
                                                    <div className="ss-frontend-products-listing-content-block-data01">
                                                        { gSystemConfig.configProductsNumber1FieldType == 2 || gSystemConfig.configProductsNumber1FieldType == 4 ? 
                                                            <React.Fragment>
                                                                { gSystemConfig.configSystemCurrency + " " }
                                                            </React.Fragment>
                                                        : ``
                                                        }

                                                        { /*NOTE dev: think of alternative funcion. Maybe, BigNumber is causing error. ref: https://github.com/ethereum/web3.js/issues/1356 */ }
                                                        { /*SyncSystemNS.FunctionsGeneric.valueMaskRead(productsRow.number1, gSystemConfig.configSystemCurrency, gSystemConfig.configProductsNumber1FieldType)*/ }
                                                        { productsRow.number1 }
                                                    </div>
                                                </div>
                                                : ``
                                            }
                                        </div>
                                    </article>
                                );
                            }
                        ) }
                    </div>
                );
            }else{
                //Empty.
                return(
                    <div className="ss-frontend-alert">
                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "frontendMessageProductsEmpty") }
                    </div>
                );
            }
        }
        //----------------------


        //div row (custom).
        //----------------------
        if(configLayoutType == 3)
        {
            if(arrProductsListing.length > 0)
            {
                //Output.
                return(
                    <React.Fragment>
                        { arrProductsListing.map((productsRow, productsRowKey) =>{
                            return (
                                //record
                                <article className="ss-frontend-products-container-row">
                                    {/* Column 1.*/}
                                    { gSystemConfig.enableProductsImageMain == 1 ?
                                        //Image.
                                        <figure className="ss-frontend-products-container-row-column01">
                                            <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id } 
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") + " - " + SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }>

                                                { productsRow.image_main != "" ?
                                                    <img src={gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/t" + productsRow.image_main} 
                                                        alt={
                                                            gSystemConfig.enableProductsImageMainCaption == 1 && productsRow.image_main_caption != "" ?
                                                                SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.image_main_caption, "db")
                                                            :
                                                                SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db")
                                                            } 
                                                        class="ss-frontend-products-listing-image02" />
                                                    :
                                                    <React.Fragment>
                                                        {/* Placeholder.*/}
                                                        { gSystemConfig.configProductsImagePlaceholder == 1 ?
                                                            <img src={gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesLayoutSD + "/frontend-layout-image-placeholder-t0.png"} 
                                                                alt={
                                                                    gSystemConfig.enableProductsImageMainCaption == 1 && productsRow.image_main_caption != "" ?
                                                                        SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.image_main_caption, "db")
                                                                    :
                                                                        SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db")
                                                                    } 
                                                                class="ss-frontend-products-listing-image02" />
                                                            :``
                                                        }
                                                    </React.Fragment>
                                                }

                                            </a>

                                            { gSystemConfig.enableProductsImageMainCaption == 1 && productsRow.image_main_caption != "" ?
                                                <figcaption className="ss-frontend-products-listing-caption01">
                                                    {SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.image_main_caption, "db")}
                                                </figcaption>
                                            :``
                                            }
                                        </figure>
                                    :``
                                    }


                                    {/* Column 2.*/}
                                    <div className="ss-frontend-products-container-row-column02 ss-frontend-products-listing-text01">
                                        <h2 className="ss-frontend-products-listing-title01">
                                            <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id} 
                                                className="ss-frontend-products-listing-title-link01"
                                                title={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }>
                                                { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }
                                            </a>
                                        </h2>
                                        
                                        { /*Content*/ }
                                        <p style={{position: "relative", display: "block"}}>
                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.description, "db") }
                                        </p>
                                        
                                        <div style={{position: "relative", display: "block", marginTop: "10px", textAlign: "right"}}>
                                            <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id } 
                                                className="ss-frontend-btn-base ss-frontend-btn-action"
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") + " - " + SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }>
                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") }
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                //record
                            );
                        }) }
                    </React.Fragment>
                );
            }else{
                //Output - empty.
                return(
                    <div className="ss-frontend-alert">
                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "frontendMessageProductsEmpty") }
                    </div>
                );
            }
        }
        //----------------------


        //div layout (responsive).
        //----------------------
        if(configLayoutType == 4)
        {
            if(arrProductsListing.length > 0)
            {
                //Output.
                return(
                    <React.Fragment>
                        { arrProductsListing.map((productsRow, productsRowKey) =>{
                            return (
                                <React.Fragment>
                                    {/*Desktop.
                                    <div className="d-none d-lg-block">

                                    </div>*/}
                                    <article key={productsRowKey} className="d-none d-lg-block ss-frontend-products-listing-text01" style={{position: 'relative', display: 'block', width: '100%', height: '240px', backgroundColor: '#0082c6', backgroundImage: 'url(/files-layout/frontend-desktop-product-element02.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right top', marginBottom: '45px'}}>
                                        <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id } 
                                            title={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }  
                                            style={{position: 'relative', display: 'inline-block', width: '360px', height: '100%', backgroundColor: '#999', verticalAlign: 'top', backgroundImage: 'url('+ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/t" + productsRow.image_main +')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                                        
                                        </a>

                                        <img src="/files-layout/frontend-desktop-product-element01.png" alt="Element" style={{position: 'relative', display: 'inline-block', verticalAlign: 'top', marginLeft: '-57px'}} />
                                        
                                        <div style={{position: 'relative', display: 'inline-block', width: '530px', height: '205px', marginLeft: '-20px', marginTop: '15px'}}>
                                            <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id }
                                                title={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }  
                                                className="ss-frontend-products-listing-title-link01">
                                                { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }
                                            </a>

                                            <div style={{position: 'relative', display: 'block', fontSize: '16px', marginTop: '4px'}}>
                                                {
                                                    productsRow.info_small1 != "" ?
                                                        HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info_small1, "db")) + ", "
                                                    :
                                                    ``
                                                }
                                                {
                                                    productsRow.info_small2 != "" ?
                                                        HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info_small2, "db")) + ", "
                                                    :
                                                    ``
                                                }
                                                {
                                                    productsRow.info_small3 != "" ?
                                                        HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info_small3, "db")) + ", "
                                                    :
                                                    ``
                                                }
                                                {
                                                    productsRow.info_small5 != "" ?
                                                        HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info_small5, "db"))
                                                    :
                                                    ``
                                                }

                                                { /*HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info_small1, "db")) }, 
                                                { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info_small2, "db")) }, 
                                                { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info_small3, "db")) }, 
                                                { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info_small5, "db"))*/ }
                                            </div>

                                            <p style={{position: 'relative', display: 'block', fontSize: '18px', marginTop: '4px'}}>
                                                { SyncSystemNS.FunctionsGeneric.limitChar(SyncSystemNS.FunctionsGeneric.removeHTML01(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.description, "db")), gSystemConfig.configProductsDescriptionLimitChar) }
                                                {
                                                    SyncSystemNS.FunctionsGeneric.removeHTML01(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.description, "db")).length > gSystemConfig.configProductsDescriptionLimitChar ?
                                                    `...`
                                                    :
                                                    ``
                                                }
                                            </p>

                                            <div style={{position: 'absolute', display: 'block', bottom: '0px', left: '57px', width: '30px', height: '30px', lineHeight: '30px', fontSize: '20px', textAlign: 'center', border: '1px solid #ffffff', borderRadius: '5px'}}>
                                                { productsRow.number_small1 }
                                                <img src="/files-layout/frontend-icon-room.png" alt="Room" style={{position: 'absolute', display: 'block', bottom: '0px', left: '-57px'}} />
                                            </div>

                                            <div style={{position: 'absolute', display: 'block', bottom: '0px', left: '130px', width: '30px', height: '30px', lineHeight: '30px', fontSize: '20px', textAlign: 'center', border: '1px solid #ffffff', borderRadius: '5px'}}>
                                                { productsRow.number_small2 }
                                                <img src="/files-layout/frontend-icon-bathroom.png" alt="Bathroom" style={{position: 'absolute', display: 'block', bottom: '0px', left: '-30px'}} />
                                            </div>

                                            <div style={{position: 'absolute', display: 'block', bottom: '0px', left: '220px', width: '30px', height: '30px', lineHeight: '30px', fontSize: '20px', textAlign: 'center', border: '1px solid #ffffff', borderRadius: '5px'}}>
                                                { productsRow.number_small3 }
                                                <img src="/files-layout/frontend-icon-garage.png" alt="Garage" style={{position: 'absolute', display: 'block', bottom: '0px', left: '-45px'}} />
                                            </div>

                                            <div style={{position: 'absolute', display: 'block', bottom: '0px', left: '260px', height: '30px', lineHeight: '30px', fontSize: '20px', textAlign: 'left'}}>
                                                { productsRow.number_small4 } sqft
                                            </div>
                                            
                                            <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id } 
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") + " - " + SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }  
                                                className="ss-frontend-products-details" 
                                                style={{position: 'absolute', display: 'block', bottom: '0px', right: '0px'}}>
                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") }
                                            </a>
                                        </div>

                                        <div className="ss-frontend-products-listing-text03" style={{position: 'absolute', display: 'block', right: '-10px', top: '50%', transform: 'translate(0, -50%)', msTransform: 'rotate(-90deg)', /* ie 9 */ WebkitTransform: 'rotate(-90deg)', /* safari prior 9.0 */ transform: 'rotate(-90deg)'}}>
                                            Sale
                                        </div>
                                    </article>
                                    

                                    {/*Mobile.
                                    <div className="d-lg-none">

                                    </div>
                                    */}
                                    <article className="d-lg-none ss-frontend-products-listing-text01" style={{position: 'relative', display: 'block', width: '300px', height: '540px', textAlign: 'center', backgroundColor: '#0082c6', backgroundImage: 'url(/files-layout/frontend-mobile-product-element02.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center bottom', marginBottom: '30px'}}>
                                        <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id } 
                                            title={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }  
                                            style={{position: 'relative', display: 'block', width: '100%', height: '200px', backgroundImage: 'url('+ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/t" + productsRow.image_main +')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center center'}}>
                                        
                                        </a>

                                        <img src="/files-layout/frontend-mobile-product-element01.png" alt="Element" style={{position: 'relative', display: 'block', marginTop: '-80px'}} />
                                        
                                        <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id } 
                                            title={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }  
                                            className="ss-frontend-products-listing-title-link01" style={{fontSize: '18px', lineHeight: '24px', margin: '-35px 10px 0px 10px'}}>
                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }
                                        </a>

                                        <div style={{position: 'relative', display: 'block', fontSize: '14px', lineHeight: '17px', margin: '4px 10px 0px 10px'}}>
                                            {
                                                productsRow.info_small1 != "" ?
                                                    HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info_small1, "db")) + ", "
                                                :
                                                ``
                                            }
                                            {
                                                productsRow.info_small2 != "" ?
                                                    HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info_small2, "db")) + ", "
                                                :
                                                ``
                                            }
                                            {
                                                productsRow.info_small3 != "" ?
                                                    HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info_small3, "db")) + ", "
                                                :
                                                ``
                                            }
                                            {
                                                productsRow.info_small5 != "" ?
                                                    HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info_small5, "db"))
                                                :
                                                ``
                                            }
                                        </div>

                                        <p style={{position: 'relative', display: 'block', fontSize: '14px', lineHeight: '17px', margin: '4px 10px 0px 10px'}}>
                                            { SyncSystemNS.FunctionsGeneric.limitChar(SyncSystemNS.FunctionsGeneric.removeHTML01(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.description, "db")), (gSystemConfig.configProductsDescriptionLimitChar - 90)) }
                                            {
                                                SyncSystemNS.FunctionsGeneric.removeHTML01(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.description, "db")).length > (gSystemConfig.configProductsDescriptionLimitChar - 90) ?
                                                `...`
                                                :
                                                ``
                                            }
                                        </p>

                                        <div style={{position: 'relative', display: 'block', margin: '10px 10px 5px 60px'}}>
                                            <div style={{position: 'relative', display: 'inline-block', width: '30px', height: '30px', lineHeight: '30px', fontSize: '20px', textAlign: 'center', border: '1px solid #ffffff', borderRadius: '5px'}}>
                                                { productsRow.number_small1 }
                                                <img src="/files-layout/frontend-icon-room.png" alt="Room" style={{position: 'absolute', display: 'block', bottom: '0px', left: '-57px'}} />
                                            </div>
                                            <div style={{position: 'relative', display: 'inline-block', width: '30px', height: '30px', lineHeight: '30px', fontSize: '20px', textAlign: 'center', border: '1px solid #ffffff', borderRadius: '5px', marginLeft: '35px'}}>
                                                { productsRow.number_small2 }
                                                <img src="/files-layout/frontend-icon-bathroom.png" alt="Bathroom" style={{position: 'absolute', display: 'block', bottom: '0px', left: '-30px'}} />
                                            </div>
                                            <div style={{position: 'relative', display: 'inline-block', width: '30px', height: '30px', lineHeight: '30px', fontSize: '20px', textAlign: 'center', border: '1px solid #ffffff', borderRadius: '5px', marginLeft: '50px'}}>
                                                { productsRow.number_small3 }
                                                <img src="/files-layout/frontend-icon-garage.png" alt="Garage" style={{position: 'absolute', display: 'block', bottom: '0px', left: '-45px'}} />
                                            </div>
                                        </div>
                                        <div style={{position: 'relative', display: 'block', margin: '5px auto'}}>
                                            { productsRow.number_small4 } sqft
                                        </div>

                                        <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id } 
                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") + " - " + SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }  
                                            className="ss-frontend-products-details" style={{position: 'relative', display: 'block', margin: 'auto'}}>
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") }
                                        </a>

                                        <div className="ss-frontend-products-listing-text03" style={{position: 'absolute', display: 'block', bottom: '10px', left: '50%', transform: 'translate(-50%, 0)'}}>
                                            Sale
                                        </div>
                                    </article>
                                </React.Fragment>
                            );
                        }) }
                    </React.Fragment>
                );
            }else{
                //Output - empty.
                return(
                    <div className="ss-frontend-alert">
                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "frontendMessageProductsEmpty") }
                    </div>
                );
            }
        }
        //----------------------


        //div layout (bootstrap).
        //----------------------
        if(configLayoutType == 22)
        {
            if(arrProductsListing.length > 0)
            {
                //Output.
                return(
                    <div className="container">
                        <div className="row">
                            { arrProductsListing.map((productsRow, productsRowKey) =>
                                {
                                    return (
                                        //Record
                                        <article className="col-md-4 product-grid">
                                            { gSystemConfig.enableProductsImageMain == 1 ? 
                                                <React.Fragment>
                                                    { productsRow.image_main != "" ?
                                                        <figure className="image text-center">
                                                            <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id} 
                                                                title={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }>
                                                                {/* 
                                                                    img-fluid (Responsive image) | img-thumbnail
                                                                */}
                                                                <img src={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/r" + productsRow.image_main } 
                                                                    alt={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") } 
                                                                    className="w-100" 
                                                                    />
                                                            </a>
                                                        </figure>
                                                        :
                                                        <React.Fragment>
                                                            {/* Placeholder.*/}
                                                            { gSystemConfig.configProductsImagePlaceholder == 1 ?
                                                                <figure className="image text-center">
                                                                    <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id} 
                                                                        title={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }>
                                                                        {/* 
                                                                            img-fluid (Responsive image) | img-thumbnail
                                                                        */}
                                                                        <img src={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesLayoutSD + "/frontend-layout-image-placeholder-t0.png" } 
                                                                            alt={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") } 
                                                                            className="w-100" 
                                                                            />
                                                                    </a>
                                                                </figure>
                                                                : ``
                                                            }
                                                        </React.Fragment>
                                                    }
                                                </React.Fragment>
                                                : ``
                                            }

                                            <h2 className="text-center">
                                                { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }
                                            </h2>

                                            { /*Information 1.*/}
                                            { gSystemConfig.enableProductsInfo1 == 1 && gSystemConfig.configProductsInfo1FieldType == 2 && productsRow.info1 != "" ? 
                                                <p className="text-center">
                                                    <strong>
                                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo1") }: 
                                                    </strong>
                                                    { HTMLReactParser(SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.info1, "db")) }
                                                </p>
                                                : ``
                                            }
                                            
                                            <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id} 
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") + " - " + SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") } 
                                                className="btn">
                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") }
                                            </a>
                                        </article>
                                        //Record
                                    );
                                }
                            ) }
                        </div>
                    </div>
                );
            }else{
                //Empty.
                return(
                    <div className="container">
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "frontendMessageProductsEmpty") }

                            <button type="button" 
                                className="close" 
                                data-dismiss="alert" 
                                aria-label={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendButtonClose") }>
                                <span aria-hidden="true">
                                    &times;
                                </span>
                            </button>                            
                        </div>
                    </div>
                );
            }
        }
        //----------------------


        //div row (bootstrap).
        //----------------------
        if(configLayoutType == 33)
        {
            if(arrProductsListing.length > 0)
            {
                //Output.
                return(
                    <React.Fragment>
                        { arrProductsListing.map((productsRow, productsRowKey) =>{
                            return (
                                //record
                                <article className="row align-items-start">
                                    { /*Column 1.*/ }
                                    { gSystemConfig.enableProductsImageMain == 1 ?
                                        //Image
                                        <figure className="col-sm-4 text-center">
                                            <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id } 
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") + " - " + SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }>

                                                { productsRow.image_main != "" ?
                                                    <img src={gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/t" + productsRow.image_main} 
                                                        alt={
                                                            gSystemConfig.enableProductsImageMainCaption == 1 && productsRow.image_main_caption != "" ?
                                                                SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.image_main_caption, "db")
                                                            :
                                                                SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db")
                                                            } 
                                                        class="img-fluid ss-frontend-products-listing-image02" />
                                                    :
                                                    <React.Fragment>
                                                        {/* Placeholder.*/}
                                                        { gSystemConfig.configProductsImagePlaceholder == 1 ?
                                                            <img src={gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesLayoutSD + "/frontend-layout-image-placeholder-t0.png"} 
                                                                alt={
                                                                    gSystemConfig.enableProductsImageMainCaption == 1 && productsRow.image_main_caption != "" ?
                                                                        SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.image_main_caption, "db")
                                                                    :
                                                                        SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db")
                                                                    } 
                                                                class="img-fluid ss-frontend-products-listing-image02" />
                                                            :``
                                                        }
                                                    </React.Fragment>
                                                }

                                            </a>

                                            { gSystemConfig.enableProductsImageMainCaption == 1 && productsRow.image_main_caption != "" ?
                                                <figcaption className="ss-frontend-products-listing-caption01">
                                                    {SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.image_main_caption, "db")}
                                                </figcaption>
                                            :``
                                            }
                                        </figure>
                                    :``
                                    }


                                    {/* Column 2.*/}
                                    <div className="col-sm-8 ss-frontend-products-listing-text01">
                                        <h2 className="ss-frontend-products-listing-title01">
                                            <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id} 
                                                className="ss-frontend-products-listing-title-link01"
                                                title={ SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }>
                                                { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }
                                            </a>
                                        </h2>
                                        
                                        { /*Content*/ }
                                        <p style={{position: "relative", display: "block"}}>
                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.description, "db") }
                                        </p>
                                        
                                        <div style={{position: "relative", display: "block", marginTop: "10px", textAlign: "right"}}>
                                            <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/" + gSystemConfig.configRouteFrontendDetails + "/" + productsRow.id } 
                                                className="ss-frontend-btn-base ss-frontend-btn-action"
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") + " - " + SyncSystemNS.FunctionsGeneric.contentMaskRead(productsRow.title, "db") }>
                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendItemDetails") }
                                            </a>
                                        </div>
                                    </div>
                                </article>
                                //record
                            );
                        }) }
                    </React.Fragment>
                );
            }else{
                //Output - empty.
                return(
                    <div className="container-fuid">
                        <div className="alert alert-warning alert-dismissible fade show" role="alert">
                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "frontendMessageProductsEmpty") }

                            <button type="button" 
                                className="close" 
                                data-dismiss="alert" 
                                aria-label={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendButtonClose") }>
                                <span aria-hidden="true">
                                    &times;
                                </span>
                            </button>                            
                        </div>
                    </div>
                );
            }
        }
        //----------------------
    }    
    //**************************************************************************************
}


export default FrontendProductsListingRecord;