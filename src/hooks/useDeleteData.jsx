import { useMutation, useQueryClient } from "@tanstack/react-query"
import { httpsInterceptedService } from "@core/http-service"
import { useEffect } from "react"
import { toast } from "react-toastify"

export const useDeleteData = (key , url , refKey  ) => {
    const client = useQueryClient()
    const {mutate,  isPaused , isError } = useMutation({
        mutationKey: [key],
        mutationFn: async (id) => {
            const res = await httpsInterceptedService.delete(`${url}/${id}`)
            return res
        },onSuccess: () => {
            client.invalidateQueries({ queryKey: [refKey] });
            toast.success("  فیلد مورد نظر حذف شد", {
                position: "bottom-left"
            });
        }
    })    

    useEffect(() => {
         if(isPaused || isError){
            toast.error("عملیات انجام نشد خطای سمت سرور", {
                position: "bottom-left",
            });
         }
    } , [isPaused , isError])
  


    return [mutate ]
}