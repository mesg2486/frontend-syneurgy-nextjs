import { useAxiosUploadProgress } from "@/contexts/event.context";
import { s3Upload, uploadServer } from "@/services/clients/axiox";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosProgressEvent } from "axios";

export type TUsePublicUploadVariables = {
  sub?: string;
  type: string;
  meetingId?: string;
  contentType?: string;
  setUrl?: React.Dispatch<React.SetStateAction<string>>;
  onSuccess?: (url: any) => any;
  onError?: (error: any) => any;
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
};

interface IUploadPayload {
  sub?: string;
  type: string;
  contentType?: string;
  filename: string;
  meetingId?: string;
}

// use seturl for async uploads to get the url before the file starts uploading

export default function usePublicUpload({
  sub,
  meetingId,
  contentType,
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
      contentType: file.type || "multipart/form-data",
      type,
      meetingId,
    };

    const response = await uploadServer.post(`/api/upload`, payload, {
      headers: {
        // Authorization: `${user?.accessToken}`,
      },
    });
    const signedUrl = response.data.data.url;
    const downloadUrl = response.data.data.downloadUrl;

    console.log({ downloadUrl, url });

    setUrl && setUrl(downloadUrl);
    console.log({ url: response.data.data.url, file, response, payload });
    await s3Upload.put(signedUrl, file, {
      onUploadProgress: (event) => {
        notifyProgress(url, file.name, event);
        onUploadProgress?.(event);
      },
      cancelToken: source.token,
      headers: {
        "Content-Type": file.type || "multipart/form-data",
      },
    });
    return downloadUrl;
  };

  return useMutation<any, any, any>({
    mutationFn: (payload) => {
      return upload(payload);
    },
    onSuccess,
    onError,
  });
}
