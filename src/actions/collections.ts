import { isErrorQuery } from "@/utils/checkers";
import { Collection, ErrorResponse, Result } from "@/utils/types";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    "X-API-Key": process.env.API_KEY ? process.env.API_KEY : "",
  },
};

export const getUserCollections = async (
  address: string
): Promise<Result<Collection>> => {
  try {
    const response = await fetch(
      "https://api.poap.tech/actions/scan/" + address,
      options
    );
    const res = await response.json();
    const isError = isErrorQuery(res);
    const data = res;
    return {
      error: isError ? null : data,
      ok: isError,
      data: isError ? data : null,
    };
  } catch (err: any) {
    return {
      error: err,
      ok: false,
      data: null,
    };
  }
};
