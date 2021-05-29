"use strict";

//Import Node Modules.
//----------------------
//const gSystemConfig = require("../config-application.js"); //System configuration.
//const FunctionsGeneric = require("../" + gSystemConfig.configDirectoryComponents + "/functions-generic.js");
//const FunctionsCrypto = require("../" + gSystemConfig.configDirectoryComponents + "/functions-crypto.js");

//Context.
import { SyncSystemNSContext } from "./syncsystem-ns-cb-context.js";

//const _ = require('lodash'); //Loadash

//import React from "react";
import React, {Component} from "react";
import ReactDOM from "react-dom";
//import reactSafe from "react-safe";
//import { Link } from 'react-router-dom';
//----------------------


class FrontendProductsDetailsRecord extends Component
{
    //Context.
    static contextType = SyncSystemNSContext;


    //Constructor.
    //**************************************************************************************
    constructor(props, context)
    {
        //Component options.
        //ConfigLayoutType: 2 - div layout (custom) | 22 - div layout (bootstrap) | 222 - div layout (dashboard - custom) 


        super(props, context);
        /*
        {
            this.arrProductsListing = props.arrProductsListing;
        }
        this.arrProductsListing = props.arrProductsListing;
        */

        //Properties.
        //----------------------
        this.configLayoutType = null;
        this.objProductsDetails;
        //----------------------


        //Define values.
        //----------------------
        this.configLayoutType = this.props.configLayoutType;
        this.objProductsDetails = this.props.objProductsDetails;
        //----------------------


        //State creation.
        /*
        this.state = {
            //arrProductsListing: this.props.arrProductsListing
            //arrProductsListing: props.arrProductsListing
            arrProductsListing: []
        };
        */


        //Debug.
        //console.log("props=", props);
    }
    //**************************************************************************************


    //Lifecycle method.
    //**************************************************************************************
    //componentDidMount()
    async componentDidMount()
    {
        //Variables.
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context;


        //Main build.
        //await this.build();

        //Logic.
        //----------------------
        try
        {
            //gLightboxBackendConfigOptions.selector = "glightbox_products_image_main";
            //var glightboxProductsImageMain = GLightbox(gLightboxBackendConfigOptions);

        }catch(asyncError){
            if(gSystemConfig.configDebug === true)
            {
                console.error(asyncError);
            }
        }finally{

        }


        //Debug.
        //this.setState({ arrProductsListing: this.props.arrProductsListing });
        //console.log("this.props=", this.props);
    }
    //**************************************************************************************


    //Build object´s content.
    //**************************************************************************************
    async build()
    {
        //Variables.
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context;


        //Logic.
        //----------------------
        try
        {
            //Filter results acording to filter_index.
            /*if(gSystemConfig.enableProductsFilterGeneric1 != 0)
            {
                this.resultsProductsFiltersGeneric1Listing = this.ofglRecords.resultsFiltersGenericListing.filter(function(obj){
                    return obj.filter_index == 101;
                    //console.log("obj = ", obj);
                });
                //console.log("ofglRecords.resultsFiltersGenericListing = ", ofglRecords.resultsFiltersGenericListing);
                //console.log("resultsFiltersGeneric1Listing = ", resultsFiltersGeneric1Listing);
            }*/
        }catch(asyncError){
            if(gSystemConfig.configDebug === true)
            {
                console.error(asyncError);
            }
        }finally{

        }
        //----------------------


        //Debug.
        //console.log("this.resultsProductsFiltersGeneric1Listing=", this.resultsProductsFiltersGeneric1Listing);
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
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem,  HTMLReactParser } = this.context;
        var configLayoutType = null;
        var objProductsDetails;
        //----------------------


        //Define values.
        //----------------------
        configLayoutType = this.configLayoutType;
        objProductsDetails = this.objProductsDetails;


        //Debug.
        //console.log("objProductsDetails(details record)=", objProductsDetails);
        //----------------------
        

        //div (custom).
        //----------------------
        if(configLayoutType == 2)
        {
            //if(_.isEmpty(objProductsDetails) === true)
            //{
                //Output.
                return(
                    <React.Fragment>
                        <section className="d-none d-lg-block d-xl-block ss-frontend-layout-section-content01 ss-frontend-products-details-text01" style={{marginBottom: "25px"}}>
                            <h2 className="ss-frontend-products-details-subheading01" style={{position: 'relative', display: 'block', textAlign: 'center', fontSize: '40px'}}>
                                { objProductsDetails.tblProductsTitle }
                            </h2>

                            <div className="ss-frontend-products-details-subheading01" style={{position: 'relative', display: 'table', height: '55px', lineHeight: '55px', fontSize: '30px', fontWeight: 'normal', backgroundImage: 'url(/files-layout/frontend-desktop-product-details-element01.png), url(/files-layout/frontend-desktop-product-details-element02.png), linear-gradient(to bottom, #d3dee4, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)', backgroundRepeat: 'no-repeat, no-repeat, repeat', backgroundPosition: 'right, left, top', border: '1px solid #a2b9c6', borderRadius: '10px', margin: '10px auto 10px auto', padding: '0px 15px'}}>
                                <div style={{position: 'relative', display: 'inline-block', height: '51px', paddingRight: '15px', fontSize: '20px'}}>
                                    {
                                        parseInt(objProductsDetails.tblProductsNumberSmall1) != 0 ?
                                            <div style={{position: 'relative', display: 'inline-block', marginLeft: '57px', width: '30px', height: '30px', lineHeight: '30px', textAlign: 'center', border: '1px solid #a2b9c6', borderRadius: '5px'}}>
                                                { objProductsDetails.tblProductsNumberSmall1_print }
                                                <img src="/files-layout/frontend-icon-room02.png" alt="Room" style={{position: 'absolute', display: 'block', bottom: '0px', left: '-57px'}} />
                                            </div>
                                        :
                                            ``
                                    }

                                    {
                                        parseInt(objProductsDetails.tblProductsNumberSmall2) != 0 ?
                                            <div style={{position: 'relative', display: 'inline-block', marginLeft: '40px', width: '30px', height: '30px', lineHeight: '30px', textAlign: 'center', border: '1px solid #a2b9c6', borderRadius: '5px'}}>
                                                { objProductsDetails.tblProductsNumberSmall2_print }
                                                <img src="/files-layout/frontend-icon-bathroom02.png" alt="Bathroom" style={{position: 'absolute', display: 'block', bottom: '0px', left: '-30px'}} />
                                            </div>
                                        :
                                            ``
                                    }

                                    {
                                        parseInt(objProductsDetails.tblProductsNumberSmall3) != 0 ?
                                            <div style={{position: 'relative', display: 'inline-block', marginLeft: '50px', width: '30px', height: '30px', lineHeight: '30px', textAlign: 'center', border: '1px solid #a2b9c6', borderRadius: '5px'}}>
                                                { objProductsDetails.tblProductsNumberSmall3_print }
                                                <img src="/files-layout/frontend-icon-garage02.png" alt="Garage" style={{position: 'absolute', display: 'block', bottom: '0px', left: '-45px'}} />
                                            </div>
                                        :
                                            ``
                                    }

                                    <div style={{position: 'relative', display: 'inline-block', marginLeft: '5px'}}>
                                        { objProductsDetails.tblProductsNumberSmall4_print } sqft
                                    </div>
                                </div>
                                
                                { Object.entries(objProductsDetails.objProductsFiltersGeneric1Binding_print).map((productsFiltersGenericRow) => 
                                    <React.Fragment>
                                        { /*Sale. */ }
                                        { productsFiltersGenericRow[1].id == 157 ?
                                            <React.Fragment>
                                                <div style={{position: 'relative', display: 'inline-block', color: '#ffffff', backgroundColor: '#0082c6', padding: '0px 15px'}}>
                                                    { console.log("objProductsDetails.objProductsFiltersGeneric1Binding_print=", objProductsDetails.objProductsFiltersGeneric1Binding_print) }
                                                    { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                </div>

                                                <div style={{position: 'relative', display: 'inline-block', paddingLeft: '15px'}}>
                                                    { gSystemConfig.configSystemCurrency + " " } 
                                                    
                                                    { /*Sale */ }
                                                    {
                                                        parseInt(objProductsDetails.tblProductsNumber2) != 0 ?
                                                            objProductsDetails.tblProductsNumber2_print
                                                        :
                                                        ``
                                                    }
                                                    { /*objProductsDetails.tblProductsNumber2_print*/ }
                                                </div>
                                            </React.Fragment>
                                        :
                                            ``
                                        }

                                        { /*Rent. */ }
                                        { productsFiltersGenericRow[1].id == 158 ?
                                            <React.Fragment>
                                                <div style={{position: 'relative', display: 'inline-block', color: '#ffffff', backgroundColor: '#0082c6', padding: '0px 15px'}}>
                                                    { console.log("objProductsDetails.objProductsFiltersGeneric1Binding_print=", objProductsDetails.objProductsFiltersGeneric1Binding_print) }
                                                    { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                </div>

                                                <div style={{position: 'relative', display: 'inline-block', paddingLeft: '15px'}}>
                                                    { gSystemConfig.configSystemCurrency + " " } 
                                                    
                                                    { /*Rent */ }
                                                    {
                                                        parseInt(objProductsDetails.tblProductsNumber1) != 0 ?
                                                            objProductsDetails.tblProductsNumber1_print
                                                        :
                                                            ``
                                                    }
                                                    { /*objProductsDetails.tblProductsNumber1_print*/ }
                                                </div>
                                            </React.Fragment>
                                        :
                                            ``
                                        }
                                    </React.Fragment>
                                ) }
                            </div>
                            <div style={{position: 'relative', display: 'block', lineHeight: '30px', fontSize: '30px', textAlign: 'center'}}>
                                { objProductsDetails.tblProductsInfoSmall1 != "" ?
                                    HTMLReactParser(objProductsDetails.tblProductsInfoSmall1) + " - "
                                 :
                                    ``
                                }
                                { HTMLReactParser(objProductsDetails.tblProductsInfoSmall2) }
                                <br />
                                { HTMLReactParser(objProductsDetails.tblProductsInfoSmall3) } - { HTMLReactParser(objProductsDetails.tblProductsInfoSmall4) } - { HTMLReactParser(objProductsDetails.tblProductsInfoSmall5) }
                            </div>


                            { gSystemConfig.enableProductsImageMain == 1 ? 
                                <figure className="ss-frontend-products-details-image01-container">
                                    <a href="#" style={{position: 'absolute', display: 'none', left: '0px', top: '0px', width: '46px', height: '510px', backgroundImage: 'url(/files-layout/layout-desktop-products-details-arrow-left.png)', backgroundRepeat: 'no-repeat'}}>
                                    </a>
                                    <a href="#" style={{position: 'absolute', display: 'none', right: '0px', top: '0px', width: '46px', height: '510px', backgroundImage: 'url(/files-layout/layout-desktop-products-details-arrow-right.png)', backgroundRepeat: 'no-repeat'}}>
                                    </a>

                                    { objProductsDetails.tblProductsImageMain != "" ?
                                        <React.Fragment>
                                            { /*No pop-up.*/ }
                                            { gSystemConfig.configImagePopup == 0 ? 
                                                <img src={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsImageMain } 
                                                    alt={objProductsDetails.tblProductsImageMainCaption != "" ?
                                                            objProductsDetails.tblProductsImageMainCaption 
                                                        :
                                                            objProductsDetails.tblProductsTitle 
                                                        } 
                                                    className="ss-frontend-products-details-image01" />
                                                : ``
                                            }

                                            { /*GLightbox.*/ }
                                            { /*TODO: Not working.*/ }
                                            { /*Research: https://www.npmjs.com/package/react-image-lightbox.*/ }
                                            { gSystemConfig.configImagePopup == 4 ? 
                                                <React.Fragment>
                                                    <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/g" + objProductsDetails.tblProductsImageMain }
                                                        title={ objProductsDetails.tblProductsTitle } 
                                                        className="glightbox_products_image_main"
                                                        data-glightbox={objProductsDetails.tblProductsImageMainCaption != "" ?
                                                                            "title:" + objProductsDetails.tblProductsImageMainCaption + ";"
                                                                        :
                                                                            "title:" + objProductsDetails.tblProductsTitle + ";"
                                                                        }>
                                                        <img src={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsImageMain } 
                                                            alt={objProductsDetails.tblProductsImageMainCaption != "" ?
                                                                        objProductsDetails.tblProductsImageMainCaption 
                                                                :
                                                                        objProductsDetails.tblProductsTitle 
                                                                } 
                                                            className="ss-frontend-products-details-image01" />
                                                    </a>
                                                    { HTMLReactParser(`
                                                        <script type="text/babel">
                                                        //$(document).ready(function() {
                                                            gLightboxBackendConfigOptions.selector = "glightbox_products_image_main";
                                                            var glightboxProductsImageMain = GLightbox(gLightboxBackendConfigOptions);
                                                        //});
                                                        </script>
                                                    `) }
                                                </React.Fragment>
                                                : ``
                                            }
                                        </React.Fragment>
                                    :
                                        <React.Fragment>
                                            { /*Placeholder.*/ }
                                            { gSystemConfig.configProductsImagePlaceholder == 1 ? 
                                                <img src={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesLayoutSD + "/frontend-layout-image-placeholder-t0.png" } 
                                                    alt={objProductsDetails.tblProductsImageMainCaption != "" ?
                                                            objProductsDetails.tblProductsImageMainCaption 
                                                        :
                                                            objProductsDetails.tblProductsTitle 
                                                        } 
                                                    className="ss-frontend-products-details-image01" />
                                                : ``
                                            }
                                        </React.Fragment>
                                    }
                                    
                                    { /*Main image caption.*/ }
                                    { gSystemConfig.enableProductsImageMainCaption == 1 ? 
                                        <figcaption>
                                            { objProductsDetails.tblProductsImageMainCaption }
                                        </figcaption>
                                    :
                                        ``
                                    }
                                </figure>
                            :
                                ``
                            }


                            { /*Row content.*/ }
                            <p style={{position: "relative", display: "block", overflow: "hidden"}}>
                                { /*Description.*/ }
                                { gSystemConfig.enableProductsDescription == 1 && objProductsDetails.tblProductsDescription != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsDescription") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsDescription) }
                                        </div>
                                    </div>
                                    : ``
                                }
                                
                                { /*Information 1.*/ }
                                { gSystemConfig.enableProductsInfo1 == 1 && gSystemConfig.configProductsInfo1FieldType == 2 && objProductsDetails.tblProductsInfo1 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo1) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 2.*/ }
                                { gSystemConfig.enableProductsInfo2 == 1 && gSystemConfig.configProductsInfo2FieldType == 2 && objProductsDetails.tblProductsInfo2 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo2) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 3.*/ }
                                { gSystemConfig.enableProductsInfo3 == 1 && gSystemConfig.configProductsInfo3FieldType == 2 && objProductsDetails.tblProductsInfo3 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo3) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 4.*/ }
                                { gSystemConfig.enableProductsInfo4 == 1 && gSystemConfig.configProductsInfo4FieldType == 2 && objProductsDetails.tblProductsInfo4 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo4) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 5.*/ }
                                { gSystemConfig.enableProductsInfo5 == 1 && gSystemConfig.configProductsInfo5FieldType == 2 && objProductsDetails.tblProductsInfo5 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo5) }
                                        </div>
                                    </div>
                                    : ``
                                }
                                
                                { /*Information 6.*/ }
                                { gSystemConfig.enableProductsInfo6 == 1 && gSystemConfig.configProductsInfo6FieldType == 2 && objProductsDetails.tblProductsInfo6 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo6") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo6) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 7.*/ }
                                { gSystemConfig.enableProductsInfo7 == 1 && gSystemConfig.configProductsInfo7FieldType == 2 && objProductsDetails.tblProductsInfo7 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo7") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo7) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 8.*/ }
                                { gSystemConfig.enableProductsInfo8 == 1 && gSystemConfig.configProductsInfo8FieldType == 2 && objProductsDetails.tblProductsInfo8 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo8") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo8) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 9.*/ }
                                { gSystemConfig.enableProductsInfo9 == 1 && gSystemConfig.configProductsInfo9FieldType == 2 && objProductsDetails.tblProductsInfo9 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo9") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo9) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 10.*/ }
                                { gSystemConfig.enableProductsInfo10 == 1 && gSystemConfig.configProductsInfo10FieldType == 2 && objProductsDetails.tblProductsInfo10 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo10") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo10) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 1.*/ }
                                { gSystemConfig.enableProductsInfoS1 == 1 && gSystemConfig.configProductsInfoS1FieldType == 2 && objProductsDetails.tblProductsInfoSmall1 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfoSmall1) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 2.*/ }
                                { gSystemConfig.enableProductsInfoS2 == 1 && gSystemConfig.configProductsInfoS2FieldType == 2 && objProductsDetails.tblProductsInfoSmall2 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfoSmall2) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 3.*/ }
                                { gSystemConfig.enableProductsInfoS3 == 1 && gSystemConfig.configProductsInfoS3FieldType == 2 && objProductsDetails.tblProductsInfoSmall3 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfoSmall3) }
                                        </div>
                                    </div>
                                    : ``
                                }
                                
                                { /*Information Small 4.*/ }
                                { gSystemConfig.enableProductsInfoS4 == 1 && gSystemConfig.configProductsInfoS4FieldType == 2 && objProductsDetails.tblProductsInfoSmall4 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfoSmall4) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 5.*/ }
                                { gSystemConfig.enableProductsInfoS5 == 1 && gSystemConfig.configProductsInfoS5FieldType == 2 && objProductsDetails.tblProductsInfoSmall5 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfoSmall5) }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*URL 1.*/ }
                                { gSystemConfig.enableProductsURL1 != 0 && objProductsDetails.tblProductsURL1 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsURL1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            <a href={objProductsDetails.tblProductsURL1} 
                                                target="_blank" 
                                                className="ss-frontend-products-details-link01">
                                                { objProductsDetails.tblProductsURL1 }
                                            </a>
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*URL 2.*/ }
                                { gSystemConfig.enableProductsURL2 != 0 && objProductsDetails.tblProductsURL2 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsURL2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            <a href={objProductsDetails.tblProductsURL2} 
                                                target="_blank" 
                                                className="ss-frontend-products-details-link01">
                                                { objProductsDetails.tblProductsURL2 }
                                            </a>
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*URL 3.*/ }
                                { gSystemConfig.enableProductsURL3 != 0 && objProductsDetails.tblProductsURL3 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsURL3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            <a href={objProductsDetails.tblProductsURL3} 
                                                target="_blank" 
                                                className="ss-frontend-products-details-link01">
                                                { objProductsDetails.tblProductsURL3 }
                                            </a>
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*URL 4.*/ }
                                { gSystemConfig.enableProductsURL4 != 0 && objProductsDetails.tblProductsURL4 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsURL4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            <a href={objProductsDetails.tblProductsURL4} 
                                                target="_blank" 
                                                className="ss-frontend-products-details-link01">
                                                { objProductsDetails.tblProductsURL4 }
                                            </a>
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*URL 5.*/ }
                                { gSystemConfig.enableProductsURL5 != 0 && objProductsDetails.tblProductsURL5 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsURL5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            <a href={objProductsDetails.tblProductsURL5} 
                                                target="_blank" 
                                                className="ss-frontend-products-details-link01">
                                                { objProductsDetails.tblProductsURL5 }
                                            </a>
                                        </div>
                                    </div>
                                    : ``
                                }
                            </p>


                            { /*Block content.*/ }
                            <p style={{position: "relative", display: "block", overflow: "hidden"}}>
                                { /*Information 1.*/ }
                                { gSystemConfig.enableProductsInfo1 == 1 && gSystemConfig.configProductsInfo1FieldType == 1 && objProductsDetails.tblProductsInfo1 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo1) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 2.*/ }
                                { gSystemConfig.enableProductsInfo2 == 1 && gSystemConfig.configProductsInfo2FieldType == 1 && objProductsDetails.tblProductsInfo2 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo2) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 3.*/ }
                                { gSystemConfig.enableProductsInfo3 == 1 && gSystemConfig.configProductsInfo3FieldType == 1 && objProductsDetails.tblProductsInfo3 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo3) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 4.*/ }
                                { gSystemConfig.enableProductsInfo4 == 1 && gSystemConfig.configProductsInfo4FieldType == 1 && objProductsDetails.tblProductsInfo4 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo4) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 5.*/ }
                                { gSystemConfig.enableProductsInfo5 == 1 && gSystemConfig.configProductsInfo5FieldType == 1 && objProductsDetails.tblProductsInfo5 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo5) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 6.*/ }
                                { gSystemConfig.enableProductsInfo6 == 1 && gSystemConfig.configProductsInfo6FieldType == 1 && objProductsDetails.tblProductsInfo6 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo6") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo6) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 7.*/ }
                                { gSystemConfig.enableProductsInfo7 == 1 && gSystemConfig.configProductsInfo7FieldType == 1 && objProductsDetails.tblProductsInfo7 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo7") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo7) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 8.*/ }
                                { gSystemConfig.enableProductsInfo8 == 1 && gSystemConfig.configProductsInfo8FieldType == 1 && objProductsDetails.tblProductsInfo8 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo8") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo8) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 9.*/ }
                                { gSystemConfig.enableProductsInfo9 == 1 && gSystemConfig.configProductsInfo9FieldType == 1 && objProductsDetails.tblProductsInfo9 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo9") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo9) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 10.*/ }
                                { gSystemConfig.enableProductsInfo10 == 1 && gSystemConfig.configProductsInfo10FieldType == 1 && objProductsDetails.tblProductsInfo10 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo10") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo10) }
                                        </div>
                                    </div>
                                    : ``
                                } 
                                

                                { /*Information Small 1.*/ }
                                { gSystemConfig.enableProductsInfoS1 == 1 && gSystemConfig.configProductsInfoS1FieldType == 1 && objProductsDetails.tblProductsInfoSmall1 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsInfoSmall1 }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 2.*/ }
                                { gSystemConfig.enableProductsInfoS2 == 1 && gSystemConfig.configProductsInfoS2FieldType == 1 && objProductsDetails.tblProductsInfoSmall2 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsInfoSmall2 }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 3.*/ }
                                { gSystemConfig.enableProductsInfoS3 == 1 && gSystemConfig.configProductsInfoS3FieldType == 1 && objProductsDetails.tblProductsInfoSmall3 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsInfoSmall3 }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 4.*/ }
                                { gSystemConfig.enableProductsInfoS4 == 1 && gSystemConfig.configProductsInfoS4FieldType == 1 && objProductsDetails.tblProductsInfoSmall4 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsInfoSmall4 }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 5.*/ }
                                { gSystemConfig.enableProductsInfoS5 == 1 && gSystemConfig.configProductsInfoS5FieldType == 1 && objProductsDetails.tblProductsInfoSmall5 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsInfoSmall5 }
                                        </div>
                                    </div>
                                    : ``
                                }
                            </p>


                            { /*Generic filters - block content.*/ }
                            <p style={{position: "relative", display: "block", overflow: "hidden"}}>
                                { /*Generic filter 1.*/ }
                                { gSystemConfig.enableProductsFilterGeneric1 != 0 && objProductsDetails.objProductsFiltersGeneric1Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric1 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric1Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric1Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { /*productsFiltersGenericRow[0].title*/ /*worked partially*/ }
                                                            { /*productsFiltersGenericRow[0]["title"]*/ }
                                                            { /*productsFiltersGenericKey[0]["title"]*/ }
                                                            { /*productsFiltersGenericObj.title*/ }
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }


                                                            { /*Debug.*/ }
                                                            { /*JSON.stringify(productsFiltersGenericRow)*/ }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 2.*/ }
                                { gSystemConfig.enableProductsFilterGeneric2 != 0 && objProductsDetails.objProductsFiltersGeneric2Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric2 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric2Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric2Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 3.*/ }
                                { gSystemConfig.enableProductsFilterGeneric3 != 0 && objProductsDetails.objProductsFiltersGeneric3Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric3 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric3Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric3Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 4.*/ }
                                { gSystemConfig.enableProductsFilterGeneric4 != 0 && objProductsDetails.objProductsFiltersGeneric4Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric4 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric4Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric4Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 5.*/ }
                                { gSystemConfig.enableProductsFilterGeneric5 != 0 && objProductsDetails.objProductsFiltersGeneric5Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric5 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric5Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric5Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 6.*/ }
                                { gSystemConfig.enableProductsFilterGeneric6 != 0 && objProductsDetails.objProductsFiltersGeneric6Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric6") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric6 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric6Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric6Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 7.*/ }
                                { gSystemConfig.enableProductsFilterGeneric7 != 0 && objProductsDetails.objProductsFiltersGeneric7Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric7") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric7 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric7Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric7Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 8.*/ }
                                { gSystemConfig.enableProductsFilterGeneric8 != 0 && objProductsDetails.objProductsFiltersGeneric8Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric8") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric8 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric8Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric8Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 9.*/ }
                                { gSystemConfig.enableProductsFilterGeneric9 != 0 && objProductsDetails.objProductsFiltersGeneric9Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric9") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric9 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric9Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric9Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 10.*/ }
                                { gSystemConfig.enableProductsFilterGeneric10 != 0 && objProductsDetails.objProductsFiltersGeneric10Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric10") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric10 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric10Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric10Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }
                            </p>


                            { /*Number - block content.*/ }
                            <p style={{position: "relative", display: "block", overflow: "hidden"}}>
                                { /*Number 1.*/ }
                                { gSystemConfig.enableProductsNumber1 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumber1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumber1FieldType == 2 || gSystemConfig.configProductsNumber1FieldType == 4 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumber1_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number 2.*/ }
                                { gSystemConfig.enableProductsNumber2 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumber2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumber2FieldType == 2 || gSystemConfig.configProductsNumber2FieldType == 4 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumber2_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number 3.*/ }
                                { gSystemConfig.enableProductsNumber3 == 1 && parseInt(objProductsDetails.tblProductsNumber3) != 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumber3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumber3FieldType == 2 || gSystemConfig.configProductsNumber3FieldType == 4 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }

                                            { objProductsDetails.tblProductsNumber3_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number 4.*/ }
                                { gSystemConfig.enableProductsNumber4 == 1 && parseInt(objProductsDetails.tblProductsNumber4) != 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumber4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumber4FieldType == 2 || gSystemConfig.configProductsNumber4FieldType == 4 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumber4_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number 5.*/ }
                                { gSystemConfig.enableProductsNumber5 == 1 && parseInt(objProductsDetails.tblProductsNumber5) != 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumber5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumber5FieldType == 2 || gSystemConfig.configProductsNumber5FieldType == 4 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumber5_print }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Number Small 1.*/ }
                                { gSystemConfig.enableProductsNumberS1 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumberS1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumberS1FieldType == 2 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumberSmall1_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number Small 2.*/ }
                                { gSystemConfig.enableProductsNumberS2 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumberS2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumberS2FieldType == 2 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumberSmall2_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number Small 3.*/ }
                                { gSystemConfig.enableProductsNumberS3 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumberS3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumberS3FieldType == 2 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumberSmall3_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number Small 4.*/ }
                                { gSystemConfig.enableProductsNumberS4 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumberS4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumberS4FieldType == 2 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumberSmall4_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number Small 5.*/ }
                                { gSystemConfig.enableProductsNumberS5 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumberS5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumberS5FieldType == 2 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumberSmall5_print }
                                        </div>
                                    </div>
                                    : ``
                                }
                            </p>


                            { /*Dates - Block content.*/ }
                            <p style={{position: "relative", display: "block", overflow: "hidden"}}>
                                { /*Date 1.*/ }
                                { gSystemConfig.enableProductsDate1 == 1 && objProductsDetails.tblProductsDate1_print != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsDate1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsDate1_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Date 2.*/ }
                                { gSystemConfig.enableProductsDate2 == 1 && objProductsDetails.tblProductsDate2_print != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsDate2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsDate2_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Date 3.*/ }
                                { gSystemConfig.enableProductsDate2 == 1 && objProductsDetails.tblProductsDate3_print != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsDate3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsDate3_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Date 4.*/ }
                                { gSystemConfig.enableProductsDate2 == 1 && objProductsDetails.tblProductsDate4_print != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsDate4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsDate4_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Date 5.*/ }
                                { gSystemConfig.enableProductsDate2 == 1 && objProductsDetails.tblProductsDate5_print != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsDate5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsDate5_print }
                                        </div>
                                    </div>
                                    : ``
                                }
                            </p>

                            
                            { /*Files - row content.*/ }
                            { /*TODO: Check attribute donwload issue with same origin (check todo.txt).*/ }
                            { /*ref: https://stackoverflow.com/questions/42265625/download-attribute-in-anchor-tag-in-react-component.*/ }
                            <p style={{position: "relative", display: "block", overflow: "hidden"}}>
                                { /*File 1.*/ }
                                { gSystemConfig.enableProductsFile1 == 1 && objProductsDetails.tblProductsFile1 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <span className="ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFile1") }:
                                        </span>
                                        <span>
                                            { gSystemConfig.configProductsFile1Type == 3 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile1 } 
                                                    download={ objProductsDetails.tblProductsFile1 }  
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile1 }
                                                </a>
                                                : ``
                                            }

                                            { gSystemConfig.configProductsFile1Type == 34 ? 
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile1 } 
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile1 }
                                                </a>
                                                : ``
                                            }
                                        </span>
                                    </div>
                                    : ``
                                }


                                { /*File 2.*/ }
                                { gSystemConfig.enableProductsFile2 == 1 && objProductsDetails.tblProductsFile2 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <span className="ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFile2") }:
                                        </span>
                                        <span>
                                            { gSystemConfig.configProductsFile2Type == 3 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile2 } 
                                                    download={ objProductsDetails.tblProductsFile2 }  
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile2 }
                                                </a>
                                                : ``
                                            }

                                            { gSystemConfig.configProductsFile2Type == 34 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile2 } 
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile2 }
                                                </a>
                                                : ``
                                            }
                                        </span>
                                    </div>
                                    : ``
                                }


                                { /*File 3.*/ }
                                { gSystemConfig.enableProductsFile3 == 1 && objProductsDetails.tblProductsFile3 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <span className="ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFile3") }:
                                        </span>
                                        <span>
                                            { gSystemConfig.configProductsFile3Type == 3 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile3 } 
                                                    download={ objProductsDetails.tblProductsFile3 }  
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile3 }
                                                </a>
                                                : ``
                                            }

                                            { gSystemConfig.configProductsFile3Type == 34 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile3 } 
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile3 }
                                                </a>
                                                : ``
                                            }
                                        </span>
                                    </div>
                                    : ``
                                }


                                { /*File 4.*/ }
                                { gSystemConfig.enableProductsFile4 == 1 && objProductsDetails.tblProductsFile4 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <span className="ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFile4") }:
                                        </span>
                                        <span>
                                            { gSystemConfig.configProductsFile3Type == 3 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile4 } 
                                                    download={ objProductsDetails.tblProductsFile4 }  
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile4 }
                                                </a>
                                                : ``
                                            }

                                            { gSystemConfig.configProductsFile4Type == 34 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile4 } 
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile4 }
                                                </a>
                                                : ``
                                            }
                                        </span>
                                    </div>
                                    : ``
                                }


                                { /*File 5.*/ }
                                { gSystemConfig.enableProductsFile5 == 1 && objProductsDetails.tblProductsFile5 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <span className="ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFile5") }:
                                        </span>
                                        <span>
                                            { gSystemConfig.configProductsFile5Type == 3 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile5 } 
                                                    download={ objProductsDetails.tblProductsFile5 }  
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile5 }
                                                </a>
                                                : ``
                                            }

                                            { gSystemConfig.configProductsFile5Type == 34 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile5 } 
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile5 }
                                                </a>
                                                : ``
                                            }
                                        </span>
                                    </div>
                                    : ``
                                }
                            </p>
                        </section>


                        { /*Mobile */}
                        <section className="d-lg-none ss-frontend-layout-section-content01 ss-frontend-products-details-text01" style={{margin: "25px 8px 20px 8px"}}>
                            <h2 className="ss-frontend-products-details-subheading01" style={{position: 'relative', display: 'block', textAlign: 'center', fontSize: '20px'}}>
                                { objProductsDetails.tblProductsTitle }
                            </h2>

                            <div className="ss-frontend-products-details-subheading01" style={{position: 'relative', display: 'table', height: '55px', lineHeight: '55px', fontSize: '16px', fontWeight: 'normal', backgroundImage: 'url(/files-layout/frontend-desktop-product-details-element01.png), url(/files-layout/frontend-desktop-product-details-element02.png), linear-gradient(to bottom, #d3dee4, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)', backgroundRepeat: 'no-repeat, no-repeat, repeat', backgroundPosition: 'right, left, top', border: '1px solid #a2b9c6', borderRadius: '10px', margin: '10px auto 5px auto', padding: '0px 15px'}}>
                                <div style={{position: 'relative', display: 'inline-block', height: '51px', paddingRight: '15px', fontSize: '20px'}}>
                                    {
                                        parseInt(objProductsDetails.tblProductsNumberSmall1) != 0 ?
                                            <div style={{position: 'relative', display: 'inline-block', marginLeft: '57px', width: '30px', height: '30px', lineHeight: '30px', textAlign: 'center', border: '1px solid #a2b9c6', borderRadius: '5px'}}>
                                                { objProductsDetails.tblProductsNumberSmall1_print }
                                                <img src="/files-layout/frontend-icon-room02.png" alt="Room" style={{position: 'absolute', display: 'block', bottom: '0px', left: '-57px'}} />
                                            </div>
                                        :
                                            ``
                                    }

                                    {
                                        parseInt(objProductsDetails.tblProductsNumberSmall2) != 0 ?
                                            <div style={{position: 'relative', display: 'inline-block', marginLeft: '40px', width: '30px', height: '30px', lineHeight: '30px', textAlign: 'center', border: '1px solid #a2b9c6', borderRadius: '5px'}}>
                                                { objProductsDetails.tblProductsNumberSmall2_print }
                                                <img src="/files-layout/frontend-icon-bathroom02.png" alt="Bathroom" style={{position: 'absolute', display: 'block', bottom: '0px', left: '-30px'}} />
                                            </div>
                                        :
                                            ``
                                    }

                                    {
                                        parseInt(objProductsDetails.tblProductsNumberSmall3) != 0 ?
                                            <div style={{position: 'relative', display: 'inline-block', marginLeft: '50px', width: '30px', height: '30px', lineHeight: '30px', textAlign: 'center', border: '1px solid #a2b9c6', borderRadius: '5px'}}>
                                                { objProductsDetails.tblProductsNumberSmall3_print }
                                                <img src="/files-layout/frontend-icon-garage02.png" alt="Garage" style={{position: 'absolute', display: 'block', bottom: '0px', left: '-45px'}} />
                                            </div>
                                        :
                                            ``
                                    }
                                </div>
                            </div>

                            <div className="ss-frontend-products-details-subheading01" style={{position: 'relative', display: 'table', height: '55px', lineHeight: '55px', fontSize: '16px', fontWeight: 'normal', backgroundImage: 'url(/files-layout/frontend-desktop-product-details-element01.png), url(/files-layout/frontend-desktop-product-details-element02.png), linear-gradient(to bottom, #d3dee4, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff, #ffffff)', backgroundRepeat: 'no-repeat, no-repeat, repeat', backgroundPosition: 'right, left, top', border: '1px solid #a2b9c6', borderRadius: '10px', margin: '5px auto 10px auto', padding: '0px 15px'}}>
                                <div style={{position: 'relative', display: 'inline-block', paddingRight: '15px', fontSize: '20px'}}>
                                    { objProductsDetails.tblProductsNumberSmall4_print } sqft
                                </div>

                                { Object.entries(objProductsDetails.objProductsFiltersGeneric1Binding_print).map((productsFiltersGenericRow) => 
                                    <React.Fragment>
                                        { /*Sale. */ }
                                        { productsFiltersGenericRow[1].id == 157 ?
                                            <React.Fragment>
                                                <div style={{position: 'relative', display: 'inline-block', color: '#ffffff', backgroundColor: '#0082c6', padding: '0px 15px'}}>
                                                    { console.log("objProductsDetails.objProductsFiltersGeneric1Binding_print=", objProductsDetails.objProductsFiltersGeneric1Binding_print) }
                                                    { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                </div>

                                                <div style={{position: 'relative', display: 'inline-block', paddingLeft: '15px'}}>
                                                    { gSystemConfig.configSystemCurrency + " " } 
                                                    
                                                    { /*Sale */ }
                                                    {
                                                        parseInt(objProductsDetails.tblProductsNumber2) != 0 ?
                                                            objProductsDetails.tblProductsNumber2_print
                                                        :
                                                        ``
                                                    }
                                                    { /*objProductsDetails.tblProductsNumber2_print*/ }
                                                </div>
                                            </React.Fragment>
                                        :
                                            ``
                                        }

                                        { /*Rent. */ }
                                        { productsFiltersGenericRow[1].id == 158 ?
                                            <React.Fragment>
                                                <div style={{position: 'relative', display: 'inline-block', color: '#ffffff', backgroundColor: '#0082c6', padding: '0px 15px'}}>
                                                    { console.log("objProductsDetails.objProductsFiltersGeneric1Binding_print=", objProductsDetails.objProductsFiltersGeneric1Binding_print) }
                                                    { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                </div>

                                                <div style={{position: 'relative', display: 'inline-block', paddingLeft: '15px'}}>
                                                    { gSystemConfig.configSystemCurrency + " " } 
                                                    
                                                    { /*Rent */ }
                                                    {
                                                        parseInt(objProductsDetails.tblProductsNumber1) != 0 ?
                                                            objProductsDetails.tblProductsNumber1_print
                                                        :
                                                            ``
                                                    }
                                                    { /*objProductsDetails.tblProductsNumber1_print*/ }
                                                </div>
                                            </React.Fragment>
                                        :
                                            ``
                                        }
                                    </React.Fragment>
                                ) }
                            </div>

                            <div style={{position: 'relative', display: 'block', lineHeight: '16px', fontSize: '16px', textAlign: 'center'}}>
                                { objProductsDetails.tblProductsInfoSmall1 != "" ?
                                    HTMLReactParser(objProductsDetails.tblProductsInfoSmall1) + " - "
                                 :
                                    ``
                                }
                                
                                { HTMLReactParser(objProductsDetails.tblProductsInfoSmall2) }
                                <br />
                                { HTMLReactParser(objProductsDetails.tblProductsInfoSmall3) } - { HTMLReactParser(objProductsDetails.tblProductsInfoSmall4) } - { HTMLReactParser(objProductsDetails.tblProductsInfoSmall5) }
                            </div>

                            <figure className="ss-frontend-products-details-image01-container" style={{height: 'auto', margin: '20px 0px'}}>
                                { objProductsDetails.tblProductsImageMain != "" ?
                                    <React.Fragment>
                                        { /*No pop-up.*/ }
                                        { gSystemConfig.configImagePopup == 0 ? 
                                            <img src={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsImageMain } 
                                                alt={objProductsDetails.tblProductsImageMainCaption != "" ?
                                                        objProductsDetails.tblProductsImageMainCaption 
                                                    :
                                                        objProductsDetails.tblProductsTitle 
                                                    } 
                                                className="ss-frontend-products-details-image01"
                                                style={{width: '300px'}} />
                                            : ``
                                        }

                                        { /*GLightbox.*/ }
                                        { /*TODO: Not working.*/ }
                                        { /*Research: https://www.npmjs.com/package/react-image-lightbox.*/ }
                                        { gSystemConfig.configImagePopup == 4 ? 
                                            <React.Fragment>
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/g" + objProductsDetails.tblProductsImageMain }
                                                    title={ objProductsDetails.tblProductsTitle } 
                                                    className="glightbox_products_image_main"
                                                    data-glightbox={objProductsDetails.tblProductsImageMainCaption != "" ?
                                                                        "title:" + objProductsDetails.tblProductsImageMainCaption + ";"
                                                                    :
                                                                        "title:" + objProductsDetails.tblProductsTitle + ";"
                                                                    }>
                                                    <img src={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsImageMain } 
                                                        alt={objProductsDetails.tblProductsImageMainCaption != "" ?
                                                                    objProductsDetails.tblProductsImageMainCaption 
                                                            :
                                                                    objProductsDetails.tblProductsTitle 
                                                            } 
                                                        className="ss-frontend-products-details-image01"
                                                        style={{width: '300px'}} />
                                                </a>
                                                { HTMLReactParser(`
                                                    <script type="text/babel">
                                                    //$(document).ready(function() {
                                                        gLightboxBackendConfigOptions.selector = "glightbox_products_image_main";
                                                        var glightboxProductsImageMain = GLightbox(gLightboxBackendConfigOptions);
                                                    //});
                                                    </script>
                                                `) }
                                            </React.Fragment>
                                            : ``
                                        }
                                    </React.Fragment>
                                :
                                    <React.Fragment>
                                        { /*Placeholder.*/ }
                                        { gSystemConfig.configProductsImagePlaceholder == 1 ? 
                                            <img src={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesLayoutSD + "/frontend-layout-image-placeholder-t0.png" } 
                                                alt={objProductsDetails.tblProductsImageMainCaption != "" ?
                                                        objProductsDetails.tblProductsImageMainCaption 
                                                    :
                                                        objProductsDetails.tblProductsTitle 
                                                    } 
                                                className="ss-frontend-products-details-image01"
                                                style={{width: '300px'}} />
                                            : ``
                                        }
                                    </React.Fragment>
                                }
                            </figure>
                            <div style={{position: 'relative', display: 'none', textAlign: 'center'}}>
                                <a href="#" className="ss-frontend-btn-nav" style={{backgroundImage: 'url(/files-layout/layout-mobile-products-details-arrow-left.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', marginRight: '50px'}}>
                                </a>
                                <a href="#" className="ss-frontend-btn-nav" style={{backgroundImage: 'url(/files-layout/layout-mobile-products-details-arrow-right.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                                </a>
                            </div>
                            <div style={{position: 'relative', display: 'none', width: '100%', height: '14px', backgroundImage: 'url(/files-layout/layout-mobile-products-details-element03.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'top center', marginTop: '-51px', marginBottom: '51px', pointerEvents: 'none'}}>
                            </div>  

                            { /*Row content.*/ }
                            <p style={{position: "relative", display: "block", overflow: "hidden"}}>
                                { /*Description.*/ }
                                { gSystemConfig.enableProductsDescription == 1 && objProductsDetails.tblProductsDescription != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsDescription") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsDescription) }
                                        </div>
                                    </div>
                                    : ``
                                }
                                
                                { /*Information 1.*/ }
                                { gSystemConfig.enableProductsInfo1 == 1 && gSystemConfig.configProductsInfo1FieldType == 2 && objProductsDetails.tblProductsInfo1 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo1) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 2.*/ }
                                { gSystemConfig.enableProductsInfo2 == 1 && gSystemConfig.configProductsInfo2FieldType == 2 && objProductsDetails.tblProductsInfo2 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo2) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 3.*/ }
                                { gSystemConfig.enableProductsInfo3 == 1 && gSystemConfig.configProductsInfo3FieldType == 2 && objProductsDetails.tblProductsInfo3 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo3) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 4.*/ }
                                { gSystemConfig.enableProductsInfo4 == 1 && gSystemConfig.configProductsInfo4FieldType == 2 && objProductsDetails.tblProductsInfo4 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo4) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 5.*/ }
                                { gSystemConfig.enableProductsInfo5 == 1 && gSystemConfig.configProductsInfo5FieldType == 2 && objProductsDetails.tblProductsInfo5 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo5) }
                                        </div>
                                    </div>
                                    : ``
                                }
                                
                                { /*Information 6.*/ }
                                { gSystemConfig.enableProductsInfo6 == 1 && gSystemConfig.configProductsInfo6FieldType == 2 && objProductsDetails.tblProductsInfo6 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo6") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo6) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 7.*/ }
                                { gSystemConfig.enableProductsInfo7 == 1 && gSystemConfig.configProductsInfo7FieldType == 2 && objProductsDetails.tblProductsInfo7 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo7") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo7) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 8.*/ }
                                { gSystemConfig.enableProductsInfo8 == 1 && gSystemConfig.configProductsInfo8FieldType == 2 && objProductsDetails.tblProductsInfo8 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo8") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo8) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 9.*/ }
                                { gSystemConfig.enableProductsInfo9 == 1 && gSystemConfig.configProductsInfo9FieldType == 2 && objProductsDetails.tblProductsInfo9 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo9") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo9) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 10.*/ }
                                { gSystemConfig.enableProductsInfo10 == 1 && gSystemConfig.configProductsInfo10FieldType == 2 && objProductsDetails.tblProductsInfo10 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo10") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo10) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 1.*/ }
                                { gSystemConfig.enableProductsInfoS1 == 1 && gSystemConfig.configProductsInfoS1FieldType == 2 && objProductsDetails.tblProductsInfoSmall1 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfoSmall1) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 2.*/ }
                                { gSystemConfig.enableProductsInfoS2 == 1 && gSystemConfig.configProductsInfoS2FieldType == 2 && objProductsDetails.tblProductsInfoSmall2 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfoSmall2) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 3.*/ }
                                { gSystemConfig.enableProductsInfoS3 == 1 && gSystemConfig.configProductsInfoS3FieldType == 2 && objProductsDetails.tblProductsInfoSmall3 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfoSmall3) }
                                        </div>
                                    </div>
                                    : ``
                                }
                                
                                { /*Information Small 4.*/ }
                                { gSystemConfig.enableProductsInfoS4 == 1 && gSystemConfig.configProductsInfoS4FieldType == 2 && objProductsDetails.tblProductsInfoSmall4 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfoSmall4) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 5.*/ }
                                { gSystemConfig.enableProductsInfoS5 == 1 && gSystemConfig.configProductsInfoS5FieldType == 2 && objProductsDetails.tblProductsInfoSmall5 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfoSmall5) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*URL 1.*/ }
                                { gSystemConfig.enableProductsURL1 != 0 && objProductsDetails.tblProductsURL1 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsURL1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            <a href={objProductsDetails.tblProductsURL1} 
                                                target="_blank" 
                                                className="ss-frontend-products-details-link01">
                                                { objProductsDetails.tblProductsURL1 }
                                            </a>
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*URL 2.*/ }
                                { gSystemConfig.enableProductsURL2 != 0 && objProductsDetails.tblProductsURL2 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsURL2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            <a href={objProductsDetails.tblProductsURL2} 
                                                target="_blank" 
                                                className="ss-frontend-products-details-link01">
                                                { objProductsDetails.tblProductsURL2 }
                                            </a>
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*URL 3.*/ }
                                { gSystemConfig.enableProductsURL3 != 0 && objProductsDetails.tblProductsURL3 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsURL3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            <a href={objProductsDetails.tblProductsURL3} 
                                                target="_blank" 
                                                className="ss-frontend-products-details-link01">
                                                { objProductsDetails.tblProductsURL3 }
                                            </a>
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*URL 4.*/ }
                                { gSystemConfig.enableProductsURL4 != 0 && objProductsDetails.tblProductsURL4 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsURL4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            <a href={objProductsDetails.tblProductsURL4} 
                                                target="_blank" 
                                                className="ss-frontend-products-details-link01">
                                                { objProductsDetails.tblProductsURL4 }
                                            </a>
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*URL 5.*/ }
                                { gSystemConfig.enableProductsURL5 != 0 && objProductsDetails.tblProductsURL5 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <div className="ss-frontend-products-details-content-row-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsURL5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-row-data01">
                                            <a href={objProductsDetails.tblProductsURL5} 
                                                target="_blank" 
                                                className="ss-frontend-products-details-link01">
                                                { objProductsDetails.tblProductsURL5 }
                                            </a>
                                        </div>
                                    </div>
                                    : ``
                                }
                            </p>

                            { /*Block content.*/ }
                            <p style={{position: "relative", display: "block", overflow: "hidden"}}>
                                { /*Information 1.*/ }
                                { gSystemConfig.enableProductsInfo1 == 1 && gSystemConfig.configProductsInfo1FieldType == 1 && objProductsDetails.tblProductsInfo1 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo1) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 2.*/ }
                                { gSystemConfig.enableProductsInfo2 == 1 && gSystemConfig.configProductsInfo2FieldType == 1 && objProductsDetails.tblProductsInfo2 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo2) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 3.*/ }
                                { gSystemConfig.enableProductsInfo3 == 1 && gSystemConfig.configProductsInfo3FieldType == 1 && objProductsDetails.tblProductsInfo3 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo3) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 4.*/ }
                                { gSystemConfig.enableProductsInfo4 == 1 && gSystemConfig.configProductsInfo4FieldType == 1 && objProductsDetails.tblProductsInfo4 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo4) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 5.*/ }
                                { gSystemConfig.enableProductsInfo5 == 1 && gSystemConfig.configProductsInfo5FieldType == 1 && objProductsDetails.tblProductsInfo5 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo5) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 6.*/ }
                                { gSystemConfig.enableProductsInfo6 == 1 && gSystemConfig.configProductsInfo6FieldType == 1 && objProductsDetails.tblProductsInfo6 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo6") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo6) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 7.*/ }
                                { gSystemConfig.enableProductsInfo7 == 1 && gSystemConfig.configProductsInfo7FieldType == 1 && objProductsDetails.tblProductsInfo7 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo7") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo7) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 8.*/ }
                                { gSystemConfig.enableProductsInfo8 == 1 && gSystemConfig.configProductsInfo8FieldType == 1 && objProductsDetails.tblProductsInfo8 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo8") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo8) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 9.*/ }
                                { gSystemConfig.enableProductsInfo9 == 1 && gSystemConfig.configProductsInfo9FieldType == 1 && objProductsDetails.tblProductsInfo9 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo9") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo9) }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information 10.*/ }
                                { gSystemConfig.enableProductsInfo10 == 1 && gSystemConfig.configProductsInfo10FieldType == 1 && objProductsDetails.tblProductsInfo10 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfo10") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { HTMLReactParser(objProductsDetails.tblProductsInfo10) }
                                        </div>
                                    </div>
                                    : ``
                                } 
                                

                                { /*Information Small 1.*/ }
                                { gSystemConfig.enableProductsInfoS1 == 1 && gSystemConfig.configProductsInfoS1FieldType == 1 && objProductsDetails.tblProductsInfoSmall1 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsInfoSmall1 }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 2.*/ }
                                { gSystemConfig.enableProductsInfoS2 == 1 && gSystemConfig.configProductsInfoS2FieldType == 1 && objProductsDetails.tblProductsInfoSmall2 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsInfoSmall2 }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 3.*/ }
                                { gSystemConfig.enableProductsInfoS3 == 1 && gSystemConfig.configProductsInfoS3FieldType == 1 && objProductsDetails.tblProductsInfoSmall3 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsInfoSmall3 }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 4.*/ }
                                { gSystemConfig.enableProductsInfoS4 == 1 && gSystemConfig.configProductsInfoS4FieldType == 1 && objProductsDetails.tblProductsInfoSmall4 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsInfoSmall4 }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Information Small 5.*/ }
                                { gSystemConfig.enableProductsInfoS5 == 1 && gSystemConfig.configProductsInfoS5FieldType == 1 && objProductsDetails.tblProductsInfoSmall5 != "" ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsInfoS5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsInfoSmall5 }
                                        </div>
                                    </div>
                                    : ``
                                }
                            </p>


                            { /*Generic filters - block content.*/ }
                            <p style={{position: "relative", display: "block", overflow: "hidden"}}>
                                { /*Generic filter 1.*/ }
                                { gSystemConfig.enableProductsFilterGeneric1 != 0 && objProductsDetails.objProductsFiltersGeneric1Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric1 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric1Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric1Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { /*productsFiltersGenericRow[0].title*/ /*worked partially*/ }
                                                            { /*productsFiltersGenericRow[0]["title"]*/ }
                                                            { /*productsFiltersGenericKey[0]["title"]*/ }
                                                            { /*productsFiltersGenericObj.title*/ }
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }


                                                            { /*Debug.*/ }
                                                            { /*JSON.stringify(productsFiltersGenericRow)*/ }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 2.*/ }
                                { gSystemConfig.enableProductsFilterGeneric2 != 0 && objProductsDetails.objProductsFiltersGeneric2Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric2 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric2Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric2Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 3.*/ }
                                { gSystemConfig.enableProductsFilterGeneric3 != 0 && objProductsDetails.objProductsFiltersGeneric3Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric3 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric3Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric3Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 4.*/ }
                                { gSystemConfig.enableProductsFilterGeneric4 != 0 && objProductsDetails.objProductsFiltersGeneric4Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric4 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric4Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric4Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 5.*/ }
                                { gSystemConfig.enableProductsFilterGeneric5 != 0 && objProductsDetails.objProductsFiltersGeneric5Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric5 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric5Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric5Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 6.*/ }
                                { gSystemConfig.enableProductsFilterGeneric6 != 0 && objProductsDetails.objProductsFiltersGeneric6Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric6") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric6 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric6Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric6Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 7.*/ }
                                { gSystemConfig.enableProductsFilterGeneric7 != 0 && objProductsDetails.objProductsFiltersGeneric7Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric7") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric7 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric7Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric7Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 8.*/ }
                                { gSystemConfig.enableProductsFilterGeneric8 != 0 && objProductsDetails.objProductsFiltersGeneric8Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric8") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric8 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric8Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric8Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 9.*/ }
                                { gSystemConfig.enableProductsFilterGeneric9 != 0 && objProductsDetails.objProductsFiltersGeneric9Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric9") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric9 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric9Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric9Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Generic filter 10.*/ }
                                { gSystemConfig.enableProductsFilterGeneric10 != 0 && objProductsDetails.objProductsFiltersGeneric10Binding_print.length > 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFilterGeneric10") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.enableProductsFilterGeneric10 == 3 ? 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric10Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                                : 
                                                <React.Fragment>
                                                    { Object.entries(objProductsDetails.objProductsFiltersGeneric10Binding_print).map((productsFiltersGenericRow) => 
                                                        <div>
                                                            - { SyncSystemNS.FunctionsGeneric.contentMaskRead(productsFiltersGenericRow[1].title, "db") }
                                                        </div>
                                                    ) }
                                                </React.Fragment>
                                            }
                                        </div>
                                    </div>
                                    : ``
                                }
                            </p>


                            { /*Number - block content.*/ }
                            <p style={{position: "relative", display: "block", overflow: "hidden"}}>
                                { /*Number 1.*/ }
                                { gSystemConfig.enableProductsNumber1 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumber1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumber1FieldType == 2 || gSystemConfig.configProductsNumber1FieldType == 4 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumber1_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number 2.*/ }
                                { gSystemConfig.enableProductsNumber2 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumber2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumber2FieldType == 2 || gSystemConfig.configProductsNumber2FieldType == 4 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumber2_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number 3.*/ }
                                { gSystemConfig.enableProductsNumber3 == 1 && parseInt(objProductsDetails.tblProductsNumber3) != 0 ? 
                                        <div className="ss-frontend-products-details-content-block01">
                                            <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumber3") }:
                                            </div>
                                            <div className="ss-frontend-products-details-content-block-data01">
                                                { gSystemConfig.configProductsNumber3FieldType == 2 || gSystemConfig.configProductsNumber3FieldType == 4 ? 
                                                    <React.Fragment>
                                                        { gSystemConfig.configSystemCurrency + " " }
                                                    </React.Fragment>
                                                    : ``
                                                }

                                                { objProductsDetails.tblProductsNumber3_print }
                                            </div>
                                        </div>
                                    : ``
                                }

                                { /*Number 4.*/ }
                                { gSystemConfig.enableProductsNumber4 == 1 && parseInt(objProductsDetails.tblProductsNumber4) != 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumber4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumber4FieldType == 2 || gSystemConfig.configProductsNumber4FieldType == 4 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumber4_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number 5.*/ }
                                { gSystemConfig.enableProductsNumber5 == 1 && parseInt(objProductsDetails.tblProductsNumber5) != 0 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumber5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumber5FieldType == 2 || gSystemConfig.configProductsNumber5FieldType == 4 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumber5_print }
                                        </div>
                                    </div>
                                    : ``
                                }


                                { /*Number Small 1.*/ }
                                { gSystemConfig.enableProductsNumberS1 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumberS1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumberS1FieldType == 2 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumberSmall1_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number Small 2.*/ }
                                { gSystemConfig.enableProductsNumberS2 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumberS2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumberS2FieldType == 2 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumberSmall2_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number Small 3.*/ }
                                { gSystemConfig.enableProductsNumberS3 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumberS3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumberS3FieldType == 2 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumberSmall3_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number Small 4.*/ }
                                { gSystemConfig.enableProductsNumberS4 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01" style={{display: "none"}}>
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumberS4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumberS4FieldType == 2 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumberSmall4_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Number Small 5.*/ }
                                { gSystemConfig.enableProductsNumberS5 == 1 ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsNumberS5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { gSystemConfig.configProductsNumberS5FieldType == 2 ? 
                                                <React.Fragment>
                                                    { gSystemConfig.configSystemCurrency + " " }
                                                </React.Fragment>
                                                : ``
                                            }
                                            
                                            { objProductsDetails.tblProductsNumberSmall5_print }
                                        </div>
                                    </div>
                                    : ``
                                }
                            </p>


                            { /*Dates - Block content.*/ }
                            <p style={{position: "relative", display: "block", overflow: "hidden"}}>
                                { /*Date 1.*/ }
                                { gSystemConfig.enableProductsDate1 == 1 && objProductsDetails.tblProductsDate1_print != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsDate1") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsDate1_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Date 2.*/ }
                                { gSystemConfig.enableProductsDate2 == 1 && objProductsDetails.tblProductsDate2_print != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsDate2") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsDate2_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Date 3.*/ }
                                { gSystemConfig.enableProductsDate2 == 1 && objProductsDetails.tblProductsDate3_print != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsDate3") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsDate3_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Date 4.*/ }
                                { gSystemConfig.enableProductsDate2 == 1 && objProductsDetails.tblProductsDate4_print != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsDate4") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsDate4_print }
                                        </div>
                                    </div>
                                    : ``
                                }

                                { /*Date 5.*/ }
                                { gSystemConfig.enableProductsDate2 == 1 && objProductsDetails.tblProductsDate5_print != "" ? 
                                    <div className="ss-frontend-products-details-content-block01">
                                        <div className="ss-frontend-products-details-content-block-label01 ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsDate5") }:
                                        </div>
                                        <div className="ss-frontend-products-details-content-block-data01">
                                            { objProductsDetails.tblProductsDate5_print }
                                        </div>
                                    </div>
                                    : ``
                                }
                            </p>

                            
                            { /*Files - row content.*/ }
                            { /*TODO: Check attribute donwload issue with same origin (check todo.txt).*/ }
                            { /*ref: https://stackoverflow.com/questions/42265625/download-attribute-in-anchor-tag-in-react-component.*/ }
                            <p style={{position: "relative", display: "block", overflow: "hidden"}}>
                                { /*File 1.*/ }
                                { gSystemConfig.enableProductsFile1 == 1 && objProductsDetails.tblProductsFile1 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <span className="ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFile1") }:
                                        </span>
                                        <span>
                                            { gSystemConfig.configProductsFile1Type == 3 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile1 } 
                                                    download={ objProductsDetails.tblProductsFile1 }  
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile1 }
                                                </a>
                                                : ``
                                            }

                                            { gSystemConfig.configProductsFile1Type == 34 ? 
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile1 } 
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile1 }
                                                </a>
                                                : ``
                                            }
                                        </span>
                                    </div>
                                    : ``
                                }


                                { /*File 2.*/ }
                                { gSystemConfig.enableProductsFile2 == 1 && objProductsDetails.tblProductsFile2 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <span className="ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFile2") }:
                                        </span>
                                        <span>
                                            { gSystemConfig.configProductsFile2Type == 3 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile2 } 
                                                    download={ objProductsDetails.tblProductsFile2 }  
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile2 }
                                                </a>
                                                : ``
                                            }

                                            { gSystemConfig.configProductsFile2Type == 34 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile2 } 
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile2 }
                                                </a>
                                                : ``
                                            }
                                        </span>
                                    </div>
                                    : ``
                                }


                                { /*File 3.*/ }
                                { gSystemConfig.enableProductsFile3 == 1 && objProductsDetails.tblProductsFile3 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <span className="ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFile3") }:
                                        </span>
                                        <span>
                                            { gSystemConfig.configProductsFile3Type == 3 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile3 } 
                                                    download={ objProductsDetails.tblProductsFile3 }  
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile3 }
                                                </a>
                                                : ``
                                            }

                                            { gSystemConfig.configProductsFile3Type == 34 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile3 } 
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile3 }
                                                </a>
                                                : ``
                                            }
                                        </span>
                                    </div>
                                    : ``
                                }


                                { /*File 4.*/ }
                                { gSystemConfig.enableProductsFile4 == 1 && objProductsDetails.tblProductsFile4 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <span className="ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFile4") }:
                                        </span>
                                        <span>
                                            { gSystemConfig.configProductsFile3Type == 3 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile4 } 
                                                    download={ objProductsDetails.tblProductsFile4 }  
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile4 }
                                                </a>
                                                : ``
                                            }

                                            { gSystemConfig.configProductsFile4Type == 34 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile4 } 
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile4 }
                                                </a>
                                                : ``
                                            }
                                        </span>
                                    </div>
                                    : ``
                                }


                                { /*File 5.*/ }
                                { gSystemConfig.enableProductsFile5 == 1 && objProductsDetails.tblProductsFile5 != "" ? 
                                    <div className="ss-frontend-products-details-content-row01">
                                        <span className="ss-frontend-products-details-subheading01">
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendProductsFile5") }:
                                        </span>
                                        <span>
                                            { gSystemConfig.configProductsFile5Type == 3 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile5 } 
                                                    download={ objProductsDetails.tblProductsFile5 }  
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile5 }
                                                </a>
                                                : ``
                                            }

                                            { gSystemConfig.configProductsFile5Type == 34 ?
                                                <a href={ gSystemConfig.configFrontendReactURLImages + gSystemConfig.configDirectoryFilesSD + "/" + objProductsDetails.tblProductsFile5 } 
                                                    target="_blank"
                                                    className="ss-frontend-products-details-link01">
                                                    { objProductsDetails.tblProductsFile5 }
                                                </a>
                                                : ``
                                            }
                                        </span>
                                    </div>
                                    : ``
                                }
                            </p>
                        </section>


                        <h3 className="d-none d-lg-block d-xl-block ss-frontend-heading02" style={{position: 'relative', display: 'block', width: '100%', height: '180px', lineHeight: '150px', backgroundImage: 'url(/files-layout/frontend-heading-bg03.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', textAlign: 'center', margin: '0px', padding: '0px', overflow: 'hidden'}}>
                            Location Map
                        </h3>
                        <h3 className="d-lg-none ss-frontend-heading02" style={{position: 'relative', display: 'block', width: '95%', height: '115px', lineHeight: '100px', backgroundImage: 'url(/files-layout/frontend-mobile-subheading-bg01-right.png), url(/files-layout/frontend-mobile-subheading-bg01-left.png), url(/files-layout/frontend-mobile-subheading-bg01.png)', backgroundRepeat: 'no-repeat, no-repeat, repeat-x', backgroundPosition: 'right top, left top, center top', textAlign: 'center', fontSize: '20px', margin: 'auto', padding: '0px', overflow: 'hidden'}}>
                            Location Map
                        </h3>

                        <div className="d-none d-lg-block d-xl-block" style={{position: 'relative', display: 'block', width: '100%', height: '400px',}}>
                            <iframe src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyCs3pP7IEKIhl5JMqHUuDRqgKfA5mOIHUM&q=" + 
                                            /*encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall1)) + "+" +
                                            encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall2)) + "+" +
                                            encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall3)) + "+" +
                                            encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall4)) + "+" +
                                            encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall5)) + "+"*/

                                            (objProductsDetails.tblProductsInfoSmall1 != "" ?
                                                encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall1))
                                            :
                                            ``) +

                                            (objProductsDetails.tblProductsInfoSmall2 != "" ?
                                                "+" + encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall2))
                                            :
                                            ``) +

                                            (objProductsDetails.tblProductsInfoSmall3 != "" ?
                                                "+" + encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall3))
                                            :
                                            ``) +

                                            (objProductsDetails.tblProductsInfoSmall4 != "" ?
                                                "+" + encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall4))
                                            :
                                            ``) +

                                            (objProductsDetails.tblProductsInfoSmall5 != "" ?
                                                "+" + encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall5))
                                            :
                                            ``)
                                        } 
                                style={{border: "0px", width: "100%", height: "100%"}} 
                                allowfullscreen="" 
                                loading="lazy">

                            </iframe>
                        </div>

                        <div className="d-lg-none" style={{position: 'relative', display: 'block', width: '100%', height: '300px',}}>
                            <iframe src={"https://www.google.com/maps/embed/v1/place?key=AIzaSyCs3pP7IEKIhl5JMqHUuDRqgKfA5mOIHUM&q=" + 
                                            /*encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall1)) + "+" +
                                            encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall2)) + "+" +
                                            encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall3)) + "+" +
                                            encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall4)) + "+" +
                                            encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall5)) + "+"*/

                                            (objProductsDetails.tblProductsInfoSmall1 != "" ?
                                                encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall1))
                                            :
                                            ``) +

                                            (objProductsDetails.tblProductsInfoSmall2 != "" ?
                                                "+" + encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall2))
                                            :
                                            ``) +

                                            (objProductsDetails.tblProductsInfoSmall3 != "" ?
                                                "+" + encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall3))
                                            :
                                            ``) +

                                            (objProductsDetails.tblProductsInfoSmall4 != "" ?
                                                "+" + encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall4))
                                            :
                                            ``) +

                                            (objProductsDetails.tblProductsInfoSmall5 != "" ?
                                                "+" + encodeURI(HTMLReactParser(objProductsDetails.tblProductsInfoSmall5))
                                            :
                                            ``)
                                        } 
                                style={{border: "0px", width: "100%", height: "100%"}} 
                                allowfullscreen="" 
                                loading="lazy">

                            </iframe>
                        </div>
                        
                    </React.Fragment>
                );

            //}else{
                //Redirect 404 or redirect 404 on the upper component.
            //}
        }
    }    
    //**************************************************************************************
}


export default FrontendProductsDetailsRecord;