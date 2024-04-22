import { httpsInterceptedService } from "@core/http-service"
import { useMutation } from "@tanstack/react-query"
import { saveAs } from "file-saver"
import { toast } from "react-toastify"

const useFilePdfStudentAll = (url, key) => {
    let idToast
    const optionToast = { isLoading: false, delay: 3000, autoClose: true, closeButton: true, position: "bottom-left" }
    const { mutate, data  } = useMutation({

        mutationKey: [key],
        mutationFn: async (dataStudent) => {

            idToast = toast.loading("در حال بارگیری", { closeButton: true, position: "bottom-left" })
            const res = await httpsInterceptedService({
                url: `${url}`,
                method: 'POST',
                responseType: 'blob',
                data: dataStudent
            })
            return res
        }, onSuccess: (data) => {

            saveAs(data.data, `Report.pdf`)
            toast.update(idToast, { render: "فایل مورد نظر دانلود شد !", type: "success", ...optionToast });

        }, onError: async (error) => {
            toast.update(idToast, { render: await error?.response?.data?.text() || "  عملیات انجام نشد  !", type: "error", ...optionToast });
        }
    })


    return [mutate, data]
}

export default useFilePdfStudentAll