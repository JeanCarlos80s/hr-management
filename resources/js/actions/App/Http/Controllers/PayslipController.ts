import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PayslipController::index
* @see app/Http/Controllers/PayslipController.php:16
* @route '/payslips'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/payslips',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PayslipController::index
* @see app/Http/Controllers/PayslipController.php:16
* @route '/payslips'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PayslipController::index
* @see app/Http/Controllers/PayslipController.php:16
* @route '/payslips'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PayslipController::index
* @see app/Http/Controllers/PayslipController.php:16
* @route '/payslips'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PayslipController::index
* @see app/Http/Controllers/PayslipController.php:16
* @route '/payslips'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PayslipController::index
* @see app/Http/Controllers/PayslipController.php:16
* @route '/payslips'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PayslipController::index
* @see app/Http/Controllers/PayslipController.php:16
* @route '/payslips'
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
* @see \App\Http\Controllers\PayslipController::store
* @see app/Http/Controllers/PayslipController.php:34
* @route '/payslips'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/payslips',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PayslipController::store
* @see app/Http/Controllers/PayslipController.php:34
* @route '/payslips'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PayslipController::store
* @see app/Http/Controllers/PayslipController.php:34
* @route '/payslips'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PayslipController::store
* @see app/Http/Controllers/PayslipController.php:34
* @route '/payslips'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PayslipController::store
* @see app/Http/Controllers/PayslipController.php:34
* @route '/payslips'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PayslipController::show
* @see app/Http/Controllers/PayslipController.php:77
* @route '/payslips/{payslip}'
*/
export const show = (args: { payslip: number | { id: number } } | [payslip: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/payslips/{payslip}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PayslipController::show
* @see app/Http/Controllers/PayslipController.php:77
* @route '/payslips/{payslip}'
*/
show.url = (args: { payslip: number | { id: number } } | [payslip: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { payslip: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { payslip: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            payslip: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        payslip: typeof args.payslip === 'object'
        ? args.payslip.id
        : args.payslip,
    }

    return show.definition.url
            .replace('{payslip}', parsedArgs.payslip.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PayslipController::show
* @see app/Http/Controllers/PayslipController.php:77
* @route '/payslips/{payslip}'
*/
show.get = (args: { payslip: number | { id: number } } | [payslip: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PayslipController::show
* @see app/Http/Controllers/PayslipController.php:77
* @route '/payslips/{payslip}'
*/
show.head = (args: { payslip: number | { id: number } } | [payslip: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PayslipController::show
* @see app/Http/Controllers/PayslipController.php:77
* @route '/payslips/{payslip}'
*/
const showForm = (args: { payslip: number | { id: number } } | [payslip: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PayslipController::show
* @see app/Http/Controllers/PayslipController.php:77
* @route '/payslips/{payslip}'
*/
showForm.get = (args: { payslip: number | { id: number } } | [payslip: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PayslipController::show
* @see app/Http/Controllers/PayslipController.php:77
* @route '/payslips/{payslip}'
*/
showForm.head = (args: { payslip: number | { id: number } } | [payslip: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const PayslipController = { index, store, show }

export default PayslipController