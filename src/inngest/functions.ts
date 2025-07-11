import { Sandbox } from "@e2b/code-interpreter";
import { createAgent, openai } from "@inngest/agent-kit";
import { inngest } from "./client";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("talk2build-nextjs-test-2");
      return sandbox.sandboxId;
    });

    const codeAgent = createAgent({
      name: "code-agent",
      system:
        "You are an expert next.js developer.  You write readable, maitainable code. You write simple next.js & react snippets. return the code in a code block, return only the code, no other text.",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await codeAgent.run(
      `Write the following snippet: ${event.data.value}`
    );

    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      return sandbox.getHost(3000);
    });

    //@ts-ignore
    return { output, sandboxUrl };
  }
);
