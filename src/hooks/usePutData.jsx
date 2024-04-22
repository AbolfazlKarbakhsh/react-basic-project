import { useMutation, useQueryClient } from "@tanstack/react-query"
import { httpsInterceptedService } from "@core/http-service"
import { useEffect } from "react"
import { toast } from "react-toastify"

export const usePutData = (key , url , refKey) => {
    const client = useQueryClient()
    const {mutate,  isPaused} = useMutation({
        mutationKey: [key],
        mutationFn: async (data) => {
            const res = await httpsInterceptedService.put(`${url}` , data )
            return res
        },onSuccess: () => {
            client.invalidateQueries({ queryKey: [refKey] });
            toast.success("  فیلد مورد نظر ویرایش  شد", {
                position: "bottom-left"
            });
        }
    })    

    useEffect(() => {
         if(isPaused){
            toast.error("عملیات انجام نشد خطای سمت سرور", {
                position: "bottom-left",
            });
         }
    } , [isPaused])
  

    return [mutate ]
}