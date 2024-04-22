import { useQuery } from "@tanstack/react-query"
import { httpsInterceptedService } from "@core/http-service"

const useGetData = (url, key) => {
    const { data, isPending, isError } = useQuery({
        queryKey: [key],
        queryFn: async () => {
            const res = await httpsInterceptedService.get(`/${url}`)
            return res.data
        }
    })

    return [
        data,
        isPending,
        isError,
    ]

}

export default useGetData