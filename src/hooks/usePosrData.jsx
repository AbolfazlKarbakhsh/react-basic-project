import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { httpsInterceptedService } from "@core/http-service";
import { toast } from "react-toastify";

export const usePostData = (key, url, refKey, headers = "") => {
    const [idToast, setIdToast] = useState(null);
    const client = useQueryClient();
    const { mutate, isPaused, isError, error } = useMutation({
        mutationKey: [key],
        mutationFn: async (data) => {
            setIdToast(toast.loading("در حال بارگیری", { closeButton: true, position: "bottom-left" }));
            const res = await httpsInterceptedService.post(`${url}`, data, {
                headers: {
                    "Content-Type": headers,
                },
            });
            return res;
        },
        onSuccess: () => {
            toast.dismiss(idToast.current);
            client.invalidateQueries({ queryKey: [refKey] });
            toast.success("  فیلد مورد نظر افزوده  شد", {
                position: "bottom-left",
            });

        },
    });

    useEffect(() => {
        if (isPaused) {
            toast.dismiss(idToast.current);
            toast.error("عملیات انجام نشد خطای سمت سرور", {
                position: "bottom-left",
            });
        }
    }, [isPaused]);

    useEffect(() => {
        if (isError) {
            toast.dismiss(idToast.current);
            toast.error(error?.response?.data?.message, {
                position: "bottom-left",
            });
        }
    }, [isError]);

    return [mutate];
};
