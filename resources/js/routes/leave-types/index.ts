import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\LeavetypeController::index
* @see app/Http/Controllers/LeavetypeController.php:14
* @route '/leave-types'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/leave-types',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\LeavetypeController::index
* @see app/Http/Controllers/LeavetypeController.php:14
* @route '/leave-types'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeavetypeController::index
* @see app/Http/Controllers/LeavetypeController.php:14
* @route '/leave-types'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeavetypeController::index
* @see app/Http/Controllers/LeavetypeController.php:14
* @route '/leave-types'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\LeavetypeController::index
* @see app/Http/Controllers/LeavetypeController.php:14
* @route '/leave-types'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeavetypeController::index
* @see app/Http/Controllers/LeavetypeController.php:14
* @route '/leave-types'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\LeavetypeController::index
* @see app/Http/Controllers/LeavetypeController.php:14
* @route '/leave-types'
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
* @see \App\Http\Controllers\LeavetypeController::store
* @see app/Http/Controllers/LeavetypeController.php:21
* @route '/leave-types'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/leave-types',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\LeavetypeController::store
* @see app/Http/Controllers/LeavetypeController.php:21
* @route '/leave-types'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeavetypeController::store
* @see app/Http/Controllers/LeavetypeController.php:21
* @route '/leave-types'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeavetypeController::store
* @see app/Http/Controllers/LeavetypeController.php:21
* @route '/leave-types'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeavetypeController::store
* @see app/Http/Controllers/LeavetypeController.php:21
* @route '/leave-types'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\LeavetypeController::update
* @see app/Http/Controllers/LeavetypeController.php:34
* @route '/leave-types/{leaveType}'
*/
export const update = (args: { leaveType: number | { id: number } } | [leaveType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

update.definition = {
    methods: ["patch"],
    url: '/leave-types/{leaveType}',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\LeavetypeController::update
* @see app/Http/Controllers/LeavetypeController.php:34
* @route '/leave-types/{leaveType}'
*/
update.url = (args: { leaveType: number | { id: number } } | [leaveType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { leaveType: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { leaveType: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            leaveType: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        leaveType: typeof args.leaveType === 'object'
        ? args.leaveType.id
        : args.leaveType,
    }

    return update.definition.url
            .replace('{leaveType}', parsedArgs.leaveType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeavetypeController::update
* @see app/Http/Controllers/LeavetypeController.php:34
* @route '/leave-types/{leaveType}'
*/
update.patch = (args: { leaveType: number | { id: number } } | [leaveType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\LeavetypeController::update
* @see app/Http/Controllers/LeavetypeController.php:34
* @route '/leave-types/{leaveType}'
*/
const updateForm = (args: { leaveType: number | { id: number } } | [leaveType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeavetypeController::update
* @see app/Http/Controllers/LeavetypeController.php:34
* @route '/leave-types/{leaveType}'
*/
updateForm.patch = (args: { leaveType: number | { id: number } } | [leaveType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\LeavetypeController::destroy
* @see app/Http/Controllers/LeavetypeController.php:47
* @route '/leave-types/{leaveType}'
*/
export const destroy = (args: { leaveType: number | { id: number } } | [leaveType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/leave-types/{leaveType}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\LeavetypeController::destroy
* @see app/Http/Controllers/LeavetypeController.php:47
* @route '/leave-types/{leaveType}'
*/
destroy.url = (args: { leaveType: number | { id: number } } | [leaveType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { leaveType: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { leaveType: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            leaveType: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        leaveType: typeof args.leaveType === 'object'
        ? args.leaveType.id
        : args.leaveType,
    }

    return destroy.definition.url
            .replace('{leaveType}', parsedArgs.leaveType.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\LeavetypeController::destroy
* @see app/Http/Controllers/LeavetypeController.php:47
* @route '/leave-types/{leaveType}'
*/
destroy.delete = (args: { leaveType: number | { id: number } } | [leaveType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\LeavetypeController::destroy
* @see app/Http/Controllers/LeavetypeController.php:47
* @route '/leave-types/{leaveType}'
*/
const destroyForm = (args: { leaveType: number | { id: number } } | [leaveType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\LeavetypeController::destroy
* @see app/Http/Controllers/LeavetypeController.php:47
* @route '/leave-types/{leaveType}'
*/
destroyForm.delete = (args: { leaveType: number | { id: number } } | [leaveType: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const leaveTypes = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default leaveTypes