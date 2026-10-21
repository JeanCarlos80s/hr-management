import DashboardController from './DashboardController'
import ReportController from './ReportController'
import DepartmentController from './DepartmentController'
import PositionController from './PositionController'
import EmployeeController from './EmployeeController'
import LeavetypeController from './LeavetypeController'
import LeaveRequestController from './LeaveRequestController'
import AttendanceController from './AttendanceController'
import PayslipController from './PayslipController'
import Settings from './Settings'

const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
    ReportController: Object.assign(ReportController, ReportController),
    DepartmentController: Object.assign(DepartmentController, DepartmentController),
    PositionController: Object.assign(PositionController, PositionController),
    EmployeeController: Object.assign(EmployeeController, EmployeeController),
    LeavetypeController: Object.assign(LeavetypeController, LeavetypeController),
    LeaveRequestController: Object.assign(LeaveRequestController, LeaveRequestController),
    AttendanceController: Object.assign(AttendanceController, AttendanceController),
    PayslipController: Object.assign(PayslipController, PayslipController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers