import { api } from "encore.dev/api"

interface PingParams {
  name: string
}

interface PingResponse {
  message: string
}

export const login = api(
  { method: "POST", path: "/login", expose: true },
  async (p: PingParams): Promise<PingResponse> => {
    return { message: `Hello ${p.name}!` }
  },
)
