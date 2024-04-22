import { useQuery } from "@tanstack/react-query"
import { httpsInterceptedService } from "@core/http-service"

const useGetDataParams = (params, url, key) => {

    const ParamsUrl = (queryKey) => {
        const arrayUrl = params.map((e) => e.paramUrl)
        let urlPathParam = '?'
     
        arrayUrl.forEach((e, i) => {
            if (i == 0) {
                urlPathParam += `${e}=${queryKey[1][i]}`
            } else {
                urlPathParam += `&${e}=${queryKey[1][i]}`
            }

        })
        return urlPathParam
    }

    const ParamsKey = () => {
        return params.map((e) => e.paramKey)
    }
    

    const { data, isPending, isError } = useQuery({
        queryKey: [key, ParamsKey()],
        queryFn: async ({ queryKey }) => {
            const res = await httpsInterceptedService.get(`/${url}${ParamsUrl(queryKey)}`)
            return res.data
        }
    })

    return [
        data,
        isPending,
        isError,
    ]

}

export default useGetDataParams