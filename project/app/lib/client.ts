import { GoogleGenAI } from "@google/genai";
import { Client } from "@modelcontextprotocol/sdk/client";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
class aiManager {
  ModelHistory: string;
  model: GoogleGenAI;
  mcp_client: Client;

  constructor(ModelHistory: string) {
    this.ModelHistory = ModelHistory;
    this.model = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_TOKEN });
    this.mcp_client = new Client({ name: "mcp", version: "1.0.0" });
  }

  async connectToMcpServer() {
    try {
      const serverurl = new URL(process.env.MCP_LINK || "");
      const transport = new SSEClientTransport(serverurl);

      await this.mcp_client.connect(transport);
    } catch (e) {
      console.log("could not connect to mcp server");
      console.log(e);
    }
  }

  async getMessageBack(UserInput: string): Promise<string> {
    const chat = this.model.chats.create({
      model: "gemini-2.0-flash",
    });

    const result = await chat.sendMessageStream(UserInput); // configuration yet to looked at on codebase
  }
}
