import { handler } from "../src";

describe("My CDK Tests", () => {
  it("returns name and text", async () => {
    const output = await handler({ name: "cdk_test_user" });
    expect(output).toStrictEqual("Good Job cdk_test_user!");
  });

  it("returns no name, just text", async () => {
    const output = await handler({ name: "" });
    expect(output).toStrictEqual("Good Job!");
  });
});
