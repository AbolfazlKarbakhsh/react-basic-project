import { httpsInterceptedService } from "@core/http-service"
import { useMutation } from "@tanstack/react-query"
import { saveAs } from "file-saver"
import { toast } from "react-toastify"

const useFilePdfStudent = (url, key) => {
    let idToast
    const optionToast = {isLoading: false, delay: 3000, autoClose: true, closeButton: true, position: "bottom-left"}
    const { mutate, data } = useMutation({

        mutationKey: [key],
        mutationFn: async (data) => {
            idToast = toast.loading("در حال بارگیری", { closeButton: true, position: "bottom-left" })
            const res = await httpsInterceptedService({
                url: `${url}?testId=${data.testId}&userId=${data.userId}`,
                method: 'POST',
                responseType: 'blob',
            })
            return res
        }, onSuccess: (data) => {
            saveAs(data.data, "StudentReport.pdf")
            toast.update(idToast, { render: "فایل مورد نظر دانلود شد !", type: "success", ...optionToast });
        }, onError: () => {
            toast.update(idToast, { render: "   عملیات انجام نشد  !", type: "error", ...optionToast });
        }
    })


    return [mutate, data]
}

export default useFilePdfStudent