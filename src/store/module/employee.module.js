import { EmployeeService } from "@/Services/EmployeeService";

export default{
    nameSpaced : true,

    state:{
        employees : EmployeeService.getEmployeeList()
    },
    mutations:{

        UPDATE_SELECTED : function(state, payload){
            state.employees = state.employees.map(employee => {
                if(employee.id === payload.employeeId)
                {
                    return {
                        ...employee,
                        isSelected: !employee.isSelected
                    }
                }else {
                    return employee
                }
            })
        }

    },
    actions:{

        updateSelected({commit}, payload){
            return commit('UPDATE_SELECTED', payload)
        }

    }

}