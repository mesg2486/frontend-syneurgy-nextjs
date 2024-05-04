import { s3Upload, uploadServer } from "@/services/clients/axiox";
import { useMutation } from "@tanstack/react-query";

type TUsePublicUploadVariables = {
  sub?: string;
  type: string;
  onSuccess?: (url: any) => any;
  onError?: (error: any) => any;
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
}: TUsePublicUploadVariables) {
  //   const { user } = useIsAuthenticated();

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
    await s3Upload.put(response.data.data.url, file);
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
