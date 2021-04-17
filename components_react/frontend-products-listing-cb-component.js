"use strict";

//Import Node Modules.
//----------------------
//require("dotenv").config(); //{path: '../.env'}
//const { CONFIG_API_URL } = process.env;
//const { REACT_APP_CONFIG_API_URL } = process.env;

//const gSystemConfig = require("../config-application.js"); //System configuration.
////const SyncSystemNS = require("../" + gSystemConfig.configDirectoryComponents + "/syncsystem-ns.js");
////const FunctionsDB = require("../" + gSystemConfig.configDirectoryComponents + "/functions-db.js");
//const FunctionsGeneric = require("../" + gSystemConfig.configDirectoryComponents + "/functions-generic.js");
//const FunctionsCrypto = require("../" + gSystemConfig.configDirectoryComponents + "/functions-crypto.js");

//Context.
import { SyncSystemNSContext } from "./syncsystem-ns-cb-context.js";

//Provider.
//import SyncSystemNSContextProvider from "./syncsystem-ns-cb-context.js";


//Node modules.
//const qs = require('query-string');

//import React from "react";
import React, {Component} from "react";
import ReactDOM from "react-dom";

//import "../app_js/functions-syncsystem.js";
//import {elementMessage01} from "../app_js/functions-syncsystem.js"; //working
//import FunctionsSyncSystem from "../app_js/functions-syncsystem.js";
/*
if (typeof window !== 'undefined') {
    import "../app_js/functions-syncsystem.js";
}
*/

//Components.
import FrontendProductsListingRecord from "./frontend-products-listing-record-cb-component.js";
import FrontendContent from "./frontend-content-cb-component.js";
//----------------------


class FrontendProductsListing extends Component
{
    //Context.
    static contextType = SyncSystemNSContext;
    

    //Constructor.
    //**************************************************************************************
    constructor(props, context)
    {
        super(props, context);

        //Bind objects, methods and functions.
        //Note: Maybe, not needed.
        //this.objCategoriesListing = this.objCategoriesListing.bind(this);
        this.build = this.build.bind(this);
        this.headBuild = this.headBuild.bind(this);
        this.titleCurrentBuild = this.titleCurrentBuild.bind(this);


        //Variables.
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem, qs } = this.context; //Deconstruct variables (each variable is allocated to it´s correspondent name).


        //Properties.
        //----------------------
        this.objParametersQueryString = qs.parse(this.props.location.search);

        this._idParentProducts = 0;

        this._pagingNRecords = gSystemConfig.configProductsFrontendPaginationNRecords;
        this._pagingTotalRecords = 0;
        this._pagingTotal = 0;
        //this._pageNumber = this.props.location.query.pageNumber;
        this._pageNumber = 1;
        this._masterPageFrontendSelect = "";

        this._messageSuccess = "";
        this._messageError = "";
        this._messageAlert = "";
        this._nRecords = "";

        this.queryDefault = "";

        this.objCategoriesCurrent = {};
        this.titleCurrent = "";

        this.objProductsListingJson;
        this.objProductsListing = {};
        this.arrProductsListing = [];

        this.metaTitle = "";
        this.metaDescription = "";
        this.metaKeywords = "";
        this.metaURLCurrent = "";
        //----------------------


        //Value definition - props parameters.
        //----------------------
        if(this.props.match.params.idParentProducts)
        {
            this._idParentProducts = this.props.match.params.idParentProducts;


            //Check if it´s an ID (number).
            /*
            if(isNaN(this._idParentCategories))
            {
                //Search for friendly name.


                //Debug.
                console.log("number=false");
            }else{
                //Debug.
                console.log("number=true");
            }
            */
        }
        //----------------------


        //Value definition - query string.
        //----------------------
        if(this.objParametersQueryString.pageNumber)
        {
            this._pageNumber = this.objParametersQueryString.pageNumber;
        }

        if(this.objParametersQueryString.masterPageFrontendSelect)
        {
            this._masterPageFrontendSelect = this.objParametersQueryString.masterPageFrontendSelect;
        }

        if(this.objParametersQueryString.messageSuccess)
        {
            this._messageSuccess = this.objParametersQueryString.messageSuccess;
        }

        if(this.objParametersQueryString.messageError)
        {
            this._messageError = this.objParametersQueryString.messageError;
        }

        if(this.objParametersQueryString.messageAlert)
        {
            this._messageAlert = this.objParametersQueryString.messageAlert;
        }

        if(this.objParametersQueryString.nRecords)
        {
            this._nRecords = this.objParametersQueryString.nRecords;
        }
        //----------------------
        

        //Default query.
        if(this._masterPageFrontendSelect)
        {
            this.queryDefault += "&masterPageFrontendSelect=" + this._masterPageFrontendSelect;
        }
       

        //Logic.
        //(async function(){ 
            try{


                //await this.build();
                //this.build();
            }catch(asyncError){
                if(gSystemConfig.configDebug === true)
                {
                    console.error(asyncError);
                }
            }finally{
                //State creation.
                this.state = {
                    objProductsListing: this.objProductsListing,
                    arrProductsListing: this.arrProductsListing,
                    dataLoaded: false
                };
            }
        //})();


        //Debug.
        //console.log("props=", props);
        //console.log("this.objParametersQueryString(categories listing)=", this.objParametersQueryString);
        //console.log("this.queryDefault=", this.queryDefault);
    }
    //**************************************************************************************


    //Lifecycle method.
    //**************************************************************************************
    async componentWillMount()
    {
        //Main build.
        //await this.build();

        //Head content.
        //await this.headBuild();

        //Title content.
        //await this.titleCurrentBuild();
    }
    //**************************************************************************************


    //Lifecycle method.
    //**************************************************************************************
    //componentDidMount()
    async componentDidMount()
    {
        //Variables.
        //const { gSystemConfig, elementMessage01, SyncSystemNS } = this.context;
        //const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context;


        //Logic.
        //----------------------
        /**/
        try
        {
            //Main build.
            await this.build();

            //Head content.
            await this.headBuild();

            //Title content.
            await this.titleCurrentBuild();
        }catch(asyncError){
            if(gSystemConfig.configDebug === true)
            {
                console.error(asyncError);
            }
        }finally{

        }
        //----------------------


        //Debug.
        try {
            //props.setTitleCurrent("", "new current title from child (props.setTitleCurrent)");
            //props.setTitleCurrent.setTitleCurrent("", "new current title from child (props.setTitleCurrent.setTitleCurrent)");
            //this.props.setTitleCurrent("", "new current title from child");
            //this.props.setTitleCurrent.setTitleCurrent("", "new current title from child");
            //this.props.this.setState({ titleCurrent: "new current title from child" });
            //this.props.setState({ titleCurrent: "new current title from child" });
            //props.this.setState({ titleCurrent: "new current title from child" });
        
            //console.log("this.props=", this.props);
            //console.log("props=", props);
            //console.log("this.props.match.params.idParentCategories=", this.props.match.params.idParentCategories);
            //console.log("this.props.location.query=", this.props.location.query);
            //console.log("this.props=", this.props);
            //console.log("this.props=", this.props.location.search);
            //console.log("this.paramsQueryString=", this.paramsQueryString);
        } catch (componentDidMountError) {
            if(gSystemConfig.configDebug === true)
            {
                console.log("componentDidMountError=", componentDidMountError);
            }
        }
        

        //console.log("this.props=", JSON.stringify(this.props));
    }
    //**************************************************************************************


    //Build object´s content.
    //**************************************************************************************
    async build()
    {
        //Variables.
        //----------------------
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; //Deconstruct variables (each variable is allocated to it´s correspondent name).

        var apiURLCategoriesDetailsCurrent = "";
        var apiCategoriesDetailsCurrentResponse;

        var apiURLProductsListing = "";
        var apiProductsListingResponse;
        //----------------------


        //Logic.
        //----------------------
        /**/
        try
        {
            //API - build URL string.
            //apiURLCategoriesDetailsCurrent = gSystemConfig.configAPIURL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPICategories + "/" + this._idParentProducts + "/?apiKey=" + SyncSystemNS.FunctionsCrypto.encryptValue(SyncSystemNS.FunctionsGeneric.contentMaskWrite(process.env.CONFIG_API_KEY_SYSTEM, "env"), 2);
            apiURLCategoriesDetailsCurrent = gSystemConfig.configAPIURL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPICategories + "/" + this._idParentProducts + "/?apiKey=createSecretPassword";
            
            //apiURLProductsListing = gSystemConfig.configAPIURL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPIProducts + "/" + this._idParentProducts + "/?apiKey=" + SyncSystemNS.FunctionsCrypto.encryptValue(SyncSystemNS.FunctionsGeneric.contentMaskWrite(process.env.CONFIG_API_KEY_SYSTEM, "env"), 2);
            apiURLProductsListing = gSystemConfig.configAPIURL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPIProducts + "/" + this._idParentProducts + "/?apiKey=createSecretPassword";
            //console.log("apiURLCategoriesDetailsCurrent=", apiURLCategoriesDetailsCurrent);

            //API - fetch data from backend.
            apiCategoriesDetailsCurrentResponse = await fetch(apiURLCategoriesDetailsCurrent);
            //this.objCategoriesCurrent = await response.json();
            this.objCategoriesCurrent = await apiCategoriesDetailsCurrentResponse.json();
            //console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);

            apiProductsListingResponse = await fetch(apiURLProductsListing);
            //this.objProductsCurrent = await response.json();
            this.objProductsListingJson = await apiProductsListingResponse.json();


            //Value definition.
            //----------------------
            this.titleCurrent = SyncSystemNS.FunctionsGeneric.removeHTML01(this.objCategoriesCurrent.ocdRecord.tblCategoriesTitle);
            //console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);

            this.objProductsListing = this.objProductsListingJson.oplRecords;
            this.arrProductsListing = this.objProductsListingJson.oplRecords.resultsProductsListing;


            //idParentCategories = this.props.match.params.idParentCategories;
            this.metaTitle = SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "configSiteTile");
            this.metaTitle += " - " + this.titleCurrent; //Bellow 160 characters.

            this.metaDescription = SyncSystemNS.FunctionsGeneric.removeHTML01(this.objCategoriesCurrent.ocdRecord.tblCategoriesMetaDescription); //Bellow 100 characters.
            this.metaKeywords = SyncSystemNS.FunctionsGeneric.removeHTML01(this.objCategoriesCurrent.ocdRecord.tblCategoriesKeywordsTags); //Bellow 60 characters.
            this.metaURLCurrent = gSystemConfig.configSystemURL + "/" + gSystemConfig.configRouteFrontendProducts + "/" + this._idParentProducts + "/";
            if(this._pageNumber)
            {
                this.metaURLCurrent += "?pageNumber=" + this._pageNumber;
            }
            //----------------------

            
            //Pagination.
            //----------------------
            if(gSystemConfig.enableProductsFrontendPagination != 0)
            {
                this._pagingTotalRecords = this.arrProductsListing.length
                this._pagingTotal = Math.ceil(this._pagingTotalRecords / this._pagingNRecords);
                

                //Slide array.
                //TODO: Review this logic.
                if(this._pagingTotal > 1)
                {
                    //Variables.
                    let arrProductsListingSliceStart = 0;
                    let arrProductsListingSliceEnd = 0;


                    //Logic.
                    if(this._pageNumber == 1)
                    {
                        arrProductsListingSliceStart = 0;
                    }else{
                        //arrProductsListingSliceStart = (this._pageNumber * this._pagingNRecords) - this._pagingNRecords - 1;
                        arrProductsListingSliceStart = (this._pageNumber * this._pagingNRecords) - this._pagingNRecords;
                    }

                    arrProductsListingSliceEnd = arrProductsListingSliceStart + this._pagingNRecords;

                    //Slice.
                    this.arrProductsListing = this.arrProductsListing.slice(arrProductsListingSliceStart, arrProductsListingSliceEnd);
                

                    //Debug.
                    //console.log("arrCategoriesListingSliceStart=", arrCategoriesListingSliceStart);
                    //console.log("arrCategoriesListingSliceEnd=", arrCategoriesListingSliceEnd);
                }


                //Debug.
                //console.log("this._idParentCategories=", this._idParentCategories);
                //console.log("this.objCategoriesCurrent.ocdRecord.tblCategoriesID=", this.objCategoriesCurrent.ocdRecord.tblCategoriesID);
                //console.log("this.arrCategoriesListing.length=", this.arrCategoriesListing.length);
                
                //console.log("this._pagingTotalRecords=", this._pagingTotalRecords);
                //console.log("this._pagingTotal=", this._pagingTotal);
                //console.log("this._pageNumber=", this._pageNumber);
                //console.log("this._pagingNRecords=", this._pagingNRecords);
            }
            //----------------------
        }catch(tryError){
            if(gSystemConfig.configDebug === true)
            {
                console.error(tryError);
            }
        }finally{
            //Update state.
            this.setState({ objProductsListing: this.objProductsListing });
            this.setState({ arrProductsListing: this.arrProductsListing });

            //Note: Place on the last part of the logic.
            this.setState({ dataLoaded: true });
        }
        //----------------------
    }
    //**************************************************************************************


    //Head build object´s content.
    //**************************************************************************************
    async headBuild()
    {
        //Variables.
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; //Deconstruct variables (each variable is allocated to it´s correspondent name).

        //Head elements.
        //document.title = this.titleCurrent; 
        document.title = this.metaTitle; 

        //Meta tags.
        document.querySelector('meta[name="title"]').setAttribute("content", this.metaTitle);
        document.querySelector('meta[name="description"]').setAttribute("content", this.metaDescription);
        document.querySelector('meta[name="keywords"]').setAttribute("content", this.metaKeywords);
        
        document.querySelector('meta[property="og:title"]').setAttribute("content", this.metaTitle);
        document.querySelector('meta[property="og:type"]').setAttribute("content", "website");
        document.querySelector('meta[property="og:url"]').setAttribute("content", this.metaURLCurrent);
        document.querySelector('meta[property="og:description"]').setAttribute("content", this.metaDescription);
        
        if(this.objCategoriesCurrent.ocdRecord.tblCategoriesImageMain != "")
        {
            document.querySelector('meta[property="og:image"]').setAttribute("content", gSystemConfig.configSystemURL + "/" +  gSystemConfig.configDirectoryFilesSD + "/" + this.objCategoriesCurrent.ocdRecord.tblCategoriesImageMain);
        }else{
            document.querySelector('meta[property="og:image"]').setAttribute("content", gSystemConfig.configSystemURL + "/" +  gSystemConfig.configDirectoryFilesLayoutSD + "/" + "icon-logo-og.png");
        }
        //document.querySelector('meta[property="og:image:secure_url"]').setAttribute("content", "Example with image url secure");
        document.querySelector('meta[property="og:image:alt"]').setAttribute("content", this.metaTitle);
        
        //document.querySelector('meta[property="og:locale"]').setAttribute("content", gSystemConfig.configBackendLanguage);
        document.querySelector('meta[property="og:locale"]').setAttribute("content", SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "configFrontendLanguage"));
        //document.querySelector('meta[property="og:title"]').setAttribute("content", "Example with title meta tag");


        //Debug.
        //console.log("this.objCategoriesListing=",this.objCategoriesListing);
    }
    //**************************************************************************************


    //Head build object´s content.
    //**************************************************************************************
    async titleCurrentBuild()
    {
        //Variables.
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; //Deconstruct variables (each variable is allocated to it´s correspondent name).


        //Title Current.
        FunctionsSyncSystem.elementMessage01("titleCurrent", this.titleCurrent);
        FunctionsSyncSystem.elementMessage01("titleCurrentMobile", this.titleCurrent);
    }
    //**************************************************************************************


    //Render.
    //**************************************************************************************
    render()
    {
        //Variables.
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; //Deconstruct variables (each variable is allocated to it´s correspondent name).


        //Head.
        //document.title ="Example with title tag"; 
        //document.getElementsByTagName("title").content="Example with title tag";
        /*
            <React.Fragment>
                Single component
            </React.Fragment>
        */


        //Check if data is loaded.
        //----------------------
        if(this.state.dataLoaded === false)
        {
            if(gSystemConfig.configDebug === true)
            {
                console.log("Still loading data.");
            }

            return '';
        }else{
            console.log("Data loaded.");
        }
        //----------------------


        //Debug.
        //console.log("this.state.arrProductsListing(frontend products listing component)=", this.state.arrProductsListing);
        //console.log("this._pagingTotal(inside render)=", this._pagingTotal);


        //Output.
        return(
            <React.Fragment>
                <section className="ss-frontend-layout-section-content01">
                    { /*Content.*/ }
                    <div style={{marginBottom: "30px"}}>
                        <FrontendContent 
                            idParentContent={ "147" } 
                            idTbContent={ "" } 
                            contentType={ "" } 
                            configLayoutType={ 2 } 
                            configContentNRecords={ "" } 
                            configContentSort={ "" }>
                                {/*arrCategoriesListing={ this.arrCategoriesListing } also works*/}
                        </FrontendContent>
                    </div>


                    <div className="d-none d-lg-block ss-frontend-layout-section-content01">
                        { /*Products records.*/ }
                        <FrontendProductsListingRecord 
                            arrProductsListing={ this.state.arrProductsListing } 
                            configLayoutType={ 4 }>
                        </FrontendProductsListingRecord>
                    </div>
                
                
                    <div className="d-lg-none" style={{position: 'relative', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '0px 0px 25px 0px', overflow: 'visible'}}>
                        { /*Products records.*/ }
                        <FrontendProductsListingRecord 
                            arrProductsListing={ this.state.arrProductsListing } 
                            configLayoutType={ 4 }>
                        </FrontendProductsListingRecord>
                    </div>


                    { /*pagination.*/ }
                    { this.state.arrProductsListing.length > 0 ?
                        <React.Fragment>
                            { /*pagination (custom).*/ }
                            { gSystemConfig.enableProductsFrontendPagination == 1 ?
                                <div style={{position: "relative", display: "block", overflow: "hidden", textAlign: "center", margin: "20px 0px 0px 0px" }}>
                                    <div style={{position: "relative", display: "block", overflow: "hidden"}}>
                                        { /*First page.*/ }
                                        { this._pageNumber == 1 ? 
                                            <a className="ss-frontend-products-listing-link01" 
                                                href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=1" + this.queryDefault }
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingFirst") }>
                                                    { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingFirst") }
                                            </a>
                                        :
                                            <a className="ss-frontend-products-listing-link01" 
                                                href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=1" + this.queryDefault }
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingFirst") }>
                                                    { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingFirst") }
                                            </a>
                                        }


                                        { /*Previous page.*/ }
                                        { this._pageNumber == 1 ? 
                                            <a className="ss-frontend-products-listing-link01" 
                                                href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=1" + this.queryDefault }
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingPrevious") }>
                                                    { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingPrevious") }
                                            </a>
                                        :
                                            <a className="ss-frontend-products-listing-link01" 
                                                href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" + (parseInt(this._pageNumber) - parseInt(1)) + this.queryDefault }
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingPrevious") }>
                                                    { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingPrevious") }
                                            </a>
                                        }


                                        { /*Next page.*/ }
                                        { this._pageNumber == this._pagingTotal ? 
                                            <a className="ss-frontend-products-listing-link01" 
                                                href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" +  this._pagingTotal + this.queryDefault } 
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingNext") }>
                                                    { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingNext") }
                                            </a>
                                        :
                                            <a className="ss-frontend-products-listing-link01" 
                                                href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" +  (parseInt(this._pageNumber) + parseInt(1)) + this.queryDefault } 
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingNext") }>
                                                    { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingNext") }
                                            </a>
                                        }


                                        { /*Last page.*/ }
                                        { this._pageNumber == this._pagingTotal ? 
                                            <a className="ss-frontend-products-listing-link01" 
                                                href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" +  this._pagingTotal + this.queryDefault } 
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingLast") }>
                                                    { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingLast") }
                                            </a>
                                        :
                                            <a className="ss-frontend-products-listing-link01" 
                                                href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" +  this._pagingTotal + this.queryDefault } 
                                                title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingLast") }>
                                                    { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingLast") }
                                            </a>
                                        }
                                    </div>

                                    { /*Numbering.*/ }
                                    { gSystemConfig.enableProductsFrontendPaginationNumbering == 1 ? 
                                        <div style={{position: "relative", display: "block", overflow: "hidden"}}>
                                            { /*Loop through total pages.*/ }
                                            {Array.from(Array(this._pagingTotal), (item, index) => {
                                                
                                                let pageNumberOutput = index + 1;
                                                
                                                return (
                                                    this._pageNumber == pageNumberOutput ?
                                                        <span className="ss-frontend-products-pagination">
                                                                { pageNumberOutput }
                                                        </span>
                                                    :
                                                        <a className="ss-frontend-products-pagination-link" 
                                                            href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" + pageNumberOutput + this.queryDefault }
                                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingPageCounter01") + " " + pageNumberOutput }>
                                                                { pageNumberOutput }
                                                        </a>
                                                );
                                            })}
                                        </div>
                                    : ``}
                                </div>
                                :
                                ``
                            }


                            { /*Paging (bootstrap 4).*/ }
                            { /* ************************************************************************************** */ }
                            { gSystemConfig.enableProductsFrontendPagination == 11 ? 
                                this._pagingTotal != 0 ?
                                    <div className="container">
                                        { /*Pagination (bootstrap 4).*/ }
                                        <nav aria-label={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingPageLabel") }>
                                            <ul className="pagination"> { /*justify-content-center (centered) | justify-content-end (aligned right*/ }
                                                { /*First page.*/ }
                                                { this._pageNumber == 1 ? 
                                                    <li className="page-item disabled">
                                                        <a className="page-link" 
                                                            href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=1" + this.queryDefault }
                                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingFirst") }>
                                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingFirst") }
                                                        </a>
                                                    </li>
                                                :
                                                    <li className="page-item">
                                                        <a className="page-link" 
                                                            href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=1" + this.queryDefault }
                                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingFirst") }>
                                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingFirst") }
                                                        </a>
                                                    </li>
                                                }


                                                { /*Previous page.*/ }
                                                { this._pageNumber == 1 ? 
                                                    <li className="page-item disabled">
                                                        <a className="page-link" 
                                                            href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=1" + this.queryDefault }
                                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingPrevious") }>
                                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingPrevious") }
                                                        </a>
                                                    </li>
                                                :
                                                    <li className="page-item">
                                                        <a className="page-link" 
                                                            href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" + (parseInt(this._pageNumber) - parseInt(1)) + this.queryDefault }
                                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingPrevious") }>
                                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingPrevious") }
                                                        </a>
                                                    </li>
                                                }


                                                { /*Numbering.*/ }
                                                { gSystemConfig.enableProductsFrontendPaginationNumbering == 1 ? 
                                                    <React.Fragment>
                                                        { /*Loop through total pages.*/ }
                                                        {Array.from(Array(this._pagingTotal), (item, index) => {
                                                            
                                                            let pageNumberOutput = index + 1;
                                                            
                                                            return (
                                                                this._pageNumber == pageNumberOutput ?
                                                                    <li className="page-item active">
                                                                        <a className="page-link" 
                                                                            href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" + pageNumberOutput + this.queryDefault }
                                                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingPageCounter01") + " " + pageNumberOutput }>
                                                                                { pageNumberOutput }
                                                                        </a>
                                                                    </li>
                                                                :
                                                                    <li className="page-item">
                                                                        <a className="page-link" 
                                                                            href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" + pageNumberOutput + this.queryDefault }
                                                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingPageCounter01") + " " + pageNumberOutput }>
                                                                                { pageNumberOutput }
                                                                        </a>
                                                                    </li>
                                                            );
                                                        })}
                                                    </React.Fragment>
                                                : ``}
                                                

                                                { /*Next page.*/ }
                                                { this._pageNumber == this._pagingTotal ? 
                                                    <li className="page-item disabled">
                                                        <a className="page-link" 
                                                            href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" +  this._pagingTotal + this.queryDefault } 
                                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingNext") }>
                                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingNext") }
                                                        </a>
                                                    </li>
                                                :
                                                    <li className="page-item">
                                                        <a className="page-link" 
                                                            href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" +  (parseInt(this._pageNumber) + parseInt(1)) + this.queryDefault } 
                                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingNext") }>
                                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingNext") }
                                                        </a>
                                                    </li>
                                                }


                                                { /*Last page.*/ }
                                                { this._pageNumber == this._pagingTotal ? 
                                                    <li className="page-item disabled">
                                                        <a className="page-link" 
                                                            href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" +  this._pagingTotal } 
                                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingLast") }>
                                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingLast") }
                                                        </a>
                                                    </li>
                                                :
                                                    <li className="page-item">
                                                        <a className="page-link" 
                                                            href={ "/" + gSystemConfig.configRouteFrontendProducts + "/" +  this._idParentProducts + "?pageNumber=" +  this._pagingTotal } 
                                                            title={ SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingLast") }>
                                                                { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "backendPagingLast") }
                                                        </a>
                                                    </li>
                                                }
                                            </ul>
                                        </nav>
                                    </div>
                                : ``
                            : ``}
                            { /* ************************************************************************************** */ }
                        </React.Fragment>
                    :
                        ``
                    }
                </section>
            </React.Fragment>
            );
        }
        //**************************************************************************************
    

}

export default FrontendProductsListing;