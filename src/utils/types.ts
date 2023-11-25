export interface Collection {
  event: {
    id: number;
    fancy_id: string;
    name: string;
    event_url: string;
    image_url: string;
    country: string;
    city: string;
    description: string;
    year: number;
    start_date: string;
    end_date: string;
    expiry_date: string;
    supply: number;
  };
  tokenId: string;
  owner: string;
  chain: string;
  created: string;
}

export interface ErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}

interface ErrorResult {
  ok: false;
  error: Error;
  data: null;
}

interface SuccessResult<T> {
  ok: true;
  error: null;
  data: T;
}

export type Result<T> = SuccessResult<T> | ErrorResult;
