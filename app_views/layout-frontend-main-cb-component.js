"use strict";

//Import Node Modules.
//----------------------
//import gSystemConfig from "../config-application.js";
//const gSystemConfig = require("../config-application.js"); //System configuration.
//const SyncSystemNS = require("../" + gSystemConfig.configDirectoryComponents + "/syncsystem-ns.js");
import { SyncSystemNSContext } from "../components_react/syncsystem-ns-cb-context.js";

//import React from "react";
import React, {Component} from "react"; //working
import ReactDOM from 'react-dom';
//import ReactDOMServer from 'react-dom/server';
//import {Helmet} from "react-helmet";
//import Safe from "react-safe";

//import HTMLReactParser from "html-react-parser"; //error / webpack //put in the context
//const Parser = require('html-react-parser');
//import Parser from 'html-react-parser/dist/html-react-parser';
//import ReactRenderHTML from "react-render-html";
//const HtmlToReactParser = require('html-to-react').Parser;
//import HtmlToReactParser from 'html-to-react'.Parser;

//const TrackingCode = require("../tracking-code");
import TrackingCode from "../tracking-code.js";

//CSS.
//import withStyles from 'isomorphic-style-loader/lib/withStyles';
import StylesFrontend from "../app_styles/styles-frontend.css";
//import StylesFrontend from ("../" + gSystemConfig.configDirectoryStyles + "/styles-frontend.css");

//import StylesFrontend from '/app_styles/styles-frontend.css'; 
//import "../app_js/functions-syncsystem.js";


//import "babel-polyfill";

//Popper.
//import Popper from "popper.js";
//window.Popper = Popper;
//import "../app_js/popper/popper.min.js";
//import Popper from "../app_js/popper/popper.min.js";

//JQuery.
//import $ from 'jquery';
//import jQuery from 'jquery';
//window.jQuery = jQuery;
//window.$ = jQuery;
//import $ from 'jquery';

//import * as $ from "jquery";
//window.jQuery = window.$ = $;
//global.jQuery = require('jquery');

//Bootstrap.
//import 'bootstrap/dist/css/bootstrap.min.css';
//import "../app_styles/styles-frontend-bootstrap.scss";
//import '../node_modules/jquery/dist/jquery.min.js'

//import "bootstrap/dist/js/bootstrap.bundle.min.js";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap";
//require('bootstrap'); //caused error: $.fn.emulateTransitionEnd = function (duration)
//window.Bootstrap = require('bootstrap'); //caused: ReferenceError: window is not defined
//import "bootstrap/dist/js/bootstrap.js";

//Components.
import FrontendBanners from "../components_react/frontend-banners-cb-component.js";
//----------------------


class LayoutFrontendMain extends Component
{
    //Context.
    static contextType = SyncSystemNSContext;


    //Constructor.
    //**************************************************************************************
    constructor(props, context)
    {
        super(props, context);

        //State creation.
        this.state = {
            //titleCurrent: "old title"
            titleCurrent: ""
        }
        

        //Bind with method.
        //this.handleChange = this.handleChange.bind(this);
        this.setTitleCurrent = this.setTitleCurrent.bind(this);
    }
    //**************************************************************************************


    /**/
    //changeState(stateProperty, strMessage)
    //changeState(e)
    changeState()
    {
        this.setState({
            //[stateProperty]: strMessage
            //titleCurrent: strMessage
            titleCurrent: "new current title"
        });
        //this.state[stateProperty] = strMessage;
    }


    setTitleCurrent(sProperty, strMessage)
    {
        this.setState({
            //[stateProperty]: strMessage
            //titleCurrent: strMessage
            titleCurrent: strMessage
        });
    }
    

    //Lifecycle methods.
    
    //Return the new, updated state based upon the props (desincouraged by the react developer team)
    /*
    static getDerivedStateFromProps(props, state)
    {
        //Note: Returns error if returns nothing.

    }
    */


    //Create a backup of the current way things are.
    /*
    getSnapshotBeforeUpdate()
    {
        //Note: Returns error if returns nothing.

    }
    */


    componentDidMount()
    {
        //Title - current.
        //this.setTitleCurrent("", "new current title function"); //working


        //Tracking code(s).
        /*
        var frTrackingCode = new FileReader();
        frTrackingCode.readAsText("/tracking-code.txt");
        frTrackingCode.onload = () =>{
            console.log(frTrackingCode.result);
        };
        */

        /*
        //var trackingCode = fetch('/tracking-code.txt')
        fetch('../tracking-code.txt')
        //fetch('/tracking-code.txt')
        .then((r) => r.text())
        .then((text) => {
          console.log(text);
        });
        */


        /*
        const script = document.createElement("script");
        script.src = "/bundle.react.client.js";
        script.async = true;
        document.body.appendChild(script);
        //this.body.appendChild(script);
        */
        /*
        const s = document.createElement('script');
        //s.type = 'text/javascript';
        s.src = "/bundle.react.client.js";
        s.async = true;
        //s.innerHTML = "document.write('This is output by document.write()!')";
        this.instance.appendChild(s);
        */

        //GET the data I need to correctly display


        //Debug.
        //console.log("TrackingCode=", TrackingCode);
    }

    //UNSAFE_componentWillReceiveProps(myNextProps) (deprecated)
    componentWillReceiveProps(myNextProps)
    {
        /*if(myNextProps.whatever != this.props.whaever)
        {
            //do something
        }*/
    }

    //Optmize the app??s resources.
    /*
    shouldComponentUpdate(myNextProps, myNextState)
    {
        //Note: Returns error if returns nothing.

        // return true if want it to update
        
        // return false if not want to update 



    }
    */

    //Teardown or cleanup your code before your component disappears.
    componentWillUnmount()
    {

    }



    //Personal method - change state.
    handleChange(id)
    {
        //Find the id and change the value of completed.
        /*
        this.setState(myPrevState =>{
            //Create new object based on the old state with the changed value.
            const updatedTodos = myPrevState.map(sTodosData =>{
                if(sTodosData.id === id)
                {
                    sTodosData.completed = !sTodosData.completed;
                }

                return sTodosData;
            });

            //Set the old state to the updated state that was created above.
            return{
                sTodosData: updatedTodos
            }
        });
        */

        //Debug.
        //console.log("worked - id=" + id);
    }

    setData = () => {
        
    };


    //Render.
    //**************************************************************************************
    render()
    {
        //Variables.
        const { gSystemConfig, SyncSystemNS, FunctionsSyncSystem, HTMLReactParser, Safe } = this.context;
        //var objHtmlToReactParser = new HtmlToReactParser();
        //var hrpTrackingCode = objHtmlToReactParser.parse(TrackingCode);

        const tagsMetaDefault1 = `
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        `;
        //const tlScriptBundleReactClient = `<script src="/bundle.react.client.js"></script>`;

        const tagsStyleCSS = `
            ${ /* Bootstrap 4 CSS. */ '' }
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <!--link rel="stylesheet" type="text/css" href="../app_js/bootstrap/bootstrap-3.3.6-dist/css/bootstrap.min.css" media="screen" title="Default" /-->

            <link rel="stylesheet" type="text/css" href="/styles-frontend.bundle.css" media="screen" title="Default" />
        `;

		//Favicon - 16x16 | 32x32 | 64x64 (pixels).
		//Exporta????o PNG: 558 x 558 pixels.
		//https://realfavicongenerator.net/
        const tagsFavicons = `
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0082c6" />
            <meta name="msapplication-TileColor" content="#0082c6" />
            <meta name="theme-color" content="#ffffff" />
        `;

        //TODO: update iframe template.
        const tagsMetaDefault2 = `
            <meta name="robots" content="index,follow" />
            <meta name="language" content="english" />

            <meta name="author" content="${ SyncSystemNS.FunctionsGeneric.contentMaskRead(gSystemConfig.configSystemClientName, "config-application") }" />
            <meta name="designer" content="${ SyncSystemNS.FunctionsGeneric.contentMaskRead(gSystemConfig.configDevName, "config-application") }" />
            <meta name="copyright" content="${ gSystemConfig.configCopyrightYear }, ${ SyncSystemNS.FunctionsGeneric.contentMaskRead(gSystemConfig.configSystemClientName, "config-application") }" />
            <meta name="rating" content="general" /><?php //general | mature | restricted | 14 years?>
        `;
        
        const tagsMetaDynamic1 = `
            <meta name="title" content="" />${ /* Below 60 characters. */ '' }
            <meta name="description" content="" />${ /* Below 160 characters. */ '' }
            <meta name="keywords" content="" />${ /* Below 100 characters. */ '' }

            ${ /* Open Graph tags. */ '' }
            <meta property="og:title" content="" />
            <meta property="og:type" content="website" />${ /* ref: http://ogp.me/#types | https://developers.facebook.com/docs/reference/opengraph/ */ '' }
            <meta property="og:url" content="" />
            <meta property="og:description" content="" />
            
            ${ /* 
            Dimens??es:
            ref: https://iamturns.com/open-graph-image-size/
            Horizontal: 
                - home (1.9:1): 1200 x 630 pixels
                - produtos, artigos, etc (2:1): 1200 x 600 | 300 x 157 (m??nimo) | 4096 x 4096 (m??ximo)
            Quadrado:
                - home (1:1): 1200 x 1200 pixels
                - produtos, artigos, etc (1:1): 600 x 600 | 144 x 144 (m??nimo) | 4096 x 4096 (m??ximo)
            */
            ''}
            <meta property="og:image" content="" />${ /* The recommended resolution for the OG image is 1200x627 pixels, the size up to 5MB. 120x120px, up to 1MB | JPG ou PNG, below 300k - minimum resolution: 300x200 pixels. */ '' }
                <!--meta property="og:image:secure_url" content="" /-->
            <meta property="og:image:alt" content="" />
            
            <meta property="og:locale" content="en_US" />
        `;      

        const javaScriptHead = `
            ${ /*jQuery. */ '' }
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    
            <!--script type="text/javascript" src="functions-syncsystem.js"></script-->
            <!--script type="text/javascript" src="../js/jquery/jquery-3.4.1.min.js"></script-->
            <!--script>
                window.$ = window.jQuery = require('jquery');
                window.Bootstrap = require('bootstrap');
            </script-->


            ${ /*Babel. */ '' }
            <!--script type="text/babel" src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.js"></script-->${ /*No errors. */ '' }
            <!--script type="text/babel" src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script-->${ /*No errors. */ '' }


            ${ /*GLightbox. */ '' }
            ${ /*type="text/javascript"*/ '' }
            <script type="text/babel" src="/${ gSystemConfig.configDirectoryJSSD }/glightbox/dist/js/glightbox.min.js"></script>
            ${ /*type="text/css"*/ '' }
            <link rel="stylesheet" type="text/html" href="/${ gSystemConfig.configDirectoryJSSD }/glightbox/dist/css/glightbox.min.css" media="screen" title="Default" />
            <script type="text/babel">
                //JGLightbox configuration.
                //var lightbox = GLightbox();
                var gLightboxBackendConfigOptions = {};

                //Backend options
                gLightboxBackendConfigOptions.autoplayVideos = true;
                gLightboxBackendConfigOptions.openEffect = "fade"; //zoom, fade, none
                gLightboxBackendConfigOptions.slideEffect = "slide"; //slide, fade, zoom, none
                gLightboxBackendConfigOptions.moreText = "+"; //more text for descriptions on mobile devices
                gLightboxBackendConfigOptions.touchNavigation = true;
                gLightboxBackendConfigOptions.descPosition = "bottom"; //global position for slides description, you can define a specific position on each slide (bottom, top, left, right)
            </script>
        `;

        const javaScriptFoot = `
            ${ /*Popper. */ '' }
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>

            ${ /*Bootstrap 4. */ '' }
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        `;


        //TodoData Map Component.
        //Note: Passing methods only works whith arrow functions because of the "this" reference - ref: https://stackoverflow.com/questions/56374615/uncaught-typeerror-cannot-read-property-class-function-of-undefined-in-reactj
        /** 
        const mcTestTodoItem = this.state.sTodosData.map(function(itemLine){
            return(
                <TestTodoItem 
                    key={itemLine.id} 
                    text={itemLine.text} 
                    completed={itemLine.completed} 
                    handleChange={this.handleChange}
                />
            );
        })
        */
        /*const mcTestTodoItem = this.state.sTodosData.map((itemLine)=>
            {
                return(
                    <TestTodoItem 
                        key={itemLine.id} 
                        id={itemLine.id} 
                        text={itemLine.text} 
                        completed={itemLine.completed} 
                        cmHandleChange={this.handleChange}
                    />
                );
            }
        )   */     


        return(
            /*<html lang="pt-br">*/
            <html lang="en-us">
                <head>
                    { HTMLReactParser(TrackingCode) }
                    {/*ReactRenderHTML(TrackingCode)*/}
                    {/*hrpTrackingCode*/}

                    <meta charSet="UTF-8" />

                    {/*ReactRenderHTML(metaTagsDefault1)*/}
                    { HTMLReactParser(tagsMetaDefault1) }

                    <title>

                    </title>

                    { HTMLReactParser(tagsStyleCSS) }
                    
                    { HTMLReactParser(tagsFavicons) }

                    { /*head dynamic tags */ }
                    { HTMLReactParser(tagsMetaDynamic1) }

                    { HTMLReactParser(tagsMetaDefault2) }

                    { HTMLReactParser(javaScriptHead) }
                </head>

                <body className={/*StylesFrontend["ss-frontend-body01"]*/ "ss-frontend-body01"}>
                    <div id="root">
                        <noscript>Please Enable JavaScript</noscript>


                        {/*Desktop layout.*/}
                        <div className="d-none d-lg-block d-xl-block" style={{position: 'relative', display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
                            <header className="ss-frontend-fauntain01" style={{position: 'relative', display: 'block', height: '200px'}}>
                                <div style={{position: 'relative', display: 'block', width: '100%', height: '100%', backgroundImage: 'url(/files-layout/frontend-desktop-header-bg01.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center 10px'}}>
                                    <div style={{position: 'relative', display: 'block', width: '1015px', height: '100%', marginLeft: 'auto', marginRight: 'auto'}}>
                                        <a href="/" style={{position: 'absolute', display: 'block', left: '14px', top: '25px'}} title="Home">
                                            <img src="/files-layout/frontend-desktop-logo.png" alt="Logo" />
                                        </a>

                                        {/*Links.*/}
                                        <nav style={{position: 'absolute', display: 'block', left: '0px', right: '0px', top: '149px', textAlign: 'center'}}>
                                            <a href="/" className="ss-frontend-link01 ss-frontend-link01-layout" title="Home">
                                                Home
                                            </a><a href={"/" + gSystemConfig.configRouteFrontendContent + "/107/"} className="ss-frontend-link01 ss-frontend-link01-layout" title="About Us ">
                                                About Us 
                                            </a><a href={"/" + gSystemConfig.configRouteFrontendProducts + "/108/"} className="ss-frontend-link01 ss-frontend-link01-layout" title="Real Estate Showcase">
                                                Real Estate Showcase
                                            </a><a href={"/" + gSystemConfig.configRouteFrontendContent + "/109/?idTbForms=117"} className="ss-frontend-link01 ss-frontend-link01-layout" title="Send Us Your Project">
                                                Send Us Your Project
                                            </a><a href={"/" + gSystemConfig.configRouteFrontendContent + "/111/"} className="ss-frontend-link01 ss-frontend-link01-layout" title="Partnerships">
                                                Partnerships
                                            </a><a href={"/" + gSystemConfig.configRouteFrontendContent + "/110/?idTbForms=115"} className="ss-frontend-link01 ss-frontend-link01-layout" title="Contact" style={{borderRight: 'none'}}>
                                                Contact
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </header>

                            {/*Banner*/}
                            { this.props.location.pathname == "/" ?
                                <FrontendBanners
                                    idParentBanners={""} 
                                    idTbCategories={""} 
                                    configLayoutType={22} 
                                    configDisplay={"horizontal"} 
                                    configContentNRecords={""} 
                                    configContentSort={""}
                                    >

                                </FrontendBanners>
                            :
                                ``
                            }
                            {/*Banner*/}

                            {/*Titles.*/}
                            <h1 id="titleCurrent" className="ss-frontend-heading01" style={{position: 'relative', display: 'block', width: '100%', height: '175px', lineHeight: '210px', backgroundColor: '#a2b9c6', backgroundImage: 'url(/files-layout/frontend-heading-bg02.png), url(/files-layout/frontend-heading-bg01.jpg)', backgroundRepeat: 'no-repeat, repeat-x', backgroundPosition: 'center bottom, bottom', borderBottom: '20px solid #dbdbdb', textAlign: 'center', margin: '0px', padding: '0px', overflow: 'hidden'}}>
                                <span style={{position: 'absolute', display: 'block', left: '0px', right: '0px', top: '14px', textAlign: 'center', fontSize: '13px', lineHeight: 'normal', marginLeft: 'auto', marginRight: 'auto'}}>
                                    {/*search component.*/}
                                </span>
                                { /*Content place holder - current title*/ }
                                { this.state.titleCurrent }
                            </h1>

                            {/*Content.*/}
                            <main style={{position: 'relative', display: 'flex', flex: 1, alignItems: 'stretch', width: '1015px', marginLeft: 'auto', marginRight: 'auto'}}>
                                <div style={{position: 'relative', display: 'block', minWidth: '100%', maxWidth: '100%',}}>
                                    { /*Content place holder - body*/ }
                                    { this.props.cphBody }
                                </div>
                            </main>  

                            
                            {/*Footer*/}
                            <footer className="ss-frontend-footer-text01" style={{position: 'relative', display: 'block', height: '285px', backgroundImage: 'url(/files-layout/frontend-desktop-footer-bg01.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center -25px', zIndex: 1}}>
                                <div style={{position: 'relative', display: 'block', width: '1015px', height: '100%', marginLeft: 'auto', marginRight: 'auto'}}>

                                    {/*Site map*/}
                                    <nav style={{position: 'absolute', display: 'block', top: '25px', left: '25px'}}>
                                        <div className="ss-frontend-footer-heading01" style={{position: 'relative', display: 'block', marginBottom: '0px', fontSize: '24px'}}>
                                            Site Map
                                        </div>
                                        <ul className="ss-frontend-links-ul02">
                                            <li className="ss-frontend-links-li02">
                                                <a href="/" className="ss-frontend-footer-links01" title="Home">
                                                    Home
                                                </a>
                                            </li>
                                            <li className="ss-frontend-links-li02">
                                                <a href={"/" + gSystemConfig.configRouteFrontendContent + "/107/"} className="ss-frontend-footer-links01" title="About Us">
                                                    About Us
                                                </a>
                                            </li>
                                            <li className="ss-frontend-links-li02">
                                                <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/108/"} className="ss-frontend-footer-links01" title="Real Estate Showcase">
                                                    Real Estate Showcase
                                                </a>
                                            </li>
                                            <li className="ss-frontend-links-li02">
                                                <a href={"/" + gSystemConfig.configRouteFrontendContent + "/109/?idTbForms=117"} className="ss-frontend-footer-links01" title="Send Us Your Project">
                                                    Send Us Your Project
                                                </a>
                                            </li>
                                            <li className="ss-frontend-links-li02">
                                                <a href={"/" + gSystemConfig.configRouteFrontendContent + "/111/"} className="ss-frontend-footer-links01" title="Partnerships">
                                                    Partnerships
                                                </a>
                                            </li>
                                            <li className="ss-frontend-links-li02">
                                                <a href={"/" + gSystemConfig.configRouteFrontendContent + "/110/?idTbForms=115"} className="ss-frontend-footer-links01" title="Contact">
                                                    Contact
                                                </a>
                                            </li>
                                            <li className="ss-frontend-links-li02">
                                                <a href={"/" + gSystemConfig.configRouteFrontendContent + "/112/"} className="ss-frontend-footer-links01" title="Privacy and Cookie Policy">
                                                    Privacy and Cookie Policy
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>

                                    {/*Contact.*/}
                                    <address style={{position: 'absolute', display: 'block', left: '0px', right: '0px', top: '25px', textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}}>
                                        <div className="ss-frontend-footer-heading01" style={{position: 'relative', display: 'block', marginBottom: '0px', fontSize: '24px'}}>
                                            Contact Options
                                        </div>
                                        <div style={{position: 'relative', display: 'block', marginBottom: '4px'}}>
                                            <strong style={{display: 'block'}}>
                                                New York - United States
                                            </strong>
                                            <a href="mailto:usa@searchmerealstate.com" 
                                                target="_blank" 
                                                className="ss-frontend-footer-links01" 
                                                style={{fontSize: "13px"}}>
                                                usa@searchmerealstate.com
                                            </a>
                                        </div>
                                        <div style={{position: 'relative', display: 'block', marginBottom: '4px'}}>
                                            <strong style={{display: 'block'}}>
                                                Germany - Europe
                                            </strong>
                                            <a href="mailto:europe@searchmerealstate.com" 
                                                target="_blank" 
                                                className="ss-frontend-footer-links01" 
                                                style={{fontSize: "13px"}}>
                                                europe@searchmerealstate.com
                                            </a>
                                        </div>
                                        <div>
                                            <strong style={{display: 'block'}}>
                                                S??o Paulo / Rio de Janeiro - Brazil 
                                            </strong>
                                            <a href="mailto:brazil@searchmerealstate.com" 
                                                target="_blank" 
                                                className="ss-frontend-footer-links01" 
                                                style={{fontSize: "13px"}}>
                                                brazil@searchmerealstate.com
                                            </a>
                                        </div>
                                    </address>

                                    {/*Direct contact.*/}
                                    <div style={{position: 'absolute', display: 'block', top: '25px', right: '25px', textAlign: 'right'}}>
                                        <div className="ss-frontend-footer-heading01" style={{position: 'relative', display: 'block', marginBottom: '0px', fontSize: '24px'}}>
                                            Direct Contact
                                        </div>
                                        <a href="mailto:info@searchmerealestate.com" className="ss-frontend-footer-links01" style={{position: 'relative', display: 'block', fontSize: '17px', marginTop: '-4px'}}>
                                            info@searchmerealestate.com
                                        </a>

                                        <img src="/files-layout/frontend-desktop-footer-logo.png" alt="Logo" style={{position: 'relative', display: 'inline-block', marginTop: '0px'}} />
                                    </div>

                                    {/*Credits.*/}
                                    <small className="ss-frontend-copyright" style={{position: 'absolute', display: 'block', bottom: '35px', left: '25px', right: '25px', height: '40px', lineHeight: '40px', borderTop: '1px dashed #a2b9c6'}}>
                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "layoutCopyright") } ?? 
                                        { gSystemConfig.configCopyrightYear } 
                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "configSiteTile") }.
                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "layoutCopyright1") }

                                        {/*Development.*/}
                                        <a href={gSystemConfig.configDevSite} target="_blank" className="ss-frontend-credit" style={{float: 'right'}}>
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "layoutDevelopment") }: 
                                            { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "layoutDevName") }
                                        </a>
                                    </small>
                                </div>
                            </footer>
                            <div className="ss-frontend-fauntain01" style={{position: 'absolute', display: 'block', bottom: '100px', left: '0px', right: '0px', height: '65px'}}>

                            </div>
                        </div>


                        {/*Mobile layout.*/}
                        <div className="d-lg-none" style={{position: 'relative', minHeight: '100%'}}>
                            <header style={{position: 'relative', display: 'block', height: '45px', background: '#0082c6'}}>
                                {/*Menu mobile.*/}
                                <nav id="divMenuMobile01" style={{position: 'fixed', display: 'none', width: '200px', height: '100%', right: '0px', top: '0px', backgroundColor: '#0082c6', overflow: 'hidden', zIndex: 9999, boxShadow: '3px 3px 10px #000000'}}>
                                    <a onClick={()=>{
                                            FunctionsSyncSystem.htmlGenericStyle01('divMenuMobile01', 'display', 'none');
                                        }} className="ss-frontend-mobile-links-layout01 ss-frontend-mobile-links01" style={{cursor: 'pointer'}} title="Close">
                                        X Close
                                    </a>
                                    <a href="/" className="ss-frontend-mobile-links-layout01 ss-frontend-mobile-links01" title="Home">
                                        Home
                                    </a>
                                    <a href={"/" + gSystemConfig.configRouteFrontendContent + "/107/"} className="ss-frontend-mobile-links-layout01 ss-frontend-mobile-links01" title="About Us">
                                        About Us
                                    </a>
                                    <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/108/"} className="ss-frontend-mobile-links-layout01 ss-frontend-mobile-links01" title="Real Estate Showcase">
                                        Real Estate Showcase
                                    </a>
                                    <a href={"/" + gSystemConfig.configRouteFrontendContent + "/109/?idTbForms=117"} className="ss-frontend-mobile-links-layout01 ss-frontend-mobile-links01" title="Send Us Your Project">
                                        Send Us Your Project
                                    </a>
                                    <a href={"/" + gSystemConfig.configRouteFrontendContent + "/111/"} className="ss-frontend-mobile-links-layout01 ss-frontend-mobile-links01" title="Partnerships">
                                        Partnerships
                                    </a>
                                    <a href={"/" + gSystemConfig.configRouteFrontendContent + "/110/?idTbForms=115"} className="ss-frontend-mobile-links-layout01 ss-frontend-mobile-links01" title="Contact">
                                        Contact
                                    </a>
                                    <a href={"/" + gSystemConfig.configRouteFrontendContent + "/112/"} className="ss-frontend-mobile-links-layout01 ss-frontend-mobile-links01" title="Privacy and Cookie Policy">
                                        Privacy and Cookie Policy
                                    </a>
                                </nav>

                                <a onClick={()=>{
                                        FunctionsSyncSystem.htmlGenericStyle01('divMenuMobile01', 'display', 'block');
                                    }} style={{position: 'relative', display: 'block', padding: '5px', cursor: 'pointer'}} title="Menu">
                                    <img src="/files-layout/frontend-mobile-menu01.png" alt="Menu" />
                                </a>
                            </header>
                            <a href="/" title="Home" style={{position: 'relative', display: 'block', width: '100%', height: '125px', backgroundImage: 'url(/files-layout/frontend-mobile-logo.png), linear-gradient(#fafafa, #eeeeec)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                            
                            </a> 

                            {/*Banner.*/}
                            { this.props.location.pathname == "/" ?
                                <FrontendBanners
                                    idParentBanners={""} 
                                    idTbCategories={""} 
                                    configLayoutType={22} 
                                    configDisplay={"horizontal"} 
                                    configContentNRecords={""} 
                                    configContentSort={""}
                                    >

                                </FrontendBanners>
                            :
                                ``
                            }
                            {/*Banner.*/}

                            
                            {/*Content.*/}
                            <main style={{position: 'relative', display: 'block', padding: '0px', paddingBottom: '665px'}}>
                                {/*Titles.*/}
                                <h1 id="titleCurrentMobile" className="ss-frontend-heading01" style={{position: 'relative', display: 'block', width: '100%', height: '132px', lineHeight: '180px', backgroundColor: '#a2b9c6', backgroundImage: 'url(/files-layout/frontend-mobile-heading-bg01-left.jpg), url(/files-layout/frontend-mobile-heading-bg01-right.jpg), url(/files-layout/frontend-mobile-heading-bg01.jpg)', backgroundRepeat: 'no-repeat, no-repeat, repeat-x', backgroundPosition: 'left top, right top, center center', textAlign: 'center', fontSize: '26px', margin: '0px', padding: '0px', overflow: 'hidden'}}>
                                    <span style={{position: 'absolute', display: 'block', left: '0px', right: '0px', top: '10px', textAlign: 'center', fontSize: '10px', lineHeight: 'normal', marginLeft: 'auto', marginRight: 'auto'}}>
                                        {/*search component.*/}
                                    </span>

                                    { /*Content place holder - current title*/ }
                                    { this.state.titleCurrent }
                                </h1>

                                { /*Content place holder - body*/ }
                                { this.props.cphBody }
                            </main>


                            <footer className style={{position: 'absolute', width: '100%', bottom: '0px', left: '0px', height: '665px', backgroundImage: 'linear-gradient(to left, #f2f2f2, #f9f9f9, #f9f9f9, #f2f2f2)'}}>
                                <div className="ss-frontend-fauntain01" style={{position: 'relative', display: 'block', width: '100%', height: '20px'}}>
                                
                                </div>

                                {/*Direct contact.*/}
                                <div style={{position: 'relative', display: 'block', textAlign: 'center', marginTop: '15px'}}>
                                    <div className="ss-frontend-footer-heading01" style={{position: 'relative', display: 'block', marginBottom: '0px', fontSize: '20px'}}>
                                        Direct Contact
                                    </div>
                                    <a href="mailto:info@searchmerealestate.com" className="ss-frontend-footer-links01" style={{position: 'relative', display: 'block', fontSize: '17px', marginTop: '-4px'}}>
                                        info@searchmerealestate.com
                                    </a>
                                </div>

                                {/*Contact.*/}
                                <address style={{position: 'relative', display: 'block', textAlign: 'center', marginTop: '15px'}}>
                                    <div className="ss-frontend-footer-heading01" style={{position: 'relative', display: 'block', marginBottom: '0px', fontSize: '20px'}}>
                                        Contact Options
                                    </div>
                                    <div style={{position: 'relative', display: 'block', marginBottom: '4px'}}>
                                        <strong style={{display: 'block'}}>
                                            New York - United States
                                        </strong>
                                        <a href="mailto:usa@searchmerealstate.com" 
                                            target="_blank" 
                                            className="ss-frontend-footer-links01" 
                                            style={{fontSize: "13px"}}>
                                            usa@searchmerealstate.com
                                        </a>
                                    </div>
                                    <div style={{position: 'relative', display: 'block', marginBottom: '4px'}}>
                                        <strong style={{display: 'block'}}>
                                            Germany - Europe
                                        </strong>
                                        <a href="mailto:europe@searchmerealstate.com" 
                                            target="_blank" 
                                            className="ss-frontend-footer-links01" 
                                            style={{fontSize: "13px"}}>
                                            europe@searchmerealstate.com
                                        </a>
                                    </div>
                                    <div>
                                        <strong style={{display: 'block'}}>
                                            S??o Paulo / Rio de Janeiro - Brazil 
                                        </strong>
                                        <a href="mailto:brazil@searchmerealstate.com" 
                                        target="_blank" 
                                        className="ss-frontend-footer-links01" 
                                        style={{fontSize: "13px"}}>
                                        brazil@searchmerealstate.com
                                    </a>
                                    </div>
                                </address>

                                {/*Site map*/}
                                <nav style={{position: 'relative', display: 'block', textAlign: 'center', marginTop: '15px'}}>
                                    <div className="ss-frontend-footer-heading01" style={{position: 'relative', display: 'block', marginBottom: '0px', fontSize: '20px'}}>
                                        Site Map
                                    </div>
                                    <ul className="ss-frontend-links-ul02" style={{textAlign: 'center', left: '12px', listStyleType: 'none'}}>
                                        <li className="ss-frontend-links-li02">
                                            <a href="/" className="ss-frontend-footer-links01" title="Home">
                                                Home
                                            </a>
                                        </li>
                                        <li className="ss-frontend-links-li02">
                                            <a href={"/" + gSystemConfig.configRouteFrontendContent + "/107/"} className="ss-frontend-footer-links01" title="About Us">
                                                About Us
                                            </a>
                                        </li>
                                        <li className="ss-frontend-links-li02">
                                            <a href={"/" + gSystemConfig.configRouteFrontendProducts + "/108/"} className="ss-frontend-footer-links01" title="Real Estate Showcase">
                                                Real Estate Showcase
                                            </a>
                                        </li>
                                        <li className="ss-frontend-links-li02">
                                            <a href={"/" + gSystemConfig.configRouteFrontendContent + "/109/?idTbForms=117"} className="ss-frontend-footer-links01" title="Send Us Your Project">
                                                Send Us Your Project
                                            </a>
                                        </li>
                                        <li className="ss-frontend-links-li02">
                                            <a href={"/" + gSystemConfig.configRouteFrontendContent + "/111/"} className="ss-frontend-footer-links01" title="Partnerships">
                                                Partnerships
                                            </a>
                                        </li>
                                        <li className="ss-frontend-links-li02">
                                            <a href={"/" + gSystemConfig.configRouteFrontendContent + "/110/?idTbForms=115"} className="ss-frontend-footer-links01" title="Contact">
                                                Contact
                                            </a>
                                        </li>
                                        <li className="ss-frontend-links-li02">
                                            <a href={"/" + gSystemConfig.configRouteFrontendContent + "/112/"} className="ss-frontend-footer-links01" title="Privacy and Cookie Policy">
                                                Privacy and Cookie Policy
                                            </a>
                                        </li>
                                    </ul>
                                </nav>

                                <img src="/files-layout/frontend-desktop-footer-logo.png" alt="Logo" style={{position: 'absolute', display: 'block', bottom: '60px', left: '50%', transform: 'translate(-60%, 0)'}} />
                                
                                {/*Credits*/}
                                <small className="ss-frontend-copyright" style={{position: 'absolute', display: 'block', bottom: '0px', left: '5px', right: '5px', height: '30px', lineHeight: '30px', textAlign: 'center', borderTop: '1px dashed #a2b9c6'}}>
                                    <div style={{position: 'absolute', display: 'block', left: '50%', transform: 'translate(-50%, 0)', top: '-30px', fontSize: '8px'}}>
                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "layoutCopyright") } ?? 
                                        { gSystemConfig.configCopyrightYear } 
                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "configSiteTile") }.
                                        { /*SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "layoutCopyright1")*/ }
                                    </div>
                                    <a href={gSystemConfig.configDevSite} target="_blank" className="ss-frontend-credit" style={{fontSize: '8px'}}>
                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "layoutDevelopment") }: 
                                        { SyncSystemNS.FunctionsGeneric.appLabelsGet(gSystemConfig.configLanguageFrontend.appLabels, "layoutDevName") }
                                    </a>
                                </small>
                            </footer>
                        </div>

                    </div>


                    { /*React bundle script - SSR.*/ }
                    <Safe.script src="/bundle.react.client.js"></Safe.script>
                    <Safe.script>{
                    `try{Typekit.load({ async: true });}catch(e){}`
                    }
                    </Safe.script>


                    { HTMLReactParser(javaScriptFoot) }
                </body>
            </html>
        );
    }
    //**************************************************************************************
}

export default LayoutFrontendMain;
//export default withStyles(StylesFrontend)(LayoutFrontendMain);