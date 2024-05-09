import { s3Upload, uploadServer } from "@/services/clients/axiox";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosProgressEvent } from "axios";

type TUsePublicUploadVariables = {
  sub?: string;
  type: string;
  onSuccess?: (url: any) => any;
  onError?: (error: any) => any;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};

interface IUploadPayload {
  sub?: string;
  type: string;
  filename: string;
}

export default function usePublicUpload({
  sub,
  type,
  onSuccess = () => null,
  onError = () => null,
  onUploadProgress,
}: TUsePublicUploadVariables) {
  //   const { user } = useIsAuthenticated();
  const source = axios.CancelToken.source();

  const upload = async (file: any) => {
    let url = "";

    const payload: IUploadPayload = {
      filename: file.name,
      sub,
      type,
    };

    const response = await uploadServer.post(`/api/upload`, payload, {
      headers: {
        // Authorization: `${user?.accessToken}`,
      },
    });
    // console.log({ url: response.data.data.url, file });
    await s3Upload.put(response.data.data.url, file, {
      onUploadProgress: onUploadProgress,
      cancelToken: source.token,
    });
    url = response?.data?.data?.url?.split("?")[0];
    return url;
  };

  return useMutation<any, any, any>({
    mutationFn: (payload) => {
      return upload(payload);
    },
    onSuccess,
    onError,
  });
}
