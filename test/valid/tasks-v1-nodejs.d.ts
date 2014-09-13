// Type definitions for Google Tasks API v1
// Project: https://developers.google.com/google-apps/tasks/firstapp
// Definitions by: vvakame's gapidts <https://github.com/vvakame/gapidts>
// Definitions: https://github.com/vvakame/gapidts

// OAuth2 scopes
// https://www.googleapis.com/auth/tasks
//   Manage your tasks
// https://www.googleapis.com/auth/tasks.readonly
//   View your tasks

/// <reference path="./googleapis-nodejs-common.d.ts" />

declare module "googleapis" {
    function tasks(version:string):typeof googleapis.tasks;
    function tasks(opts: {version:string; auth?: googleapis.google.auth.OAuth2; }):typeof googleapis.tasks;
}
/**
 * Lets you manage your tasks and task lists.
 */
declare module googleapis.tasks {
    var tasklists: {
        /**
         * Deletes the authenticated user's specified task list.
         * @params {string} tasklist Task list identifier.
         */
        delete: (params: {
            tasklist: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Returns the authenticated user's specified task list.
         * @params {string} tasklist Task list identifier.
         */
        get: (params: {
            tasklist: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITaskList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a new task list and adds it to the authenticated user's task lists.
         */
        insert: (params: {
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITaskList;
        }, callback: (err: IErrorResponse, response: ITaskList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns all the authenticated user's task lists.
         * @params {string} maxResults Maximum number of task lists returned on one page. Optional. The default is 100.
         * @params {string} pageToken Token specifying the result page to return. Optional.
         */
        list: (params: {
            maxResults?: string;
            pageToken?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITaskLists, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates the authenticated user's specified task list. This method supports patch semantics.
         * @params {string} tasklist Task list identifier.
         */
        patch: (params: {
            tasklist: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITaskList;
        }, callback: (err: IErrorResponse, response: ITaskList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates the authenticated user's specified task list.
         * @params {string} tasklist Task list identifier.
         */
        update: (params: {
            tasklist: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITaskList;
        }, callback: (err: IErrorResponse, response: ITaskList, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    var tasks: {
        /**
         * Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
         * @params {string} tasklist Task list identifier.
         */
        clear: (params: {
            tasklist: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Deletes the specified task from the task list.
         * @params {string} task Task identifier.
         * @params {string} tasklist Task list identifier.
         */
        delete: (params: {
            task: string;
            tasklist: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: any, incomingMessage: any /* http.IncomingMessage */) => void ) => void; // void
        /**
         * Returns the specified task.
         * @params {string} task Task identifier.
         * @params {string} tasklist Task list identifier.
         */
        get: (params: {
            task: string;
            tasklist: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITask, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Creates a new task on the specified task list.
         * @params {string} parent Parent task identifier. If the task is created at the top level, this parameter is omitted. Optional.
         * @params {string} previous Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional.
         * @params {string} tasklist Task list identifier.
         */
        insert: (params: {
            parent?: string;
            previous?: string;
            tasklist: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITask;
        }, callback: (err: IErrorResponse, response: ITask, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Returns all tasks in the specified task list.
         * @params {string} completedMax Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
         * @params {string} completedMin Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date.
         * @params {string} dueMax Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
         * @params {string} dueMin Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date.
         * @params {string} maxResults Maximum number of task lists returned on one page. Optional. The default is 100.
         * @params {string} pageToken Token specifying the result page to return. Optional.
         * @params {boolean} showCompleted Flag indicating whether completed tasks are returned in the result. Optional. The default is True.
         * @params {boolean} showDeleted Flag indicating whether deleted tasks are returned in the result. Optional. The default is False.
         * @params {boolean} showHidden Flag indicating whether hidden tasks are returned in the result. Optional. The default is False.
         * @params {string} tasklist Task list identifier.
         * @params {string} updatedMin Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time.
         */
        list: (params: {
            completedMax?: string;
            completedMin?: string;
            dueMax?: string;
            dueMin?: string;
            maxResults?: string;
            pageToken?: string;
            showCompleted?: boolean;
            showDeleted?: boolean;
            showHidden?: boolean;
            tasklist: string;
            updatedMin?: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITasks, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
         * @params {string} parent New parent task identifier. If the task is moved to the top level, this parameter is omitted. Optional.
         * @params {string} previous New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. Optional.
         * @params {string} task Task identifier.
         * @params {string} tasklist Task list identifier.
         */
        move: (params: {
            parent?: string;
            previous?: string;
            task: string;
            tasklist: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
        }, callback: (err: IErrorResponse, response: ITask, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates the specified task. This method supports patch semantics.
         * @params {string} task Task identifier.
         * @params {string} tasklist Task list identifier.
         */
        patch: (params: {
            task: string;
            tasklist: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITask;
        }, callback: (err: IErrorResponse, response: ITask, incomingMessage: any /* http.IncomingMessage */) => void) => void;
        /**
         * Updates the specified task.
         * @params {string} task Task identifier.
         * @params {string} tasklist Task list identifier.
         */
        update: (params: {
            task: string;
            tasklist: string;
            key?: string; // API_KEY
            auth?: googleapis.google.auth.OAuth2; // string(API_KEY) or googleapis.google.auth.OAuth2
            resource?: ITask;
        }, callback: (err: IErrorResponse, response: ITask, incomingMessage: any /* http.IncomingMessage */) => void) => void;
    };
    interface ITask {
        /**
         * Completion date of the task (as a RFC 3339 timestamp). This field is omitted if the task has not been completed.
         */
        completed: string; // date-time
        /**
         * Flag indicating whether the task has been deleted. The default if False.
         */
        deleted: boolean;
        /**
         * Due date of the task (as a RFC 3339 timestamp). Optional.
         */
        due: string; // date-time
        /**
         * ETag of the resource.
         */
        etag: string;
        /**
         * Flag indicating whether the task is hidden. This is the case if the task had been marked completed when the task list was last cleared. The default is False. This field is read-only.
         */
        hidden: boolean;
        /**
         * Task identifier.
         */
        id: string;
        /**
         * Type of the resource. This is always "tasks#task".
         */
        kind: string;
        /**
         * Collection of links. This collection is read-only.
         */
        links: {
            description: string;
            link: string;
            type: string;
        }[];
        /**
         * Notes describing the task. Optional.
         */
        notes: string;
        /**
         * Parent task identifier. This field is omitted if it is a top-level task. This field is read-only. Use the "move" method to move the task under a different parent or to the top level.
         */
        parent: string;
        /**
         * String indicating the position of the task among its sibling tasks under the same parent task or at the top level. If this string is greater than another task's corresponding position string according to lexicographical ordering, the task is positioned after the other task under the same parent task (or at the top level). This field is read-only. Use the "move" method to move the task to another position.
         */
        position: string;
        /**
         * URL pointing to this task. Used to retrieve, update, or delete this task.
         */
        selfLink: string;
        /**
         * Status of the task. This is either "needsAction" or "completed".
         */
        status: string;
        /**
         * Title of the task.
         */
        title: string;
        /**
         * Last modification time of the task (as a RFC 3339 timestamp).
         */
        updated: string; // date-time
    }
    interface ITaskList {
        /**
         * ETag of the resource.
         */
        etag: string;
        /**
         * Task list identifier.
         */
        id: string;
        /**
         * Type of the resource. This is always "tasks#taskList".
         */
        kind: string;
        /**
         * URL pointing to this task list. Used to retrieve, update, or delete this task list.
         */
        selfLink: string;
        /**
         * Title of the task list.
         */
        title: string;
        /**
         * Last modification time of the task list (as a RFC 3339 timestamp).
         */
        updated: string; // date-time
    }
    interface ITaskLists {
        /**
         * ETag of the resource.
         */
        etag: string;
        /**
         * Collection of task lists.
         */
        items: ITaskList[];
        /**
         * Type of the resource. This is always "tasks#taskLists".
         */
        kind: string;
        /**
         * Token that can be used to request the next page of this result.
         */
        nextPageToken: string;
    }
    interface ITasks {
        /**
         * ETag of the resource.
         */
        etag: string;
        /**
         * Collection of tasks.
         */
        items: ITask[];
        /**
         * Type of the resource. This is always "tasks#tasks".
         */
        kind: string;
        /**
         * Token used to access the next page of this result.
         */
        nextPageToken: string;
    }
}
