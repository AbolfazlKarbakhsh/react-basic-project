import { create } from 'zustand';
const StudentsData = (set, get) => ({
    data: 10,
    actions: {
        changeData: (newData) => {
            set((state) => ({ ...state, data: newData.map(e => e.id) }))
        }
    }
})

const StudentDetailAcademy = (set, get) => ({
    data: {
        school: '',
        classStudent: ''
    },
    actions: {
        changeSchool: (newSchool) => {
            set((state) => ({ ...state, data: { ...state.data, school: newSchool } }));
        },
        changeClass: (newClass) => {
            set((state) => ({ ...state, data: { ...state.data, classStudent: newClass } }));
        }
    }
});


const useStudentData = create(StudentsData)
const useStudentAcademyData = create(StudentDetailAcademy)
export { useStudentAcademyData }
export default useStudentData  