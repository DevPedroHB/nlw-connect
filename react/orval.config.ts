import { defineConfig } from "orval";
import { env } from "./src/env";

export default defineConfig({
	api: {
		input: `${env.API_URL}/docs/json`,
		output: {
			target: "./src/types/api.ts",
			client: "react-query",
			httpClient: "fetch",
			// clean: true,
			baseUrl: env.API_URL,
			override: {
				fetch: {
					includeHttpResponseReturnType: false,
				},
			},
		},
	},
});
