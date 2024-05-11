import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { AxiosProgressEvent } from "axios";

// Define action types
enum ActionTypes {
  NOTIFY_UPLOAD = "NOTIFY_UPLOAD",
}

// Define event interface
interface Upload {
  id: string;
  filename: string;
  event: AxiosProgressEvent;
}

// Define reducer function
const reducer = (
  state: { uploads: Upload[] },
  action: { type: ActionTypes.NOTIFY_UPLOAD; payload: Upload },
): { uploads: Upload[] } => {
  switch (action.type) {
    case ActionTypes.NOTIFY_UPLOAD:
      // Check if upload with the same ID exists
      // eslint-disable-next-line no-case-declarations
      const existingUploadIndex = state.uploads.findIndex(
        (upload) => upload.id === action.payload.id,
      );
      if (existingUploadIndex !== -1) {
        // If the upload exists, update it
        return {
          ...state,
          uploads: state.uploads.map((upload) =>
            upload.id === action.payload.id ? action.payload : upload,
          ),
        };
      } else {
        // If the upload doesn't exist, add it
        return {
          ...state,
          uploads: [action.payload, ...state.uploads],
        };
      }
    default:
      return state;
  }
};

// Initial state
const initialState = {
  uploads: [],
};

// Create context
interface AxiosUploadProgressType {
  state: { uploads: Upload[] };
  notifyProgress: (
    id: string,
    filename: string,
    event: AxiosProgressEvent,
  ) => void;
}

const AxiosEventContext = createContext<AxiosUploadProgressType>({
  state: initialState,
  notifyProgress: (id, filename, event) => {},
});

// Custom hook to consume context
export const useAxiosUploadProgress = (): AxiosUploadProgressType =>
  useContext(AxiosEventContext);

// Context provider component
interface AxiosUploadProviderProps {
  children: ReactNode;
}

export const AxiosUploadProvider = ({
  children,
}: AxiosUploadProviderProps): any => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const notifyProgress = (
    id: string,
    filename: string,
    event: AxiosProgressEvent,
  ): void => {
    dispatch({
      type: ActionTypes.NOTIFY_UPLOAD,
      payload: { id, filename, event },
    });
  };

  return (
    <AxiosEventContext.Provider value={{ state, notifyProgress }}>
      {children}
    </AxiosEventContext.Provider>
  );
};
