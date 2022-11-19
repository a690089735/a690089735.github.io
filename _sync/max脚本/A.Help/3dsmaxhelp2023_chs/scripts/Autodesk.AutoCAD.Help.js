//---start of generated typescript---
//
//////////////////////////////////////////////////////////////////////////////
//
// (C) Copyright 2012 by Autodesk, Inc.
//
// The information contained herein is confidential, proprietary to Autodesk,
// Inc., and considered a trade secret as defined in section 499C of the
// penal code of the State of California.  Use of this information by anyone
// other than authorized employees of Autodesk, Inc. is granted only under a
// written non-disclosure agreement, expressly prescribing the scope and
// manner of such use.
//
//////////////////////////////////////////////////////////////////////////////
//---end of generated typescript---
//---start of generated typescript---
//
//////////////////////////////////////////////////////////////////////////////
//
// (C) Copyright 2012 by Autodesk, Inc.
//
// The information contained herein is confidential, proprietary to Autodesk,
// Inc., and considered a trade secret as defined in section 499C of the
// penal code of the State of California.  Use of this information by anyone
// other than authorized employees of Autodesk, Inc. is granted only under a
// written non-disclosure agreement, expressly prescribing the scope and
// manner of such use.
//
//////////////////////////////////////////////////////////////////////////////
// Include TS files
///<reference path="CommonTypes.ts"/>
var help;
(function (help) {

    var Autodesk;
    (function (Autodesk) {
        var JavaScript;
        (function (JavaScript) {
            var ErrorStatus;
            (function (ErrorStatus) {
                ErrorStatus[ErrorStatus["eOk"] = 0] = "eOk";
            })(ErrorStatus = JavaScript.ErrorStatus || (JavaScript.ErrorStatus = {}));
        })(JavaScript = Autodesk.JavaScript || (Autodesk.JavaScript = {}));
    })(Autodesk || (Autodesk = {}));

    var Api;
    (function (Api) {
        // options: { functionName, functionParams }
        var execAsyncProxy = function(options) {
            return new Promise(function(resolve, reject) {
                execAsync(JSON.stringify(options), function(result) {
                    var resObj = JSON.parse(result);

                    if (typeof (apiVersion) == 'function' && apiVersion() > 2) {
                        resolve(resObj.retValue);
                    } else {
                        //OLD serialization logic:
                        if (resObj.hasOwnProperty("retValue")) {
                            resolve(JSON.parse(resObj.retValue));
                        } else {
                            resolve(resObj);
                        }
                    }
                }, function(result) {
                    var error = JSON.parse(result);
                    //retcode must be present
                    if (error.retCode == undefined) {
                        throw TypeError("Internal error: retCode is not present.");
                    }
                    //and it must be non-eOk
                    if (error.retCode == Autodesk.JavaScript.ErrorStatus.eOk) {
                        throw "Internal error: retCode is eOk in error callback.";
                    }
                    //errorMessage is optional
                    if (error.retErrorString == undefined) {
                        reject(error.retCode);
                    } else {
                        reject(error.retCode, error.retErrorString);
                    }
                });
            });
        };


        function login() {
            return execAsyncProxy({
                functionName: 'help_Api.login',
                functionParams: {}
            });
        } //end of function
        Api.login = login;

        function logout() {
            return execAsyncProxy({
                functionName: 'help_Api.logout',
                functionParams: {}
            });
        } //end of function
        Api.logout = logout;

        function isLoggedIn() {
            return execAsyncProxy({
                functionName: 'help_Api.isLoggedIn',
                functionParams: {}
            });
        } //end of function
        Api.isLoggedIn = isLoggedIn;

        function getUserInfo() {
            return execAsyncProxy({
                functionName: 'help_Api.getUserInfo',
                functionParams: {}
            });
        } //end of function
        Api.getUserInfo = getUserInfo;

        function getUserName() {
            return execAsyncProxy({
                functionName: 'help_Api.getUserName',
                functionParams: {}
            });
        } //end of function
        Api.getUserName = getUserName;

        function getUserFirstName() {
            return execAsyncProxy({
                functionName: 'help_Api.getUserFirstName',
                functionParams: {}
            });
        } //end of function
        Api.getUserFirstName = getUserFirstName;

        function getUserLastName() {
            return execAsyncProxy({
                functionName: 'help_Api.getUserLastName',
                functionParams: {}
            });
        } //end of function
        Api.getUserLastName = getUserLastName;

        function getUserId() {
            return execAsyncProxy({
                functionName: 'help_Api.getUserId',
                functionParams: {}
            });
        } //end of function
        Api.getUserId = getUserId;

        function getUserEmail() {
            return execAsyncProxy({
                functionName: 'help_Api.getUserEmail',
                functionParams: {}
            });
        } //end of function
        Api.getUserEmail = getUserEmail;

        function HomeUrl(Online) {
            return execAsyncProxy({
                functionName: 'help_Api.HomeUrl',
                functionParams: {
                    Online: Online
                }
            });
        } //end of function
        Api.HomeUrl = HomeUrl;

        function OfflineInstalled() {
            return execAsyncProxy({
                    functionName: 'help_Api.OfflineInstalled',
                    functionParams: {}
                });
        } //end of function
        Api.OfflineInstalled = OfflineInstalled;

        function HelpFindUI(ID, IsTopic) {
            return execAsyncProxy({
                functionName: 'help_Api.HelpFindUI',
                functionParams: {
                    ID: ID,
                    IsTopic: IsTopic
                }
            });
        } //end of function
        Api.HelpFindUI = HelpFindUI;

        var userLoggedInEvent_handlers = null;
        //called by native code: fires event to callback supplied by the user
        function userLoggedInEventCallback(args) {
            var obj = JSON.parse(args);
            //unpack all event arguments
            var userInfo = obj.userInfo;
            //call each handler
            for (var i = 0; i < userLoggedInEvent_handlers.length; ++i)
                userLoggedInEvent_handlers[i](userInfo);
        }
        //allows user to supply a callback
        function addHandler_userLoggedInEvent(userFunction) {
            var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
            if (userLoggedInEvent_handlers == null) {
                userLoggedInEvent_handlers = new Array();
                registerCallback('help_Api' + separator + 'userLoggedInEvent', userLoggedInEventCallback);
            }
            userLoggedInEvent_handlers.push(userFunction);
        }
        Api.addHandler_userLoggedInEvent = addHandler_userLoggedInEvent;
        //removes the callback
        function removeHandler_userLoggedInEvent(userFunction) {
            if (userLoggedInEvent_handlers !== null) {
                for (var i = 0; i < userLoggedInEvent_handlers.length; i++) {
                    if (userLoggedInEvent_handlers[i] === userFunction) {
                        userLoggedInEvent_handlers.splice(i, 1);
                        break;
                    }
                }
            }
        }
        Api.removeHandler_userLoggedInEvent = removeHandler_userLoggedInEvent;
        var userLoggedOutEvent_handlers = null;
        //called by native code: fires event to callback supplied by the user
        function userLoggedOutEventCallback(args) {
            var obj = JSON.parse(args);
            //unpack all event arguments
            //call each handler
            for (var i = 0; i < userLoggedOutEvent_handlers.length; ++i)
                userLoggedOutEvent_handlers[i]();
        }
        //allows user to supply a callback
        function addHandler_userLoggedOutEvent(userFunction) {
            var separator = (typeof (apiVersion) == 'function' && apiVersion() > 2) ? '.' : '_';
            if (userLoggedOutEvent_handlers == null) {
                userLoggedOutEvent_handlers = new Array();
                registerCallback('help_Api' + separator + 'userLoggedOutEvent', userLoggedOutEventCallback);
            }
            userLoggedOutEvent_handlers.push(userFunction);
        }
        Api.addHandler_userLoggedOutEvent = addHandler_userLoggedOutEvent;
        //removes the callback
        function removeHandler_userLoggedOutEvent(userFunction) {
            if (userLoggedOutEvent_handlers !== null) {
                for (var i = 0; i < userLoggedOutEvent_handlers.length; i++) {
                    if (userLoggedOutEvent_handlers[i] === userFunction) {
                        userLoggedOutEvent_handlers.splice(i, 1);
                        break;
                    }
                }
            }
        }
        Api.removeHandler_userLoggedOutEvent = removeHandler_userLoggedOutEvent;
    })(Api = help.Api || (help.Api = {})); //end module Api
})(help || (help = {}));
//---end of generated typescript---
//# sourceMappingURL=Autodesk.AutoCAD.Help.js.map
