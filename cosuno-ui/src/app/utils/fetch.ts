const checkStatus = async (res: Response) => {
  if (res.status < 200 || res.status >= 300) {
    let message;
    try {
      const body = await res.json();
      message = body.message || body.error || res.statusText;
    } catch (e) {
      message = `Can't parse response body as JSON`;
    }
    throw new Error(message);
  }
  return res;
};

const defaultHeaders: Record<string, string> = {
  ['Accept']: 'application/json',
  ['Content-Type']: 'application/json',
};

export const fetchJson = async <T>(url: string, options: RequestInit): Promise<T> => {
  const headers = { ...defaultHeaders, ...options.headers as Record<string, string> };
  return fetch(url, { ...options, headers })
    .then((res: unknown) => checkStatus(res as Response))
    .then((res: any) => res.json());
};
