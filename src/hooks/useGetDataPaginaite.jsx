import { useQuery } from "@tanstack/react-query"
import { httpsInterceptedService } from "@core/http-service"

const useGetDataPaginaite = (pageParams , pageSize , url , key) => {

    const { data, isPending, isError } = useQuery({
        queryKey: [key, pageParams],
        queryFn: async ({ queryKey }) => {
            const res = await httpsInterceptedService.get(`/${url}?page=${queryKey[1]}&pageSize=${pageSize}`)
            return res.data
        }
    })

    return {
        BafData: data,
        BafPending: isPending,
        BafError: isError,
    }

}

export default useGetDataPaginaite