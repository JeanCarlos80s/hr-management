import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:18
* @route '/leave-requests'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/leave-requests',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:18
* @route '/leave-requests'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:18
* @route '/leave-requests'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:18
* @route '/leave-requests'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:18
* @route '/leave-requests'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:18
* @route '/leave-requests'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::index
* @see app/Http/Controllers/LeaveRequestController.php:18
* @route '/leave-requests'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\LeaveRequestController::store
* @see app/Http/Controllers/LeaveRequestController.php:34
* @route '/leave-requests'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/leave-requests',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::store
* @see app/Http/Controllers/LeaveRequestController.php:34
* @route '/leave-requests'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::store
* @see app/Http/Controllers/LeaveRequestController.php:34
* @route '/leave-requests'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::store
* @see app/Http/Controllers/LeaveRequestController.php:34
* @route '/leave-requests'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::store
* @see app/Http/Controllers/LeaveRequestController.php:34
* @route '/leave-requests'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\LeaveRequestController::approve
* @see app/Http/Controllers/LeaveRequestController.php:55
* @route '/leave-requests/{leaveRequest}/approve'
*/
export const approve = (args: { leaveRequest: number | { id: number } } | [leaveRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve.url(args, options),
    method: 'patch',
})

approve.definition = {
    methods: ["patch"],
    url: '/leave-requests/{leaveRequest}/approve',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::approve
* @see app/Http/Controllers/LeaveRequestController.php:55
* @route '/leave-requests/{leaveRequest}/approve'
*/
approve.url = (args: { leaveRequest: number | { id: number } } | [leaveRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { leaveRequest: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { leaveRequest: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            leaveRequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        leaveRequest: typeof args.leaveRequest === 'object'
        ? args.leaveRequest.id
        : args.leaveRequest,
    }

    return approve.definition.url
            .replace('{leaveRequest}', parsedArgs.leaveRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::approve
* @see app/Http/Controllers/LeaveRequestController.php:55
* @route '/leave-requests/{leaveRequest}/approve'
*/
approve.patch = (args: { leaveRequest: number | { id: number } } | [leaveRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: approve.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::approve
* @see app/Http/Controllers/LeaveRequestController.php:55
* @route '/leave-requests/{leaveRequest}/approve'
*/
const approveForm = (args: { leaveRequest: number | { id: number } } | [leaveRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::approve
* @see app/Http/Controllers/LeaveRequestController.php:55
* @route '/leave-requests/{leaveRequest}/approve'
*/
approveForm.patch = (args: { leaveRequest: number | { id: number } } | [leaveRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: approve.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

approve.form = approveForm

/**
* @see \App\Http\Controllers\LeaveRequestController::reject
* @see app/Http/Controllers/LeaveRequestController.php:85
* @route '/leave-requests/{leaveRequest}/reject'
*/
export const reject = (args: { leaveRequest: number | { id: number } } | [leaveRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: reject.url(args, options),
    method: 'patch',
})

reject.definition = {
    methods: ["patch"],
    url: '/leave-requests/{leaveRequest}/reject',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\LeaveRequestController::reject
* @see app/Http/Controllers/LeaveRequestController.php:85
* @route '/leave-requests/{leaveRequest}/reject'
*/
reject.url = (args: { leaveRequest: number | { id: number } } | [leaveRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { leaveRequest: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { leaveRequest: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            leaveRequest: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        leaveRequest: typeof args.leaveRequest === 'object'
        ? args.leaveRequest.id
        : args.leaveRequest,
    }

    return reject.definition.url
            .replace('{leaveRequest}', parsedArgs.leaveRequest.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeaveRequestController::reject
* @see app/Http/Controllers/LeaveRequestController.php:85
* @route '/leave-requests/{leaveRequest}/reject'
*/
reject.patch = (args: { leaveRequest: number | { id: number } } | [leaveRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: reject.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::reject
* @see app/Http/Controllers/LeaveRequestController.php:85
* @route '/leave-requests/{leaveRequest}/reject'
*/
const rejectForm = (args: { leaveRequest: number | { id: number } } | [leaveRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeaveRequestController::reject
* @see app/Http/Controllers/LeaveRequestController.php:85
* @route '/leave-requests/{leaveRequest}/reject'
*/
rejectForm.patch = (args: { leaveRequest: number | { id: number } } | [leaveRequest: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: reject.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

reject.form = rejectForm

const leaveRequests = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    approve: Object.assign(approve, approve),
    reject: Object.assign(reject, reject),
}

export default leaveRequests