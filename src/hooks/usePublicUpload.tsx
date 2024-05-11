import { useAxiosUploadProgress } from "@/contexts/event.context";
import { s3Upload, uploadServer } from "@/services/clients/axiox";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosProgressEvent } from "axios";

export type TUsePublicUploadVariables = {
  sub?: string;
  type: string;
  setUrl?: React.Dispatch<React.SetStateAction<string>>;
  onSuccess?: (url: any) => any;
  onError?: (error: any) => any;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};

interface IUploadPayload {
  sub?: string;
  type: string;
  filename: string;
}

// use seturl for async uploads to get the url before the file starts uploading

export default function usePublicUpload({
  sub,
  type,
  setUrl,
  onSuccess = () => null,
  onError = () => null,
  onUploadProgress,
}: TUsePublicUploadVariables) {
  //   const { user } = useIsAuthenticated();
  const source = axios.CancelToken.source();

  const { notifyProgress } = useAxiosUploadProgress();

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
    const signedUrl = response.data.data.url;
    url = response?.data?.data?.url?.split("?")[0];
    setUrl && setUrl(url);
    // console.log({ url: response.data.data.url, file });
    await s3Upload.put(signedUrl, file, {
      onUploadProgress: (event) => {
        notifyProgress(url, file.name, event);
        onUploadProgress?.(event);
      },
      cancelToken: source.token,
    });
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
