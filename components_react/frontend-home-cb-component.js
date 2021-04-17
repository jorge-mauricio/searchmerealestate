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
//import FrontendCategoriesListingRecord from "./frontend-categories-listing-record-cb-component.jsx";
//import FrontendCategoriesListingRecord from "./frontend-categories-listing-record-cb-component.js";
//import FrontendBanners from "./frontend-banners-cb-component.js";
import FrontendProducts from "./frontend-products-cb-component.js";
import FrontendContent from "./frontend-content-cb-component.js";
//----------------------


class FrontendHome extends Component
{
    //Context.
    static contextType = SyncSystemNSContext;


    //Constructor.
    //**************************************************************************************
    constructor(props, context)
    {
        //Component options.
        //configLayoutType: 1 - div layout (custom) | 11 - div layout (bootstrap) | 111 - responsive


        super(props, context);

        //Variables.
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem, qs } = this.context;


        //Properties.
        //----------------------
        this.objParametersQueryString = qs.parse(this.props.location.search);
        this.configLayoutType = 111;
        //this._idParentCategories = 0;

        //this._pagingNRecords = gSystemConfig.configCategoriesFrontendPaginationNRecords;
        //this._pagingTotalRecords = 0;
        //this._pagingTotal = 0;
        ////this._pageNumber = this.props.location.query.pageNumber;
        //this._pageNumber = 1;
        this._masterPageFrontendSelect = "";

        this._messageSuccess = "";
        this._messageError = "";
        this._messageAlert = "";
        //this._nRecords = "";

        this.queryDefault = "";

        //this.objCategoriesCurrent = {};
        this.titleCurrent = "";

        //this.objCategoriesListing = {};
        //this.arrCategoriesListing = [];

        this.metaTitle = "";
        this.metaDescription = "";
        this.metaKeywords = "";
        this.metaURLCurrent = "";
        //----------------------


        //Value definition - props parameters.
        //----------------------
        /*
        if(this.props.match.params.idParentCategories)
        {
            this._idParentCategories = this.props.match.params.idParentCategories;
        }
        */
        //----------------------


        //Value definition - query string.
        //----------------------
        /*
        if(this.objParametersQueryString.pageNumber)
        {
            this._pageNumber = this.objParametersQueryString.pageNumber;
        }
        */

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

        /*
        if(this.objParametersQueryString.nRecords)
        {
            this._nRecords = this.objParametersQueryString.nRecords;
        }
        */
        //----------------------
        

        //Default query.
        if(this._masterPageFrontendSelect)
        {
            this.queryDefault += "&masterPageFrontendSelect=" + this._masterPageFrontendSelect;
        }


        /**/
        //State creation.
        this.state = {
            //objCategoriesListing: this.objCategoriesListing,
            //arrCategoriesListing: this.arrCategoriesListing,
            dataLoaded: false
        };


        //Bind objects, methods and functions.
        //this.objCategoriesListing = this.objCategoriesListing.bind(this);
        this.build = this.build.bind(this);
        this.headBuild = this.headBuild.bind(this);
        this.titleCurrentBuild = this.titleCurrentBuild.bind(this);


        //Build.
        (async function(){ 
            try{
                //await this.build();
                //this.build();
            }catch(asyncError){
                if(gSystemConfig.configDebug === true)
                {
                    console.error(asyncError);
                }
            }finally{
                
            }
        })();


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
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context;


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



            /*
            fetch("http://localhost:3000/api/categories/details/813")
            .then(response => response.json())
            .then((data)=>{
                this.objCategoriesCurrent = data;

                //Define value - current category title.
                this.titleCurrent = this.objCategoriesCurrent.tblCategoriesTitle;

                //Set state.
                //this.setState({titleCurrent: "testing after fetch"});


                //Debug.
                console.log("this.titleCurrent=",this.titleCurrent);
                console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);
            });
            */


            //Check if this._idParentCategories is number. If not, search for the id based on the friendly name.
            

            //API - fetch data from backend.
            //var response = await fetch("http://localhost:3000/api/categories/details/813");
            //this.objCategoriesCurrent = await response.json();
            //console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);
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
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context; //Deconstruct variables (each variable is allocated to it´s correspondent name).
        console.log("gSystemConfig (inside home cb component)=", gSystemConfig);

        //Logic.
        //----------------------
        /**/
        try
        {
            //const tagsMeta = document.getElementsByTagName('meta');
            //var idParentCategories = ""
            //var titleCurrent = ""
            //var apiURLCategoriesDetailsCurrent = "";
            //var apiCategoriesDetailsCurrentResponse;


            //API - build URL string.
            //apiURLCategoriesDetailsCurrent = "http://localhost:3000/api/categories/details/813"; //http://localhost:3000/api/categories/813/?apiKey=createSecretPassword
            //apiURLCategoriesDetailsCurrent = process.env.CONFIG_API_URL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPICategories + "/" + gSystemConfig.configRouteAPIDetails + "/" + this._idParentCategories + "?apiKey=" + process.env.CONFIG_API_KEY_SYSTEM;
            //apiURLCategoriesDetailsCurrent = process.env.CONFIG_API_URL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPICategories + "/" + gSystemConfig.configRouteAPIDetails + "/" + this._idParentCategories + "?apiKey=" + FunctionsCrypto.encryptValue(FunctionsGeneric.contentMaskWrite(process.env.CONFIG_API_KEY_SYSTEM, "env"), 2);
            //apiURLCategoriesDetailsCurrent = gSystemConfig.configAPIURL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPICategories + "/" + gSystemConfig.configRouteAPIDetails + "/" + this._idParentCategories + "?apiKey=" + FunctionsCrypto.encryptValue(FunctionsGeneric.contentMaskWrite(process.env.CONFIG_API_KEY_SYSTEM, "env"), 2);
            //apiURLCategoriesDetailsCurrent = gSystemConfig.configAPIURL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPICategories + "/" + this._idParentCategories + "?apiKey=" + SyncSystemNS.FunctionsCrypto.encryptValue(SyncSystemNS.FunctionsGeneric.contentMaskWrite(process.env.CONFIG_API_KEY_SYSTEM, "env"), 2);
            //apiURLCategoriesDetailsCurrent = process.env.CONFIG_API_URL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPICategories + "/" + gSystemConfig.configRouteAPIDetails + "/" + this._idParentCategories + "?apiKey=" + SyncSystemNS.FunctionsCrypto.encryptValue(SyncSystemNS.FunctionsGeneric.contentMaskWrite(process.env.CONFIG_API_KEY_SYSTEM, "env"), 2);
            //apiURLCategoriesDetailsCurrent = process.env.REACT_APP_CONFIG_API_URL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPICategories + "/" + gSystemConfig.configRouteAPIDetails + "/" + this._idParentCategories;
            //apiURLCategoriesDetailsCurrent = CONFIG_API_URL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPICategories + "/" + gSystemConfig.configRouteAPIDetails + "/" + this._idParentCategories;
            //apiURLCategoriesDetailsCurrent = REACT_APP_CONFIG_API_URL + "/" + gSystemConfig.configRouteAPI + "/" + gSystemConfig.configRouteAPICategories + "/" + gSystemConfig.configRouteAPIDetails + "/" + this._idParentCategories;
            //console.log("apiURLCategoriesDetailsCurrent=", apiURLCategoriesDetailsCurrent);


            //API - fetch data from backend.
            //var response = await fetch(apiURLCategoriesDetailsCurrent);
            //apiCategoriesDetailsCurrentResponse = await fetch(apiURLCategoriesDetailsCurrent);
            //this.objCategoriesCurrent = await response.json();
            //this.objCategoriesCurrent = await apiCategoriesDetailsCurrentResponse.json();
            //console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);


            //Value definition.
            //this.titleCurrent = this.objCategoriesCurrent.tblCategoriesTitle;
            //this.titleCurrent = SyncSystemNS.FunctionsGeneric.removeHTML01(this.objCategoriesCurrent.ocdRecord.tblCategoriesTitle);
            this.titleCurrent = SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "frontendHomeTitleMain");
            //console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);

            //idParentCategories = this.props.match.params.idParentCategories;

            //this.metaTitle = SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "frontendHomeTitleMain") + " - " + this.titleCurrent; //Bellow 160 characters.
            this.metaTitle = SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "configSiteTile");
            this.metaTitle += " - " + this.titleCurrent; //Bellow 160 characters.

            //this.metaDescription = SyncSystemNS.FunctionsGeneric.removeHTML01(this.objCategoriesCurrent.ocdRecord.tblCategoriesMetaDescription); //Bellow 100 characters.
            this.metaDescription = SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "configSiteDescription"); //Bellow 100 characters.
            
            //this.metaKeywords = SyncSystemNS.FunctionsGeneric.removeHTML01(this.objCategoriesCurrent.ocdRecord.tblCategoriesKeywordsTags); //Bellow 60 characters.
            this.metaKeywords = SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "configSiteKeywords"); //Bellow 60 characters.
            
            this.metaURLCurrent = gSystemConfig.configSystemURL + "/";
            
            //this.objCategoriesListing = this.objCategoriesCurrent.oclRecords;
            //this.arrCategoriesListing = this.objCategoriesCurrent.oclRecords.resultsCategoriesListing;
            

            //Update state.
            //this.setState({ objCategoriesListing: this.objCategoriesListing });
            
            //this.setState({ arrCategoriesListing: this.arrCategoriesListing });

            //Note: Place on the last part of the logic.
            this.setState({ dataLoaded: true });
            


            //Check if this._idParentCategories is number. If not, search for the id based on the friendly name.
            

            //API - fetch data from backend.
            /*
            fetch("http://localhost:3000/api/categories/details/813")
            .then(response => response.json())
            .then((data)=>{
                this.objCategoriesCurrent = data;
                
                //Debug.
                console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);
            });
            */
            
            //var response = await fetch("http://localhost:3000/api/categories/details/813");
            //this.objCategoriesCurrent = await response.json();
            //console.log("this.objCategoriesCurrent=",this.objCategoriesCurrent);

        }catch(asyncError){
            if(gSystemConfig.configDebug === true)
            {
                console.error(asyncError);
            }
        }finally{

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
        /**/
        document.querySelector('meta[name="title"]').setAttribute("content", this.metaTitle);
        document.querySelector('meta[name="description"]').setAttribute("content", this.metaDescription);
        document.querySelector('meta[name="keywords"]').setAttribute("content", this.metaKeywords);
        
        document.querySelector('meta[property="og:title"]').setAttribute("content", this.metaTitle);
        document.querySelector('meta[property="og:type"]').setAttribute("content", "website");
        document.querySelector('meta[property="og:url"]').setAttribute("content", this.metaURLCurrent);
        document.querySelector('meta[property="og:description"]').setAttribute("content", this.metaDescription);
        
        //if(this.objCategoriesCurrent.ocdRecord.tblCategoriesImageMain != "")
        //{
            //document.querySelector('meta[property="og:image"]').setAttribute("content", gSystemConfig.configSystemURL + "/" +  gSystemConfig.configDirectoryFilesSD + "/" + this.objCategoriesCurrent.ocdRecord.tblCategoriesImageMain);
        //}else{
            document.querySelector('meta[property="og:image"]').setAttribute("content", gSystemConfig.configSystemURL + "/" +  gSystemConfig.configDirectoryFilesLayoutSD + "/" + "icon-logo-og.png");
        //}
        //document.querySelector('meta[property="og:image:secure_url"]').setAttribute("content", "Example with image url secure");
        document.querySelector('meta[property="og:image:alt"]').setAttribute("content", this.metaTitle);
        
        //document.querySelector('meta[property="og:locale"]').setAttribute("content", gSystemConfig.configBackendLanguage);
        document.querySelector('meta[property="og:locale"]').setAttribute("content", SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "configFrontendLanguage"));
       
        //document.querySelector('meta[property="og:title"]').setAttribute("content", "Example with title meta tag");
        

        //document.getElementsByTagName("meta")["og:title"].content = "Example with title meta tag";
        //document.head.querySelector('meta[name=og:title]').content = 'Example with title meta tag';
        

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
        //elementMessage01("titleCurrent", "Example of current title");
        //FunctionsSyncSystem.elementMessage01("titleCurrent", "Example of current title");
        //elementMessage01("titleCurrent", this.titleCurrent); //working
        //console.log("FunctionsSyncSystem=", FunctionsSyncSystem);
        FunctionsSyncSystem.elementMessage01("titleCurrent", this.titleCurrent);
        FunctionsSyncSystem.elementMessage01("titleCurrentMobile", this.titleCurrent);
    }
    //**************************************************************************************
    

    //Render.
    //**************************************************************************************
    render()
    {
        //Variables.
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem } = this.context;


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
        }
        //----------------------


        //Debug.
        //console.log("this._pagingTotal(inside render)=", this._pagingTotal);

        //Output.
        return(
            <React.Fragment>
                <React.Fragment>
                    { /*div layout (responsive). */}
                    { this.configLayoutType == 1 ?
                        <React.Fragment>
                            <section className="ss-frontend-layout-section-content01 ss-frontend-text01">
                                { /*Content.*/ }
                                <FrontendContent 
                                    idParentContent={ "106" } 
                                    idTbContent={ "" } 
                                    contentType={ "" } 
                                    configLayoutType={ 2 } 
                                    configContentNRecords={ "" } 
                                    configContentSort={ "" }>
                                        {/*arrCategoriesListing={ this.arrCategoriesListing } also works*/}
                                </FrontendContent>
                            </section>
                        </React.Fragment>
                    :``
                    }


                    { /*div layout (bootstrap). */}
                    { this.configLayoutType == 11 ?
                        <section className="container">
                            <div className="alert alert-success" role="alert" style={{textAlign: "center"}}>

                            </div>

                            bootstrap
                        </section>
                    :``
                    }


                    { /*div layout (responsive). */}
                    { this.configLayoutType == 111 ?
                        <React.Fragment>
                            { /*Desktop */}
                            <div className="d-none d-lg-block d-xl-block">
                                <section className="ss-frontend-layout-section-content01 ss-frontend-text01">
                                    { /*Content.*/ }
                                    <FrontendContent 
                                        idParentContent={ "106" } 
                                        idTbContent={ "" } 
                                        contentType={ "" } 
                                        configLayoutType={ 2 } 
                                        configContentNRecords={ "" } 
                                        configContentSort={ "" }>

                                    </FrontendContent>
                                </section>


                                {/*Features.*/}
                                <h2 className="ss-frontend-heading02" style={{position: 'relative', display: 'block', width: '100%', height: '180px', lineHeight: '150px', backgroundImage: 'url(/files-layout/frontend-heading-bg03.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', textAlign: 'center', margin: '0px', padding: '0px', overflow: 'hidden'}}>
                                    Investment Opportunities
                                </h2>
                                <section className="ss-frontend-text01" style={{position: 'relative', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', clear: 'both', margin: '0px 0px 60px 0px'}}>
                                    {/*Box.*/}
                                    <div style={{position: 'relative', display: 'block', width: '320px', height: '455px', backgroundImage: 'url(/files-layout/layout-desktop-features-bg01.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                                        <a href={"/" + gSystemConfig.configRouteFrontendContent + "/109/?idTbForms=117"} className="ss-frontend-features-link01" style={{"--ssFrontendFeaturesBG": 'url(/files-layout/frontend-icon-send.png)', "--ssFrontendFeaturesBGhover": 'url(/files-layout/frontend-icon-send-a.png)', backgroundPosition: 'center 20px'}}>
                                            <span>
                                                Send Us Your 
                                                <br />
                                                Project 
                                            </span>
                                        </a>
                                        <p style={{position: 'relative', display: 'block', width: '190px', transform: 'translateX(5px)', margin: 'auto', top: '60px', textAlign: 'center'}}>
                                            Check out our opportunities to buy, rent or invest in real estate in the main cities around the world.
                                        </p>
                                        <a href={"/" + gSystemConfig.configRouteFrontendContent + "/109/?idTbForms=117"} className="ss-frontend-features-link02">
                                            More Info
                                        </a>
                                    </div>

                                    {/*Box.*/}
                                    <div style={{position: 'relative', display: 'block', width: '320px', height: '455px', backgroundImage: 'url(/files-layout/layout-desktop-features-bg01.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                                        <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/108/"} className="ss-frontend-features-link01" style={{"--ssFrontendFeaturesBG": 'url(/files-layout/frontend-icon-showcase.png)', "--ssFrontendFeaturesBGhover": 'url(/files-layout/frontend-icon-showcase-a.png)'}}>
                                            <span>
                                                Real Estate
                                                <br />
                                                Showcase
                                            </span>
                                        </a>
                                        <p style={{position: 'relative', display: 'block', width: '190px', transform: 'translateX(5px)', margin: 'auto', top: '60px', textAlign: 'center'}}>
                                            If you have an interesting venture or project, send it to us and we will be able to assess possible partnerships or buyers.
                                        </p>
                                        <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/108/"} className="ss-frontend-features-link02">
                                            More Info
                                        </a>
                                    </div>

                                    {/*Box.*/}
                                    <div style={{position: 'relative', display: 'block', width: '320px', height: '455px', backgroundImage: 'url(/files-layout/layout-desktop-features-bg01.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                                        <a href="#" className="ss-frontend-features-link01" style={{"--ssFrontendFeaturesBG": 'url(/files-layout/frontend-icon-contact.png)', "--ssFrontendFeaturesBGhover": 'url(/files-layout/frontend-icon-contact-a.png)', backgroundPosition: 'center 20px'}}>
                                            <span>
                                            Contact
                                            </span>
                                        </a>
                                        <p style={{position: 'relative', display: 'block', width: '190px', transform: 'translateX(5px)', margin: 'auto', top: '60px', textAlign: 'center'}}>
                                            Get in touch with us to start a customized professional relationship and help you in your pursuit.
                                        </p>
                                        <a href={"/" + gSystemConfig.configRouteFrontendContent + "/110/?idTbForms=115"} className="ss-frontend-features-link02">
                                            More Info
                                        </a>
                                    </div>
                                </section>


                                {/*Cities.*/}
                                <section className="ss-frontend-text02" style={{position: 'relative', display: 'block', width: '100vw', backgroundColor: '#0082c6', overflow: 'hidden', left: '50%', transform: 'translateX(-50%)'}}>
                                    <div style={{position: 'relative', display: 'block', width: '50%', height: '465px', backgroundImage: 'url(/files-layout/layout-desktop-locations-ny.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom center', clear: 'both'}}>
                                        <div style={{position: 'absolute', display: 'flex', alignItems: 'center', top: '0px', right: '-507px', width: '490px', height: '100%', textAlign: 'right'}}>
                                            <div>
                                                <div className="ss-frontend-heading03">
                                                    New York - United States
                                                </div>
                                                <div style={{marginTop: '10px'}}>
                                                    Real estate for rent, purchase or to invest
                                                    <br />
                                                    in the most powerful country.
                                                </div>
                                                <div style={{marginTop: '30px'}}>
                                                    Give us a call:
                                                    <br />
                                                    +1 (646) 571-5415
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{position: 'relative', display: 'block', width: '50%', height: '465px', backgroundImage: 'url(/files-layout/layout-desktop-locations-de.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom center', float: 'right', clear: 'both'}}>
                                        <div style={{position: 'absolute', display: 'flex', alignItems: 'center', textAlign: 'left', top: '0px', left: '-507px', width: '490px', height: '100%'}}>
                                            <div>
                                                <div className="ss-frontend-heading03">
                                                    Europe - Germany
                                                </div>
                                                <div style={{marginTop: '10px'}}>
                                                    Real estate investments and opportunities
                                                    <br />
                                                    all over Europe.
                                                </div>
                                                <div style={{marginTop: '30px'}}>
                                                    Give us a call:
                                                    <br />
                                                    +49 (0) 6430 92 60 10
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{position: 'relative', display: 'block', width: '50%', height: '465px', backgroundImage: 'url(/files-layout/layout-desktop-locations-rj.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', clear: 'both'}}>
                                        <div style={{position: 'absolute', display: 'flex', alignItems: 'center', textAlign: 'right', top: '0px', right: '-507px', width: '490px', height: '100%'}}>
                                            <div>
                                                <div className="ss-frontend-heading03">
                                                    Rio de Janerio, 
                                                    <br />
                                                    São Paulo - Brazil
                                                </div>
                                                <div style={{marginTop: '10px'}}>
                                                    Access to real estate in the most important touristic 
                                                    <br />
                                                    state in South America, along with great business 
                                                    <br />
                                                    investments in the biggest city.
                                                </div>
                                                <div style={{marginTop: '30px'}}>
                                                    Give us a call:
                                                    <br />
                                                    São Paulo: +55 (11) 3230-8388
                                                    <br />
                                                    Rio de Janeiro: +55 (21) 3285-8388
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>


                                {/*Showcase.*/}
                                <h2 className="ss-frontend-heading02" style={{position: 'relative', display: 'block', width: '100%', height: '180px', lineHeight: '150px', backgroundImage: 'url(/files-layout/frontend-heading-bg03.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', textAlign: 'center', margin: '0px', padding: '0px', overflow: 'hidden', zIndex: 1, pointerEvents: 'none'}}>
                                    Showcase
                                </h2>
                                <section className="ss-frontend-layout-section-content01 ss-frontend-text01" style={{margin: '0px 0px 60px 0px', overflow: 'visible'}}>
                                    <a href={"/" + gSystemConfig.configRouteFrontendContent + "/109/?idTbForms=117"} className="ss-frontend-link02" style={{position: 'absolute', display: 'block', left: '50%', transform: 'translate(-50%, 0)', top: '-50px'}}>
                                        Access Our Full Listing
                                    </a>

                                    { /*Products component. */}
                                    <FrontendProducts
                                        idParentProducts={"108"} 
                                        idRegisterUser={""} 

                                        configLayoutType={4} 
                                        configProductsNRecords={"3"} 
                                        configProductsSort={gSystemConfig.configProductsSort} 

                                        activation={1} 
                                        activation1={""} 
                                        activation2={""} 
                                        activation3={""} 
                                        activation4={""} 
                                        activation5={""}>

                                    </FrontendProducts>
                                </section>


                                {/*Indexes.*/}
                                <h2 className="ss-frontend-heading02" style={{position: 'relative', display: 'block', width: '100%', height: '180px', lineHeight: '150px', backgroundImage: 'url(/files-layout/frontend-heading-bg03.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', textAlign: 'center', margin: '0px', padding: '0px', overflow: 'hidden'}}>
                                    Indexes
                                </h2>
                                <section className="ss-frontend-layout-section-content01 ss-frontend-text01" style={{margin: '25px 0px 60px 0px'}}>
                                    <div style={{position: 'relative', display: 'block', width: '940px', height: '480px', backgroundColor: '#f3f3f3', borderRadius: '20px', margin: 'auto'}}>
                                        <a onclick className="ss-frontend-indexes-link01" style={{left: '12px', top: '30px'}}>
                                            <span style={{position: 'relative', display: 'block', fontSize: '26px', marginLeft: '15px', marginTop: '22px'}}>
                                                Exchange
                                            </span>
                                            <span style={{position: 'relative', display: 'block', fontSize: '14px', marginLeft: '15px', marginTop: '2px'}}>
                                                Quick glimpse of the rates of the main currencies.
                                            </span>
                                        </a>

                                        <a onclick className="ss-frontend-indexes-link01" style={{left: '12px', top: '122px'}}>
                                            <span style={{position: 'relative', display: 'block', fontSize: '26px', marginLeft: '15px', marginTop: '22px'}}>
                                                Markets
                                            </span>
                                            <span style={{position: 'relative', display: 'block', fontSize: '14px', marginLeft: '15px', marginTop: '2px'}}>
                                                Check some of the most important indexes.
                                            </span>
                                        </a>

                                        <div style={{position: 'absolute', display: 'block', width: '350px', height: '270px', left: '12px', top: '214px', backgroundImage: 'linear-gradient(#e0e1e3, #f3f3f3)'}}>
                                        
                                        </div>

                                        <img src="/files-layout/frontend-desktop-indexes-element01.png" alt="Element" style={{position: 'absolute', display: 'block', left: '347px', top: '30px'}} />
                                    
                                        {/*Markets.*/}
                                        <div id="divIndexesMarket" style={{position: 'absolute', display: 'block', width: '555px', height: '440px', left: '370px', top: '30px'}}>
                                            <h4 className="ss-frontend-heading04" style={{position: 'relative', display: 'block', borderBottom: '1px solid #a2b9c6', textAlign: 'right', marginBottom: '10px'}}>
                                                Markets
                                            </h4>
                                            <div className="ss-frontend-text03" style={{position: 'relative', display: 'block', width: '100%', height: '45px', lineHeight: '45px', textIndent: '10px', backgroundColor: '#ffffff'}}>
                                                xyz
                                                <span style={{float: 'right', paddingRight: '10px'}}>
                                                    123
                                                </span>
                                            </div>
                                            <div className="ss-frontend-text03" style={{position: 'relative', display: 'block', width: '100%', height: '45px', lineHeight: '45px', textIndent: '10px'}}>
                                                xyz
                                                <span style={{float: 'right', paddingRight: '10px'}}>
                                                    123
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            </div>


                            { /*Mobile */}
                            <div className="d-lg-none">
                                <section class="ss-frontend-mobile-layout-section-content01 ss-frontend-text01">
                                    { /*Content.*/ }
                                    <FrontendContent 
                                        idParentContent={ "106" } 
                                        idTbContent={ "" } 
                                        contentType={ "" } 
                                        configLayoutType={ 2 } 
                                        configContentNRecords={ "" } 
                                        configContentSort={ "" }>

                                    </FrontendContent>
                                </section>

                                {/*Features.*/}
                                <h2 className="ss-frontend-heading02" style={{position: 'relative', display: 'block', width: '95%', height: '115px', lineHeight: '100px', backgroundImage: 'url(/files-layout/frontend-mobile-subheading-bg01-right.png), url(/files-layout/frontend-mobile-subheading-bg01-left.png), url(/files-layout/frontend-mobile-subheading-bg01.png)', backgroundRepeat: 'no-repeat, no-repeat, repeat-x', backgroundPosition: 'right top, left top, center top', textAlign: 'center', fontSize: '20px', margin: 'auto', padding: '0px', overflow: 'hidden'}}>
                                    Investment Opportunities
                                </h2>
                                <section className="ss-frontend-text01" style={{position: 'relative', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', clear: 'both', margin: '0px 0px 25px 0px'}}>
                                    {/*Box.*/}
                                    <div style={{position: 'relative', display: 'block', width: '320px', height: '455px', backgroundImage: 'url(/files-layout/layout-desktop-features-bg01.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                                        <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/108/"} className="ss-frontend-features-link01" style={{"--ssFrontendFeaturesBG": 'url(/files-layout/frontend-icon-showcase.png)', "--ssFrontendFeaturesBGhover": 'url(/files-layout/frontend-icon-showcase-a.png)'}}>
                                            <span>
                                                Real Estate
                                                <br />
                                                Showcase
                                            </span>
                                        </a>
                                        <p style={{position: 'relative', display: 'block', width: '190px', transform: 'translateX(5px)', margin: 'auto', top: '60px', textAlign: 'center'}}>
                                            If you have an interesting venture or project, send it to us and we will be able to assess possible partnerships or buyers.
                                        </p>
                                        <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/108/"} className="ss-frontend-features-link02">
                                            More Info
                                        </a>
                                    </div>

                                    {/*Box.*/}
                                    <div style={{position: 'relative', display: 'block', width: '320px', height: '455px', backgroundImage: 'url(/files-layout/layout-desktop-features-bg01.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                                        <a href={"/" + gSystemConfig.configRouteFrontendContent + "/109/?idTbForms=117"} className="ss-frontend-features-link01" style={{"--ssFrontendFeaturesBG": 'url(/files-layout/frontend-icon-send.png)', "--ssFrontendFeaturesBGhover": 'url(/files-layout/frontend-icon-send-a.png)', backgroundPosition: 'center 20px'}}>
                                        <span>
                                            Send Us Your 
                                            <br />
                                            Investment Project 
                                        </span>
                                        </a>
                                        <p style={{position: 'relative', display: 'block', width: '190px', transform: 'translateX(5px)', margin: 'auto', top: '60px', textAlign: 'center'}}>
                                            Check out our opportunities to buy, rent or invest in real estate in the main cities around the world.
                                        </p>
                                        <a href={"/" + gSystemConfig.configRouteFrontendContent + "/109/?idTbForms=117"} className="ss-frontend-features-link02">
                                            More Info
                                        </a>
                                    </div>

                                    {/*Box.*/}
                                    <div style={{position: 'relative', display: 'block', width: '320px', height: '455px', backgroundImage: 'url(/files-layout/layout-desktop-features-bg01.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                                        <a href={"/" + gSystemConfig.configRouteFrontendContent + "/110/?idTbForms=115"} className="ss-frontend-features-link01" style={{"--ssFrontendFeaturesBG": 'url(/files-layout/frontend-icon-contact.png)', "--ssFrontendFeaturesBGhover": 'url(/files-layout/frontend-icon-contact-a.png)', backgroundPosition: 'center 20px'}}>
                                            <span>
                                                Contact
                                            </span>
                                        </a>
                                        <p style={{position: 'relative', display: 'block', width: '190px', transform: 'translateX(5px)', margin: 'auto', top: '60px', textAlign: 'center'}}>
                                            Get in touch with us to start a customized professional relationship and help you in your pursuit.
                                        </p>
                                        <a href={"/" + gSystemConfig.configRouteFrontendContent + "/110/?idTbForms=115"} className="ss-frontend-features-link02">
                                            More Info
                                        </a>
                                    </div>
                                </section>


                                {/*Cities.*/}
                                <section className="ss-frontend-text02" style={{position: 'relative', display: 'block', width: '100%', backgroundColor: '#0082c6', overflow: 'hidden'}}>
                                    <div style={{position: 'relative', display: 'block', width: '100%', height: '150px', backgroundImage: 'url(/files-layout/layout-desktop-locations-ny.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom center', backgroundSize: 'cover'}}>
                                    
                                    </div>

                                    <div style={{position: 'relative', display: 'block', textAlign: 'center', width: '100%', fontSize: '14px', lineHeight: '18px', padding: '25px 0px'}}>
                                        <div className="ss-frontend-heading03" style={{fontSize: '18px', lineHeight: '20px'}}>
                                            New York - United States
                                        </div>
                                        <div style={{marginTop: '0px'}}>
                                            Real estate for rent, purchase or to invest
                                            <br />
                                            in the most powerful country.
                                        </div>
                                        <div style={{marginTop: '20px'}}>
                                            Give us a call:
                                            <br />
                                            +1 (646) 571-5415
                                        </div>
                                    </div>

                                    <div style={{position: 'relative', display: 'block', width: '100%', height: '150px', backgroundImage: 'url(/files-layout/layout-desktop-locations-de.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom center', backgroundSize: 'cover'}}>
                                    
                                    </div>

                                    <div style={{position: 'relative', display: 'block', textAlign: 'center', width: '100%', fontSize: '14px', lineHeight: '18px', padding: '25px 0px'}}>
                                        <div className="ss-frontend-heading03" style={{fontSize: '18px', lineHeight: '20px'}}>
                                            Europe - Germany
                                        </div>
                                        <div style={{marginTop: '0px'}}>
                                            Real estate investments and opportunities
                                            <br />
                                            all over Europe.
                                        </div>
                                        <div style={{marginTop: '20px'}}>
                                            Give us a call:
                                            <br />
                                            +49 (0) 6430 92 60 10
                                        </div>
                                    </div>

                                    <div style={{position: 'relative', display: 'block', width: '100%', height: '150px', backgroundImage: 'url(/files-layout/layout-desktop-locations-rj.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', backgroundSize: 'cover'}}>
                                    
                                    </div>

                                    <div style={{position: 'relative', display: 'block', textAlign: 'center', width: '100%', fontSize: '14px', lineHeight: '18px', padding: '25px 0px'}}>
                                        <div className="ss-frontend-heading03" style={{fontSize: '18px', lineHeight: '20px'}}>
                                            Rio de Janerio, 
                                            <br />
                                            São Paulo - Brazil
                                        </div>
                                        <div style={{marginTop: '0px'}}>
                                            Access to real estate in the most important  
                                            <br />
                                            touristic state in South America, along with 
                                            <br />
                                            great business investments in the biggest city.
                                        </div>
                                        <div style={{marginTop: '20px'}}>
                                            Give us a call:
                                            <br />
                                            São Paulo: +55 (11) 3230-8388
                                            <br />
                                            Rio de Janeiro: +55 (21) 3285-8388
                                        </div>
                                    </div>
                                </section>


                                <h2 className="ss-frontend-heading02" style={{position: 'relative', display: 'block', width: '95%', height: '115px', lineHeight: '100px', backgroundImage: 'url(/files-layout/frontend-mobile-subheading-bg01-right.png), url(/files-layout/frontend-mobile-subheading-bg01-left.png), url(/files-layout/frontend-mobile-subheading-bg01.png)', backgroundRepeat: 'no-repeat, no-repeat, repeat-x', backgroundPosition: 'right top, left top, center top', textAlign: 'center', fontSize: '20px', margin: 'auto', padding: '0px', overflow: 'hidden'}}>
                                    Showcase
                                </h2>
                                <section style={{position: 'relative', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '0px 0px 25px 0px', overflow: 'visible'}}>
                                    { /*Products component. */}
                                    <FrontendProducts
                                        idParentProducts={"108"} 
                                        idRegisterUser={""} 

                                        configLayoutType={4} 
                                        configProductsNRecords={"3"} 
                                        configProductsSort={gSystemConfig.configProductsSort} 

                                        activation={1} 
                                        activation1={""} 
                                        activation2={""} 
                                        activation3={""} 
                                        activation4={""} 
                                        activation5={""}>

                                    </FrontendProducts>
                                </section>     

                                
                                <h2 className="ss-frontend-heading02" style={{position: 'relative', display: 'block', width: '95%', height: '115px', lineHeight: '100px', backgroundImage: 'url(/files-layout/frontend-mobile-subheading-bg01-right.png), url(/files-layout/frontend-mobile-subheading-bg01-left.png), url(/files-layout/frontend-mobile-subheading-bg01.png)', backgroundRepeat: 'no-repeat, no-repeat, repeat-x', backgroundPosition: 'right top, left top, center top', textAlign: 'center', fontSize: '20px', margin: 'auto', padding: '0px', overflow: 'hidden'}}>
                                    Indexes
                                </h2>
                                <section className="ss-frontend-mobile-layout-section-content01 ss-frontend-text01" style={{margin: '0px 0px 25px 0px'}}>
                                    <div style={{position: 'relative', display: 'block', width: '305px', height: '514px', backgroundColor: '#f3f3f3', borderRadius: '15px', margin: 'auto'}}>
                                        <a onclick className="ss-frontend-indexes-link01" style={{position: 'relative', paddingTop: '1px', top: '10px', marginLeft: 'auto', marginRight: 'auto', width: '290px'}}>
                                            <span style={{position: 'relative', display: 'block', fontSize: '26px', marginLeft: '15px', marginTop: '22px'}}>
                                                Exchange
                                            </span>
                                            <span style={{position: 'relative', display: 'block', fontSize: '14px', marginLeft: '15px', marginTop: '2px'}}>
                                                Quick glimpse of the rates of the main currencies.
                                            </span>
                                        </a>

                                        <a onclick className="ss-frontend-indexes-link01" style={{position: 'relative', paddingTop: '5px', top: '25px', marginLeft: 'auto', marginRight: 'auto', width: '290px'}}>
                                            <span style={{position: 'relative', display: 'block', fontSize: '26px', marginLeft: '15px', marginTop: '22px'}}>
                                                Markets
                                            </span>
                                            <span style={{position: 'relative', display: 'block', fontSize: '14px', marginLeft: '15px', marginTop: '2px'}}>
                                                Check some of the most important indexes.
                                            </span>
                                        </a>

                                        <img src="/files-layout/frontend-mobile-indexes-element01.png" alt="Element" style={{position: 'absolute', display: 'block', left: '0px', top: '200px'}} />
                                        
                                        <h4 className="ss-frontend-heading04" style={{position: 'relative', display: 'block', borderBottom: '1px solid #a2b9c6', textAlign: 'right', marginBottom: '10px', marginTop: '50px', marginRight: '5px', marginLeft: '5px'}}>
                                            Markets
                                        </h4>
                                        <div className="ss-frontend-text03" style={{position: 'relative', display: 'block', width: '97%', height: '45px', lineHeight: '45px', textIndent: '10px', backgroundColor: '#ffffff', marginRight: '5px', marginLeft: '5px'}}>
                                            xyz
                                            <span style={{float: 'right', paddingRight: '10px'}}>
                                                123
                                            </span>
                                        </div>
                                        <div className="ss-frontend-text03" style={{position: 'relative', display: 'block', width: '97%', height: '45px', lineHeight: '45px', textIndent: '10px', marginRight: '5px', marginLeft: '5px'}}>
                                            xyz
                                            <span style={{float: 'right', paddingRight: '10px'}}>
                                                123
                                            </span>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </React.Fragment>
                    :``
                    }
                </React.Fragment>

            </React.Fragment>

        );
    }
    //**************************************************************************************
}

export default FrontendHome;