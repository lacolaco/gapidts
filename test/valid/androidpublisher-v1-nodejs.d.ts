// Type definitions for Google Google Play Android Developer API v1
// Project: https://developers.google.com/android-publisher
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/androidpublisher
//   View and manage your Google Play Android Developer account

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function androidpublisher(version:string):typeof googleapis.androidpublisher;
    function androidpublisher(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.androidpublisher;
}
/**
 * Lets Android application developers access their Google Play accounts.
 */
declare module googleapis.androidpublisher {
    var purchases: {
        /**
         * Cancels a user's subscription purchase. The subscription remains valid until its expiration time.
         * @params {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
         * @params {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
         * @params {string} token The token provided to the user's device when the subscription was purchased.
         */
        cancel: (params: {
            packageName: string;
            subscriptionId: string;
            token: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Checks whether a user's subscription purchase is valid and returns its expiry time.
         * @params {string} packageName The package name of the application for which this subscription was purchased (for example, 'com.some.thing').
         * @params {string} subscriptionId The purchased subscription ID (for example, 'monthly001').
         * @params {string} token The token provided to the user's device when the subscription was purchased.
         */
        get: (params: {
            packageName: string;
            subscriptionId: string;
            token: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ISubscriptionPurchase, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    /**
     * A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
     */
    interface ISubscriptionPurchase {
        /**
         * Whether the subscription will automatically be renewed when it reaches its current expiry time.
         */
        autoRenewing: boolean;
        /**
         * Time at which the subscription was granted, in milliseconds since Epoch.
         */
        initiationTimestampMsec: string; // int64
        /**
         * This kind represents a subscriptionPurchase object in the androidpublisher service.
         */
        kind: string;
        /**
         * Time at which the subscription will expire, in milliseconds since Epoch.
         */
        validUntilTimestampMsec: string; // int64
    }
}
