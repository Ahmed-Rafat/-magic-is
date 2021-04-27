/**
 * Is v1.0.0
 * Type check values
 *
 * released 06/04/2021
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
export declare const Is: {
    /**
     * Check whether the given value is null
     *
     * @param {any} value
     * @returns boolean
     */
    null: (value: any) => boolean;
    /**
     * Check whether the given value is an undefined
     *
     * @param {*} value
     * @returns boolean
     */
    undefined: (value: any) => boolean;
    /**
     * Check whether the given value is string
     *
     * @param {*} value
     * @returns boolean
     */
    string: (value: any) => boolean;
    /**
     * Check whether the given value is an integer
     *
     * @param {*} value
     * @returns boolean
     */
    int: (number: unknown) => boolean;
    /**
     * Check whether the given value is float
     *
     * @param {*} value
     * @returns boolean
     */
    float: (value: any) => boolean;
    /**
     * Check whether the given value is number
     * whatever if its data type is String or Number
     *
     * @param {*} value
     * @returns boolean
     */
    numeric: (value: string) => boolean;
    /**
     * Check whether the given value is an even number
     * whatever if its data type is String or Number
     *
     * @param {*} value
     * @returns boolean
     */
    even: (value: any) => boolean;
    /**
     * Check whether the given value is an odd number
     * whatever if its data type is String or Number
     *
     * @param {*} value
     * @returns boolean
     */
    odd: (value: any) => boolean;
    /**
     * Check whether the given value is not a number
     *
     * @param {*} value
     * @returns boolean
     */
    NaN: (value: number) => boolean;
    /**
     * Check whether the given value is boolean
     *
     * @param {*} value
     * @returns boolean
     */
    bool: (value: any) => boolean;
    /**
     * Check whether the given value is boolean
     *
     * @param {*} value
     * @returns boolean
     */
    boolean: (value: any) => boolean;
    /**
     * Check whether the given value is an array
     *
     * @param {*} value
     * @returns boolean
     */
    array: (arg: any) => arg is any[];
    /**
     * Check whether the given value is an object
     *
     * @param {*} value
     * @returns boolean
     */
    object: (value: any) => boolean;
    /**
     * Check whether the given value is a plain object
     *
     * @param {*} value
     * @returns  boolean
     */
    plainObject: (value: any) => boolean;
    /**
     * Check whether the given value is a json
     *
     * @param {*} value
     * @returns boolean
     */
    json: (value: any) => boolean;
    /**
     * Check Wheter the given value is a vaild url
     *
     * @param {*} value
     * @returns boolean
     * @see https://stackoverflow.com/a/5717133
     */
    url: (value: any) => boolean;
    /**
     * Check whether the given value is an iterable
     *
     * @param value
     * @returns
     */
    iterable: (value: object) => boolean;
    /**
     * Check Whether the given value is a dom element
     *
     * @param {*} value
     * @returns boolean
     */
    dom: (value: any) => boolean;
    /**
     * Check whether the given value is a formData
     *
     * @param {*} value
     * @returns
     */
    formData: (value: any) => boolean;
    /**
     * Check whether the given value is a function
     *
     * @param {*} value
     * @returns boolean
     */
    function: (value: any) => boolean;
    /**
     * Check whether the given value is a callback function
     *
     * @param {*} value
     * @returns  boolean
     */
    callback: (value: any) => boolean;
    /**
     * Check whether the given value is a symbol
     *
     * @param {*} value
     * @returns  boolean
     */
    symbol: (value: any) => boolean;
    /**
    * Determine whether the given value is a regular expression
    *
    * @param {*} value
    * @return boolean
    */
    regex: (value: any) => boolean;
    /**
     * Check Whether the given value is a date
     *
     * @param {*} value
     * @returns boolean
     */
    date: (value: any) => boolean;
    /**
     * Check is the left hand side (lhs) greater than right hand side (rhs)
     *
     * @param {number} lhs
     * @param {number} rhs
     * @returns boolean
     */
    greater: (lhs: number, rhs: number) => boolean;
    /**
     * Check is the left hand side (lhs) less than right hand side (rhs)
     *
     * @param {number} lhs
     * @param {number} rhs
     * @returns boolean
     */
    less: (lhs: number, rhs: number) => boolean;
    /**
     * Check value is btween valueX and valueY
     *
     * @param {number} value
     * @param {number} valueX
     * @param {number} valueY
     * @returns boolean
     */
    between: (value: number, valueX: number, valueY: number) => boolean;
    /**
     * Whether the given value is positive number
     *
     * @param {number} value
     * @returns boolean
     */
    positive: (value: number) => boolean;
    /**
     * Whether the given value is positive number
     *
     * @param {number} value
     * @returns boolean
     */
    negative: (value: number) => boolean;
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
    empty: (value: any) => boolean;
    /**
     * Check if Cookie is Enabled
     *
     * @returns  boolean
     */
    cookieEnabled: () => boolean;
    /**
     * Check Whather the given value is an email
     *
     * @param {*} value
     * @returns boolean
     */
    email: (value: any) => boolean;
    /**
     * Check if is number is a valid phone number with country code
     *
     * @param {string} number
     * @param {string} countryCode
     * @returns boolean
     */
    phone: (number: string, countryCode: string) => any;
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
        android: () => RegExpMatchArray;
        /**
         * Check the visitor opening from webOS TV Browser
         *
         * @returns boolean
         */
        webOS: () => RegExpMatchArray;
        /**
         * Check the visitor opening from iphone device
         *
         * @returns boolean
         */
        iphone: () => RegExpMatchArray;
        /**
         * Check the visitor opening from iphone device
         *
         * @returns boolean
         */
        ipad: () => RegExpMatchArray;
        /**
         * Check the visitor opening from ipod device
         *
         * @returns boolean
         */
        ipod: () => RegExpMatchArray;
        /**
         * Check the visitor opening from blackBerry device
         *
         * @returns boolean
         */
        blackberry: () => RegExpMatchArray;
        /**
         * Check the visitor opening from windows phone device
         *
         * @returns boolean
         */
        windows: () => RegExpMatchArray;
        /**
         * Check the visitor opening from blackBerry device
         *
         * @returns boolean
         */
        any: () => () => RegExpMatchArray;
    };
    /**
     * Check the vistor opening from the desktop
     *
     * @retutns boolean
     */
    desktop: () => () => () => RegExpMatchArray;
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
        chrome: () => boolean;
        /**
         * Check the visitor opening from Firefox 1.0+ browser
         *
         * @returns boolean
         */
        firefox: () => boolean;
        /**
         * Check the visitor opening from Safari 3.0+ "[object HTMLElementConstructor]"
         *
         * @returns boolean
         */
        safari: () => boolean;
        /**
        * Check the visitor opening from Opera 8.0+ browser
        *
        * @returns boolean
        */
        opera: () => number;
        /**
         * Check the visitor opening from Internet Explorer 6-11 browser
         *
         * @returns boolean
         */
        ie: () => number | boolean;
        /**
         * Check the visitor opening from Edge 20+ browser
         *
         * @returns boolean
         */
        edge: () => boolean;
        /**
        * Check the visitor opening from Edge (based on chromium) browser
        *
        * @returns boolean
        */
        edgeChromium: () => boolean;
    };
};
export default Is;
