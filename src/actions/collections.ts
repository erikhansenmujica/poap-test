import { Collection, ErrorResponse } from "@/utils/types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-Key": process.env.NEXT_PUBLIC_API_KEY
      ? process.env.NEXT_PUBLIC_API_KEY
      : "",
  },
};

export const userCollections = async (
  address: string
): Promise<Collection[] | ErrorResponse> => {
  try {
    const response = await fetch(
      "https://api.poap.tech/actions/scan/" + address,
      options
    );
    return response.json();
  } catch (err: any) {
    return {
      error: "Error",
      message: err.message ? err.message : "Something went wrong",
      statusCode: 500,
    };
  }
};
