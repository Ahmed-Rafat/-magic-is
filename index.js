"use strict";
/**
 * Is v1.0.0
 * Type check values
 *
 * released 06/04/2021
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Is = void 0;
const google_libphonenumber_1 = require("google-libphonenumber");
const phoneUtilits = google_libphonenumber_1.PhoneNumberUtil.getInstance();
const windows = window;
exports.Is = {
    /**
     * Check whether the given value is null
     *
     * @param {any} value
     * @returns boolean
     */
    null: (value) => value === null,
    /**
     * Check whether the given value is an undefined
     *
     * @param {*} value
     * @returns boolean
     */
    undefined: (value) => typeof value === 'undefined',
    /**
     * Check whether the given value is string
     *
     * @param {*} value
     * @returns boolean
     */
    string: (value) => typeof value === 'string',
    /**
     * Check whether the given value is an integer
     *
     * @param {*} value
     * @returns boolean
     */
    int: Number.isInteger,
    /**
     * Check whether the given value is float
     *
     * @param {*} value
     * @returns boolean
     */
    float: (value) => typeof value === 'number' && value % 1 !== 0,
    /**
     * Check whether the given value is number
     * whatever if its data type is String or Number
     *
     * @param {*} value
     * @returns boolean
     */
    numeric: (value) => /^-?\d+$/.test(value),
    /**
     * Check whether the given value is an even number
     * whatever if its data type is String or Number
     *
     * @param {*} value
     * @returns boolean
     */
    even: (value) => exports.Is.numeric(value) && value % 2 === 0,
    /**
     * Check whether the given value is an odd number
     * whatever if its data type is String or Number
     *
     * @param {*} value
     * @returns boolean
     */
    odd: (value) => exports.Is.numeric(value) && value % 2 === 0,
    /**
     * Check whether the given value is not a number
     *
     * @param {*} value
     * @returns boolean
     */
    NaN: (value) => isNaN(value),
    /**
     * Check whether the given value is boolean
     *
     * @param {*} value
     * @returns boolean
     */
    bool: (value) => typeof value === 'boolean',
    /**
     * Check whether the given value is boolean
     *
     * @param {*} value
     * @returns boolean
     */
    boolean: (value) => typeof value === 'boolean',
    /**
     * Check whether the given value is an array
     *
     * @param {*} value
     * @returns boolean
     */
    array: Array.isArray,
    /**
     * Check whether the given value is an object
     *
     * @param {*} value
     * @returns boolean
     */
    object: (value) => !exports.Is.null(value) && typeof value === 'object',
    /**
     * Check whether the given value is a plain object
     *
     * @param {*} value
     * @returns  boolean
     */
    plainObject: (value) => !exports.Is.null(value) && !exports.Is.undefined(value) && value.constractor.name === 'Object',
    /**
     * Check whether the given value is a json
     *
     * @param {*} value
     * @returns boolean
     */
    json: (value) => {
        try {
            JSON.parse(value);
            return true;
        }
        catch (e) {
            return false;
        }
    },
    /**
     * Check Wheter the given value is a vaild url
     *
     * @param {*} value
     * @returns boolean
     * @see https://stackoverflow.com/a/5717133
     */
    url: (value) => {
        const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
        return !!pattern.test(value);
    },
    /**
     * Check whether the given value is an iterable
     *
     * @param value
     * @returns
     */
    iterable: (value) => typeof value[Symbol.iterator] === 'function',
    /**
     * Check Whether the given value is a dom element
     *
     * @param {*} value
     * @returns boolean
     */
    dom: (value) => value instanceof HTMLElement,
    /**
     * Check whether the given value is a formData
     *
     * @param {*} value
     * @returns
     */
    formData: (value) => value instanceof FormData,
    /**
     * Check whether the given value is a function
     *
     * @param {*} value
     * @returns boolean
     */
    function: (value) => typeof value === 'function',
    /**
     * Check whether the given value is a callback function
     *
     * @param {*} value
     * @returns  boolean
     */
    callback: (value) => exports.Is.function(value),
    /**
     * Check whether the given value is a symbol
     *
     * @param {*} value
     * @returns  boolean
     */
    symbol: (value) => typeof value === 'symbol',
    /**
    * Determine whether the given value is a regular expression
    *
    * @param {*} value
    * @return boolean
    */
    regex: (value) => exports.Is.undefined(value) && value.constructor.name == 'RegExp',
    /**
     * Check Whether the given value is a date
     *
     * @param {*} value
     * @returns boolean
     */
    date: (value) => !exports.Is.null(value) && value instanceof Date,
    /**
     * Check is the left hand side (lhs) greater than right hand side (rhs)
     *
     * @param {number} lhs
     * @param {number} rhs
     * @returns boolean
     */
    greater: (lhs, rhs) => lhs > rhs,
    /**
     * Check is the left hand side (lhs) less than right hand side (rhs)
     *
     * @param {number} lhs
     * @param {number} rhs
     * @returns boolean
     */
    less: (lhs, rhs) => lhs < rhs,
    /**
     * Check value is btween valueX and valueY
     *
     * @param {number} value
     * @param {number} valueX
     * @param {number} valueY
     * @returns boolean
     */
    between: (value, valueX, valueY) => {
        if (valueX < valueY)
            return exports.Is.greater(value, valueX) && exports.Is.less(value, valueY);
        return exports.Is.less(value, valueX) && exports.Is.greater(value, valueY);
    },
    /**
     * Whether the given value is positive number
     *
     * @param {number} value
     * @returns boolean
     */
    positive: (value) => exports.Is.greater(value, 0),
    /**
     * Whether the given value is positive number
     *
     * @param {number} value
     * @returns boolean
     */
    negative: (value) => exports.Is.less(value, 0),
    /**
    * Whether the given value if an empty
    * This can be validated against any type of values
    * undefiend and nullable value will be considered
    * string value will be considered
    * object dosen't have any propareties will be considered
    * The 0 `Zero` will not conidered
    *
    * @param {*} value
    * @returns boolean
    */
    empty: (value) => {
        if (exports.Is.undefined(value) || exports.Is.null(value))
            return true;
        if (exports.Is.string(value))
            return value.length == 0;
        if (exports.Is.object(value))
            return !exports.Is.undefined(value.length) ? value.length == 0 : Object.keys(value).length == 0;
        if (exports.Is.numeric(value))
            return false;
        return true;
    },
    /**
     * Check if Cookie is Enabled
     *
     * @returns  boolean
     */
    cookieEnabled: () => navigator.cookieEnabled,
    /**
     * Check Whather the given value is an email
     *
     * @param {*} value
     * @returns boolean
     */
    email: (value) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value),
    /**
     * Check if is number is a valid phone number with country code
     *
     * @param {string} number
     * @param {string} countryCode
     * @returns boolean
     */
    phone: (number, countryCode) => {
        try {
            const phoneNumber = phoneUtilits.parseAndKeepRawInput(number, countryCode);
            const validNumber = phoneUtilits.isValidNumber(phoneNumber);
            return validNumber;
        }
        catch (e) {
            return false;
        }
    },
    /**
     * Detecting a mobile device
     *
     * @returns boolean
     */
    mobile: {
        /**
         * Check the visitor opening from android device
         *
         * @returns boolean
         */
        android: () => navigator.userAgent.match(/Android/i),
        /**
         * Check the visitor opening from webOS TV Browser
         *
         * @returns boolean
         */
        webOS: () => navigator.userAgent.match(/webOS/i),
        /**
         * Check the visitor opening from iphone device
         *
         * @returns boolean
         */
        iphone: () => navigator.userAgent.match(/iPhone/i),
        /**
         * Check the visitor opening from iphone device
         *
         * @returns boolean
         */
        ipad: () => navigator.userAgent.match(/iPod/i),
        /**
         * Check the visitor opening from ipod device
         *
         * @returns boolean
         */
        ipod: () => navigator.userAgent.match(/iPod/i),
        /**
         * Check the visitor opening from blackBerry device
         *
         * @returns boolean
         */
        blackberry: () => navigator.userAgent.match(/BlackBerry/i),
        /**
         * Check the visitor opening from windows phone device
         *
         * @returns boolean
         */
        windows: () => navigator.userAgent.match(/Windows Phone/i) || navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i),
        /**
         * Check the visitor opening from blackBerry device
         *
         * @returns boolean
         */
        any: () => exports.Is.mobile.android || exports.Is.mobile.blackberry || exports.Is.mobile.ipad || exports.Is.mobile.iphone || exports.Is.mobile.ipod || exports.Is.mobile.windows,
    },
    /**
     * Check the vistor opening from the desktop
     *
     * @retutns boolean
     */
    desktop: () => exports.Is.mobile.any,
    /**
     * Detecting the browser
     *
     * @returns boolean
     */
    browser: {
        /**
         * Check the visitor opening from Chrome browser
         *
         * @returns boolean
         */
        chrome: () => !!windows.chrome && (!!windows.chrome.webstore || !!windows.chrome.runtime),
        /**
         * Check the visitor opening from Firefox 1.0+ browser
         *
         * @returns boolean
         */
        firefox: () => typeof windows.InstallTrigger !== 'undefined',
        /**
         * Check the visitor opening from Safari 3.0+ "[object HTMLElementConstructor]"
         *
         * @returns boolean
         */
        safari: () => /constructor/i.test(windows.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!windows['safari'] || windows['safari'].pushNotification),
        /**
        * Check the visitor opening from Opera 8.0+ browser
        *
        * @returns boolean
        */
        opera: () => (!!windows.opr && !!windows.opr.addons) || !!windows.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
        /**
         * Check the visitor opening from Internet Explorer 6-11 browser
         *
         * @returns boolean
         */
        ie: () => /*@cc_on!@*/ false || !!windows.document.documentMode,
        /**
         * Check the visitor opening from Edge 20+ browser
         *
         * @returns boolean
         */
        edge: () => !exports.Is.browser.ie && typeof !!windows.StyleMedia,
        /**
        * Check the visitor opening from Edge (based on chromium) browser
        *
        * @returns boolean
        */
        edgeChromium: () => exports.Is.browser.chrome && (navigator.userAgent.indexOf("Edg") != -1),
        /**
         * Check the visitor opening from Blink engine
         *
         * @returns boolean
         */
        blink: () => (exports.Is.browser.chrome || exports.Is.browser.firefox) && !!windows.CSS,
    }
};
exports.default = exports.Is;
