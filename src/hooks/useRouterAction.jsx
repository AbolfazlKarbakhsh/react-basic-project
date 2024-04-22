import { useEffect } from "react";
import { useActionData, useNavigate, useNavigation, useRouteError, useSubmit } from "react-router-dom";
import { toast } from "react-toastify";

const useRouterAction = (url) => {
    const submitForm = useSubmit()
    const isSubmiting = useNavigation().state != 'idle'
    const isSuccessData = useActionData();
    const routeErrors = useRouteError()
    // const navigaitor = useNavigate()

    // useEffect(() => {
        // toast.success("ورود شما با موفقیت انجام شد !", {
        //     position: "top-left"
        // });
        // isSuccessData && setTimeout(() => {
        //     url != false &&
        //     navigaitor(url)
        // }, 2000)
        // console.log(isSuccessData)
        
    // }, [isSuccessData]);

    const onSubmit = data => {
        const { repassword, ...UserData } = data
        submitForm(UserData, { method: 'post' })
    }
    return {onSubmit , isSubmiting , isSuccessData , routeErrors }
}

export default useRouterAction;
