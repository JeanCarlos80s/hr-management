import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ReportController::index
* @see app/Http/Controllers/ReportController.php:14
* @route '/reports'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/reports',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::index
* @see app/Http/Controllers/ReportController.php:14
* @route '/reports'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::index
* @see app/Http/Controllers/ReportController.php:14
* @route '/reports'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ReportController::index
* @see app/Http/Controllers/ReportController.php:14
* @route '/reports'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ReportController::index
* @see app/Http/Controllers/ReportController.php:14
* @route '/reports'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ReportController::index
* @see app/Http/Controllers/ReportController.php:14
* @route '/reports'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ReportController::index
* @see app/Http/Controllers/ReportController.php:14
* @route '/reports'
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
* @see \App\Http\Controllers\ReportController::employees
* @see app/Http/Controllers/ReportController.php:32
* @route '/reports/employees.csv'
*/
export const employees = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: employees.url(options),
    method: 'get',
})

employees.definition = {
    methods: ["get","head"],
    url: '/reports/employees.csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::employees
* @see app/Http/Controllers/ReportController.php:32
* @route '/reports/employees.csv'
*/
employees.url = (options?: RouteQueryOptions) => {
    return employees.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::employees
* @see app/Http/Controllers/ReportController.php:32
* @route '/reports/employees.csv'
*/
employees.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: employees.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ReportController::employees
* @see app/Http/Controllers/ReportController.php:32
* @route '/reports/employees.csv'
*/
employees.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: employees.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ReportController::employees
* @see app/Http/Controllers/ReportController.php:32
* @route '/reports/employees.csv'
*/
const employeesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: employees.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ReportController::employees
* @see app/Http/Controllers/ReportController.php:32
* @route '/reports/employees.csv'
*/
employeesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: employees.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ReportController::employees
* @see app/Http/Controllers/ReportController.php:32
* @route '/reports/employees.csv'
*/
employeesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: employees.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

employees.form = employeesForm

/**
* @see \App\Http\Controllers\ReportController::payroll
* @see app/Http/Controllers/ReportController.php:54
* @route '/reports/payroll.csv'
*/
export const payroll = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payroll.url(options),
    method: 'get',
})

payroll.definition = {
    methods: ["get","head"],
    url: '/reports/payroll.csv',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ReportController::payroll
* @see app/Http/Controllers/ReportController.php:54
* @route '/reports/payroll.csv'
*/
payroll.url = (options?: RouteQueryOptions) => {
    return payroll.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ReportController::payroll
* @see app/Http/Controllers/ReportController.php:54
* @route '/reports/payroll.csv'
*/
payroll.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: payroll.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ReportController::payroll
* @see app/Http/Controllers/ReportController.php:54
* @route '/reports/payroll.csv'
*/
payroll.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: payroll.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ReportController::payroll
* @see app/Http/Controllers/ReportController.php:54
* @route '/reports/payroll.csv'
*/
const payrollForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payroll.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ReportController::payroll
* @see app/Http/Controllers/ReportController.php:54
* @route '/reports/payroll.csv'
*/
payrollForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payroll.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ReportController::payroll
* @see app/Http/Controllers/ReportController.php:54
* @route '/reports/payroll.csv'
*/
payrollForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: payroll.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

payroll.form = payrollForm

const reports = {
    index: Object.assign(index, index),
    employees: Object.assign(employees, employees),
    payroll: Object.assign(payroll, payroll),
}

export default reports